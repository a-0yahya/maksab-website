# 📄 Content Integration Guide for MAKSAB Website

## 🎨 **Updated Color Scheme**

The website has been updated with your specified colors:
- **Primary Blue**: `#015DAB` (maksab-blue)
- **Primary Green**: `#9D9D3B` (maksab-green)

These colors are now applied throughout the entire website for a consistent brand experience.

---

## 📋 **Content Integration Instructions**

### **1. Company Information Update**

Open `components/company-content.tsx` and update the `companyInfo` object with your real content from the PDF:

```typescript
export const companyInfo = {
  name: "MAKSAB", // Update with exact company name
  tagline: "Your actual tagline from PDF",
  description: "Your actual company description from PDF",
  
  // Mission & Vision
  mission: "Your actual mission statement from PDF",
  vision: "Your actual vision statement from PDF",
  
  // Core Values - Update with your actual values
  values: [
    {
      title: "Your Value 1",
      description: "Description from PDF",
      icon: Award // Choose appropriate icon
    },
    // Add more values from PDF
  ],
  
  // Services - Update with your actual services
  services: [
    {
      title: "Your Service 1",
      description: "Service description from PDF",
      icon: TrendingUp,
      features: [
        "Feature 1 from PDF",
        "Feature 2 from PDF",
        // Add more features
      ]
    },
    // Add more services from PDF
  ],
  
  // Statistics - Update with real numbers from PDF
  statistics: [
    { label: "Your Metric 1", value: 500, suffix: "+" },
    { label: "Your Metric 2", value: 25, suffix: "+" },
    // Add more statistics from PDF
  ],
  
  // Team Information - Update with real team details
  team: [
    {
      name: "Raeef Abdullah Mohammed Al Tamimi", // Already included
      position: "Your actual position from PDF",
      description: "Your actual description from PDF",
      image: "/your-actual-photo.jpg" // Add real photo
    },
    // Add more team members from PDF
  ],
  
  // Contact Information - Update with real contact details
  contact: {
    phone: "Your actual phone from PDF",
    email: "Your actual email from PDF",
    address: "Your actual address from PDF",
    website: "Your actual website from PDF"
  },
  
  // Company History - Update with real timeline
  history: [
    {
      year: "2024",
      title: "Your actual milestone from PDF",
      description: "Your actual description from PDF"
    },
    // Add more history items from PDF
  ]
}
```

---

## 📝 **Content Sections to Update**

### **1. Hero Section Content**
- Company tagline
- Main description
- Call-to-action text

### **2. Mission & Vision**
- Mission statement
- Vision statement
- Core values and descriptions

### **3. Services Section**
- Service names and descriptions
- Service features and benefits
- Service icons (choose from available icons)

### **4. Statistics Section**
- Real numbers and metrics
- Achievement labels
- Success indicators

### **5. Team Section**
- Team member names and positions
- Professional descriptions
- Team member photos

### **6. Company History**
- Timeline events
- Milestone descriptions
- Achievement years

### **7. Contact Information**
- Phone numbers
- Email addresses
- Physical addresses
- Website URLs

---

## 🖼️ **Image Integration**

### **1. Team Photos**
- Add team member photos to `/public/` directory
- Update image paths in `companyInfo.team`
- Recommended format: JPG/PNG, 400x400px

### **2. Company Logo**
- Replace `/public/logo.png` with your actual logo
- Recommended format: PNG with transparent background
- Recommended size: 200x80px

### **3. Background Images**
- Replace `/public/hero-bg.jpg` with your actual hero background
- Recommended format: JPG, 1920x1080px

---

## 🎯 **Available Icons**

You can use these icons for services and values:
- `TrendingUp` - For growth/financial services
- `Target` - For strategic planning
- `Shield` - For security/risk management
- `Zap` - For technology/digital services
- `Users` - For collaboration/team services
- `Globe` - For international/global services
- `Award` - For excellence/achievement
- `CheckCircle` - For completion/success

---

## 📄 **PDF Content Extraction Tips**

### **1. Text Content**
- Copy text directly from PDF
- Maintain formatting and structure
- Preserve important keywords and phrases

### **2. Numbers and Statistics**
- Extract exact numbers and percentages
- Include proper units and suffixes
- Verify accuracy of all metrics

### **3. Contact Information**
- Double-check phone numbers and emails
- Include all relevant contact methods
- Verify website URLs

### **4. Team Information**
- Extract full names and titles
- Include professional descriptions
- Note any specializations or expertise

---

## 🔄 **Update Process**

### **Step 1: Extract Content from PDF**
1. Open the Content.pdf file
2. Copy relevant text sections
3. Note important numbers and statistics
4. Extract contact information

### **Step 2: Update Company Content File**
1. Open `components/company-content.tsx`
2. Replace placeholder content with real content
3. Update all sections systematically
4. Save the file

### **Step 3: Update Images**
1. Add team photos to `/public/` directory
2. Replace logo and background images
3. Update image paths in the code

### **Step 4: Test Website**
1. Run `npm run dev`
2. Check all sections display correctly
3. Verify content accuracy
4. Test responsive design

---

## 📱 **Content Guidelines**

### **1. Text Length**
- Keep descriptions concise but informative
- Use bullet points for features
- Maintain consistent tone and style

### **2. Professional Language**
- Use industry-appropriate terminology
- Maintain professional tone
- Avoid jargon when possible

### **3. Accuracy**
- Verify all information is current
- Double-check numbers and statistics
- Ensure contact information is correct

---

## 🎨 **Brand Consistency**

### **1. Color Usage**
- Primary blue (`#015DAB`) for main elements
- Primary green (`#9D9D3B`) for accents and highlights
- Maintain consistent color application

### **2. Typography**
- Use clear, readable fonts
- Maintain hierarchy with headings
- Ensure good contrast ratios

### **3. Visual Elements**
- Use consistent icon styles
- Maintain uniform spacing
- Apply consistent animations

---

## 🚀 **Next Steps**

1. **Extract Content**: Copy all relevant content from your PDF
2. **Update File**: Replace content in `components/company-content.tsx`
3. **Add Images**: Upload team photos and company images
4. **Test Website**: Verify everything displays correctly
5. **Review**: Check for accuracy and completeness

---

## 📞 **Need Help?**

If you need assistance with:
- Content extraction from PDF
- Code updates
- Image optimization
- Website testing

Please provide the specific content sections from your PDF, and I'll help you integrate them into the website.

---

## ✅ **Checklist**

- [ ] Extract company name and tagline
- [ ] Update mission and vision statements
- [ ] List all services and features
- [ ] Extract team member information
- [ ] Update contact details
- [ ] Add company history/timeline
- [ ] Include real statistics and metrics
- [ ] Add team photos
- [ ] Replace logo and background images
- [ ] Test website functionality
- [ ] Verify content accuracy

Once you've updated the content, the website will reflect your actual company information while maintaining all the smooth animations and interactive features we've implemented! 