# 🌊 Liquid Glass Theme for shadcn/ui

## Installation

### Method 1: Copy CSS Variables

1. Copy the contents of `globals.css` from this package
2. Replace or merge with your existing `globals.css`
3. That's it! Your shadcn/ui components now have the Liquid Glass look.

### Method 2: Import (Coming Soon)

```bash
npx shadcn@latest add https://liquidglass.dev/registry
```

## What's Included

- `globals.css` - Complete CSS variables for light and dark modes
- `utilities.css` - Optional utility classes for glass effects
- Component-specific overrides (optional)

## CSS Variables Reference

### Core Colors

| Variable | Description |
|----------|-------------|
| `--background` | Page background |
| `--foreground` | Main text color |
| `--primary` | Primary action color |
| `--secondary` | Secondary elements |
| `--muted` | Muted backgrounds |
| `--accent` | Accent highlights |

### Glass Tokens

| Variable | Description |
|----------|-------------|
| `--glass` | Translucent surface color |
| `--glass-border` | Glass border color |
| `--glass-highlight` | Specular highlight |
| `--glass-blur` | Backdrop blur amount |

## Customization

### Changing the accent color

```css
:root {
  /* Change primary from blue to purple */
  --primary: oklch(0.6 0.2 290);
}
```

### Adjusting glass intensity

```css
:root {
  /* More transparent glass */
  --glass: oklch(1 0 0 / 40%);
  
  /* More blur */
  --glass-blur: 32px;
}
```

## Utility Classes

```html
<!-- Basic glass surface -->
<div class="glass">...</div>

<!-- Glass card with rounded corners -->
<div class="glass-card">...</div>

<!-- Element with specular highlight -->
<div class="glass-highlight">...</div>

<!-- Primary button with glow effect -->
<button class="btn-primary-glow">...</button>

<!-- Gradient text effect -->
<h1 class="text-gradient">...</h1>
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Note: `backdrop-filter` may not work in older browsers. The theme gracefully degrades to solid backgrounds.

## Support

Questions? Email us at hello@kvncyf.me

## License

Personal and commercial use allowed. See LICENSE for details.
