# 🍎 Liquid Glass Theme for shadcn/ui v2.0

> Based on Apple's Official Liquid Glass Design System (macOS Tahoe / iOS 26)

## What's New in v2.0

This theme is built from **Apple's official Figma UI Kit** and follows the exact specifications from WWDC25's "Meet Liquid Glass" session.

### Key Differences from v1

| Feature | v1 (Generic) | v2 (Apple Official) |
|---------|--------------|---------------------|
| Materials | Single glass style | 5 levels: UltraThin → UltraThick |
| Blur | Variable | Fixed 15px (Apple spec) |
| Dark mode | Estimated values | Exact Apple values (0.1, 0.2, 0.29, 0.4, 0.5) |
| Border radius | Generic | Apple's concentric system |
| Colors | Custom palette | Apple system colors |

## Installation

### Method 1: shadcn Registry (Recommended)

```bash
npx shadcn@latest add https://liquidglass.dev/r/theme
```

### Method 2: Manual Copy

1. Copy `globals.css` to your project's `app/globals.css`
2. Optionally copy `utilities.css` for additional glass utilities

## Glass Materials

Apple defines 5 levels of glass material opacity:

```css
/* Dark Mode (Apple's exact values) */
--glass-ultrathin: rgba(0, 0, 0, 0.1);   /* 10% - Most transparent */
--glass-thin:      rgba(0, 0, 0, 0.2);   /* 20% */
--glass-medium:    rgba(0, 0, 0, 0.29);  /* 29% - Default for UI */
--glass-thick:     rgba(0, 0, 0, 0.4);   /* 40% */
--glass-ultrathick: rgba(0, 0, 0, 0.5);  /* 50% - Most opaque */

/* All materials use 15px blur */
backdrop-filter: blur(15px);
```

### When to Use Each Level

| Level | Use Case |
|-------|----------|
| **UltraThin** | Subtle overlays, muted backgrounds |
| **Thin** | Secondary surfaces, input backgrounds |
| **Medium** | Cards, dialogs, default surfaces |
| **Thick** | Popovers, emphasized panels |
| **UltraThick** | Sidebars, navigation bars |

## Utility Classes

### Glass Materials

```html
<!-- Apply glass material -->
<div class="glass-ultrathin">...</div>
<div class="glass-thin">...</div>
<div class="glass-medium">...</div>  <!-- or just "glass" -->
<div class="glass-thick">...</div>
<div class="glass-ultrathick">...</div>
```

### Glass Containers

```html
<!-- Pre-styled containers with borders -->
<div class="glass-container">Default container</div>
<div class="glass-container-thin">Thin container</div>
<div class="glass-container-thick">Thick container</div>
```

### Glass Card

```html
<!-- Card with specular highlight and hover effect -->
<div class="glass-card">
  Premium glass card
</div>
```

### Glass Buttons

```html
<!-- Standard glass button -->
<button class="btn-glass">Glass Button</button>

<!-- Prominent glass button (Apple's glassProminent) -->
<button class="btn-glass-prominent">Prominent</button>

<!-- Primary with glow -->
<button class="btn-primary-glow bg-primary text-primary-foreground">
  Glowing Button
</button>
```

### Glass Pill / Floating Island

```html
<!-- Apple's signature floating pill -->
<nav class="glass-pill px-4 py-2">
  Navigation items...
</nav>

<!-- Floating island (like Dynamic Island) -->
<div class="glass-island px-6 py-4">
  Content...
</div>
```

### Glass Tabs (Segmented Control)

```html
<div class="glass-tabs">
  <button class="glass-tab px-4 py-2">Tab 1</button>
  <button class="glass-tab glass-tab-active px-4 py-2">Tab 2</button>
  <button class="glass-tab px-4 py-2">Tab 3</button>
</div>
```

## CSS Variables Reference

### Glass Tokens

| Variable | Description |
|----------|-------------|
| `--glass-ultrathin` | 10% opacity glass |
| `--glass-thin` | 20% opacity glass |
| `--glass-medium` | 29% opacity glass (default) |
| `--glass-thick` | 40% opacity glass |
| `--glass-ultrathick` | 50% opacity glass |
| `--glass-blur` | Blur amount (15px) |
| `--glass-border` | Glass border color |
| `--glass-border-subtle` | Subtle border color |
| `--glass-highlight` | Specular highlight color |
| `--glass-shadow` | Shadow color |

### shadcn/ui Tokens

All standard shadcn/ui tokens are supported:
- `--background`, `--foreground`
- `--card`, `--card-foreground`
- `--popover`, `--popover-foreground`
- `--primary`, `--primary-foreground`
- `--secondary`, `--secondary-foreground`
- `--muted`, `--muted-foreground`
- `--accent`, `--accent-foreground`
- `--destructive`
- `--border`, `--input`, `--ring`
- `--chart-1` through `--chart-5`
- `--sidebar-*` tokens

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome 90+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Edge 90+ | ✅ Full |

Note: `backdrop-filter` is required. Older browsers will fallback to solid backgrounds.

## Design Principles

From Apple's "Meet Liquid Glass" (WWDC25):

1. **Use sparingly** - Don't layer glass on glass
2. **Content first** - Glass should enhance, not distract
3. **Consistent blur** - Always 15px for materials
4. **Concentric corners** - Nested elements have proportional radii
5. **Accessibility** - Respect reduce-transparency settings

## Source

- [Apple Design Resources - Figma](https://www.figma.com/community/file/1527721578857867021)
- [WWDC25: Meet Liquid Glass](https://developer.apple.com/videos/play/wwdc2025/)
- [Adopting Liquid Glass](https://developer.apple.com/documentation/TechnologyOverviews/adopting-liquid-glass)

## License

Personal and commercial use allowed. See LICENSE for details.

## Support

Questions? Email us at hello@kvncyf.me
