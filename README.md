# Kerem Köse — Software Developer Portfolio

Modern, premium, karanlık temalı ve yüksek performanslı kişisel yazılım geliştirici portföyü. Doğrudan **GitHub Pages** üzerinde çalışacak şekilde sıfır harici bağımlılıkla (Vanilla JS, Pure CSS3, Semantic HTML5) tasarlanmıştır.

Canlı Adres: **[https://keremkose61.github.io](https://keremkose61.github.io)**  
GitHub: **[https://github.com/keremkose61](https://github.com/keremkose61)**

---

## 🚀 Öne Çıkan Özellikler

- **🎨 Tasarım Sistemi & Premium Tema:**
  - Ana Arka Plan: `#080B0A`
  - İkincil Arka Plan: `#101613`
  - Vurgu Rengi: `#35E69A` (Neon / Nane Yeşili)
  - Yazı Renkleri: `#F5F7F6` (Ana) ve `#A0AAA4` (İkincil)
  - Glassmorphism detayları (frosted blur), neon glow efektleri ve ambient arka plan ışıltıları.

- **🌐 Çift Dil Desteği (Türkçe & İngilizce):**
  - Sayfa yenilenmeden anında tüm arayüz metinlerini dönüştüren dinamik `i18n` motoru.
  - Seçilen dil tercihi `localStorage` üzerinde saklanır.

- **💻 İnteraktif Terminal & Mini CLI:**
  - Hero bölümünde interaktif geliştirici terminali.
  - Ziyaretçilerin `help`, `skills`, `projects`, `github`, `contact`, `cv` ve `clear` komutlarını çalıştırabileceği mini komut satırı.

- **📱 7 Seçkin Proje & Dinamik Detay Modalı:**
  1. **ODİS** — Okul Disiplin ve İzleme Sistemi (PHP, MySQL, JS)
  2. **BrainBoost** — AI-Powered Learning Platform (Python, LLM, REST API)
  3. **PPL ANTREMAN** — Android Fitness Application (Android, Kotlin/Java, Room DB)
  4. **JARVIS AI** — Local Artificial Intelligence Assistant (Python, NLP, Automation)
  5. **DevFlow IDE** — Desktop Development Environment (C++, Python, Qt)
  6. **Computer Repair Simulator** — 3D Simulation Game (C++, 3D Engine)
  7. **TÜRK AI** — Android Voice Assistant (Android, Kotlin, Speech Recognition)
  - Proje filtreleme (Hepsi, Mobil & Android, Yapay Zekâ, Masaüstü & Oyun, Web & Sistem).
  - "Detayları İncele" butonu ile mimari, öne çıkan fonksiyonlar ve teknolojileri içeren detay penceresi.

- **🛠️ Teknik Yetenekler Kartları:**
  - Doğrulanmamış yüzdeler yerine 4 kategoride (Programlama Dilleri, Mobil & Sistemler, Web & Veritabanı, Araçlar & İş Akışı) organize edilmiş zengin yetkinlik ekosistemi.

- **📜 Deneyim & Eğitim Zaman Tüneli:**
  - Bağımsız geliştiricilik deneyimleri ve gelecekteki kurumsal roller/eğitimler için özel olarak tasarlanmış düzenlenebilir placeholder alanları.

- **📄 CV Görüntüleme & İndirme:**
  - `assets/documents/cv.pdf` dosyasına doğrudan bağlantı.

- **📬 İletişim Formu & 1-Tıkla E-posta Kopyalama:**
  - İstemci taraflı doğrulama, `mailto:` entegrasyonu ve anlık bildirim (Toast) sistemi.

---

## 📂 Dosya Yapısı

```text
portfolio/
├── index.html                   # Ana sayfa (Semantic HTML5, SEO, Open Graph)
├── .nojekyll                    # GitHub Pages Jekyll atlama dosyası
├── README.md                    # Proje ve yayınlama dokümantasyonu
├── assets/
│   ├── css/
│   │   └── style.css            # Özel CSS3 tasarım sistemi, animasyonlar ve responsive kurallar
│   ├── js/
│   │   └── main.js              # Dil motoru, terminal CLI, modal, filtreleme ve etkileşimler
│   ├── images/
│   │   ├── avatar.svg           # Geliştirici profil görseli (SVG)
│   │   ├── project-odis.svg     # ODİS proje görseli
│   │   ├── project-brainboost.svg # BrainBoost proje görseli
│   │   ├── project-ppl.svg      # PPL ANTREMAN proje görseli
│   │   ├── project-jarvis.svg   # JARVIS AI proje görseli
│   │   ├── project-devflow.svg  # DevFlow IDE proje görseli
│   │   ├── project-simulator.svg# Computer Repair Simulator görseli
│   │   └── project-turkai.svg   # TÜRK AI proje görseli
│   ├── icons/
│   │   └── favicon.svg          # Neon yeşil KK monogramlı SVG favicon
│   └── documents/
│       └── cv.pdf               # Özgeçmiş (PDF belgesi)
```

---

## 🌐 GitHub Pages Üzerinde Yayınlama Rehberi

Bu proje **PHP**, **Node.js** veya sunucu taraflı derleyici gerektirmez. Doğrudan GitHub Pages üzerinde çalışır.

### Adım Adım Kurulum:

1. **GitHub'da Depo Oluşturun veya Açın:**
   - Depo adı tam olarak şu olmalıdır: `keremkose61.github.io`
   - (Bu özel adlandırma sayesinde siteniz doğrudan alan adınızın ana kökünde yayınlanır).

2. **Dosyaları Yükleyin:**
   `portfolio/` klasörü içindeki tüm dosyaları (`index.html`, `assets/`, `.nojekyll` vb.) deponuzun ana dizinine (`root`) kopyalayın ve commit yapın:
   ```bash
   git init
   git add .
   git commit -m "feat: launch premium developer portfolio"
   git branch -M main
   git remote add origin https://github.com/keremkose61/keremkose61.github.io.git
   git push -u origin main
   ```

3. **GitHub Pages Ayarını Kontrol Edin:**
   - GitHub deponuzda **Settings** > **Pages** sekmesine gidin.
   - **Branch** alanında `main` ve `/ (root)` seçili olduğundan emin olun.
   - Siteniz birkaç dakika içinde **`https://keremkose61.github.io`** adresinde yayına girecektir.

---

## ✏️ Özelleştirme & Güncelleme

- **CV'yi Güncellemek:** Yeni özgeçmişinizi `assets/documents/cv.pdf` dosyasıyla değiştirmeniz yeterlidir.
- **İletişim E-postasını Değiştirmek:** `index.html` ve `assets/js/main.js` dosyalarında `keremkose.dev@gmail.com` adresini kendi e-posta adresinizle güncelleyebilirsiniz.
- **Eğitim ve Sertifikaları Doldurmak:** `index.html` dosyasındaki `placeholder-card` sınıflı alanlara üniversite, bölüm ve sertifika isimlerinizi ekleyebilirsiniz.
- **Yeni Proje Eklemek:** `index.html` içerisindeki `#projectsGrid` alanına yeni bir `project-card` ekleyip `assets/js/main.js` içindeki `projectDetails` nesnesine detayları tanımlayabilirsiniz.

---

## 📄 Lisans

Bu portföy şablonu ve tasarımı Kerem Köse'ye aittir. MIT lisansı altında kişisel kullanım için serbestçe uyarlanabilir.
