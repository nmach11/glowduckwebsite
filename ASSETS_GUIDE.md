# Assets & Images Guide

## 🎯 **Recommended Approach: Real App Screenshots**

Instead of using PNG sections, here's the optimal approach for a production-ready site:

### ✅ **What to Use Real Images For:**
1. **Phone mockup screenshots** - Real app interface screenshots
2. **App icons** - Actual app store icons
3. **Duck illustrations** - Custom SVG/PNG illustrations
4. **Background graphics** - Subtle decorative elements

### ❌ **What NOT to Use Images For:**
1. **Text content** - Use HTML/CSS for better SEO and accessibility
2. **Layout sections** - Use CSS Grid/Flexbox for responsive design
3. **Interactive elements** - Use HTML buttons and links
4. **Large background sections** - Use CSS gradients and shapes

## 📱 **Adding Real App Screenshots**

### **Step 1: Export Phone Screenshots**
Export your app screenshots at these sizes:
- **iPhone**: 390x844px (iPhone 12/13/14)
- **Android**: 392x781px (standard Android size)

### **Step 2: Add to Project**
```bash
# Place screenshots in:
public/images/phones/
├── hero-phone-1.png    # Left phone in hero
├── hero-phone-2.png    # Right phone in hero
├── analyze-phone.png   # Phone in analyze section
├── routine-phone.png   # Phone in routine section
├── habits-phone.png    # Phone in habits section
└── progress-phone.png  # Phone in progress section
```

### **Step 3: Update Phone Components**
Replace the placeholder in `Hero.tsx`:
```tsx
{/* Replace this placeholder: */}
<div className="w-full h-full bg-gradient-to-b from-pink/20 to-softPink/30">

{/* With real screenshot: */}
<Image
  src="/images/phones/hero-phone-1.png"
  alt="GlowDuck app screenshot showing skin analysis"
  fill
  className="object-cover"
/>
```

## 🎨 **Custom Graphics to Create**

### **Duck Illustrations**
- Create SVG or high-res PNG of your duck mascot
- Size: 400x400px minimum
- Add to `public/images/duck-mascot.svg`

### **Background Elements**
- Subtle decorative shapes (SVG preferred)
- Gradient overlays
- Keep file sizes small (<50KB)

## 🔧 **Implementation Strategy**

### **Hybrid Approach:**
1. **CSS/HTML** for layout, typography, and structure
2. **Real images** only for authentic app screenshots
3. **SVG icons** for UI elements
4. **CSS gradients** for backgrounds

### **Why This Approach is Better:**

✅ **Responsive** - Works on all devices
✅ **SEO Friendly** - Search engines can read text
✅ **Accessible** - Screen readers work properly
✅ **Fast Loading** - Optimized images only where needed
✅ **Maintainable** - Easy to update content
✅ **Interactive** - Buttons and links work properly

## 📋 **Asset Checklist**

### **Required Assets:**
- [ ] App Store icons (1024x1024px)
- [ ] Phone mockup screenshots (6 total)
- [ ] Duck mascot illustration
- [ ] Decorative background SVGs

### **Optional Assets:**
- [ ] Social media icons
- [ ] Additional app screenshots for other sections
- [ ] Custom loading animations

## 🚀 **Next Steps**

1. **Export your app screenshots** at the correct sizes
2. **Create/add duck illustrations**
3. **Replace placeholder phones** with real screenshots
4. **Add any decorative graphics**
5. **Test responsiveness** on different devices

This approach gives you the visual authenticity you want while maintaining all the benefits of a modern web application!
