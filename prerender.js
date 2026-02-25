import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Hardcoded routes to ensure stability. Update this array when new pages are added to App.tsx.
const routesToPrerender = ['/', '/blog']

;(async () => {
  for (const url of routesToPrerender) {
    const appHtml = render(url)
    const html = template.replace('', appHtml)

    const filePath = `dist${url === '/' ? '/index' : url}.html`
    const dir = path.dirname(toAbsolute(filePath))
    
    // Ensure subdirectories exist before writing files
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }

    fs.writeFileSync(toAbsolute(filePath), html)
    console.log('pre-rendered:', filePath)
  }
})()
