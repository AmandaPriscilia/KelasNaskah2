// src/components/ImageGallery.jsx

'use client'; // <--- Ini wajib karena menggunakan useState

import { useState } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card'; // Asumsi Card aman di Client Component

// Komponen Modal (Lightbox)
const ImageModal = ({ src, alt, onClose, activityTitle }) => {
  if (!src) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black bg-opacity-90 backdrop-blur-sm" onClick={onClose}>
      <div className="relative max-w-5xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 z-10 text-white text-3xl font-bold bg-black/50 p-2 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/75 transition" aria-label="Tutup Gambar">
          &times;
        </button>
        <div className="relative w-full h-full">
          <Image src={src} alt={alt || `Galeri ${activityTitle}`} width={1000} height={800} className="object-contain max-h-[90vh] w-auto h-auto rounded-lg shadow-2xl" priority />
        </div>
      </div>
    </div>
  );
};

// Komponen Galeri Utama (Client Component)
export default function ImageGallery({ activityTitle, images }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (imagePath) => {
    setSelectedImage(imagePath);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((imagePath, i) => (
          <Card key={i} className="overflow-hidden cursor-pointer" onClick={() => openModal(imagePath)}>
            <div className="relative w-full h-40">
              <Image src={imagePath} alt={`Galeri ${activityTitle} ${i + 1}`} fill loading="lazy" className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </Card>
        ))}
      </div>
      {isModalOpen && <ImageModal src={selectedImage} activityTitle={activityTitle} onClose={closeModal} />}
    </>
  );
}
