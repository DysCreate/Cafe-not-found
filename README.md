# CAFÉ NOT FOUND - Cyberpunk Terminal Interface

A responsive cyberpunk-style café front-end inspired by retro green terminal UI, featuring glitch effects, dynamic animations, and a fully interactive interface.

## 🎮 Features

### Theme & Style
- **Neon Green Terminal Aesthetic**: Deep black background with vibrant neon green text
- **Monospaced Typography**: Uses Share Tech Mono and VT323 fonts for authentic terminal feel
- **Grid Background**: Subtle glowing grid lines for depth
- **Glowing Borders**: All components outlined with animated green borders
- **CRT Effects**: Scan-line overlay and flicker animations for authenticity

### Layout Components
- **Left Sidebar**: Vertical menu with glowing icons (Home, Menu, Side Effects, Reviews, Contact)
- **Animated Header**: "Café not found" logo with typewriter effect and glitch animations
- **Dynamic Menu Section**: Menu items that randomly change every 3 seconds with text scramble effects
- **Side Effect Monitor**: Real-time animated graphs showing energy, caffeine, and glitch levels
- **Glitchy Reviews**: Scrambled text that animates into real customer reviews
- **Terminal Footer**: System status with blinking cursor and live timestamps

### Animations & Effects
- **Glitch Text Effects**: Random character scrambling and glitch animations
- **Neon Glow Transitions**: Interactive elements with hover glow effects
- **CRT Scan Lines**: Authentic retro monitor overlay effect
- **Typewriter Animations**: Text appears character by character
- **Graph Animations**: SVG-based real-time data visualization
- **Random Glitch Events**: Periodic system glitches for authenticity

## 🛠️ Tech Stack

- **React 19.1.1**: Modern React with hooks and functional components
- **Vanilla CSS**: Custom CSS with CSS Grid, Flexbox, and advanced animations
- **Google Fonts**: Share Tech Mono and VT323 for authentic terminal typography
- **SVG Graphics**: Animated charts and visual elements
- **CSS Keyframes**: Complex animations for glitch effects and transitions

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd glitchcafe
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Sidebar.js          # Left navigation sidebar
│   ├── Sidebar.css
│   ├── Header.js           # Animated header with typewriter effect
│   ├── Header.css
│   ├── MenuSection.js      # Dynamic menu with scramble effects
│   ├── MenuSection.css
│   ├── SideEffectMonitor.js # Real-time animated graphs
│   ├── SideEffectMonitor.css
│   ├── ReviewsSection.js   # Glitchy review animations
│   ├── ReviewsSection.css
│   ├── Footer.js           # Terminal-style footer
│   └── Footer.css
├── App.js                  # Main application component
├── App.css                 # Layout and global styles
├── index.js               # Application entry point
└── index.css              # Global CSS variables and base styles
```

## 🎨 Design System

### Color Palette
- **Primary Green**: `#00ff41` (Neon green)
- **Dark Green**: `#00cc33` (Secondary green)
- **Terminal Black**: `#0a0a0a` (Panel backgrounds)
- **Deep Black**: `#000000` (Main background)

### Typography
- **Share Tech Mono**: Primary monospace font
- **VT323**: Terminal-style display font
- **Font Sizes**: Responsive scaling from 0.7em to 2.5em

### Spacing
- **Sidebar Width**: 80px (responsive: 60px/50px)
- **Header Height**: 80px (responsive: 60px)
- **Grid Gaps**: 20px (responsive: 15px/10px)

## 📱 Responsive Design

The interface is fully responsive with breakpoints at:
- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: <480px

## 🔧 Customization

### Adding New Menu Items
Edit the `menuItems` array in `MenuSection.js`:
```javascript
const menuItems = [
  { name: "Your Item", price: "$X.XX", effect: "Description" },
  // Add more items...
];
```

### Modifying Colors
Update CSS variables in `index.css`:
```css
:root {
  --neon-green: #00ff41;
  --dark-green: #00cc33;
  /* ... */
}
```

### Adjusting Animation Speeds
Modify timing values in component files:
```javascript
const typingSpeed = 150; // Typewriter speed
const updateInterval = 3000; // Menu update interval
```

## 🌐 Browser Compatibility

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 📝 API Integration Ready

The codebase is structured for easy backend integration:
- Component state management ready for API calls
- Modular component structure
- Well-documented props and state
- Error handling patterns in place

## 🎯 Future Enhancements

- [ ] Backend API integration for real menu data
- [ ] User authentication system
- [ ] Order management interface
- [ ] Real-time chat system
- [ ] Sound effects and audio feedback
- [ ] Advanced glitch effects and particle systems
- [ ] Dark/Light theme toggle
- [ ] Accessibility improvements

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For questions or support, please open an issue in the repository.

---

**Developed with ❤️ and ☕ by Cyber_Dev_2024**
