/**
 * KEREM KÖSE — PREMIUM DEVELOPER PORTFOLIO
 * Main JavaScript Engine (Vanilla JS, Zero External Dependencies)
 * 
 * Features:
 *  1. Multi-language (TR / EN) with instant DOM translation & localStorage
 *  2. Scroll Progress Bar & Sticky Header Scroll Spy
 *  3. Mobile Navigation Drawer
 *  4. Dynamic Role Typewriter Effect
 *  5. Interactive Hero Terminal & Mini CLI
 *  6. Project Filtering System
 *  7. Interactive Project Details Modal
 *  8. Contact Form Validation & Mailto Trigger
 *  9. 1-Click Clipboard Copy with Feedback
 * 10. Lightweight IntersectionObserver Scroll Animations (AOS replacement)
 * 11. Toast Notification System
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. MULTI-LANGUAGE TRANSLATIONS (TR & EN)
     ========================================================================== */
  const translations = {
    tr: {
      nav: {
        about: "Hakkımda",
        skills: "Yetenekler",
        projects: "Projeler",
        experience: "Deneyim & Eğitim",
        contact: "İletişim"
      },
      hero: {
        status: "Yeni projelere & iş birliklerine açık",
        greeting: "Merhaba, ben",
        title: "Software Developer",
        tagline: '"Building digital experiences through code, creativity and technology."',
        bio: "Kendimi geliştirmeye, yeni teknolojiler öğrenmeye ve gerçek problemlere yazılım çözümleri üretmeye odaklanıyorum.",
        cta_projects: "Projelerimi İncele",
        cta_cv: "CV'mi Görüntüle",
        cta_github: "GitHub Profilim",
        metric_projects: "Geliştirilmiş Proje",
        metric_tech: "Teknoloji & Araç",
        metric_dedication: "Sürekli Gelişim"
      },
      about: {
        tag: "HAKKIMDA",
        title: "Yazılım ve Teknolojiye Olan Tutkum",
        subtitle: "Modern mimariler, algoritmik düşünce ve kullanıcı odaklı çözümler",
        p1_heading: "Fikirleri Fonksiyonel Gerçekliklere Dönüştürmek",
        p1: "Yazılım dünyasına adım attığım ilk günden bu yana, kod yazmayı sadece bir teknik süreç olarak değil; problem çözme, yaratıcılık ve sistem mimarisi sanatı olarak görüyorum. Farklı paradigmaları, modern geliştirme standartlarını ve yeni teknolojileri öğrenmeye büyük bir merak duyuyorum.",
        p2: "Mobil platformlarda Android ve Kotlin ekosisteminden masaüstü ve sistem geliştirmede C++ ve Python'a; web mimarilerinde modern JavaScript ve PHP'den yapay zekâ entegrasyonlarına kadar geniş bir yelpazede projeler ürettim. Hedefim; her projede temiz, sürdürülebilir ve yüksek performanslı yazılımlar ortaya koymaktır.",
        card1_title: "Mobil & Sistem Mimarisi",
        card1_desc: "Android ekosisteminde Kotlin ve Java ile yerel uygulamalar; C++ ve Python ile verimli masaüstü araçları.",
        card2_title: "Yapay Zekâ ve Otomasyon",
        card2_desc: "Akıllı asistan sistemleri, yerel ses işleme ve öğrenme algoritmalarıyla zenginleştirilmiş uygulamalar.",
        card3_title: "Temiz Kod & Sürdürülebilirlik",
        card3_desc: "Modüler yapı, anlaşılır dokümantasyon, Git sürüm kontrolü ve ölçeklenebilir kod tasarımı."
      },
      skills: {
        tag: "TEKNİK YETENEKLER",
        title: "Teknoloji & Araç Ekosistemi",
        subtitle: "Doğrulanmamış yüzdeler yerine gerçek yetenekler ve çalışma alanları",
        cat_languages: "Programlama Dilleri",
        cat_languages_desc: "Sistem, mobil, web ve algoritma geliştirmede kullanılan temel diller.",
        cat_mobile: "Mobil & Sistemler",
        cat_mobile_desc: "Yerel Android uygulamaları, yaşam döngüsü yönetimi ve sistem optimizasyonu.",
        cat_web: "Web & Veritabanı",
        cat_web_desc: "Kullanıcı dostu arayüzler, modern tasarım standartları ve veritabanı yönetimi.",
        cat_tools: "Araçlar & İş Akışı",
        cat_tools_desc: "Versiyon kontrolü, kod kalitesi ve modern geliştirici araç takımı."
      },
      projects: {
        tag: "PROJELER",
        title: "Geliştirdiğim Seçkin Çalışmalar",
        subtitle: "Gerçek problemlere yazılım çözümleri üreten 7 özgün proje",
        filter_all: "Hepsi",
        filter_mobile: "Mobil & Android",
        filter_ai: "Yapay Zekâ",
        filter_desktop: "Masaüstü & Oyun",
        filter_web: "Web & Sistem",
        view_details: "Detayları İncele",
        odis_desc: "Okul yönetimi ve rehberlik birimleri için öğrenci disiplin kayıtları, süreç takibi, veli bilgilendirme ve otomatik raporlama sağlayan kapsamlı yönetim yazılımı.",
        brainboost_desc: "Yapay zekâ destekli öğrenme platformu; kullanıcı performansını analiz ederek adaptif soru üretimi, aralıklı tekrar ve kişiselleştirilmiş bilgi pekiştirme sunar.",
        ppl_desc: "Push-Pull-Legs metodolojisine göre tasarlanmış yerel Android fitness uygulaması; set, tekrar, ağırlık takibi ve hacim grafikleriyle sporcuların gelişimini analiz eder.",
        jarvis_desc: "İşletim sistemi görevlerini otomatize eden, sesli ve metin komutlarını yerel model mimarileriyle işleyen akıllı masaüstü yapay zekâ asistanı.",
        devflow_desc: "Hafif ve modüler masaüstü geliştirme ortamı; sözdizimi renklendirme, entegre terminal, çoklu sekme desteği ve performans odaklı C++ çekirdeği içerir.",
        simulator_desc: "Kullanıcıların donanım parçalarını monte ettiği, arıza tespiti yaptığı ve termal/fiziksel kurallarla bilgisayar toplama sürecini simüle ettiği 3D oyun projesi.",
        turkai_desc: "Türkçe doğal dil işleme odaklı mobil sesli asistan; sesli komutlarla telefon kontrolü, bilgi sorgulama ve akıllı görev yürütme yetenekleri sunar."
      },
      experience: {
        tag: "DENEYİM & EĞİTİM",
        title: "Gelişim ve Öğrenme Yolculuğu",
        subtitle: "Proje odaklı yazılım geliştirme, eğitim temelleri ve yetkinlikler",
        col_exp: "Deneyim & Proje Pratiği",
        col_edu: "Eğitim & Sertifikalar",
        item1_badge: "2023 — Günümüz",
        item1_title: "Bağımsız Yazılım Geliştirici",
        item1_desc: "Android ekosistemi, yapay zekâ entegrasyonlu araçlar ve masaüstü yazılımları geliştirme. Kod mimarisi, sürüm kontrolü (Git) ve uçtan uca uygulama yaşam döngüsü yönetimi.",
        item3_title: "Oto-didaktik Öğrenme & Araştırma",
        item3_desc: "Android Jetpack mimarileri, modern C++ standartları, yapay zekâ API'leri ve güvenlik yaklaşımlarını resmi dokümantasyonlar üzerinden derinlemesine inceleme ve uygulama."
      },
      github: {
        heading: "Açık Kaynak & Kod Dünyam",
        desc: "Geliştirdiğim projeleri, açık kaynak denemelerimi ve kodlama yolculuğumu GitHub üzerinden paylaşıyorum. Repolarımı inceleyebilir, yıldız bırakabilir veya katkıda bulunabilirsiniz.",
        stat_projects: "Portföy Projesi",
        btn_view: "GitHub Profilini Ziyaret Et",
        btn_repos: "Tüm Repoları İncele"
      },
      contact: {
        tag: "İLETİŞİM",
        title: "Birlikte Harika Bir Şeyler İnşa Edelim",
        subtitle: "Yeni projeler, teknik danışmanlık veya sadece bir merhaba demek için bana ulaşın",
        email_label: "E-Posta Adresi",
        copy: "Kopyala",
        copied: "Kopyalandı!",
        visit: "Ziyaret Et",
        location_label: "Konum",
        location_val: "Trabzon, Türkiye (Uzaktan Çalışmaya Açık)",
        download_cv: "İndir",
        form_title: "Mesaj Gönderin",
        form_subtitle: "Formu doldurarak doğrudan e-posta istemciniz üzerinden iletişime geçebilirsiniz.",
        name_label: "Adınız Soyadınız",
        email_input_label: "E-Posta Adresiniz",
        subject_label: "Konu",
        message_label: "Mesajınız",
        send_btn: "Mesajı İlet",
        name_error: "Lütfen adınızı girin.",
        email_error: "Lütfen geçerli bir e-posta adresi girin.",
        subject_error: "Lütfen bir konu belirtin.",
        message_error: "Lütfen mesajınızı yazın."
      },
      footer: {
        bio: "Building digital experiences through code, creativity and technology.",
        copyright: "© 2026 Kerem Köse. Tüm hakları saklıdır.",
        subtext: "GitHub Pages üzerinde barındırılmaktadır."
      }
    },

    en: {
      nav: {
        about: "About",
        skills: "Skills",
        projects: "Projects",
        experience: "Journey",
        contact: "Contact"
      },
      hero: {
        status: "Available for new projects & opportunities",
        greeting: "Hello, I am",
        title: "Software Developer",
        tagline: '"Building digital experiences through code, creativity and technology."',
        bio: "Focusing on continuous learning, mastering emerging technologies, and engineering software solutions to solve real-world problems.",
        cta_projects: "Explore Projects",
        cta_cv: "View CV",
        cta_github: "GitHub Profile",
        metric_projects: "Engineered Projects",
        metric_tech: "Tech & Tools",
        metric_dedication: "Continuous Growth"
      },
      about: {
        tag: "ABOUT ME",
        title: "Passion for Code & Technology",
        subtitle: "Modern software architectures, algorithmic thinking, and user-centric design",
        p1_heading: "Transforming Ideas into Functional Realities",
        p1: "From my first lines of code, I have viewed programming not just as a technical workflow, but as an art of problem-solving, engineering architecture, and digital creativity. I possess an insatiable curiosity for modern paradigms, clean software standards, and cutting-edge platforms.",
        p2: "My portfolio spans native mobile development with Android and Kotlin, system engineering in C++ and Python, modern web stacks with JavaScript and PHP, all the way to generative AI and voice assistant integrations. My mission is simple: to deliver clean, scalable, and ultra-performant code.",
        card1_title: "Mobile & Systems Architecture",
        card1_desc: "Native Android applications via Kotlin and Java; high-performance desktop utilities with C++ and Python.",
        card2_title: "AI & Workflow Automation",
        card2_desc: "Voice-driven assistants, local speech recognition pipelines, and intelligent adaptive learning algorithms.",
        card3_title: "Clean Code & Reliability",
        card3_desc: "Modular structure, transparent documentation, rigorous Git version control, and maintainable software design."
      },
      skills: {
        tag: "TECHNICAL SKILLS",
        title: "Ecosystem & Core Competencies",
        subtitle: "Real-world engineering domains and tools without unverified percentage bars",
        cat_languages: "Programming Languages",
        cat_languages_desc: "Core languages utilized across systems, mobile, web, and algorithmic pipelines.",
        cat_mobile: "Mobile & Systems",
        cat_mobile_desc: "Native Android app engineering, lifecycle management, and systems optimization.",
        cat_web: "Web & Databases",
        cat_web_desc: "User interfaces, responsive standards, relational data models, and API integrations.",
        cat_tools: "Tools & DevOps Workflow",
        cat_tools_desc: "Version control, profiling, clean code practices, and developer tooling suite."
      },
      projects: {
        tag: "FEATURED PROJECTS",
        title: "Selected Engineering Works",
        subtitle: "7 standalone software projects built to solve tangible problems",
        filter_all: "All",
        filter_mobile: "Mobile & Android",
        filter_ai: "Artificial Intelligence",
        filter_desktop: "Desktop & 3D",
        filter_web: "Web & Systems",
        view_details: "View Details",
        odis_desc: "Comprehensive school discipline and student tracking management software enabling record keeping, automated guidance reporting, and notifications.",
        brainboost_desc: "AI-powered learning platform with neural spaced repetition and adaptive quiz generation tailored to personal student performance metrics.",
        ppl_desc: "Native Android fitness tracker built around the Push-Pull-Legs protocol, offering workout logging, 1RM calculation, and visual volume analytics.",
        jarvis_desc: "Desktop AI assistant performing operating system automation, offline voice command recognition, and intelligent local task processing.",
        devflow_desc: "Modular desktop code editor prototype featuring syntax highlighting, multi-tab workspace, integrated terminal, and a lightweight C++ engine.",
        simulator_desc: "Interactive 3D simulation game allowing players to diagnose computer hardware faults, assemble rigs, and simulate component thermal dynamics.",
        turkai_desc: "Android voice assistant engineered with Turkish natural language processing, native hardware controls, and fast offline speech commands."
      },
      experience: {
        tag: "JOURNEY & EDUCATION",
        title: "Continuous Growth & Milestones",
        subtitle: "Project-driven software craftsmanship, foundations, and technical competencies",
        col_exp: "Experience & Practical Craft",
        col_edu: "Education & Certifications",
        item1_badge: "2023 — Present",
        item1_title: "Independent Software Developer",
        item1_desc: "Architecting native Android applications, AI-assisted tools, and desktop software. Managing version control, code architecture, and end-to-end software lifecycles.",
        item3_title: "Self-Directed Research & Learning",
        item3_desc: "Deep study of Android Jetpack architecture guidelines, modern C++ standards, secure API practices, and open-source contributions."
      },
      github: {
        heading: "Open Source & Code World",
        desc: "I publish my projects, experiments, and developer journey on GitHub. Feel free to explore my repositories, leave stars, or collaborate.",
        stat_projects: "Portfolio Projects",
        btn_view: "Visit GitHub Profile",
        btn_repos: "Browse All Repositories"
      },
      contact: {
        tag: "CONTACT",
        title: "Let's Build Something Impactful",
        subtitle: "Reach out for new projects, technical collaborations, or just to say hello",
        email_label: "Email Address",
        copy: "Copy",
        copied: "Copied!",
        visit: "Visit",
        location_label: "Location",
        location_val: "Trabzon, Turkey (Open to Remote)",
        download_cv: "Download",
        form_title: "Send a Message",
        form_subtitle: "Fill out the form to get in touch directly via your email client.",
        name_label: "Full Name",
        email_input_label: "Email Address",
        subject_label: "Subject",
        message_label: "Your Message",
        send_btn: "Send Message",
        name_error: "Please enter your name.",
        email_error: "Please enter a valid email address.",
        subject_error: "Please specify a subject.",
        message_error: "Please write your message."
      },
      footer: {
        bio: "Building digital experiences through code, creativity and technology.",
        copyright: "© 2026 Kerem Köse. All rights reserved.",
        subtext: "Hosted seamlessly on GitHub Pages."
      }
    }
  };

  /* Project Detailed Modal Data */
  const projectDetails = {
    odis: {
      title: "ODİS — Okul Disiplin ve İzleme Sistemi",
      title_en: "ODİS — School Discipline & Tracking System",
      category: "Web & Management System",
      banner: "assets/images/project-odis.svg",
      github: "https://github.com/keremkose61",
      tags: ["PHP", "MySQL", "JavaScript", "HTML5/CSS3", "Bootstrap"],
      desc_tr: "ODİS, ortaöğretim ve lise kurumlarındaki rehberlik ve idari birimlerin öğrenci disiplin süreçlerini dijitalleştirmek, adil ve şeffaf bir takip mekanizması oluşturmak amacıyla geliştirilmiş web tabanlı bir yönetim platformudur.",
      desc_en: "ODİS is a web-based educational management system engineered for high schools and guidance counseling departments to digitize student disciplinary records and establish transparent tracking.",
      features_tr: [
        "Öğrenci bazlı disiplin kaydı oluşturma, ceza ve uyarı puanı hesaplama modülü",
        "Rehberlik birimi görüşme notları ve veli iletişim geçmişi takibi",
        "İl / İlçe Milli Eğitim Müdürlüğü standartlarına uygun PDF / Excel resmi tutanak çıktısı",
        "Rol tabanlı yetkilendirme (Yönetici, Müdür Yardımcısı, Rehber Öğretmen, Nöbetçi Öğretmen)",
        "SQL Enjeksiyonu ve XSS saldırılarına karşı güvenli oturum ve veri sanitizasyonu"
      ],
      features_en: [
        "Student incident logging, dynamic disciplinary point calculation, and warning tiers",
        "Guidance counseling interview logs and historical parental communication notes",
        "Official PDF and Excel report generation conforming to institutional formats",
        "Granular Role-Based Access Control (RBAC) for administrators and faculty",
        "Hardened architecture protecting against SQL Injection and XSS vulnerabilities"
      ]
    },

    brainboost: {
      title: "BrainBoost — AI-Powered Learning Platform",
      title_en: "BrainBoost — AI-Powered Learning Platform",
      category: "AI & Educational Technology",
      banner: "assets/images/project-brainboost.svg",
      github: "https://github.com/keremkose61",
      tags: ["Python", "AI / LLM Integration", "REST API", "JavaScript", "Modern Web"],
      desc_tr: "BrainBoost, öğrencilerin öğrenme eğrilerini yapay zekâ ile modelleyerek eksik kaldıkları konuları tespit eden, aralıklı tekrar (spaced repetition) algoritmalarıyla bilgiyi uzun süreli hafızaya kazandıran yeni nesil bir öğrenme aracıdır.",
      desc_en: "BrainBoost is an AI-powered learning environment that models student cognitive curves to identify knowledge gaps and reinforce retention through intelligent spaced repetition algorithms.",
      features_tr: [
        "Ders notlarından ve PDF belgelerinden otomatik soru ve flaş kart (flashcard) üreten LLM hattı",
        "Kullanıcının cevap hızına ve doğruluk oranına göre dinamik zorluk ayarlayan adaptif test motoru",
        "Ebbinghaus Unutma Eğrisi temel alınarak tasarlanan kişiselleştirilmiş tekrar takvimi",
        "Konu bazlı başarı grafikleri ve kavramsal zayıflık analiz göstergeleri",
        "Mobil ve masaüstü tarayıcılarda kesintisiz çalışan duyarlı (responsive) modern web arayüzü"
      ],
      features_en: [
        "Automated question and flashcard generation pipeline leveraging LLM architectures",
        "Adaptive testing engine adjusting problem difficulty based on real-time response accuracy",
        "Personalized review calendar formulated on the Ebbinghaus Forgetting Curve",
        "Granular topic-level mastery analytics and conceptual gap heatmaps",
        "High-performance responsive web client running smoothly across devices"
      ]
    },

    ppl: {
      title: "PPL ANTREMAN — Android Fitness Application",
      title_en: "PPL WORKOUT — Android Fitness Application",
      category: "Native Android Application",
      banner: "assets/images/project-ppl.svg",
      github: "https://github.com/keremkose61",
      tags: ["Android SDK", "Kotlin", "Java", "Room Database", "Material 3"],
      desc_tr: "PPL ANTREMAN, kuvvet ve hipertrofi odaklı sporcular için Push-Pull-Legs (İtiş-Çekiş-Bacak) antrenman metodolojisini eksiksiz uygulayan, tamamen çevrimdışı çalışabilen yerel bir Android uygulamasıdır.",
      desc_en: "PPL WORKOUT is a native Android application built around the Push-Pull-Legs protocol for strength athletes, featuring complete offline capability, telemetry logging, and volume tracking.",
      features_tr: [
        "İtiş, Çekiş ve Bacak günlerine özel egzersiz grupları, set/tekrar ve ağırlık veri tabanı",
        "Room ORM ile cihazda güvenli, hızlı ve internet bağlantısı gerektirmeyen yerel veri saklama",
        "Brzycki formülü ile otomatik 1RM (Tek Tekrar Maksimumu) hesaplama ve tahmini ağırlık önerileri",
        "Haftalık toplam antrenman hacmini (Volume Load) gösteren interaktif grafikler",
        "Set aralarında titreşim ve sesle uyaran yerleşik dinlenme kronometresi"
      ],
      features_en: [
        "Pre-configured Push, Pull, and Legs workout templates with custom exercise addition",
        "Instant on-device storage utilizing Room ORM with zero latency and full offline privacy",
        "Real-time 1RM (One-Rep Max) estimator using the validated Brzycki formula",
        "Visual volume progression and historical hypertrophy load charts",
        "Integrated rest-timer with haptic vibration feedback for optimal pacing"
      ]
    },

    jarvis: {
      title: "JARVIS AI — Local Artificial Intelligence Assistant",
      title_en: "JARVIS AI — Local Artificial Intelligence Assistant",
      category: "Desktop AI & Automation",
      banner: "assets/images/project-jarvis.svg",
      github: "https://github.com/keremkose61",
      tags: ["Python", "Speech Recognition", "OS Automation", "NLP", "Threading"],
      desc_tr: "JARVIS AI, masaüstü bilgisayarlarda kullanıcının sesli ve metin tabanlı komutlarını yerel olarak analiz eden, işletim sistemi seviyesinde dosya, uygulama ve internet görevlerini yerine getiren akıllı bir masaüstü asistanıdır.",
      desc_en: "JARVIS AI is a Python-based desktop assistant that processes spoken and written commands, automating operating system tasks, file operations, and web routines with high efficiency.",
      features_tr: [
        "Mikrofon girdisini anlık olarak metne dönüştüren konuşma tanıma (Speech-to-Text) katmanı",
        "Uygulama başlatma, dosya arama, sistem kaynaklarını izleme ve ses kontrolü gibi yerel OS komutları",
        "Hava durumu, borsa ve genel bilgi sorgularını arka planda işleyen modüler API entegrasyonları",
        "Arka plan işlemlerini kullanıcı arayüzünü dondurmadan yürüten çok iş parçacıklı (multi-threading) yapı",
        "Veri gizliliğine saygılı, minimum harici bağımlılıkla çalışan yerel komut işleme çekirdeği"
      ],
      features_en: [
        "Real-time acoustic speech-to-text pipeline with high noise-tolerance calibration",
        "Direct OS automation: application launch, file search, audio adjustments, and hardware telemetry",
        "Modular background fetchers for live weather, market indices, and knowledge queries",
        "Multi-threaded concurrent task dispatching ensuring non-blocking execution",
        "Privacy-first architecture running local heuristics without unsolicited cloud tracking"
      ]
    },

    devflow: {
      title: "DevFlow IDE — Desktop Development Environment",
      title_en: "DevFlow IDE — Desktop Development Environment",
      category: "Desktop Software & Tooling",
      banner: "assets/images/project-devflow.svg",
      github: "https://github.com/keremkose61",
      tags: ["C++", "Python", "Qt Framework", "Code Parser", "Multi-threading"],
      desc_tr: "DevFlow IDE, ağır ve hantal geliştirme ortamlarına alternatif olarak tasarlanmış, düşük bellek tüketen, çoklu sekme ve sözdizimi renklendirme yeteneklerine sahip modüler bir masaüstü kod editörüdür.",
      desc_en: "DevFlow IDE is a lightweight, responsive desktop development environment engineered in C++ to provide a distraction-free coding experience with syntax highlighting and low memory overhead.",
      features_tr: [
        "C++ çekirdeği sayesinde milisaniyeler içinde açılan ve RAM'i yormayan yüksek performanslı mimari",
        "Python, C++, Java, JS ve HTML dilleri için özelleştirilmiş sözdizimi vurgulama (syntax highlighter)",
        "Çoklu sekme, satır numaralandırma, otomatik parantez kapama ve kod katlama özellikleri",
        "Editörün alt panelinde çalışan yerleşik komut satırı (terminal / CLI) entegrasyonu",
        "Karanlık / Neon tema desteği ile gözü yormayan modern kodlama deneyimi"
      ],
      features_en: [
        "Ultra-fast startup and minimal RAM consumption powered by a native C++ engine",
        "Custom lexical syntax highlighting for C++, Python, Java, JavaScript, and HTML",
        "Multi-tab document management, auto-indentation, and smart bracket pairing",
        "Embedded terminal dock allowing developers to compile and execute without switching windows",
        "High-contrast dark developer theme tailored for long coding sessions"
      ]
    },

    simulator: {
      title: "Computer Repair Simulator — 3D Simulation Game",
      title_en: "Computer Repair Simulator — 3D Simulation Game",
      category: "3D Game & Simulation",
      banner: "assets/images/project-simulator.svg",
      github: "https://github.com/keremkose61",
      tags: ["C++ / C#", "3D Graphics", "Physics Engine", "Hardware Logic"],
      desc_tr: "Computer Repair Simulator, oyuncuların gerçekçi fizik ve donanım kurallarıyla bilgisayar topladığı, arızalı bileşenleri tespit edip değiştirdiği ve termal simülasyonları deneyimlediği 3 boyutlu bir simülasyon oyunudur.",
      desc_en: "Computer Repair Simulator is a 3D simulation game where players assemble PC components, diagnose hardware failures, and experiment with thermodynamic cooling dynamics in real-time.",
      features_tr: [
        "Anakart, işlemci, RAM, ekran kartı ve güç kaynaklarının gerçekçi pin ve yuva montaj mekaniği",
        "Kısa devre, yetersiz termal macun veya aşırı ısınma durumlarında tetiklenen arıza simülasyonu",
        "Kullanıcının tornavida ve teşhis araçlarıyla bilgisayar kasasını 360 derece inceleyebildiği kamera kontrolü",
        "Bileşen uyumluluk kuralları (Soket tipleri, güç tüketimi (Watt) dengesi, PCI-e bant genişlikleri)",
        "Optimize edilmiş 3D render hattı ve dinamik ışıklandırma efektleri"
      ],
      features_en: [
        "Accurate component socketing logic for motherboards, CPUs, RAM modules, and GPUs",
        "Fault diagnostics simulation including thermal throttling, bad capacitors, and power faults",
        "Full 360-degree freeform inspection camera with interactive toolkit interactions",
        "Hardware compatibility validation engine (socket matching, wattage budgets, and PCIe lanes)",
        "Optimized 3D rendering pipeline delivering high framerates and clean lighting"
      ]
    },

    turkai: {
      title: "TÜRK AI — Android Voice Assistant",
      title_en: "TÜRK AI — Android Voice Assistant",
      category: "Android & Natural Language AI",
      banner: "assets/images/project-turkai.svg",
      github: "https://github.com/keremkose61",
      tags: ["Android", "Kotlin", "Voice Recognition Engine", "AI Services", "Material 3"],
      desc_tr: "TÜRK AI, Türkçe dil yapısının zengin morfolojik özelliklerini hesaba katarak eğitilmiş, Android cihazlarda kullanıcıların sesli komutlarla arama yapmasını, alarm kurmasını ve günlük işlerini yönetmesini sağlayan yerel mobil asistandır.",
      desc_en: "TÜRK AI is an Android voice assistant specifically tailored for Turkish natural language morphology, facilitating seamless voice-driven phone controls, inquiries, and productivity tasks.",
      features_tr: [
        "Türkçe konuşma kalıplarını ve eklerini yüksek doğrulukla çözümleyen doğal dil işleme (NLP) modeli",
        "Sesli komutla doğrudan telefon rehberini arama, SMS gönderme ve alarm kurma yeteneği",
        "Ekran kapalıyken veya arka planda çalışırken bile düşük pil tüketimiyle dinleme modu",
        "Material You tasarım diliyle uyumlu, konuşma dalgalarını görselleştiren modern arayüz",
        "İnternet bağlantısının zayıf olduğu anlarda dahi temel komutları yerine getiren yerel kural seti"
      ],
      features_en: [
        "Natural language processor tuned specifically for Turkish agglutinative morphology",
        "Direct Android intent triggers: calling contacts, composing messages, and setting timers",
        "Battery-efficient background wake listener with optimized thread sleeping",
        "Modern Material 3 interface featuring an animated audio waveform equalizer",
        "Offline fallback rule engine allowing critical phone actions without network access"
      ]
    }
  };

  /* ==========================================================================
     2. GLOBAL STATE & SELECTORS
     ========================================================================== */
  let currentLang = localStorage.getItem('portfolio_lang') || 'tr';

  const scrollProgressBar = document.getElementById('scrollProgressBar');
  const siteHeader = document.getElementById('siteHeader');
  const langSwitchBtn = document.getElementById('langSwitchBtn');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const dynamicRole = document.getElementById('dynamicRole');
  const cliInput = document.getElementById('cliInput');
  const cliOutput = document.getElementById('cliOutput');
  const terminalCopyBtn = document.getElementById('terminalCopyBtn');
  const terminalCodeText = document.getElementById('terminalCodeText');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const projectModal = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalContent = document.getElementById('modalContent');
  const contactForm = document.getElementById('contactForm');
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const toastContainer = document.getElementById('toastContainer');

  /* ==========================================================================
     3. I18N / TRANSLATION ENGINE
     ========================================================================== */
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);
    document.documentElement.setAttribute('lang', lang);

    // Update active state on header toggle button
    const trTag = langSwitchBtn.querySelector('.lang-tr');
    const enTag = langSwitchBtn.querySelector('.lang-en');
    if (lang === 'tr') {
      trTag.classList.add('active');
      enTag.classList.remove('active');
    } else {
      enTag.classList.add('active');
      trTag.classList.remove('active');
    }

    // Traverse all DOM elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const keyPath = el.getAttribute('data-i18n');
      const val = getNestedTranslation(translations[lang], keyPath);
      if (val !== undefined) {
        el.textContent = val;
      }
    });

    // Update form placeholders
    const nameInput = document.getElementById('formName');
    const emailInput = document.getElementById('formEmail');
    const subjectInput = document.getElementById('formSubject');
    const messageInput = document.getElementById('formMessage');

    if (lang === 'tr') {
      if (nameInput) nameInput.placeholder = "Örn: Ahmet Yılmaz";
      if (emailInput) emailInput.placeholder = "ornek@alanadi.com";
      if (subjectInput) subjectInput.placeholder = "Proje Teklifi / Tanışma";
      if (messageInput) messageInput.placeholder = "Mesajınızı buraya yazabilirsiniz...";
      if (cliInput) cliInput.placeholder = "komut yazın... (örn: help)";
    } else {
      if (nameInput) nameInput.placeholder = "e.g. John Doe";
      if (emailInput) emailInput.placeholder = "example@domain.com";
      if (subjectInput) subjectInput.placeholder = "Project Proposal / Collaboration";
      if (messageInput) messageInput.placeholder = "Type your message here...";
      if (cliInput) cliInput.placeholder = "type command... (e.g. help)";
    }

    // Update terminal CLI hint
    const hint = document.querySelector('.cli-hint');
    if (hint) {
      hint.textContent = lang === 'tr' 
        ? "Komutlar: 'help', 'skills', 'projects', 'github', 'clear'"
        : "Commands: 'help', 'skills', 'projects', 'github', 'clear'";
    }

    // Update page title
    document.title = lang === 'tr' 
      ? "Kerem Köse — Software Developer | Portfolio"
      : "Kerem Köse — Software Developer | Portfolio";
  }

  function getNestedTranslation(obj, path) {
    return path.split('.').reduce((prev, curr) => (prev ? prev[curr] : undefined), obj);
  }

  // Toggle Language Handler
  if (langSwitchBtn) {
    langSwitchBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'tr' ? 'en' : 'tr';
      applyLanguage(nextLang);
      showToast(nextLang === 'tr' ? "Dil Türkçe olarak ayarlandı." : "Language switched to English.");
    });
  }

  /* ==========================================================================
     4. READING PROGRESS BAR & HEADER SCROLL SPY
     ========================================================================== */
  function handleScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (scrollProgressBar) {
      scrollProgressBar.style.width = scrollPercent + '%';
    }

    // Sticky header shadow & compact mode
    if (siteHeader) {
      if (scrollTop > 50) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (scrollTop > 450) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.pointerEvents = 'auto';
      } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.pointerEvents = 'none';
      }
    }

    // Nav Link Active State (ScrollSpy)
    const sections = document.querySelectorAll('section[id]');
    let currentActiveId = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
        currentActiveId = section.getAttribute('id');
      }
    });

    const navLinks = document.querySelectorAll('.desktop-nav .nav-link, .mobile-nav-link');
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentActiveId) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  // Back to Top smooth scroll
  if (backToTopBtn) {
    backToTopBtn.style.opacity = '0';
    backToTopBtn.style.transition = 'opacity 0.3s ease, transform 0.2s ease, background 0.2s ease';
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ==========================================================================
     5. MOBILE DRAWER NAVIGATION
     ========================================================================== */
  function toggleMobileMenu() {
    const isOpen = hamburgerBtn.classList.toggle('active');
    hamburgerBtn.setAttribute('aria-expanded', isOpen);
    mobileMenu.classList.toggle('open', isOpen);
    mobileMenu.setAttribute('aria-hidden', !isOpen);
  }

  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', toggleMobileMenu);

    // Close menu when clicking navigation links
    const mobileLinks = mobileMenu.querySelectorAll('.mobile-nav-link, .btn');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (hamburgerBtn.classList.contains('active')) {
          toggleMobileMenu();
        }
      });
    });
  }

  /* ==========================================================================
     6. DYNAMIC ROLE ROTATION (TYPEWRITER)
     ========================================================================== */
  const roles = [
    "Android & Mobile Developer",
    "Systems & C++ Enthusiast",
    "Python & AI Implementer",
    "Clean Architecture Focused",
    "Continuous Learner"
  ];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeWriter() {
    if (!dynamicRole) return;
    const currentText = roles[roleIndex];

    if (isDeleting) {
      dynamicRole.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      dynamicRole.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 110;
    }

    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      typingSpeed = 1800; // Pause at full word
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400; // Pause before typing new word
    }

    setTimeout(typeWriter, typingSpeed);
  }

  /* ==========================================================================
     7. HERO TERMINAL & INTERACTIVE MINI CLI
     ========================================================================== */
  if (terminalCopyBtn && terminalCodeText) {
    terminalCopyBtn.addEventListener('click', () => {
      const code = terminalCodeText.innerText;
      navigator.clipboard.writeText(code).then(() => {
        showToast(currentLang === 'tr' ? "Profil kodu panoya kopyalandı!" : "Profile code copied to clipboard!");
      }).catch(() => {
        showToast("Kopyalama başarısız oldu.");
      });
    });
  }

  if (cliInput && cliOutput) {
    cliInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = cliInput.value.trim().toLowerCase();
        cliInput.value = '';
        handleCliCommand(cmd);
      }
    });
  }

  function handleCliCommand(cmd) {
    if (!cmd) return;
    let response = "";

    switch (cmd) {
      case 'help':
        response = currentLang === 'tr'
          ? "Kullanılabilir komutlar: help, skills, projects, github, contact, cv, clear, whoami"
          : "Available commands: help, skills, projects, github, contact, cv, clear, whoami";
        break;
      case 'whoami':
        response = "Kerem Köse — Software Developer (Android, C++, Python, PHP, JS)";
        break;
      case 'skills':
        response = "Kotlin, Java, Python, C++, JavaScript, PHP, MySQL, Git, Android Studio, Clean Code";
        break;
      case 'projects':
        response = "ODİS, BrainBoost, PPL ANTREMAN, JARVIS AI, DevFlow IDE, Computer Repair Simulator, TÜRK AI";
        break;
      case 'github':
        response = "https://github.com/keremkose61";
        window.open('https://github.com/keremkose61', '_blank');
        break;
      case 'contact':
        response = "Email: keremkose.dev@gmail.com | Location: Trabzon, Turkey";
        break;
      case 'cv':
        response = "Opening CV: assets/documents/cv.pdf";
        window.open('assets/documents/cv.pdf', '_blank');
        break;
      case 'clear':
        cliOutput.innerHTML = `<span class="cli-hint">${currentLang === 'tr' ? "Komutlar: 'help', 'skills', 'projects', 'github', 'clear'" : "Commands: 'help', 'skills', 'projects', 'github', 'clear'"}</span>`;
        return;
      default:
        response = currentLang === 'tr'
          ? `Bilinmeyen komut: '${cmd}'. Yardım için 'help' yazın.`
          : `Unknown command: '${cmd}'. Type 'help' for available commands.`;
    }

    cliOutput.innerHTML = `<div style="color: #35E69A;">$ ${escapeHtml(cmd)}</div><div style="color: #F5F7F6; margin-top: 3px;">${response}</div>`;
  }

  function escapeHtml(text) {
    const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
    return text.replace(/[&<>"']/g, m => map[m]);
  }

  /* ==========================================================================
     8. PROJECT FILTER SYSTEM
     ========================================================================== */
  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
          const category = card.getAttribute('data-category') || '';
          if (filter === 'all' || category.includes(filter)) {
            card.classList.remove('hidden');
            card.style.opacity = '0';
            card.style.transform = 'translateY(15px)';
            setTimeout(() => {
              card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 50);
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  }

  /* ==========================================================================
     9. PROJECT DETAILS MODAL
     ========================================================================== */
  function openProjectModal(projectId) {
    const data = projectDetails[projectId];
    if (!data) return;

    const isTr = currentLang === 'tr';
    const title = isTr ? data.title : data.title_en;
    const desc = isTr ? data.desc_tr : data.desc_en;
    const features = isTr ? data.features_tr : data.features_en;
    const featHeader = isTr ? "Öne Çıkan Özellikler & Fonksiyonlar" : "Key Highlights & Capabilities";
    const techHeader = isTr ? "Kullanılan Teknolojiler & Mimari" : "Technologies & Architecture";
    const btnGithub = isTr ? "GitHub Deposunu İncele" : "Explore on GitHub";
    const btnClose = isTr ? "Kapat" : "Close";

    let featuresHtml = features.map(f => `<li>${f}</li>`).join('');
    let tagsHtml = data.tags.map(t => `<span class="tech-tag">${t}</span>`).join('');

    modalContent.innerHTML = `
      <div class="modal-header-banner">
        <img src="${data.banner}" alt="${title}">
      </div>
      <div class="modal-top-meta">
        <span class="project-cat-pill">${data.category}</span>
      </div>
      <h3 class="modal-project-title" id="modalTitle">${title}</h3>
      <p class="modal-project-desc">${desc}</p>
      
      <h4 class="modal-section-title">${featHeader}</h4>
      <ul class="modal-feature-list">
        ${featuresHtml}
      </ul>

      <h4 class="modal-section-title">${techHeader}</h4>
      <div class="modal-tech-pills">
        ${tagsHtml}
      </div>

      <div class="modal-actions">
        <a href="${data.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
          </svg>
          <span>${btnGithub}</span>
        </a>
        <button class="btn btn-outline" id="modalDismissBtn">${btnClose}</button>
      </div>
    `;

    projectModal.classList.add('open');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Dismiss inside modal
    document.getElementById('modalDismissBtn').addEventListener('click', closeProjectModal);
  }

  function closeProjectModal() {
    projectModal.classList.remove('open');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Trigger modal open from buttons
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.open-modal-btn');
    if (btn) {
      const pid = btn.getAttribute('data-project');
      openProjectModal(pid);
    }
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeProjectModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal && projectModal.classList.contains('open')) {
      closeProjectModal();
    }
  });

  /* ==========================================================================
     10. CONTACT FORM VALIDATION & MAILTO TRIGGER
     ========================================================================== */
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('formName');
      const emailInput = document.getElementById('formEmail');
      const subjectInput = document.getElementById('formSubject');
      const messageInput = document.getElementById('formMessage');
      const submitBtn = document.getElementById('formSubmitBtn');

      let isValid = true;
      if (!nameInput.value.trim()) {
        setFieldError(nameInput, true);
        isValid = false;
      } else setFieldError(nameInput, false);

      const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        setFieldError(emailInput, true);
        isValid = false;
      } else setFieldError(emailInput, false);

      if (!subjectInput.value.trim()) {
        setFieldError(subjectInput, true);
        isValid = false;
      } else setFieldError(subjectInput, false);

      if (!messageInput.value.trim()) {
        setFieldError(messageInput, true);
        isValid = false;
      } else setFieldError(messageInput, false);

      if (!isValid) return;

      const originalButtonHtml = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.setAttribute('aria-busy', 'true');
      }

      const payload = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        _replyto: emailInput.value.trim(),
        _subject: `[Portfolio İletişim] ${subjectInput.value.trim()}`,
        subject: subjectInput.value.trim(),
        message: messageInput.value.trim(),
        _template: 'table'
      };

      try {
        const response = await fetch('https://formsubmit.co/ajax/keremkose.dev@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        const result = await response.json();
        if (!response.ok || result.success !== 'true' && result.success !== true) {
          throw new Error(result.message || 'Form submission failed');
        }

        showToast(currentLang === 'tr'
          ? 'Mesajın başarıyla gönderildi. Teşekkürler!'
          : 'Your message was sent successfully. Thank you!');
        contactForm.reset();
      } catch (error) {
        console.error('Contact form error:', error);
        showToast(currentLang === 'tr'
          ? 'Mesaj gönderilemedi. Lütfen e-posta bağlantısını kullanarak doğrudan yaz.'
          : 'Message could not be sent. Please use the email link to contact me directly.', 5000);
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.removeAttribute('aria-busy');
          submitBtn.innerHTML = originalButtonHtml;
        }
      }
    });
  }

  function setFieldError(inputEl, hasError) {
    const group = inputEl.closest('.form-group');
    if (group) {
      if (hasError) {
        group.classList.add('has-error');
      } else {
        group.classList.remove('has-error');
      }
    }
  }

  /* ==========================================================================
     11. 1-CLICK EMAIL CLIPBOARD COPY
     ========================================================================== */
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = document.getElementById('emailText').innerText.trim();
      navigator.clipboard.writeText(email).then(() => {
        const origText = copyEmailBtn.innerText;
        copyEmailBtn.innerText = currentLang === 'tr' ? "Kopyalandı!" : "Copied!";
        showToast(currentLang === 'tr' ? "E-posta adresi panoya kopyalandı!" : "Email copied to clipboard!");
        setTimeout(() => {
          copyEmailBtn.innerText = origText;
        }, 2000);
      }).catch(() => {
        showToast("Kopyalama başarısız oldu.");
      });
    });
  }

  /* ==========================================================================
     12. TOAST NOTIFICATION UTILITY
     ========================================================================== */
  function showToast(message, duration = 3000) {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span class="toast-dot"></span><span>${message}</span>`;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-fadeout');
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, duration);
  }

  /* ==========================================================================
     13. INTERSECTION OBSERVER SCROLL REVEAL (AOS EMULATOR)
     ========================================================================== */
  function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-aos]');

    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    });

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = el.getAttribute('data-aos-delay') || 0;
          setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, parseInt(delay, 10));
          obs.unobserve(el);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));
  }

  /* ==========================================================================
     14. INITIALIZATION
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLang);
    handleScroll();
    typeWriter();
    initScrollAnimations();
    console.log("Kerem Köse Portfolio initialized successfully.");
  });

})();
