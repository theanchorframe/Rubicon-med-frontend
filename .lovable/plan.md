

## Why It Lags

The current animation runs **1,200 particles every frame** (~60fps), and each particle requires:
1. A **Perlin noise calculation** (expensive math — multiple array lookups, fades, lerps, grads)
2. A **canvas arc draw call** (`beginPath` + `arc` + `fill`) — arcs are costly; 1,200 per frame = ~72,000 draw calls per second
3. A full-canvas `fillRect` clear every frame

Additionally, the animation runs **even when off-screen**, burning CPU the entire time. And `Date.now()` is called 1,200 times per frame instead of once.

## Plan: Lightweight CSS-Only Alternative

Replace the canvas particle system with a **pure CSS animated background** that achieves a similar subtle, organic feel with zero JavaScript and near-zero performance cost.

### Approach: Animated gradient layers

Use 2-3 stacked radial gradients with slow CSS `@keyframes` animations (translate/scale) to create a gentle, flowing, organic texture over the navy background. This gives the impression of subtle light movement without any canvas, JS loops, or per-frame calculations.

### Changes

**1. Remove `FluidParticlesBackground` usage from `FinalCTASection.tsx`**
- Remove the canvas wrapper component
- Replace with a simple `<div>` that has the navy background
- Add 2-3 absolutely-positioned `<div>` elements with large radial gradients (white at ~4-6% opacity), each animated on different keyframes (slow drift, 20-30s duration, infinite)

**2. Add keyframes to `tailwind.config.ts`**
- Add `drift-1`, `drift-2`, `drift-3` keyframes that slowly translate and scale the gradient blobs

**3. Keep `fluid-particles-background.tsx` file** (no deletion needed, just unused by this section)

### Visual Result
- Subtle, barely-visible light blobs slowly drifting across the navy background
- Similar organic feel to the particles but with literally zero CPU cost
- Smooth on all devices including mobile

