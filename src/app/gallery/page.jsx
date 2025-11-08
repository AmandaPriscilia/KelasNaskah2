// activity/galery/page.jsx
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
// 1. Impor data aktivitas yang sudah memiliki slug
import { activitiesWithSlugs } from '@/data/activity';

// Fungsi helper untuk mendapatkan semua gambar dari semua aktivitas
const getAllGalleryImages = () => {
  const images = [];
  activitiesWithSlugs.forEach((activity) => {
    // Ambil gambar utama/header (index 0) dan gambar galeri lainnya
    const activityImages = activity.images.map((imageSrc) => ({
      src: imageSrc,
      alt: activity.alt, // Menggunakan alt text utama aktivitas
      title: activity.title, // Judul aktivitas untuk hover
      slug: activity.slug, // Slug untuk tautan
    }));
    images.push(...activityImages);
  });
  return images;
};

// Panggil fungsi helper
const galleryImages = getAllGalleryImages();

export default function Gallery() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <Image src="/dokumentasi.png" alt="Gallery of our activities" fill className="object-cover" priority />
        <div className="relative z-20 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl">Capturing moments of creativity and learning</p>
        </div>
      </section>

      {/* Gallery Grid DYNAMIC */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* 2. Map melalui semua gambar yang sudah dikumpulkan.
            Menggunakan 'i' untuk key karena src bisa saja duplikat (misalnya: campus1.jpg)
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, i) => (
              <Link key={i} href={`/detailActivity/${image.slug}`}>
                <div className="relative group overflow-hidden rounded-lg cursor-pointer">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400} // Tetapkan lebar
                    height={300} // Tetapkan tinggi
                    className="w-full h-[300px] object-cover transition-transform group-hover:scale-110"
                  />
                  {/* Overlay untuk hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <p className="text-white text-lg font-semibold text-center px-4">{image.title}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#18191c] text-white pt-10 pb-6 px-6 sm:px-12 md:px-20">
        <p className="text-center text-gray-400 text-xs font-normal">&copy; {new Date().getFullYear()} Kelas Naskah. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
