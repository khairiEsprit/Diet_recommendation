# 📱 Mobile Testing Checklist

## Pre-Launch Mobile Testing

### 🏠 Home Page

- [ ] Hero section displays properly on mobile (portrait)
- [ ] Hero section displays properly on mobile (landscape)
- [ ] CTA buttons stack vertically and are easily tappable
- [ ] Stats cards show 2 per row on mobile
- [ ] Feature cards display one per column on mobile
- [ ] All text is readable without zooming
- [ ] Images load properly and don't overflow
- [ ] Animations run smoothly

### 🍴 Diet Recommendation Page

- [ ] Form header centers on mobile
- [ ] Input fields stack properly in single column
- [ ] Dropdown menus are easy to select on mobile
- [ ] Calculate BMI button is full-width and tappable
- [ ] BMI result cards show 2x2 grid on mobile
- [ ] All text in cards is readable
- [ ] "Generate Diet Plan" button works smoothly
- [ ] Meal tabs are scrollable horizontally
- [ ] Tab content switches correctly
- [ ] Recipe cards display properly in grid

### 🔍 Custom Recommendation Page

- [ ] Page header centers on mobile
- [ ] Nutrition sliders are easy to adjust with touch
- [ ] Slider values display clearly
- [ ] Ingredient text field expands properly
- [ ] Number of recommendations slider works well
- [ ] Search and Reset buttons stack vertically
- [ ] Buttons are easily tappable (48px height)
- [ ] Results grid shows 1 card per row on mobile
- [ ] All filters work correctly

### 🎴 Recipe Cards

- [ ] Cards display with proper spacing
- [ ] Recipe images load and display correctly
- [ ] Recipe names are readable without truncation
- [ ] Time chips wrap properly and are readable
- [ ] Nutrition chips display clearly
- [ ] Expand button has sufficient touch target
- [ ] Expanded content displays full information
- [ ] Nutrition grid shows 2 per row on mobile
- [ ] Ingredients list is readable
- [ ] Instructions are properly formatted
- [ ] Collapse works smoothly

### 🧭 Navigation

- [ ] Hamburger menu icon visible on mobile
- [ ] Menu icon has good touch target (48px)
- [ ] Drawer opens smoothly from right
- [ ] Navigation items are clearly visible
- [ ] Active page is highlighted
- [ ] Menu closes when selecting a page
- [ ] Menu closes when clicking outside
- [ ] Close (X) button works properly
- [ ] Navigation works in both portrait/landscape

### 🎨 General UI/UX

- [ ] No horizontal scrolling on any page
- [ ] Smooth scrolling behavior works
- [ ] All buttons have visual feedback on tap
- [ ] Loading states display properly
- [ ] Error messages are readable
- [ ] Success messages display correctly
- [ ] Forms validate properly
- [ ] Touch targets are at least 44-48px
- [ ] Text contrast is sufficient
- [ ] Icons are clear and recognizable

### 📐 Responsive Behavior

- [ ] Test on iPhone SE (375px width)
- [ ] Test on iPhone 12/13/14 (390px)
- [ ] Test on iPhone Pro Max (428px)
- [ ] Test on Samsung Galaxy (360px)
- [ ] Test on iPad (768px)
- [ ] Test on iPad Pro (1024px)
- [ ] Test portrait orientation
- [ ] Test landscape orientation
- [ ] Test at 150% browser zoom
- [ ] Test at 200% browser zoom

### 🌐 Browser Compatibility

- [ ] Chrome Mobile (Android)
- [ ] Safari (iOS)
- [ ] Samsung Internet
- [ ] Firefox Mobile
- [ ] Edge Mobile

### ⚡ Performance

- [ ] Pages load in under 3 seconds on 3G
- [ ] No janky animations
- [ ] Smooth scrolling performance
- [ ] Images load progressively
- [ ] No layout shifts during load
- [ ] Interactions feel responsive (<100ms)

### ♿ Accessibility

- [ ] Zoom works properly (up to 200%)
- [ ] Text remains readable when zoomed
- [ ] Tap targets don't overlap when zoomed
- [ ] Focus indicators are visible
- [ ] Screen reader navigation works
- [ ] Color contrast meets WCAG AA standards
- [ ] Form labels are properly associated

### 🔧 Functionality

- [ ] All forms submit correctly on mobile
- [ ] File uploads work (if applicable)
- [ ] Dropdowns/selects work properly
- [ ] Date pickers work (if applicable)
- [ ] Number inputs work correctly
- [ ] Search functionality works
- [ ] Filtering works correctly
- [ ] Sorting works (if applicable)
- [ ] Pagination works (if applicable)

### 🐛 Bug Checks

- [ ] No console errors in developer tools
- [ ] No 404 errors for resources
- [ ] No broken images
- [ ] No overlapping elements
- [ ] No cut-off text
- [ ] No invisible buttons/links
- [ ] Forms don't auto-zoom on iOS
- [ ] Sticky elements stay in place
- [ ] Modals center properly
- [ ] Tooltips display correctly

### 🎯 User Experience

- [ ] User can complete full journey on mobile
- [ ] Navigation flow is intuitive
- [ ] Call-to-actions are obvious
- [ ] Important info is above the fold
- [ ] Forms are easy to fill out
- [ ] Error messages are helpful
- [ ] Success feedback is clear
- [ ] Loading states are informative

---

## Test Scenarios

### Scenario 1: New User Journey

1. [ ] Land on home page
2. [ ] Navigate to Diet Recommendation
3. [ ] Fill out personal information form
4. [ ] Calculate BMI
5. [ ] Generate diet recommendations
6. [ ] View meal plan for breakfast
7. [ ] Expand a recipe card
8. [ ] Read full recipe details
9. [ ] Navigate back to home

### Scenario 2: Custom Search

1. [ ] Navigate to Custom Recommendation
2. [ ] Adjust multiple nutrition sliders
3. [ ] Enter ingredients (semicolon-separated)
4. [ ] Adjust number of recommendations
5. [ ] Click Search
6. [ ] Review results
7. [ ] Expand multiple recipe cards
8. [ ] Reset filters
9. [ ] Perform new search

### Scenario 3: Mobile Navigation

1. [ ] Open hamburger menu
2. [ ] Navigate to each section
3. [ ] Verify active states
4. [ ] Close menu
5. [ ] Navigate using browser back button
6. [ ] Verify URL changes

---

## Critical Issues to Watch For

### 🚨 Show Stoppers

- Text unreadable without zooming
- Buttons not tappable (too small)
- Horizontal scrolling
- Content cut off
- Forms unusable
- Navigation broken

### ⚠️ High Priority

- Inconsistent spacing
- Poor contrast
- Slow animations
- Touch target overlaps
- Layout shifts
- Missing images

### 📝 Nice to Have

- Perfect pixel alignment
- Consistent icon sizes
- Unified spacing system
- Smooth transitions everywhere

---

## Sign-Off

**Tested By**: ********\_\_\_********  
**Date**: ********\_\_\_********  
**Device Used**: ********\_\_\_********  
**Browser**: ********\_\_\_********  
**Status**: ⬜ Pass ⬜ Fail ⬜ Needs Work

**Notes**:

---

---

---

---

**Last Updated**: December 16, 2025
