import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import bgHero from "@/img/sampul/mesjidraya.jpg";

export const Hero = () => {
  const scrollToDestinations = () => {
    document
      .getElementById("destinations")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bgHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.85)", // 🔥 biar gambar lebih jelas
          transform: "scale(1.05)", // 🔥 biar agak zoom elegan
        }}
      />

      {/* Soft Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Jelajahi Wisata Edukasi
          <span className="block text-4xl md:text-6xl mt-2">Aceh</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/90">
          Pelajari tentang destinasi wisata edukasi terbaik di Aceh dan
          rencanakan kunjungan Anda
        </p>
        <Button
          size="lg"
          onClick={scrollToDestinations}
          className="bg-white text-primary hover:bg-white/90 shadow-elevated group"
        >
          Mulai Penjelajahan
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};
