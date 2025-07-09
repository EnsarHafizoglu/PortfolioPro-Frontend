import sertifika1 from '../assets/Certificates/sertifika1.jpg'
import sertifika4 from '../assets/Certificates/sertifika4.png'
import sertifika5 from '../assets/Certificates/sertifika5.png'
import sertifika2 from '../assets/Certificates/sertifika2.jpg'
import sertifika3 from '../assets/Certificates/sertifika3.jpg'
import sertifika6 from '../assets/Certificates/sertifika6.jpg'
import sertifika7 from '../assets/Certificates/sertifika7.jpg'
import sertifika8 from '../assets/Certificates/sertifika8.jpg'
import sertifika9 from '../assets/Certificates/sertifika9.jpg'
import sertifika10 from '../assets/Certificates/sertifika10.jpg'
import sertifika11 from '../assets/Certificates/sertifika11.jpg'
import sertifika12 from '../assets/Certificates/sertifika12.jpg'


const certificatesData = [
    {
        "id": 2,
        "image": sertifika1,
        "title": "Code The Future Katılım Sertifikası",
        "organization": "BadiWorks & Öğrenci Kariyeri",
        "date": "2024",
        "description": "Teknoloji sektöründeki uzman kişiler ile öğrencileri buluşturan Code The Future zirvesine katılım sağladım.",
        "gains": ["Teknoloji Sektörü", "Networking", "Kariyer Gelişimi", "Yenilikçi Çözümler"]
      },
      
      {
        "id": 3,
        "image": sertifika2,
        "title": "Git ve GitHub Katılım Sertifikası",
        "organization": "BTK Akademi",
        "date": "16 Mart 2024",
        "description": "BTK Akademi tarafından düzenlenen 'Versiyon Kontrolleri: Git ve GitHub' çevrim içi eğitimini tamamladım.",
        "gains": ["Git", "GitHub", "Versiyon Kontrolü", "Repo Yönetimi"]
      },
      {
        "id": 4,
        "image": sertifika3,
        "title": "Komple Uygulamalı Web Geliştirme Eğitimi | .NET",
        "organization": "Udemy",
        "date": "05 Mart 2025",
        "description": "Bu 120+ saatlik kapsamlı eğitimde, modern web geliştirme süreçleri üzerine detaylı bilgi edindim. Backend ve frontend teknolojilerini entegre ederek, ölçeklenebilir ve dinamik web uygulamaları geliştirme konusunda pratik yaptım. ASP.NET Core, MVC, RESTful API'ler, Entity Framework, SQL Server, Authentication & Authorization gibi kritik konuların yanı sıra, proje bazlı uygulamalar ile gerçek dünya senaryolarını deneyimledim.",
        "gains": [
          ".NET Core",
          "ASP.NET MVC",
          "RESTful API",
          "Entity Framework",
          "SQL Server",
          "Kimlik Doğrulama ve Yetkilendirme",
          "Frontend Entegrasyonu",
          "Proje Bazlı Web Geliştirme"
        ]
      },
      {
        "id": 5,
        "image": sertifika4,
        "title": "Bilgi Teknolojileri Oryantasyon Programı - Yazılımcı",
        "organization": "Kuveyt Türk Akademi",
        "date": "2024",
        "description": "Kuveyt Türk Akademi tarafından düzenlenen Bilgi Teknolojileri Oryantasyon Programı'na katılarak, kurumsal yazılım geliştirme süreçleri, teknoloji ekosistemi ve iş akışları hakkında bilgi edindim.",
        "gains": [
          "Kurumsal Yazılım Geliştirme",
          "Teknoloji Ekosistemi",
          "İş Akış Yönetimi",
          "BT Süreçleri ve Uygulamaları"
        ]
      },

      {
        "id": 6,
        "image": sertifika5,
        "title": "Bilgi Teknolojileri Oryantasyon Programı - Genel",
        "organization": "Kuveyt Türk Akademi",
        "date": "2024",
        "description": "Kuveyt Türk Akademi tarafından düzenlenen Bilgi Teknolojileri Oryantasyon Programı'na katılarak, bankacılık teknolojileri, kurumsal BT süreçleri ve iş akışları hakkında temel bilgiler edindim.",
        "gains": [
          "Bankacılık Teknolojileri",
          "Kurumsal BT Süreçleri",
          "İş Akış Yönetimi",
          "Dijital Eğitim ve Gelişim"
        ]
      },

      {
        "id": 7,
        "image": sertifika6,
        "title": "SQL Kursu: Sıfırdan Sektörün Yükseklerine",
        "organization": "Udemy",
        "date": "06 Mayıs 2024",
        "description": "SQL veritabanı yönetimi ve sorgulama konularında temel ve ileri seviye bilgiler içeren bu eğitimde, veri analizi, ilişkisel veritabanı yapıları ve SQL sorguları hakkında pratik beceriler kazandım.",
        "gains": [
          "SQL",
          "Veri Analizi",
          "İlişkisel Veritabanı Yönetimi",
          "Gelişmiş SQL Sorgulamaları",
          "Veri Manipülasyonu"
        ]
      },

      {
        "id": 8,
        "image": sertifika7,
        "title": "İş Kulübü Katılım Belgesi",
        "organization": "Türkiye İş Kurumu (İŞKUR)",
        "date": "27-28 Kasım 2024",
        "description": "İŞKUR İş Kulübü tarafından düzenlenen eğitim programına katılarak iş arama süreçleri, kariyer planlama, mülakat teknikleri ve iş dünyasında başarılı olma konularında bilgi edindim.",
        "gains": [
          "Kariyer Planlama",
          "İş Arama Teknikleri",
          "Mülakat Stratejileri",
          "Profesyonel Gelişim"
        ]
      },

      
  {
    "id": 9,
    "image": sertifika8,
    "title": "(42 Saat) Sıfırdan Komple Java Geliştirici Kursu",
    "organization": "Udemy",
    "date": "23 Aralık 2024",
    "description": "Java programlama dilini sıfırdan ileri seviyeye kadar öğrenerek yazılım geliştirme, nesne yönelimli programlama ve uygulama geliştirme konularında bilgi sahibi oldum.",
    "gains": [
      "Java Temelleri",
      "Nesne Yönelimli Programlama (OOP)",
      "Uygulama Geliştirme",
      "Programlama Pratikleri"
    ]
  },
  {
    "id": 10,
    "image": sertifika9,
    "title": "C# Programlama Dili: Her Seviyeye Hitap Eden Eğitim Seti",
    "organization": "Udemy",
    "date": "15 Şubat 2024",
    "description": "C# programlama diline girişten ileri düzeye kadar detaylı bilgiler edindim. Konsol ve Windows uygulamaları geliştirme konularında pratikler yaptım.",
    "gains": [
      "C# Temelleri",
      "Nesne Tabanlı Programlama",
      "Uygulama Geliştirme",
      "Veritabanı Bağlantıları"
    ]
  },
  {
    "id": 11,
    "image": sertifika10,
    "title": "Cursor ile .NET'te Kurumsal Proje Geliştirme Uygulaması",
    "organization": "Udemy",
    "date": "7 Ocak 2025",
    "description": ".NET mimarisi kullanarak kurumsal düzeyde proje geliştirme süreçlerine dair bilgi ve deneyim kazandım.",
    "gains": [
      ".NET Mimarisi",
      "Katmanlı Mimari",
      "Kurumsal Uygulama Geliştirme",
      "Proje Yönetimi"
    ]
  },
  {
    "id": 12,
    "image": sertifika11,
    "title": "(25+ Saat) C | Sıfırdan İleri Seviyeye Uygulamalı Programlama",
    "organization": "Udemy",
    "date": "17 Aralık 2023",
    "description": "C programlama dili ile algoritma geliştirme, bellek yönetimi ve uygulamalı projeler yaparak temel ve ileri seviye bilgileri edindim.",
    "gains": [
      "C Programlama Temelleri",
      "Bellek Yönetimi",
      "Algoritma Geliştirme",
      "Uygulamalı Projeler"
    ]
  },
  {
    "id": 13,
    "image": sertifika12,
    "title": "Design Patterns",
    "organization": "Udemy",
    "date": "29 Mayıs 2024",
    "description": "Yazılım geliştirme sürecinde tekrar eden problemleri çözmek için kullanılan tasarım desenlerini öğrendim ve uygulama pratiği kazandım.",
    "gains": [
      "Yapısal, Davranışsal ve Yaratımsal Desenler",
      "Kod Kalitesini Artırma",
      "Sürdürülebilir Yazılım Geliştirme",
      "Tasarım İlkeleri"
    ]
  }



      
      
      
      
  ];
  
  export default certificatesData;
  