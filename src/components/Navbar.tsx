import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Compass } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Compass className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">Wisata Edukasi Aceh</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Beranda
            </Link>
            <a href="#destinations" className="text-foreground hover:text-primary transition-colors">
              Destinasi
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              Tentang
            </a>
          </div>
          
          <Button className="bg-primary hover:bg-primary/90">
            Hubungi Kami
          </Button>
        </div>
      </div>
    </nav>
  );
};
