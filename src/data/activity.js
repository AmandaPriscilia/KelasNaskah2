// src/lib/activity.js

// Fungsi helper untuk membuat slug
export const createSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

// Daftar Kegiatan Asli (menggunakan array 'images')
export const activitiesList = [
  {
    title: 'Festival Film Bulanan di Maluku',
    description: 'Acara pemutaran dan kompetisi film bulanan untuk memajukan sinema lokal di Maluku.',
    alt: 'Festival Film Bulanan Maluku',
    fullContent:
      'Festival ini diadakan setiap bulan untuk memberikan platform bagi pembuat film lokal Maluku. Tujuannya adalah mendorong kreativitas dan menumbuhkan ekosistem sinema di daerah tersebut, dengan fokus pada cerita-cerita yang autentik dari Timur Indonesia.', // Menggunakan array untuk mendukung multiple images
    images: [
      '/festival3.jpg', // Gambar utama/header
      '/festival1.jpg', // Contoh gambar galeri 1
      '/festival2.jpg',
      '/festival4.jpg',
      '/festival5.jpg',
      '/festival6.jpg',
      '/festival7.jpg',
    ],
  },
  {
    title: 'Workshop Film',
    description: 'Workshop intensif untuk aspek-aspek pembuatan film, termasuk penyutradaraan dan produksi.',
    alt: 'Workshop Film',
    fullContent: 'Workshop ini mencakup sesi praktis, membahas teknik sinematografi, editing, hingga manajemen produksi. Peserta akan dibimbing oleh praktisi industri yang berpengalaman.',
    images: [
      '/workshop1.jpg', // Gambar utama/header
      '/workshop2.jpg',
      '/workshop3.jpg',
      '/workshop4.jpg',
      '/workshop5.jpg',
      '/workshop6.jpg',
      '/workshop7.jpg',
    ],
  },
  {
    title: 'Kelas Naskah Goes to School',
    description: 'Program pengenalan penulisan naskah ke sekolah-sekolah menengah dan atas.',
    alt: 'Kelas Naskah Goes to School',
    fullContent: 'Kami mengunjungi sekolah-sekolah untuk memperkenalkan dasar-dasar penulisan naskah film dan video pendek. Tujuannya adalah menumbuhkan minat siswa dalam bercerita secara visual dan struktural.',
    images: [
      '/school1.jpg', // Gambar utama/header
      '/school2.jpg',
      '/school3.jpg',
      '/school4.jpg',
      '/school5.jpg',
      '/school6.jpg',
      '/school7.jpg',
    ],
  },
  {
    title: 'Goes to Campus',
    description: 'Sesi seminar dan diskusi di lingkungan kampus untuk mahasiswa berbagai jurusan.',
    alt: 'Goes to Campus',
    fullContent: 'Program ini berfokus pada diskusi mendalam tentang karir di industri kreatif dan penulisan naskah dalam konteks profesional. Sesi ini terbuka untuk semua jurusan, tidak hanya film dan seni.',
    images: [
      '/campus1.jpg', // Gambar utama/header
      '/campus2.jpg',
      '/campus3.jpg',
      '/campus4.jpg',
      '/campus1.jpg',
    ],
  },
  {
    title: 'Webinar & Kursus Online',
    description: 'Materi pembelajaran mandiri dan sesi daring (online) dengan pakar industri yang fleksibel.',
    alt: 'Webinar dan Kursus Online',
    fullContent: 'video rekaman sesi, dan webinar tentang topik penulisan naskah yang spesifik, memungkinkan belajar dari mana saja dan kapan saja.',
    images: ['/webkur1.png', '/webkur2.png', '/webkur3.png', '/webkur4.png', '/webkur5.png', '/webkur6.jpg', '/webkur7.jpg'],
  },
  {
    title: 'Program Volunteering',
    description: 'Kesempatan bagi relawan untuk berkontribusi dalam acara dan operasional Kelas Naskah.',
    alt: 'Program Volunteering',
    fullContent: 'Bergabung sebagai relawan untuk membantu penyelenggaraan event, promosi media sosial, dan kegiatan operasional lainnya. Ini adalah kesempatan emas untuk mendapatkan pengalaman langsung di balik layar.',
    images: ['/volunter1.png', '/volunter2.png', '/volunter3.png', '/volunter4.png', '/volunter5.png', '/volunter6.png', '/volunter7.png'],
  },
];

// Data dengan slug yang sudah terpasang
export const activitiesWithSlugs = activitiesList.map((activity) => ({
  ...activity,
  slug: createSlug(activity.title),
}));

// Fungsi untuk mengambil detail berdasarkan slug
export const getActivityBySlug = (slug) => {
  return activitiesWithSlugs.find((activity) => activity.slug === slug);
};
