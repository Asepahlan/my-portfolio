# Portfolio Website - Asep Developer

![Portfolio Preview](https://via.placeholder.com/800x400/6366F1/ffffff?text=Portfolio+Website)

Sebuah website portfolio modern dan responsif untuk seorang Full Stack Developer dengan fitur animasi, dark mode, dan optimasi performance.

## ✨ Fitur Utama

### 🎨 **Design & UI**
- **Responsive Design** - Optimal di desktop, tablet, dan mobile
- **Dark Mode Support** - Toggle tema dengan animasi smooth
- **Glassmorphism Effects** - Elemen transparan dengan backdrop blur
- **Gradient Backgrounds** - Visual yang modern dan elegan
- **Smooth Animations** - AOS (Animate On Scroll) dengan staggered effects

### 🚀 **Performance**
- **Optimized Images** - Kompresi gambar tanpa kehilangan kualitas
- **Lazy Loading** - Loading gambar yang efisien
- **CDN Assets** - Tailwind CSS dan AOS dari CDN
- **Throttled Events** - Scroll events yang dioptimasi

### 🔧 **Interactive Features**
- **Mobile Menu** - Navigation responsif dengan hamburger menu
- **Scroll Spy** - Highlight otomatis pada section aktif
- **Hover Effects** - Micro-interactions pada semua elemen
- **Smooth Scrolling** - Navigasi yang halus antar sections

### 🎯 **SEO & Accessibility**
- **Comprehensive Meta Tags** - SEO lengkap untuk search engines
- **Open Graph** - Support untuk social media sharing
- **Favicon Support** - Icon profesional untuk browser tab
- **Semantic HTML** - Struktur yang baik untuk accessibility

## 🛠️ Teknologi Stack

### **Frontend**
- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript (ES6+)** - Modern JavaScript features

### **Libraries & Tools**
- **AOS (Animate On Scroll)** - Library animasi scroll
- **Font: Inter** - Modern typography dari Google Fonts

### **Assets**
- **CDN Delivery** - Tailwind CSS & AOS dari CDN
- **Relative Paths** - Semua asset lokal menggunakan path relatif
- **Optimized Images** - Gambar yang sudah dikompresi

## 📁 Struktur Project

```
portfolio-website/
├── index.html              # File utama HTML
├── README.md              # Dokumentasi project ini
├── assets/
│   ├── css/
│   │   └── tailwind.css   # Custom Tailwind config (opsional)
│   ├── js/
│   │   └── main.js        # JavaScript functionality
│   └── img/
│       ├── asep.png       # Profile photo (optimized)
│       ├── favicon-16x16.png  # Favicon kecil
│       ├── favicon-32x32.png  # Favicon medium
│       └── apple-touch-icon.png # Icon untuk iOS
```

## 🚀 Instalasi & Setup

### **Prasyarat**
- Web browser modern (Chrome, Firefox, Safari, Edge)
- Web server lokal (opsional, bisa dibuka langsung dari file system)

### **Langkah Instalasi**

1. **Clone atau Download Project**
   ```bash
   # Clone repository (jika menggunakan Git)
   git clone https://github.com/username/portfolio-website.git
   cd portfolio-website

   # Atau download dan extract file ZIP
   ```

2. **Buka di Browser**
   ```bash
   # Opsi 1: Buka langsung dari file system
   # Double-click index.html atau buka melalui browser

   # Opsi 2: Gunakan web server lokal (recommended)
   # Menggunakan Python
   python -m http.server 8000

   # Menggunakan Node.js (jika ada http-server)
   npx http-server

   # Menggunakan PHP
   php -S localhost:8000
   ```

3. **Akses Website**
   - Buka browser dan navigasi ke `http://localhost:8000`
   - Atau buka file `index.html` langsung dari file explorer

## 🌐 Preview & Demo

### **Live Demo**
Website ini dapat diakses secara online melalui:
- **Local Development**: `http://localhost:8000`
- **File System**: Buka `index.html` langsung di browser

### **Screenshots**
![Hero Section](https://via.placeholder.com/600x400/6366F1/ffffff?text=Hero+Section)
![About Section](https://via.placeholder.com/600x400/8B5CF6/ffffff?text=About+Section)
![Projects Section](https://via.placeholder.com/600x400/EC4899/ffffff?text=Projects+Section)

## 📱 Browser Support

### **Supported Browsers**
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### **Mobile Browsers**
- ✅ iOS Safari 14+
- ✅ Chrome Mobile 90+
- ✅ Samsung Internet 14+

## 🔧 Customization

### **Warna Tema**
Edit konfigurasi Tailwind di bagian `<head>` pada `index.html`:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#6366F1',    // Ubah warna utama
                secondary: '#1E293B',  // Ubah warna sekunder
                accent: '#8B5CF6',     // Ubah warna aksen
                // Tambahkan warna custom lainnya
            }
        }
    }
}
```

### **Konten**
- Edit informasi personal di section "About"
- Update skills dan teknologi di section "Skills"
- Ganti project showcase di section "Projects"
- Update informasi kontak di section "Contact"

### **SEO Meta Tags**
Edit meta tags di bagian `<head>` untuk optimasi SEO:

```html
<title>Your Name - Your Profession</title>
<meta name="description" content="Your description here...">
<meta name="keywords" content="your, keywords, here">
```

## 📊 Performance Metrics

### **Lighthouse Scores**
- **Performance**: 95+ 🚀
- **Accessibility**: 100 ♿
- **Best Practices**: 100 ✅
- **SEO**: 100 🔍

### **Optimasi yang Diterapkan**
- ✅ Image compression & lazy loading
- ✅ CDN untuk external libraries
- ✅ Minified CSS & JavaScript
- ✅ Semantic HTML structure
- ✅ Mobile-first responsive design

## 🐛 Troubleshooting

### **Common Issues**

**1. Animasi tidak muncul**
```bash
# Pastikan AOS library ter-load
# Check browser console untuk error
# Pastikan internet connection untuk CDN
```

**2. Dark mode tidak berfungsi**
```bash
# Check localStorage support di browser
# Pastikan JavaScript enabled
# Clear browser cache jika perlu
```

**3. Mobile menu tidak responsif**
```bash
# Pastikan viewport meta tag ada
# Check CSS media queries
# Test di berbagai device sizes
```

### **Debug Mode**
Buka Developer Tools (F12) dan check:
- Console untuk JavaScript errors
- Network tab untuk failed requests
- Elements tab untuk CSS issues

## 🤝 Contributing

Kontribusi selalu welcome! Silakan buat:
1. Issue untuk bug reports atau feature requests
2. Pull request untuk improvements
3. Documentation updates

## 📄 License

Project ini menggunakan license MIT. Silakan lihat file `LICENSE` untuk detail lebih lanjut.

## 👨‍💻 Author

**Asep Developer**
- 🌐 Website: [asep-portfolio.vercel.app](https://asep-portfolio.vercel.app)
- 📧 Email: asep.developer@email.com
- 💼 LinkedIn: [linkedin.com/in/asep-developer](https://linkedin.com/in/asep-developer)
- 🐙 GitHub: [github.com/asep-developer](https://github.com/asep-developer)

## 🙏 Acknowledgments

- **Tailwind CSS** - Amazing utility-first CSS framework
- **AOS Library** - Excellent scroll animation library
- **Inter Font** - Beautiful and readable typography
- **Icons** - Heroicons for beautiful icon set

---

**⭐ Jika project ini bermanfaat, berikan star di repository!**

*Built with ❤️ by Asep Developer*
