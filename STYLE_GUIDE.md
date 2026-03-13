# FinanceHub Pro - Design System & Style Guide

## 🎨 Design Philosophy

**Theme**: "Perfect White" - A minimalist, sterile, ultra-modern aesthetic that conveys trustworthiness and professionalism. Apple-inspired design with generous whitespace, subtle borders, and soft shadows.

---

## 📐 Design Tokens

### Color System

#### Primary Colors
```
Primary Blue: #4A90E2
  - Used for: Buttons, links, active states, accents
  - Hover State: #3B78D1
  - Light Background: #EBF2FF
```

#### Semantic Colors
```
Success (Green): #10B981
  - Status: Completed, verified, approved
  
Warning (Orange): #F59E0B
  - Status: Processing, in-progress, pending
  
Danger (Red): #EF4444
  - Status: Error, failure, declined
  
Secondary (Light Grey): #F3F4F6
  - Background for secondary buttons and elements
```

#### Neutral Palette
```
Pure White: #FFFFFF
  - Card backgrounds, main surface

Background Grey: #F8F9FB
  - Page background, secondary surfaces

Light Border: #E8ECEF
  - Subtle borders, line separators

Text Dark: #151D2C
  - Primary text, headings

Text Light: #666D7D
  - Secondary text, descriptions
```

#### Shadow Palette
```
Shadow Small: rgba(0, 0, 0, 0.04)
  - Subtle depth for borders

Shadow Medium: rgba(0, 0, 0, 0.08)
  - Standard elevation

Shadow Large: rgba(0, 0, 0, 0.12)
  - Prominent floating elements

Shadow XL: rgba(0, 0, 0, 0.16)
  - Modals, dropdowns
```

### Typography System

#### Font Stack
```
Primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Inter', sans-serif
- System fonts first (macOS, iOS, Windows)
- Fallback to Inter (Google Fonts)
- Generic sans-serif fallback
```

#### Font Sizes
```
Small: 13px          (--font-size-sm)
Base: 15px           (--font-size-base)
Large: 17px          (--font-size-lg)
XL: 20px             (--font-size-xl)
2XL: 24px            (--font-size-2xl)
3XL: 32px            (--font-size-3xl)
4XL: 48px            (--font-size-4xl)
```

#### Font Weights
- **Light**: 300 (rarely used)
- **Regular**: 400 (body text)
- **Medium**: 500 (secondary headings, labels)
- **Semibold**: 600 (primary headings, emphasis)
- **Bold**: 700 (hero titles, strong emphasis)

### Spacing System

```
Extra Small: 4px     (--spacing-xs)
Small: 8px           (--spacing-sm)
Medium: 12px         (--spacing-md)
Large: 16px          (--spacing-lg)
Extra Large: 24px    (--spacing-xl)
2XL: 32px            (--spacing-2xl)
3XL: 48px            (--spacing-3xl)
```

**Usage**: 
- Padding: Use spacing vars for padding inside components
- Margin: Use spacing vars for gaps between elements
- Gap: Use for Flexbox/Grid gaps

### Border Radius

```
Default: 12px        (--border-radius)
Large: 16px          (--border-radius-lg)
XL: 24px             (--border-radius-xl)
Full: 50%            (for circular elements)
```

**Applied to**:
- Buttons: `--border-radius`
- Cards: `--border-radius-lg`
- Large Modals: `--border-radius-xl`
- Avatar/Icons: 50%

### Elevation/Shadow

```
Shadow SM: 0 1px 2px var(--color-shadow-sm)
  - Subtle depth

Shadow: 0 4px 12px var(--color-shadow)
  - Standard cards and elements

Shadow LG: 0 12px 24px var(--color-shadow)
  - Hover states, elevated cards

Shadow XL: 0 20px 40px var(--color-shadow)
  - Modals, popovers, floating elements
```

---

## 🎛️ Component Library

### Buttons

#### Primary Button
```
Background: #4A90E2
Text: White
Padding: 12px 24px
Border Radius: 12px
Font Weight: 500
Hover: #3B78D1 + Shadow LG
Active: No transform
States: Default, Hover, Active, Disabled
```

#### Secondary Button
```
Background: #F3F4F6
Text: #151D2C
Padding: 12px 24px
Border Radius: 12px
Hover: #E8ECEF
Use for: Tertiary actions
```

#### Outline Button
```
Background: Transparent
Border: 1.5px #4A90E2
Text: #4A90E2
Hover: #EBF2FF background
Use for: Tertiary navigation
```

