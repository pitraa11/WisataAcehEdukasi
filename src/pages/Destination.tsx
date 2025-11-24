import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Navigation,
  Info,
  Star,
} from "lucide-react";

// Sample data - in real app, fetch from database
const destinationsData: Record<string, any> = {
  "1": {
    id: "1",
    nama_wisata: "Taman Rusa Sibreh",
    lokasi: "Gampong Lamtanjong, Kec. Sibreh, Aceh Besar",
    coordinates: "5.5329, 95.4213",
    jenis_wisata: "Edukasi Hewan & Rekreasi Alam",
    deskripsi:
      "Menampilkan berbagai jenis satwa seperti rusa, buaya, burung, dan monyet. Cocok untuk anak-anak dan pelajar belajar tentang hewan & lingkungan.",
    gambar_url:
      "https://www.kanalaceh.com/wp-content/uploads/2023/12/Taman-Rusa-Aceh-Besar.webp",
    jam_buka: "08:00",
    jam_tutup: "17:00",
    pengetahuan: {
      sejarah:
        "Taman Rusa Sibreh didirikan sebagai upaya pelestarian satwa dan edukasi masyarakat tentang pentingnya menjaga keanekaragaman hayati. Taman ini menjadi salah satu destinasi favorit keluarga di Aceh Besar.",
      fauna:
        "Taman ini adalah rumah bagi berbagai spesies satwa termasuk rusa totol, buaya muara, berbagai jenis burung endemik Aceh, dan primata seperti monyet ekor panjang. Semua satwa dipelihara dalam lingkungan yang mendekati habitat aslinya.",
      edukasi:
        "Pengunjung dapat mempelajari perilaku hewan, pola makan, dan pentingnya konservasi. Tersedia pemandu yang menjelaskan karakteristik setiap hewan dan bagaimana cara melindungi mereka di alam liar.",
      fasilitas:
        "Dilengkapi dengan area piknik, toilet, mushola, dan kantin. Terdapat juga area bermain anak yang aman dan nyaman untuk keluarga.",
    },
  },
  "2": {
    id: "2",
    nama_wisata: "CRU Sampoiniet",
    lokasi: "Desa Ie Jeureungeh, Kec. Sampoiniet, Aceh Jaya",
    coordinates: "4.8333, 95.6000",
    jenis_wisata: "Konservasi & Edukasi Lingkungan",
    deskripsi:
      "Pusat konservasi gajah Sumatera dengan aktivitas memberi makan dan memandikan gajah. Edukasi tentang pelestarian satwa liar dan hutan.",
    gambar_url:
      "https://cdn.antaranews.com/cache/1200x800/2023/03/02/antarafoto-potensi-ekowisata-gajah-aceh-jaya-020323-fba-1_1.jpg",
    jam_buka: "08:00",
    jam_tutup: "16:00",
    pengetahuan: {
      sejarah:
        "Conservation Response Unit (CRU) Sampoiniet dibentuk untuk mengatasi konflik antara gajah Sumatera dengan masyarakat. Unit ini berhasil menyelamatkan dan merawat gajah-gajah yang terancam punah.",
      fauna:
        "Gajah Sumatera (Elephas maximus sumatranus) adalah subspesies gajah Asia yang lebih kecil dari gajah Afrika. Populasinya terus menurun dan kini berstatus kritis terancam punah dengan estimasi populasi kurang dari 2.000 ekor di alam liar.",
      edukasi:
        "Program edukasi mencakup demonstrasi perawatan gajah, pemberian makan, dan memandikan gajah. Pengunjung belajar tentang ancaman terhadap habitat gajah seperti deforestasi dan perburuan liar.",
      fasilitas:
        "Terdapat pusat informasi, viewing platform untuk melihat gajah dari dekat, area parkir yang luas, dan fasilitas umum yang memadai.",
    },
  },
  "3": {
    id: "3",
    nama_wisata: "Hutan Mangrove Langsa",
    lokasi: "Gampong Kuala Langsa, Kota Langsa",
    coordinates: "4.4683, 97.9753",
    jenis_wisata: "Edukasi Ekologi & Alam",
    deskripsi:
      "Hutan mangrove terbesar di Asia Tenggara, memiliki lebih dari 30 jenis mangrove. Tempat belajar ekosistem pesisir dan pelestarian alam.",
    gambar_url:
      "https://asset.kompas.com/crops/nvKJb9a5Hy7FQvN9GIp0GZiVew0%3D/3x4%3A1020x682/1200x800/data/photo/2022/04/15/625981ffdbb1f.jpeg",
    jam_buka: "07:00",
    jam_tutup: "18:00",
    pengetahuan: {
      sejarah:
        "Hutan Mangrove Langsa telah menjadi kawasan konservasi penting sejak tahun 2000-an. Kawasan ini diselamatkan dari abrasi dan menjadi model konservasi pesisir yang berhasil di Indonesia.",
      fauna:
        "Ekosistem mangrove adalah rumah bagi lebih dari 30 spesies mangrove, berbagai jenis kepiting, udang, ikan, burung migran, dan monyet ekor panjang. Hutan ini juga menjadi tempat bertelur bagi berbagai jenis ikan komersial.",
      edukasi:
        "Pengunjung dapat belajar tentang peran penting mangrove dalam melindungi pantai dari abrasi dan tsunami, serta fungsinya sebagai nursery ground bagi kehidupan laut. Tersedia jembatan kayu (boardwalk) untuk tracking.",
      fasilitas:
        "Dilengkapi dengan jembatan kayu sepanjang 1.7 km, menara pandang, gazebo, area parkir, toilet, mushola, dan pusat informasi tentang ekosistem mangrove.",
    },
  },
  "4": {
    id: "4",
    nama_wisata: "Museum Tsunami Aceh",

    lokasi: "Jl. Sultan Iskandar Muda, Banda Aceh",
    coordinates: "5.5483, 95.3238",
    jenis_wisata: "Edukasi Bencana & Sejarah",
    deskripsi:
      "Museum interaktif yang mengenang peristiwa tsunami 2004 dan memberikan pembelajaran tentang mitigasi bencana.",
    gambar_url:
      "https://travelspromo.com/wp-content/uploads/2021/12/Bangunan-Museum-Tsunami-Aceh-dari-Luar.-Foto-Gmap-fajrin-herris-e1640659213356.jpg",
    jam_buka: "09:00",
    jam_tutup: "16:00",
    pengetahuan: {
      sejarah:
        "Museum Tsunami Aceh dibangun untuk mengenang tragedi tsunami 26 Desember 2004 yang merenggut lebih dari 160.000 jiwa di Aceh. Museum ini diresmikan pada 2011 dan dirancang oleh arsitek terkenal Ridwan Kamil.",
      fauna:
        "Museum ini memiliki desain arsitektur yang sarat makna - lorong gelap melambangkan saat-saat mengerikan tsunami, ruangan yang terang melambangkan harapan. Terdapat 54 bendera negara yang membantu Aceh pasca-tsunami.",
      edukasi:
        "Pengunjung dapat mempelajari sejarah tsunami Aceh, sistem peringatan dini tsunami, dan cara menyelamatkan diri saat bencana. Museum ini juga berfungsi sebagai tempat evakuasi vertikal jika terjadi tsunami lagi.",
      fasilitas:
        "Museum 4 lantai ini dilengkapi dengan ruang pameran multimedia, bioskop 4D, perpustakaan, ruang doa, dan area terbuka yang dapat menampung hingga 10.000 orang saat evakuasi.",
    },
  },
  "5": {
    id: "5",
    nama_wisata: "Museum Negeri Aceh",
    lokasi: "Jl. Sultan Alauddin Mahmudsyah, Banda Aceh",
    coordinates: "5.5587, 95.3229",
    jenis_wisata: "Edukasi Budaya & Sejarah",
    deskripsi:
      "Menyimpan koleksi budaya, pakaian adat, dan rumah tradisional Aceh. Cocok untuk mengenal sejarah dan adat istiadat daerah.",
    gambar_url:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/a7/a8/fb/museum-negeri-aceh.jpg?w=1200&h=-1&s=1",
    jam_buka: "08:00",
    jam_tutup: "17:00",
    pengetahuan: {
      sejarah:
        "Museum Negeri Aceh atau Rumah Aceh didirikan pada 31 Juli 1915 oleh pemerintah Belanda. Museum ini menjadi saksi bisu sejarah panjang Aceh mulai dari kerajaan hingga masa modern.",
      fauna:
        "Museum ini menampilkan Rumoh Aceh (rumah tradisional), koleksi keramik kuno, mata uang kuno, senjata tradisional seperti rencong, pakaian adat, Al-Quran kuno, dan benda-benda peninggalan Kesultanan Aceh.",
      edukasi:
        "Pengunjung dapat mempelajari sejarah Kesultanan Aceh, sistem pemerintahan tradisional, perkembangan Islam di Aceh, seni dan budaya Aceh, serta perjuangan rakyat Aceh melawan penjajah.",
      fasilitas:
        "Kompleks museum dilengkapi dengan Rumoh Aceh, lonceng Cakra Donya dari abad ke-14, meriam, dan bangunan induk museum dengan berbagai ruang pameran tetap dan temporer.",
    },
  },
  "6": {
    id: "6",
    nama_wisata: "Kebun Kopi Gayo",
    lokasi: "Takengon, Aceh Tengah",
    coordinates: "4.6333, 96.8500",
    jenis_wisata: "Edukasi Pertanian & Ekonomi Kreatif",
    deskripsi:
      "Belajar proses penanaman, panen, dan pengolahan kopi Gayo. Pengunjung bisa ikut pengalaman coffee experience.",
    gambar_url:
      "https://lintasgayo.co/wp-content/uploads/2022/07/Tanam-Kopi-Sistem-Pagar.jpg",
    jam_buka: "07:00",
    jam_tutup: "17:00",
    pengetahuan: {
      sejarah:
        "Kopi Gayo telah ditanam di dataran tinggi Gayo sejak masa kolonial Belanda. Kopi ini mendapat sertifikasi Fair Trade dan organik pertama di Indonesia pada tahun 2010. Kini Kopi Gayo dikenal hingga ke mancanegara.",
      fauna:
        "Kopi Gayo ditanam di ketinggian 1.200-1.800 mdpl dengan iklim tropis yang ideal. Varietas yang ditanam terutama Arabica dengan karakteristik rasa earthy, herbal, dan memiliki body yang berat dengan tingkat keasaman rendah.",
      edukasi:
        "Pengunjung dapat menyaksikan dan ikut serta dalam proses picking (panen), pulping (pengupasan), fermentasi, penjemuran, hingga roasting. Tersedia juga kelas cupping untuk belajar mencicipi dan menilai kualitas kopi.",
      fasilitas:
        "Kebun kopi dilengkapi dengan area perkebunan, pabrik pengolahan, ruang roasting, coffee shop untuk tasting, homestay bagi wisatawan, dan toko untuk membeli kopi langsung dari petani.",
    },
  },
};

