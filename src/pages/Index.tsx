import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { DestinationCard } from "@/components/DestinationCard";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;

      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 150);

      window.history.replaceState({}, "");
    }
  }, [location]);

  useEffect(() => {
    if (location.state?.scrollTo) {
      const target = location.state.scrollTo;

      setTimeout(() => {
        if (target === "top") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const element = document.getElementById(target);
          element?.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);

      window.history.replaceState({}, "");
    }
  }, [location]);

  useEffect(() => {
    if (location.state?.scrollTo) {
      const target = location.state.scrollTo;

      setTimeout(() => {
        if (target === "top") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const element = document.getElementById(target);
          element?.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);

      window.history.replaceState({}, "");
    }
  }, [location]);

  // Sample destinations data
  const destinations = [
    {
      id: "1",
      name: "Taman Rusa Sibreh",
      location: "Gampong Lamtanjong, Kec. Sibreh, Aceh Besar",
      category: "Edukasi Hewan",
      description:
        "Menampilkan berbagai jenis satwa seperti rusa, buaya, burung, dan monyet. Cocok untuk anak-anak dan pelajar belajar tentang hewan & lingkungan.",
      imageUrl:
        "https://www.kanalaceh.com/wp-content/uploads/2023/12/Taman-Rusa-Aceh-Besar.webp",
    },
    {
      id: "2",
      name: "CRU Sampoiniet",
      location: "Desa Ie Jeureungeh, Kec. Sampoiniet, Aceh Jaya",
      category: "Konservasi Gajah",
      description:
        "Pusat konservasi gajah Sumatera dengan aktivitas memberi makan dan memandikan gajah. Edukasi tentang pelestarian satwa liar dan hutan.",
      imageUrl:
        "https://cdn.antaranews.com/cache/1200x800/2023/03/02/antarafoto-potensi-ekowisata-gajah-aceh-jaya-020323-fba-1_1.jpg",
    },
    {
      id: "3",
      name: "Hutan Mangrove Langsa",
      location: "Gampong Kuala Langsa, Kota Langsa",
      category: "Edukasi Ekologi",
      description:
        "Hutan mangrove terbesar di Asia Tenggara, memiliki lebih dari 30 jenis mangrove. Tempat belajar ekosistem pesisir dan pelestarian alam.",
      imageUrl:
        "https://asset.kompas.com/crops/nvKJb9a5Hy7FQvN9GIp0GZiVew0%3D/3x4%3A1020x682/1200x800/data/photo/2022/04/15/625981ffdbb1f.jpeg",
    },
    {
      id: "4",
      name: "Museum Tsunami Aceh",
      location: "Jl. Sultan Iskandar Muda, Banda Aceh",
      category: "Edukasi Sejarah",
      description:
        "Museum interaktif yang mengenang peristiwa tsunami 2004 dan memberikan pembelajaran tentang mitigasi bencana.",
      imageUrl:
        "https://travelspromo.com/wp-content/uploads/2021/12/Bangunan-Museum-Tsunami-Aceh-dari-Luar.-Foto-Gmap-fajrin-herris-e1640659213356.jpg",
    },
    {
      id: "5",
      name: "Museum Negeri Aceh",
      location: "Jl. Sultan Alauddin Mahmudsyah, Banda Aceh",
      category: "Edukasi Budaya",
      description:
        "Menyimpan koleksi budaya, pakaian adat, dan rumah tradisional Aceh. Cocok untuk mengenal sejarah dan adat istiadat daerah.",
      imageUrl:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/a7/a8/fb/museum-negeri-aceh.jpg?w=1200&h=-1&s=1",
    },
    {
      id: "6",
      name: "Kebun Kopi Gayo",
      location: "Takengon, Aceh Tengah",
      category: "Edukasi Pertanian",
      description:
        "Belajar proses penanaman, panen, dan pengolahan kopi Gayo. Pengunjung bisa ikut pengalaman coffee experience.",
      imageUrl:
        "https://lintasgayo.co/wp-content/uploads/2022/07/Tanam-Kopi-Sistem-Pagar.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Destinations Section */}
      <section id="destinations" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Destinasi Wisata Edukasi</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Jelajahi berbagai destinasi wisata edukasi yang menarik di Aceh
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} {...destination} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Tentang Wisata Edukasi Aceh
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Aceh memiliki kekayaan alam dan budaya yang luar biasa. Website
              ini menyediakan informasi lengkap tentang berbagai destinasi
              wisata edukasi terbaik di Aceh untuk membantu Anda merencanakan
              kunjungan.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Dari konservasi satwa, museum bersejarah, hingga perkebunan kopi -
              setiap destinasi menawarkan pengalaman belajar yang tak
              terlupakan. Temukan lokasi, jam operasional, dan informasi kontak
              untuk setiap destinasi.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