#### Small Button
```
Padding: 8px 16px
Font Size: 13px
Use for: Inline actions, forms
```

#### Icon Button
```
Size: 32px square
Background: #F3F4F6
Border Radius: 8px
Hover: #E8ECEF
Use for: Menu, settings, close
```

### Cards

#### Standard Card
```
Background: #FFFFFF
Border: 1px #E8ECEF
Border Radius: 16px
Padding: 24px
Shadow: 0 4px 12px rgba(0,0,0,0.08)
Hover: Border color to primary, Shadow LG
```

#### Hero Card
```
Background: #FFFFFF
Border: 1px #E8ECEF
Border Radius: 24px
Padding: 32px
Shadow: 0 12px 24px rgba(0,0,0,0.08)
Used for: Main CTA elements
```

#### Account Card
```
Background: Linear gradient (white to light grey)
Border: 1px #E8ECEF
Padding: 16px
Hover: Shadow LG + transform translateY(-4px)
```

#### Transaction Item
```
Background: #F8F9FB
Border: None
Padding: 16px
Border Radius: 12px
Hover: Background to #F3F4F6
Icon size: 40px circular
```

### Forms

#### Input Fields
```
Padding: 12px 16px
Border: 1px #E8ECEF
Border Radius: 12px
Background: #F8F9FB
Font Size: 15px
Focus: Border #4A90E2 + Box shadow (0 0 0 3px #EBF2FF)
```

#### Labels
```
Font Size: 15px
Font Weight: 500
Color: #151D2C
Margin Bottom: 8px
```

#### Select/Textarea
```
Same as input fields
Font Family: System
```

### Navigation

#### Header Navigation
```
Position: Fixed top, z-index 1000
Background: rgba(255,255,255,0.95) with backdrop blur
Border Bottom: 1px #E8ECEF
Padding: 16px
Logo Color: #4A90E2
Link Hover: Color to #4A90E2
Active Link: Underline indicator
```

#### Sidebar Navigation
```
Width: 280px
Background: #FFFFFF
Border: 1px #E8ECEF
Border Radius: 16px
Sticky: position top 100px
Item Padding: 12px 16px
Item Hover: Background #F3F4F6
Item Active: Background #EBF2FF + text #4A90E2
```

### Modals

#### Modal Overlay
```
Background: rgba(0,0,0,0.5) with backdrop blur
Position: Fixed, full screen
Z-index: 2000
```

#### Modal Content
```
Background: #FFFFFF
Border Radius: 24px
Max Width: 500px
Max Height: 90vh
Box Shadow: 0 20px 40px rgba(0,0,0,0.16)
Animation: Slide up 0.3s ease
```

#### Modal Header
```
Padding: 32px
Border Bottom: 1px #E8ECEF
Display: Flex space-between
Close Button: Icon only, 32px
```

### Notifications

#### Toast Notification
```
Position: Fixed top-right
Background: #FFFFFF
Border Left: 4px solid (color-based)
Border Radius: 16px
Padding: 16px 24px
Box Shadow: 0 12px 24px rgba(0,0,0,0.08)
Animation: Slide in 0.3s ease
```

#### Success Notification
```
Border Color: #10B981
Icon Color: #10B981
```

#### Error Notification
```
Border Color: #EF4444
Icon Color: #EF4444
```

#### Info Notification
```
Border Color: #4A90E2
Icon Color: #4A90E2
```

---

## 📊 Layout System

### Container
```
Max Width: 1400px
Padding: 0 24px (responsive)
Margin: 0 auto
```

### Grid System

#### Stats Grid
```
Columns: repeat(auto-fit, minmax(280px, 1fr))
Gap: 16px
Responsive: Stacks to 1 column on mobile
```

#### Accounts Grid
```
Columns: repeat(auto-fill, minmax(280px, 1fr))
Gap: 16px
Responsive: 1 column on mobile
```

#### Contact Methods Grid
```
Columns: repeat(auto-fit, minmax(280px, 1fr))
Gap: 24px
Responsive: 1 column on mobile
```

---

## 🎭 Animation & Transitions

### Timing
```
Fast: 0.2s (hovers, small changes)
Standard: 0.3s (buttons, modals)
Slow: 0.5s (page transitions, large movements)
```

### Easing
```
ease (cubic-bezier(0.25, 0.46, 0.45, 0.94))
ease-in-out for natural motion
```

