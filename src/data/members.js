import { Linkedin } from 'lucide-react';

export const teamMembers = [
  {
    id: 'markus-matulessy',
    name: 'Markus Matulessy',
    title: 'Founder & President',
    category: 'Founder',
    image: '/1.png',
    bio: 'Sebagai pendiri dan Presiden Kelas Naskah, Markus Matulessy, alumni Fakultas Film dan Televisi Institut Kesenian Jakarta (2021), membawa visi untuk membangun industri film Indonesia melalui pendidikan skenario gratis. Ia percaya bahwa cerita kuat adalah fondasi perfilman dan berkomitmen memberikan akses belajar bagi generasi muda, terutama di Indonesia timur.',
    backgroundGradient: 'bg-gradient-to-br from-orange-500 to-orange-600',

    // ======================= DATA BARU UNTUK PROFIL =======================
    email: 'markus.matulessy@kelasnaskah.id',
    phone: '+6281234567890',
    linkedin: 'https://linkedin.com/in/markusmatulessy',
    instagram: 'https://instagram.com/markusmatulessy',
    twitter: 'https://twitter.com/markusmatulessy',
    location: 'Ambon, Maluku, Indonesia',
    cvLink: '#', // Ganti dengan link CV jika ada
    bannerImage: 'https://storage.googleapis.com/a1aa/image/1aa68c43-96af-42fb-e60e-5fc272f23817.jpg',

    responsibilities: ['Screenwriting', 'Storytelling', 'Mentoring', 'Film Production', 'Public Speaking'],

    experiences: [
      {
        title: 'Founder & President - Kelas Naskah',
        duration: 'March 2023 - Present',
        description: 'Memulai dan mengelola kursus skenario gratis yang bertujuan mengembangkan penulis skenario berbakat di Indonesia Timur melalui kursus, mentoring, seminar, dan kunjungan ke sekolah-sekolah.',
      },
      {
        title: 'Screenwriter Intern - Film Studio XYZ',
        duration: 'June 2021 - February 2023',
        description: 'Membantu penulisan skenario dan pengembangan cerita untuk beberapa proyek film pendek dan dokumenter, serta berkolaborasi dengan tim produksi.',
      },
    ],

    education: {
      institution: 'Institut Kesenian Jakarta',
      degree: 'Bachelor of Film and Television',
      duration: '2017 - 2021',
      description: 'Fokus pada penulisan skenario dan produksi film dengan berbagai proyek akademik dan praktikum.',
    },

    portfolio: [
      { title: 'Short Film: The Journey', description: 'Penulisan dan pengembangan skenario film pendek bertema perjalanan hidup.', image: 'https://storage.googleapis.com/a1aa/image/e62bf6be-e3f0-4a0f-e848-2ff02db4c8a0.jpg', link: '#' },
      { title: 'Documentary: Voices of Maluku', description: 'Kontribusi penulisan narasi dan riset untuk dokumenter budaya Maluku.', image: 'https://storage.googleapis.com/a1aa/image/3fbcbe1e-059a-4ce0-bfc6-ee9852efa05e.jpg', link: '#' },
      { title: 'Screenwriting Workshop 2023', description: 'Mengorganisir dan memimpin workshop menulis skenario untuk pemula.', image: 'https://storage.googleapis.com/a1aa/image/6a73c750-263c-4ca8-8620-baee78d9f6d5.jpg', link: '#' },
    ],
    // =======================================================================

    shapes: {
      shape1: { size: 'w-32 h-32', color: 'bg-emerald-400', position: 'top-4 right-4', opacity: 'opacity-80' },
      shape2: { size: 'w-24 h-24', color: 'bg-blue-900', position: 'bottom-8 left-8', opacity: 'opacity-60' },
    },
  },
  {
    id: 'maria-aviana',
    name: 'Maria Aviana',
    title: 'Secretary',
    category: 'Secretary',
    image: '/2.png',
    bio: 'Maria Aviana atau yang biasa disapa dengan Avi berasal dari daerah Flores, Nusa Tenggara Timur. Ia memiliki ketertarikan di bidang pendidikan, seni musik, adat & budaya, serta sejarah khususnya untuk di daerah Indonesia Timur. Ia berharap dapat ikut berkontribusi dalam mengembangkan wilayah Indonesia bagian Timur khususnya tanah kelahirannya yakni Nusa Tenggara Timur.',
    backgroundGradient: 'bg-gradient-to-br from-green-500 to-green-600',

    // ======================= DATA BARU UNTUK PROFIL =======================
    email: 'maria.aviana@kelasnaskah.id',
    phone: '+6287654321098',
    linkedin: '#', // Ganti dengan link Maria
    instagram: 'instagram.com/avianamarr',
    twitter: '#',
    location: 'Surakarta, Jawa Tengah, Indonesia',
    cvLink: '#',
    bannerImage: 'https://storage.googleapis.com/a1aa/image/1aa68c43-96af-42fb-e60e-5fc272f23817.jpg',

    responsibilities: ['Mengurus administrasi internal Kelas Naskah'],

    experiences: [
      { title: 'Secretary - Kelas Naskah', duration: 'April 2023 - Present', description: 'Bertanggung jawab atas seluruh kegiatan administrasi, penjadwalan, dan dokumentasi program organisasi.' },
      { title: 'Student Volunteer - UNS Events', duration: '2022 - 2023', description: 'Berpartisipasi aktif dalam kepanitiaan dan administrasi berbagai acara kemahasiswaan di Universitas Sebelas Maret.' },
    ],

    education: {
      institution: 'Universitas Sebelas Maret',
      degree: 'S1 Pendidikan Sejarah',
      duration: '2021 - Sekarang',
      description: 'Fokus pada komunikasi organisasi dan manajemen media.',
    },

    portfolio: [{ title: 'Event Report: Webinar 101', description: 'Penyusunan laporan dan dokumentasi Webinar Skenario Dasar.', image: '/placeholder-report.png', link: '#' }],
    // =======================================================================

    shapes: {
      shape1: { size: 'w-28 h-28', color: 'bg-teal-400', position: 'top-6 right-6', opacity: 'opacity-80' },
      shape2: { size: 'w-20 h-20', color: 'bg-blue-500', position: 'bottom-6 left-6', opacity: 'opacity-70' },
    },
  },
  {
    id: 'janita-magrib',
    name: 'Janita Magrib',
    title: 'Head of Event and Project',
    category: 'Event and Marketing',
    image: '/2.png',
    bio: 'Janita Magrib memimpin Divisi Event and Project dengan ketelitian dan kreativitas. Ia memastikan seminar, webinar, kursus, dan kunjungan sekolah Kelas Naskah berjalan lancar, memberikan dampak maksimal bagi peserta dan komunitas.',
    backgroundGradient: 'bg-gradient-to-br from-pink-500 to-pink-600',

    // ======================= DATA BARU UNTUK PROFIL =======================
    email: 'janita.magrib@kelasnaskah.id',
    phone: '+6281122334455',
    linkedin: '#', // Ganti dengan link Janita
    instagram: 'https://instagram.com/janitamagrib',
    twitter: '#',
    location: 'Makassar, Sulawesi Selatan, Indonesia',
    cvLink: '#',
    bannerImage: 'https://storage.googleapis.com/a1aa/image/1aa68c43-96af-42fb-e60e-5fc272f23817.jpg',

    responsibilities: ['Event Management', 'Project Planning', 'Volunteer Coordination', 'Post-Event Evaluation'],

    experiences: [
      { title: 'Head of Event and Project - Kelas Naskah', duration: 'April 2023 - Present', description: 'Merancang, mengorganisir, dan mengeksekusi semua event edukasi dan proyek komunitas Kelas Naskah.' },
      { title: 'Event Organizer - Creative Agency', duration: '2022 - 2023', description: 'Mengelola dan melaksanakan berbagai event komersial dan non-komersial.' },
    ],

    education: {
      institution: 'Universitas Hasanuddin',
      degree: 'S1 Manajemen',
      duration: '2020 - Sekarang',
      description: 'Fokus pada manajemen proyek dan kewirausahaan.',
    },

    portfolio: [{ title: 'School Visit Program 2024', description: 'Pengorganisasian program edukasi skenario di 5 sekolah berbeda di Indonesia Timur.', image: '/placeholder-event.png', link: '#' }],
    // =======================================================================

    shapes: {
      shape1: { size: 'w-32 h-32', color: 'bg-orange-400', position: 'top-4 left-4', opacity: 'opacity-80' },
      shape2: { size: 'w-24 h-24', color: 'bg-emerald-400', position: 'bottom-4 right-4', opacity: 'opacity-70' },
    },
  },
  {
    id: 'nur-ramadhani-abdillah',
    name: 'Nur Ramadhani Abdillah',
    title: 'Head of Communication and Content',
    category: 'Communication and Content',
    image: '/orang.png',
    bio: 'Nur Ramadhani Abdillah memimpin strategi komunikasi dan pengembangan konten Kelas Naskah. Dengan keahliannya, ia menciptakan konten informatif dan edukatif untuk berbagai platform, memperkuat engagement dengan komunitas dan publik.',
    backgroundGradient: 'bg-gradient-to-br from-slate-700 to-slate-800',

    // ======================= DATA BARU UNTUK PROFIL =======================
    email: 'nur.ramadhani@kelasnaskah.id',
    phone: '+6285566778899',
    linkedin: '#',
    instagram: 'https://instagram.com/nurramadhani_',
    twitter: '#',
    location: 'Jakarta, DKI Jakarta, Indonesia',
    cvLink: '#',
    bannerImage: 'https://storage.googleapis.com/a1aa/image/1aa68c43-96af-42fb-e60e-5fc272f23817.jpg',

    responsibilities: ['Content Strategy', 'Social Media Management', 'Public Relations', 'Copywriting'],

    experiences: [
      {
        title: 'Head of Communication & Content - Kelas Naskah',
        duration: 'Mei 2023 - Present',
        description: 'Memimpin tim dalam merancang dan memproduksi konten digital yang menarik dan edukatif untuk meningkatkan jangkauan Kelas Naskah.',
      },
      { title: 'Content Writer - Digital Media', duration: '2021 - 2023', description: 'Membuat artikel, script video, dan materi promosi untuk platform digital.' },
    ],

    education: {
      institution: 'Universitas Indonesia',
      degree: 'S1 Jurnalistik',
      duration: '2019 - 2023',
      description: 'Fokus pada penulisan berita, media digital, dan etika jurnalisme.',
    },

    portfolio: [{ title: 'Social Media Campaign: #MulaiNulis', description: 'Perancangan dan pelaksanaan kampanye media sosial untuk meningkatkan kesadaran menulis skenario.', image: '/placeholder-content.png', link: '#' }],
    // =======================================================================

    shapes: {
      shape1: { size: 'w-28 h-28', color: 'bg-teal-400', position: 'top-6 right-6', opacity: 'opacity-80' },
      shape2: { size: 'w-32 h-32', color: 'bg-blue-900', position: 'bottom-8 left-8', opacity: 'opacity-60' },
    },
  },
  {
    id: 'tri-novita-sari',
    name: 'Tri Novita Sari',
    title: 'Head of Graphic Design & Video Editor',
    category: 'Graphic Design & Web Design',
    image: '/orang.png',
    bio: 'Tri Novita Sari memimpin Divisi Graphic Design & Video Editor, menghadirkan visual menarik untuk Kelas Naskah. Dengan keahliannya, ia mendukung promosi dan pembelajaran melalui desain grafis dan editing video berkualitas.',
    backgroundGradient: 'bg-gradient-to-br from-teal-500 to-teal-600',

    // ======================= DATA BARU UNTUK PROFIL =======================
    email: 'tri.novita@kelasnaskah.id',
    phone: '+6289012345678',
    linkedin: '#',
    instagram: 'https://instagram.com/trinovita_',
    twitter: '#',
    location: 'Bandung, Jawa Barat, Indonesia',
    cvLink: '#',
    bannerImage: 'https://storage.googleapis.com/a1aa/image/1aa68c43-96af-42fb-e60e-5fc272f23817.jpg',

    responsibilities: ['Graphic Design', 'Video Editing', 'Visual Identity', 'Motion Graphics'],

    experiences: [
      { title: 'Head of Graphic Design & Video Editor - Kelas Naskah', duration: 'Mei 2023 - Present', description: 'Mengawasi produksi semua aset visual dan video, memastikan brand Kelas Naskah terlihat profesional dan menarik.' },
      { title: 'Freelance Designer', duration: '2022 - Present', description: 'Bekerja dengan berbagai klien untuk kebutuhan desain logo, materi promosi, dan editing video pendek.' },
    ],

    education: {
      institution: 'Institut Teknologi Bandung',
      degree: 'S1 Desain Komunikasi Visual',
      duration: '2019 - 2023',
      description: 'Fokus pada desain grafis, tipografi, dan media interaktif.',
    },

    portfolio: [{ title: 'Kelas Naskah Brand Guideline', description: 'Pengembangan panduan identitas visual dan aset merek Kelas Naskah.', image: '/placeholder-design.png', link: '#' }],
    // =======================================================================

    shapes: {
      shape1: { size: 'w-28 h-28', color: 'bg-yellow-400', position: 'top-4 left-4', opacity: 'opacity-80' },
      shape2: { size: 'w-24 h-24', color: 'bg-orange-500', position: 'bottom-6 right-6', opacity: 'opacity-70' },
    },
  },
  {
    id: 'abdul-wachid-rukua',
    name: 'Abdul Wachid Rukua',
    title: 'Head of Website Development',
    category: 'Website Development',
    image: '/8.png',
    bio: 'Abdul Wachid Rukua memimpin Divisi Website Development, memastikan platform digital Kelas Naskah selalu up-to-date dan mudah diakses. Ia mengintegrasikan teknologi untuk mendukung misi pendidikan skenario organisasi.',
    backgroundGradient: 'bg-gradient-to-br from-purple-600 to-purple-700',

    // ======================= DATA BARU UNTUK PROFIL =======================
    email: 'abdul.wachid@kelasnaskah.id',
    phone: '+6281211223344',
    linkedin: 'https://linkedin.com/in/abdulwachidrukua',
    instagram: '#',
    twitter: '#',
    location: 'Malang, Jawa Timur, Indonesia',
    cvLink: '#',
    bannerImage: 'https://storage.googleapis.com/a1aa/image/1aa68c43-96af-42fb-e60e-5fc272f23817.jpg',

    responsibilities: ['Full-Stack Development', 'Website Maintenance', 'System Optimization', 'Digital Documentation'],

    experiences: [
      { title: 'Head of Website Development - Kelas Naskah', duration: 'Juni 2023 - Present', description: 'Merancang, membangun, dan memelihara situs resmi Kelas Naskah menggunakan Next.js dan Tailwind CSS.' },
      { title: 'Junior Web Developer - Tech Startup', duration: '2022 - 2023', description: 'Mengembangkan fitur backend dan mengintegrasikan API untuk aplikasi web.' },
    ],

    education: {
      institution: 'Universitas Brawijaya',
      degree: 'S1 Teknik Informatika',
      duration: '2020 - Sekarang',
      description: 'Fokus pada pengembangan perangkat lunak dan arsitektur sistem informasi.',
    },

    portfolio: [{ title: 'Kelas Naskah Official Website', description: 'Pengembangan front-end dan back-end situs utama organisasi.', image: '/placeholder-web.png', link: '#' }],
    // =======================================================================

    shapes: {
      shape1: { size: 'w-40 h-32', color: 'bg-emerald-400', position: 'top-8 right-8', opacity: 'opacity-20' },
      shape2: { size: 'w-24 h-24', color: 'bg-blue-900', position: 'bottom-4 left-4', opacity: 'opacity-80' },
    },
  },
  {
    id: 'amanda-priscilia',
    name: 'Amanda Priscilia',
    title: 'Member of Website Development',
    category: 'Website Development',
    image: '/10.png',
    bio: 'Amanda Priscilia adalah bagian dari tim Website Development, berfokus pada pengembangan antarmuka pengguna yang intuitif dan responsif untuk platform digital Kelas Naskah.',
    backgroundGradient: 'bg-gradient-to-br from-purple-600 to-purple-700',

    // ======================= DATA BARU UNTUK PROFIL =======================
    email: 'priscilialeza@gmail.com',
    phone: '085656895059',
    linkedin: 'https://www.linkedin.com/in/priscilialz0333/',
    instagram: '#',
    twitter: '#',
    location: 'Yogyakarta, DI Yogyakarta, Indonesia',
    cvLink: '#',
    bannerImage: 'https://storage.googleapis.com/a1aa/image/1aa68c43-96af-42fb-e60e-5fc272f23817.jpg',

    responsibilities: ['Develop  Website Kelas Naskah', 'UI/UX Implementation', 'Fullstack Development'],

    experiences: [
      { title: 'Member of Website Development - Kelas Naskah', duration: 'Juni 2025 - Present', description: 'Fokus utama pada pengembangan fitur sisi klien, memastikan tampilan dan fungsi situs berjalan lancar di berbagai perangkat.' },
    ],

    education: {
      institution: 'Universitas Mercu Buana Yogyakarta',
      degree: 'S1 Informatika',
      duration: '2022 - Sekarang',
      description: 'Mendalami Machine Learning, algoritma, dan rekayasa perangkat lunak untuk mengembangkan solusi berbasis kecerdasan buatan.',
    },

    portfolio: [{ title: 'Website Portfolio', description: 'Project Fullstack Development dan Soft skill lainnya', image: '/port-mnd.jpg', link: 'https://amandapriscilia.github.io/AmandaPort/' }],
    // =======================================================================

    shapes: {
      shape1: { size: 'w-40 h-32', color: 'bg-emerald-400', position: 'top-8 right-8', opacity: 'opacity-20' },
      shape2: { size: 'w-24 h-24', color: 'bg-blue-900', position: 'bottom-4 left-4', opacity: 'opacity-80' },
    },
  },
  {
    id: 'muhammad-muqtada',
    name: 'Muhammad Muqtada Alhaddad',
    title: 'Member of Website Development',
    category: 'Website Development',
    image: '/adda.jpg',
    bio: 'Pelajar dari Pontianak yang suka belajar untuk membangun bangsa. Sebagai anggota tim Web Development, ia bersemangat dalam berkontribusi pada solusi teknologi yang mendukung misi edukasi Kelas Naskah.',
    backgroundGradient: 'bg-gradient-to-br from-purple-600 to-purple-700',

    // ======================= DATA BARU UNTUK PROFIL =======================
    email: 'muhammad.muqtada@kelasnaskah.id',
    phone: '+6289988776655',
    linkedin: 'https://www.linkedin.com/in/muhammad-muqtada-alhaddad-b02b44195?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    instagram: '#',
    twitter: '#',
    location: 'Pontianak, Kalimantan Barat, Indonesia',
    cvLink: '#',
    bannerImage: 'https://storage.googleapis.com/a1aa/image/1aa68c43-96af-42fb-e60e-5fc272f23817.jpg',

    responsibilities: ['Mengelola situs resmi kelas naskah', 'Mempermudah jobdesk member kelasnaskah'],

    //experiences: [{ title: 'Member of Website Development - Kelas Naskah', duration: 'Juni 2023 - Present', description: 'Memberikan dukungan teknis dan mengintegrasikan fungsionalitas backend untuk fitur-fitur website.' }],

    /* education: {
      institution: 'Sarjana (Tingkat Studi)',
      degree: 'Informatika',
      duration: '2022 - Sekarang',
      description: 'Memiliki fokus pada pengembangan aplikasi dan sistem informasi.',
    },*/

    portfolio: [{ title: 'Web Portfolio', description: 'Portofolio pribadi yang menampilkan proyek-proyek pengembangan web.', image: '/placeholder-ada.png', link: 'https://adakhaddad.vercel.app' }],
    // =======================================================================

    shapes: {
      shape1: { size: 'w-40 h-32', color: 'bg-emerald-400', position: 'top-8 right-8', opacity: 'opacity-20' },
      shape2: { size: 'w-24 h-24', color: 'bg-blue-900', position: 'bottom-4 left-4', opacity: 'opacity-80' },
    },
  },
];
