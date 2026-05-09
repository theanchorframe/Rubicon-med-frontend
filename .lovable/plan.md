In `src/components/ServicesSection.tsx`, modify the `ServiceCard` component so the non-bolded description text starts on a new line below the bolded opener.

Change the paragraph rendering from inline (`<span>` + space) to a block layout where the bold opener is on its own line followed by the description below it.

```tsx
<p className="text-foreground/80 leading-relaxed text-lg">
  <span className="font-bold block mb-2">{service.boldOpener}</span>
  {service.description}
</p>
```

This applies to all 6 service cards automatically since they share the same component.