### Common Animations

#### Fade In
```
opacity: 0 → 1
duration: 0.6s
```

#### Slide Up
```
transform: translateY(20px) → translateY(0)
opacity: 0 → 1
duration: 0.5s
```

#### Scale on Hover
```
transform: scale(1) → scale(1.05)
duration: 0.3s
```

#### Translate on Hover
```
transform: translateY(0) → translateY(-4px)
duration: 0.3s
```

---

## 📱 Responsive Breakpoints

### Desktop (1024px and up)
- Multi-column layouts
- Full navigation visible
- All features active
- Max container width: 1400px

### Tablet (768px to 1023px)
- 2-3 column grids
- Condensed navigation
- Adjusted padding and spacing
- Sidebar becomes full-width

### Mobile (480px to 767px)
- Single column layouts
- Hamburger/collapse navigation
- Touch-friendly button sizes (minimum 44px)
- Reduced padding: 16px

### Small Mobile (below 480px)
- Extra tight layout
- Large text remains readable
- Stacked navigation
- Maximum density

---

## ♿ Accessibility

### Color Contrast
- Text on background: 4.5:1 minimum (WCAG AA)
- UI components: 3:1 minimum

### Focus States
```
Outline: 2px solid #4A90E2
Outline Offset: 2px
Box Shadow: 0 0 0 3px #EBF2FF
```

### Keyboard Navigation
- Tab order follows visual order
- Focus visible on all interactive elements
- ESC closes modals/menus
- Enter activates buttons

### Semantic HTML
- Proper heading hierarchy (h1→h6)
- `<button>` for actions, `<a>` for navigation
- Form labels with proper associations
- Alt text on meaningful images

---

## 🚀 Performance Optimization

### CSS
- CSS variables for theming (reduce file size)
- Grid/Flexbox instead of floats
- CSS animations instead of JS
- Minimal specificity
- Single stylesheet

### JavaScript
- Event delegation for multiple elements
- Intersection Observer for lazy animations
- Minimal DOM manipulation
- Vanilla JS (no framework overhead)

### Images
- SVG/Font Awesome for icons
- Responsive images with srcset
- Lazy loading attributes

---

## 🎨 Quick Reference

### Button Usage
- **Primary**: Main CTAs (Claim Funds, Submit)
- **Secondary**: Secondary actions (Settings, Profile)
- **Outline**: Navigation links, tertiary actions
- **Small**: Inline actions, form submits
- **Icon**: Close, menu, edit actions

### Card Usage
- **Standard**: Content sections, stats
- **Hero**: Main promotional content
- **Account**: Bank accounts, payment methods
- **Transaction**: Activity items, history

### Color Usage
- **Blue (#4A90E2)**: Interactive elements, primary actions
- **Green (#10B981)**: Success, completed states
- **Orange (#F59E0B)**: In-progress, pending states
- **Red (#EF4444)**: Errors, declined states
- **Grey**: Secondary elements, disabled states

---

## 📝 Component Naming Convention

```
[Component Type]-[Variant]-[State]

Examples:
- btn-primary (button, primary style)
- btn-primary-hover (button, primary style, hover state)
- card-stat (card, stat card variant)
- nav-item-active (navigation item, active state)
- modal-overlay (modal, overlay element)
- notification-success (notification, success variant)
```

---

## 🔧 CSS Variable Quick Lookup

```css
/* Colors */
--color-primary: #4A90E2
--color-primary-hover: #3B78D1
--color-primary-light: #EBF2FF
--color-white: #FFFFFF
--color-bg: #F8F9FB
--color-text: #151D2C
--color-text-light: #666D7D

/* Sizing */
--font-size-base: 15px
--spacing-lg: 16px
--border-radius: 12px
--shadow: 0 4px 12px var(--color-shadow)
```

---

## 🎯 Best Practices

1. **Spacing**: Always use `--spacing-*` variables
2. **Colors**: Use CSS variable names for maintainability
3. **Typography**: Follow font weight hierarchy
4. **Shadows**: Use predefined shadow levels
5. **Animations**: Keep animations below 500ms
6. **Responsiveness**: Use Mobile-First approach
7. **Accessibility**: Always test keyboard navigation
8. **Performance**: Minimize layout shifts (CLS)

---

**Last Updated**: February 2026
**Version**: 1.0

This style guide ensures consistency across the FinanceHub Pro dashboard and provides developers with clear implementation standards.
