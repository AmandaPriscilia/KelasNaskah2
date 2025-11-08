'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Menu, X, UserPlus, ArrowRight, BookOpen } from 'lucide-react'; // ArrowRight sudah ada

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const rotatingWordsRef = useRef(null);

  useEffect(() => {
    const words = ['Creative', 'Intuitive', 'Productive'];
    const container = rotatingWordsRef.current;
    if (!container) {
      console.error("rotatingWordsRef.current is null. The span element might not be rendered or the ref isn't attached correctly.");
      return;
    }

    let currentIndex = 0;
    let currentText = '';
    let isDeleting = false;
    let typingSpeed = 120;
    let pauseTime = 2000;

    let timeoutId;

    const type = () => {
      if (!rotatingWordsRef.current) return;

      const fullText = words[currentIndex];

      if (!isDeleting) {
        // Mengetik
        currentText = fullText.substring(0, currentText.length + 1);
        rotatingWordsRef.current.textContent = currentText;
        if (currentText === fullText) {
          isDeleting = true;
          timeoutId = setTimeout(type, pauseTime);
          return;
        }
      } else {
        // Menghapus
        currentText = fullText.substring(0, currentText.length - 1);
        rotatingWordsRef.current.textContent = currentText;
        if (currentText === '') {
          isDeleting = false;
          currentIndex = (currentIndex + 1) % words.length;
          typingSpeed = 120;
        }
      }

      timeoutId = setTimeout(type, isDeleting ? 60 : typingSpeed);
    };

    type();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  // Fungsi untuk menutup menu mobile
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#121314] text-white text-xs font-semibold px-4 sm:px-6 py-2 flex justify-between items-center">
        <div className="text-sm font-semibold tracking-widest select-none header-logo"> KELASNASKAH</div>
        <div className="text-xs sm:text-sm select-none">Ambon, Maluku, Indonesia</div>
      </div>

      {/* Main Navbar - White Background */}
      <nav className="bg-white border-b border-gray-200 px-4 sm:px-6 py-1 sm:py-4 relative z-50">
        {' '}
        {/* Tambah z-50 agar navbar di atas overlay */}
        <div className="container mx-auto flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <Button variant="ghost" size="icon" aria-label="Toggle menu" className="sm:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2F5E35]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? ( // Mengganti ikon menjadi 'X' saat menu terbuka
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>

          {/* Desktop Navigation Links */}
          <ul id="menu" className="hidden sm:flex space-x-6 text-xs sm:text-sm font-normal text-black flex-wrap">
            <li>
              <Link href="/" className="hover:underline hover:text-[#2F5E35] transition-colors block py-1 sm:py-2">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline hover:text-[#2F5E35] transition-colors block py-1 sm:py-2">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/partnerships" className="hover:underline hover:text-[#2F5E35] transition-colors block py-1 sm:py-2">
                Partnerships
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:underline hover:text-[#2F5E35] transition-colors block py-1 sm:py-2">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/activity" className="hover:underline hover:text-[#2F5E35] transition-colors block py-1 sm:py-2">
                Activity
              </Link>
            </li>
          </ul>

          <div className="flex items-center space-x-4">
            {/* START: Button Join Now MODIFIKASI HOVER */}
            <Button className="bg-[#2F5E35] text-white font-semibold text-xs sm:text-sm px-4 sm:px-6 py-1 sm:py-2 rounded-sm hover:bg-white hover:text-[#2F5E35] hover:ring-2 hover:ring-[#2F5E35] transition-all shadow-md whitespace-nowrap flex items-center justify-center space-x-2">
              <UserPlus className="h-4 w-4 mr-2" />
              <span>Join now</span>
            </Button>
            {/* END: Button Join Now MODIFIKASI HOVER */}
          </div>
        </div>
        {/* Mobile Menu Overlay - Ditampilkan saat menu terbuka */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
            onClick={closeMobileMenu} // Menutup menu saat mengklik overlay
          ></div>
        )}
        {/* Mobile Navigation Links - Menggunakan fixed position dan slide-in/out */}
        <ul id="mobile-menu" className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg p-4 sm:hidden transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          {/* Tombol tutup menu di dalam menu mobile itu sendiri */}
          <li className="mb-4 text-right">
            <Button variant="ghost" size="icon" aria-label="Close menu" className="text-gray-700" onClick={closeMobileMenu}>
              <X className="h-5 w-5" />
            </Button>
          </li>
          <li>
            <Link className="block px-2 py-2 hover:bg-gray-100 rounded transition-colors" href="/" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link
              className="block px-2 py-2 hover:bg-gray-100 rounded transition-colors"
              href="/about"
              onClick={closeMobileMenu} // Tutup menu saat link diklik
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="block px-2 py-2 hover:bg-gray-100 rounded transition-colors"
              href="/partnerships"
              onClick={closeMobileMenu} // Tutup menu saat link diklik
            >
              Partnerships
            </Link>
          </li>
          <li>
            <Link className="block px-2 py-2 hover:bg-gray-100 rounded transition-colors" href="/gallery" onClick={closeMobileMenu}>
              Gallery
            </Link>
          </li>
          <li>
            <Link className="block px-2 py-2 hover:bg-gray-100 rounded transition-colors" href="/activity" onClick={closeMobileMenu}>
              Activity
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-[28rem] sm:h-[40rem]">
        <Image alt="Person holding paper with text 'THE CLIMB' on it, pen in hand, sitting at a desk with glasses, crumpled paper, and a laptop" src="/hero-bg.png" fill className="object-cover" priority />
        <div className="image-overlay"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6" style={{ top: '50%', transform: 'translateY(-50%)' }}>
          <h1 className="text-white font-serif font-bold text-2xl sm:text-4xl md:text-5xl max-w-4xl leading-tight drop-shadow-lg">Welcome To Kelas Naskah</h1>
          <p className="text-white text-lg sm:text-xl md:text-2xl mt-4 font-semibold relative flex justify-center items-center space-x-2">
            <span>Be</span>

            <span ref={rotatingWordsRef} className="rotating-words-container relative inline-block h-6 sm:h-7 md:h-8 font-semibold text-yellow-400"></span>
          </p>
          <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-center">
            <Button className="bg-gradient-to-b from-yellow-400 to-orange-600 text-white text-xs sm:text-sm font-semibold px-6 py-2 sm:px-8 sm:py-3 rounded-xl shadow-lg hover:brightness-110 hover:scale-105 transition-all">Read More</Button>
            <Button variant="outline" className="bg-white text-[#D35400] text-xs sm:text-sm font-semibold px-6 py-2 sm:px-8 sm:py-3 rounded-xl shadow-lg hover:bg-gray-100 hover:scale-105 transition-all">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Kelas Naskah Pictures Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-12">
          <div className="order-1 md:order-2 flex flex-col justify-center w-full md:w-1/3">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-serif mb-4 sm:mb-6">Kelas Naskah Pictures</h1>

            {/* START MODIFIKASI: Mengganti span panah menjadi Link ke Galeri */}
            <Link
              href="/gallery" // TARGET LINK KE HALAMAN GALERI
              className="flex items-center mb-4 sm:mb-6 justify-start md:justify-start group w-max cursor-pointer"
              aria-label="Lihat Galeri Kelas Naskah"
            >
              <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8 text-black transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#2F5E35]" />
              <span className="ml-2 text-sm sm:text-base font-semibold text-gray-700 group-hover:text-[#2F5E35] transition-colors"></span>
            </Link>
            {/* END MODIFIKASI */}

            <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-gray-500 text-xs sm:text-sm md:text-base text-left md:text-left">
              <li>Dokumentasi Kegiatan Kelas Naskah</li>
              <li>Dokumentasi Program-Program Kelas Naskah</li>
            </ul>
          </div>
          <div className="order-2 md:order-1 relative flex flex-row w-full md:w-[600px] h-[280px] sm:h-[340px] md:h-[400px]">
            <Image alt="Two people sitting at a table with a clapperboard, camera, tea cup, and snacks, seen from above" className="object-cover w-2/3 h-full" height={400} src="/school5.jpg" width={400} />
            <div className="absolute bottom-0 left-1/3 w-1/3 h-40 sm:h-48 bg-black bg-opacity-70 flex flex-col justify-center px-4 sm:px-6">
              <h2 className="text-white text-lg sm:text-xl font-serif mb-1 sm:mb-2">Great Film</h2>
              <p className="text-white text-xs sm:text-sm font-semibold leading-tight">Dokumentasi Perjalanan Kelas Naskah</p>
            </div>
            <Image alt="Hands holding a script and a laptop on a table" className="object-cover w-1/3 h-40 sm:h-48 absolute bottom-0 right-0" height={200} src="/festival4.jpg" width={200} />
          </div>
        </section>

        {/* Tentang Kelas Naskah*/}
        <section className="my-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-serif font-semibold">Story Of Kelas Naskah</h1>
        </section>

        <section className="flex flex-col md:flex-row bg-[#18191c] text-white max-h-[400px] md:max-h-[350px] overflow-hidden rounded-lg">
          <div className="md:w-2/5 max-h-[400px] md:max-h-[350px] overflow-hidden">
            <Image alt="Man with curly hair and glasses looking at a camera screen on a wooden table in a dimly lit room" className="w-full h-full object-cover" height={400} src="/campus3.jpg" width={600} />
          </div>
          <div className="md:w-3/5 p-6 sm:p-8 md:p-12 flex flex-col justify-center max-h-[400px] md:max-h-[350px] overflow-hidden">
            <p className="text-xs sm:text-sm font-semibold mb-6 max-w-full sm:max-w-xl overflow-hidden">
              Kelas Naskah adalah ruang berkumpul bagi siapa saja yang cinta film dan cerita. Di sini, kita belajar menulis skenario, berbagi ide, dan tumbuh bareng lewat dunia film dan televisi. Fokus kami juga ke Indonesia Timur menggali
              cerita, budaya, dan talenta dari berbagai daerah. Kelas Naskah jadi tempat di mana orang-orang kreatif bisa bertemu, saling dukung, dan bikin karya yang lahir dari kisah kita sendiri.
            </p>
            {/* START: Button Details MODIFIKASI FOKUS */}
            <Link href="/about" passHref>
              <Button variant="outline" className="w-max border border-white text-white bg-transparent px-5 py-2 font-semibold hover:bg-white hover:text-[#18191c] transition-all duration-300 group shadow-lg">
                <BookOpen className="h-4 w-4 mr-2 transition-colors duration-300 group-hover:text-[#18191c]" />
                Details
              </Button>
            </Link>
            {/* END: Button Details MODIFIKASI FOKUS */}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#18191c] text-white pt-10 pb-6 px-6 sm:px-12 md:px-20">
        <p className="text-center text-gray-400 text-xs font-normal">&copy; {new Date().getFullYear()} Kelas Naskah. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
