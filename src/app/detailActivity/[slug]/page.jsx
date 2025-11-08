import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';

// IMPOR KOMPONEN KLIEN BARU UNTUK GALERI
import ImageGallery from '@/components/ui/ImageGallery';

import { getActivityBySlug, activitiesList } from '@/data/activity';
export async function generateStaticParams() {
  return activitiesList.map((activity) => ({
    slug: activity.slug || activity.title, 
  }));
}

// Halaman Detail Kegiatan (SEKARANG SERVER COMPONENT)
export default function DetailActivity({ params }) {
  const { slug } = params;

  // Ambil data kegiatan berdasarkan slug
  const activity = getActivityBySlug(slug);

  // Jika tidak ditemukan, tampilkan halaman 404
  if (!activity) {
    return notFound();
  }

  // HAPUSKAN SEMUA STATE MODAL (useState, openModal, closeModal)

  // Gambar utama dan galeri
  const mainImage = activity.images[0];
  const galleryImages = activity.images.slice(1);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-end pb-16">
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        <Image src={mainImage} alt={activity.title} fill className="object-cover" priority />

        <div className="container mx-auto px-4 relative z-20 text-white">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">{activity.title}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-4">{activity.description}</p>
          <div className="mt-6">
            <Link href="/activity" passHref>
              <Button variant="secondary" className="px-6 py-3 text-lg">
                ← Kembali ke Semua Kegiatan
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Galeri Foto */}
          {galleryImages.length > 0 && (
            <div className="mb-12">
              <h3 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">Galeri Foto</h3>

              {/* PANGGIL KOMPONEN KLIEN (ImageGallery) DI SINI */}
              <ImageGallery images={galleryImages} activityTitle={activity.title} />

              {/* KODE LAMA ANDA SEBELUMNYA TELAH DIPINDAHKAN KE ImageGallery.jsx */}
            </div>
          )}

          <h2 className="text-3xl font-bold mb-6 text-orange-600">Detail Program</h2>
          <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap">{activity.fullContent}</p>

          <div className="mt-12 text-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-full shadow-lg">Bergabung Sekarang!</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Kelas Naskah. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
