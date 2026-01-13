# Session: Theme v2 - Apple Official Specs

**Date**: 2026-01-13
**Session ID**: 02
**Size**: medium
**Focus**: Rebasing theme on Apple's official Liquid Glass design system

---

## 🎯 Objective

Rebuild the Liquid Glass theme using Apple's official specs from:
- macOS Tahoe / iOS 26 Figma UI Kit
- WWDC25 "Meet Liquid Glass" session
- Apple Design Resources

---

## ✅ Completed

### 1. Research & Documentation
- [x] Explored Apple Developer docs for Liquid Glass
- [x] Found official Figma UI Kit (iOS/macOS 26)
- [x] Extracted exact Material specs from Figma via MCP
- [x] Documented WWDC25 sessions (Meet Liquid Glass, Build SwiftUI app, etc.)

### 2. Theme v2 Created
- [x] `src/themes/liquid-glass-v2/globals.css` - Apple's exact values
- [x] `src/themes/liquid-glass-v2/utilities.css` - Glass utility classes
- [x] `src/themes/liquid-glass-v2/README.md` - Full documentation

### 3. Marketing Site Updated
- [x] `src/app/globals.css` - Applied v2 theme
- [x] All sections tested (Hero, Features, Preview, Pricing)

### 4. shadcn Registry Setup
- [x] `public/r/liquid-glass-theme.json` - Theme registry
- [x] `public/r/index.json` - Registry index
- [x] `src/app/api/r/[...path]/route.ts` - API endpoint

---

## 📊 Apple Official Specs (from Figma)

### Materials - Dark Mode
| Level | Opacity | Blur |
|-------|---------|------|
| UltraThin | 10% | 15px |
| Thin | 20% | 15px |
| **Medium** | **29%** | 15px |
| Thick | 40% | 15px |
| UltraThick | 50% | 15px |

### Materials - Light Mode
| Level | Opacity | Blur |
|-------|---------|------|
| UltraThin | 10% | 15px |
| Thin | 20% | 15px |
| Medium | 35% | 15px |
| Thick | 50% | 15px |
| UltraThick | 65% | 15px |

---

## 🚀 Next Steps (Pre-Launch)

### High Priority
- [ ] Setup custom domain (liquidglass.dev)
- [ ] Configure Stripe checkout (product, prices, webhook)
- [ ] Add license key delivery system
- [ ] Test full purchase flow

### Medium Priority
- [ ] Add light mode toggle to site
- [ ] Create downloadable ZIP with theme files
- [ ] Add more component examples (Dialog, Dropdown, etc.)
- [ ] SEO optimization (og-image, meta tags)

### Nice to Have
- [ ] Video demo/preview
- [ ] Changelog page
- [ ] Discord community link
- [ ] Affiliate program

---

## 📚 Resources

- [Apple Liquid Glass Docs](https://developer.apple.com/documentation/TechnologyOverviews/liquid-glass)
- [iOS 26 Figma UI Kit](https://www.figma.com/community/file/1527721578857867021)
- [macOS Tahoe Figma UI Kit](https://www.figma.com/design/49VjvlIAyi3PVS34DsFqpL)
- [WWDC25: Meet Liquid Glass (YouTube)](https://www.youtube.com/watch?v=IrGYUq1mklk)
- [liquid-glass-js (WebGL)](https://github.com/dashersw/liquid-glass-js)

---

## 🔗 Deployment

**Production URL**: liquidglass.dev (pending)
**Vercel Project**: liquid-glass-for-shadcn-ui