export default function Destination() {
  const { id } = useParams();
  const destination = destinationsData[id || "1"] || destinationsData["1"];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  // 🟩 Perbaikan glob
  const allGalleries = import.meta.glob("/src/img/gallery/*/*", {
    eager: true,
  }) as Record<string, { default: string }>;

  const galleryImages = Object.values(allGalleries).filter((img) =>
    img.default.includes(`/gallery/${id}/`)
  );

  // 🟩 Lightbox state
  const [index, setIndex] = useState(-1);

  const openGoogleMaps = () => {
    const query = encodeURIComponent(
      destination.nama_wisata + " " + destination.lokasi
    );
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
    window.open(mapsUrl, "_blank");
  };

  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-16">
        {/* Hero Image */}
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src={destination.gambar_url}
            alt={destination.nama_wisata}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {destination.nama_wisata}
              </h1>
              <div className="flex items-center text-white/90">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{destination.lokasi}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="container mx-auto px-4 py-12 relative">
          <h2 className="text-3xl font-bold mb-6">Galeri Foto</h2>

          {/* Tombol geser kiri */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 shadow rounded-full"
            onClick={() => {
              const c = document.getElementById("gallery-scroll");
              c?.scrollBy({ left: -300, behavior: "smooth" });
            }}
          >
            <span className="text-xl">◀</span>
          </button>

          {/* Tombol geser kanan */}
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 shadow rounded-full"
            onClick={() => {
              const c = document.getElementById("gallery-scroll");
              c?.scrollBy({ left: 300, behavior: "smooth" });
            }}
          >
            <span className="text-xl">▶</span>
          </button>

          {/* Gallery */}
          <div
            id="gallery-scroll"
            className="flex space-x-4 overflow-x-auto pb-4 no-scrollbar"
          >
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 h-40 rounded-xl overflow-hidden shadow cursor-pointer hover:scale-[1.02] transition"
                onClick={() => setPreviewIndex(index)}
              >
                <img
                  src={img.default}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>

        {/* POPUP PREVIEW */}
        {previewIndex !== null && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fade"
            onClick={() => setPreviewIndex(null)}
          >
            {/* Wrapper klik luar → close */}
            <div className="absolute inset-0" />

            {/* CONTAINER BARU → rounding & overflow fix */}
            <div
              className="relative max-w-5xl w-[90%] max-h-[90%] flex items-center justify-center rounded-2xl overflow-hidden animate-zoom bg-black/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* GAMBAR FULL, MENGIKUTI RADIUS CONTAINER */}
              <img
                src={galleryImages[previewIndex]?.default}
                className="w-full h-full object-contain"
                alt=""
              />

              {/* CLOSE BUTTON */}
              <button
                className="absolute top-4 right-4 bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black transition"
                onClick={() => setPreviewIndex(null)}
              >
                ✕
              </button>

              {/* PREV BUTTON */}
              {previewIndex > 0 && (
                <button
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-black transition shadow-md"
                  onClick={() => setPreviewIndex((p) => p! - 1)}
                >
                  ◀
                </button>
              )}

              {/* NEXT BUTTON */}
              {previewIndex < galleryImages.length - 1 && (
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-black transition shadow-md"
                  onClick={() => setPreviewIndex((p) => p! + 1)}
                >
                  ▶
                </button>
              )}
            </div>
          </div>
        )}

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Map Card */}
            <Card className="overflow-hidden">
              <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 p-8 text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Lihat di Peta</h3>
                <p className="text-muted-foreground mb-6">
                  Klik tombol di bawah untuk melihat lokasi di Google Maps
                </p>
                <Button
                  onClick={openGoogleMaps}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 shadow-elevated group"
                >
                  <Navigation className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Buka Google Maps
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  {destination.lokasi}
                </p>
              </div>
            </Card>

            {/* Main Content */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">Tentang Destinasi</h2>
                <p className="text-foreground/80 text-lg leading-relaxed mb-8">
                  {destination.deskripsi}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start space-x-4 p-6 bg-muted rounded-lg">
                    <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-lg mb-1">
                        Jam Operasional
                      </p>
                      <p className="text-foreground/70">
                        {destination.jam_buka} - {destination.jam_tutup} WIB
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Setiap hari
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-muted rounded-lg">
                    <Info className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-lg mb-1">Kategori</p>
                      <p className="text-foreground/70">
                        {destination.jenis_wisata}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Knowledge Section */}
            {destination.pengetahuan && (
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Star className="h-8 w-8 text-accent mr-3" />
                    <h2 className="text-3xl font-bold">
                      Pengetahuan & Informasi
                    </h2>
                  </div>

                  <div className="space-y-8">
                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="text-xl font-bold mb-3 text-primary">
                        Sejarah
                      </h3>
                      <p className="text-foreground/80 leading-relaxed">
                        {destination.pengetahuan.sejarah}
                      </p>
                    </div>

                    <div className="border-l-4 border-secondary pl-6">
                      <h3 className="text-xl font-bold mb-3 text-secondary">
                        Flora & Fauna
                      </h3>
                      <p className="text-foreground/80 leading-relaxed">
                        {destination.pengetahuan.fauna}
                      </p>
                    </div>

                    <div className="border-l-4 border-accent pl-6">
                      <h3 className="text-xl font-bold mb-3 text-accent">
                        Program Edukasi
                      </h3>
                      <p className="text-foreground/80 leading-relaxed">
                        {destination.pengetahuan.edukasi}
                      </p>
                    </div>

                    <div className="border-l-4 border-muted-foreground pl-6">
                      <h3 className="text-xl font-bold mb-3">Fasilitas</h3>
                      <p className="text-foreground/80 leading-relaxed">
                        {destination.pengetahuan.fasilitas}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
