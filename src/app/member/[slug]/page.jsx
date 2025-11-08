import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { teamMembers } from '@/data/members';
import { Mail, Phone, Linkedin, Instagram, Twitter, MapPin } from 'lucide-react';

// Fungsi untuk mendapatkan data anggota (termasuk nilai default)
const getMemberData = (slug) => {
  const member = teamMembers.find((member) => member.id === slug);

  if (member) {
    // Memberikan nilai default untuk properti opsional
    return {
      ...member,
      email: member.email || 'kelasnaskah@example.com',
      phone: member.phone || '+6281234567890',
      linkedin: member.linkedin || '#',
      instagram: member.instagram || 'https://instagram.com/kelasnaskah.id',
      twitter: member.twitter || '#',
      location: member.location || 'Ambon, Maluku, Indonesia',
      responsibilities: member.responsibilities || ['Screenwriting', 'Storytelling', 'Mentoring'],
      experiences: member.experiences || [{ title: 'Kontribusi di Kelas Naskah', duration: 'Tahun - Sekarang', description: 'Anggota tim yang berdedikasi.' }],
      education: member.education || {
        institution: 'Universitas/Sekolah Default',
        degree: 'Gelar Default',
        duration: 'Tahun - Tahun',
        description: 'Detail pendidikan default.',
      },
      portfolio: member.portfolio || [{ title: 'Project Default', description: 'Deskripsi singkat project.', image: '/placeholder.png' }],
      bannerImage: member.bannerImage || 'https://storage.googleapis.com/a1aa/image/1aa68c43-96af-42fb-e60e-5fc272f23817.jpg',
      cvLink: member.cvLink || '#',
    };
  }
  return null;
};

// Komponen untuk Tautan Sosial
const SocialLink = ({ href, icon: Icon, label }) => {
  if (!href || href === '#' || href.includes('undefined')) return null;
  return (
    <a aria-label={label} href={href} target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition p-2 rounded-full hover:bg-gray-200">
      <Icon size={20} />
    </a>
  );
};

export default function MemberProfile({ params }) {
  const member = getMemberData(params.slug);

  if (!member) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Member not found</h1>
          <p className="text-gray-600">Pastikan URL yang Anda masukkan sudah benar.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="w-full min-h-screen bg-white rounded-none shadow-none my-0 px-0 pt-0">
        {/* === Hero Section === */}
        <section id="hero" className="relative w-full">
          {/* Banner Image */}
          <div className="w-full h-48 sm:h-64 md:h-80 lg:h-96 relative">
            <Image alt={`Banner image for ${member.name}`} src={member.bannerImage} fill className="object-cover" sizes="100vw" />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-[0.76]"></div>

            {/* Nama dan Title */}
            <div className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6 text-center">
              <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold drop-shadow-lg leading-tight max-w-[90%] mx-auto">{member.name}</h1>
              <p className="uppercase text-green-400 font-semibold tracking-widest text-xs sm:text-sm mt-1 sm:mt-2 drop-shadow-md max-w-[90%] mx-auto">{member.title}</p>
            </div>
          </div>

          {/* Profile Image */}
          <div
            className="absolute bottom-[-6.5rem] left-1/2 transform -translate-x-1/2 
                       md:left-16 md:transform-none 
                       w-40 h-40 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-[3.5rem] 
                       border-8 border-white shadow-xl overflow-hidden bg-white 
                       transition-all duration-300 ease-in-out"
          >
            <Image alt={`Portrait of ${member.name}`} className="w-full h-full object-cover" src={member.image} fill sizes="(max-width: 768px) 160px, 208px" />
          </div>
        </section>

        {/* Padding untuk mengatasi gambar profil */}
        <section className="pt-44 sm:pt-48 pb-12 space-y-12 max-w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
          {/* === About/Bio Section & Social Links === */}
          <section>
            <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base max-w-3xl mx-auto">{member.bio}</p>

            {/* Social Links */}
            <div className="flex justify-center space-x-2 sm:space-x-4 mt-6 text-gray-600 text-lg sm:text-xl">
              <SocialLink href={`mailto:${member.email}`} icon={Mail} label="Email" />
              <SocialLink href={`tel:${member.phone}`} icon={Phone} label="Telepon" />
              <SocialLink href={member.linkedin} icon={Linkedin} label="LinkedIn" />
              <SocialLink href={member.instagram} icon={Instagram} label="Instagram" />
              <SocialLink href={member.twitter} icon={Twitter} label="Twitter" />
            </div>
          </section>

          {/* === Jobdesk/Responsibility Section (Menggantikan Skills) === */}
          <section id="jobdesk">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 border-b border-gray-300 pb-2 mb-6 max-w-xs mx-auto text-center">Jobdesk/Responsibility</h2>
            {/* Daftar chip sudah memiliki justify-center */}
            <ul className="flex flex-wrap gap-3 justify-center text-sm sm:text-base max-w-full mx-auto">
              {member.responsibilities.map((responsibility, index) => (
                <li key={index} className="bg-green-600 text-white px-5 py-2 rounded-full font-medium whitespace-nowrap shadow-md">
                  {responsibility}
                </li>
              ))}
            </ul>
          </section>

          {/* === Experience Section === */}
          <section id="experience">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 border-b border-gray-300 pb-2 mb-6 max-w-max">Experience</h2>
            <div className="space-y-10 max-w-full mx-auto text-gray-700 text-sm sm:text-base px-4 sm:px-0">
              {member.experiences.map((exp, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-lg sm:text-xl text-gray-900">{exp.title}</h3>
                  <p className="italic text-xs sm:text-sm mb-1">{exp.duration}</p>
                  <p className="text-justify">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* === Education Section === */}
          <section id="education">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 border-b border-gray-300 pb-2 mb-6 max-w-max">Education</h2>
            <div className="max-w-full mx-auto text-gray-700 text-sm sm:text-base px-4 sm:px-0">
              <h3 className="font-semibold text-lg sm:text-xl text-gray-900">{member.education.institution}</h3>
              <p className="italic text-xs sm:text-sm mb-1">
                {member.education.degree}, {member.education.duration}
              </p>
              <p className="text-justify">{member.education.description}</p>
            </div>
          </section>

          {/* === Portfolio Section === */}
          <section id="portfolio">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 border-b border-gray-300 pb-2 mb-8 max-w-max">Portfolio</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-full mx-auto px-4 sm:px-0">
              {member.portfolio.map((item, index) => (
                <a key={index} href={item.link || '#'} className="block bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden border border-gray-200">
                  <div className="relative w-full h-44 sm:h-52 md:h-56">
                    <Image alt={`Image of ${item.title}`} className="object-cover" src={item.image || '/placeholder.png'} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg sm:text-xl mb-1 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* === Contact & Location === */}
          <section id="contact" className="text-center pt-8">
            <div className="flex justify-center items-center text-gray-700 text-sm sm:text-base mb-6">
              <MapPin size={18} className="mr-2 text-green-600" />
              <span className="font-medium">{member.location}</span>
            </div>
            <a href={`mailto:${member.email}`} className="inline-block bg-green-600 text-white font-semibold px-8 sm:px-10 py-3 rounded-full hover:bg-green-700 transition text-base sm:text-lg shadow-md">
              Contact {member.name.split(' ')[0]}
            </a>
          </section>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#18191c] text-white pt-10 pb-6 px-6 sm:px-12 md:px-20">
        <p className="text-center text-gray-400 text-xs font-normal">&copy; {new Date().getFullYear()} Kelas Naskah. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
