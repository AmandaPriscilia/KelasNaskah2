// src/app/activity/page.jsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import { activitiesWithSlugs } from '@/data/activity'; // ✅ pastikan path benar

export default function Activity() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <Image src="/scripts.png" alt="Pelatihan menulis naskah Kelas Naskah" fill className="object-cover" priority />
        <div className="relative z-20 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Activities</h1>
          <p className="text-xl max-w-2xl mx-auto">Temukan berbagai program kami yang dirancang untuk meningkatkan keterampilan dan potensi kreatif penulisan naskah Anda.</p>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Kegiatan Kami</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {activitiesWithSlugs.map((activity, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="h-48 relative mb-6 rounded-lg overflow-hidden">
                    <Image src={activity.images[0]} alt={activity.alt} fill loading="lazy" className="object-cover group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{activity.title}</h3>
                  <p className="text-gray-600 mb-4 h-12 overflow-hidden">{activity.description}</p>
                  <Link href={`/detailActivity/${activity.slug}`} passHref>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">Lihat Detail Kegiatan</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Acara Mendatang</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="bg-orange-500 text-white p-4 rounded-lg text-center min-w-[100px]">
                    <div className="text-2xl font-bold">15</div>
                    <div className="text-sm">MAR</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Basic Scriptwriting Workshop</h3>
                    <p className="text-gray-600 mb-2">Learn the fundamentals of scriptwriting in this intensive workshop.</p>
                    <div className="text-sm text-gray-500">📍 Ambon, Maluku</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="bg-orange-500 text-white p-4 rounded-lg text-center min-w-[100px]">
                    <div className="text-2xl font-bold">22</div>
                    <div className="text-sm">MAR</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Advanced Story Structure</h3>
                    <p className="text-gray-600 mb-2">Deep dive into advanced storytelling techniques and structure.</p>
                    <div className="text-sm text-gray-500">📍 Ambon, Maluku</div>
                  </div>
                </div>
              </CardContent>
            </Card>
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
