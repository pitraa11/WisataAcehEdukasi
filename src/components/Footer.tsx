import { Compass, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-card border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Compass className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-primary">Wisata Edukasi Aceh</span>
            </div>
            <p className="text-muted-foreground">
              Temukan pengalaman belajar yang tak terlupakan di Aceh
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <a href="#destinations" className="text-muted-foreground hover:text-primary transition-colors">
                  Destinasi
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  Tentang Kami
                </a>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Destinasi Populer</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Museum Tsunami</li>
              <li className="text-muted-foreground">Taman Rusa Sibreh</li>
              <li className="text-muted-foreground">Hutan Mangrove Langsa</li>
              <li className="text-muted-foreground">Kebun Kopi Gayo</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Kontak</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-muted-foreground">
                <Mail className="h-4 w-4 mr-2" />
                info@wisataaceh.com
              </li>
              <li className="flex items-center text-muted-foreground">
                <Phone className="h-4 w-4 mr-2" />
                +62 812-3456-7890
              </li>
              <li className="flex items-start text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2 mt-1" />
                Banda Aceh, Aceh, Indonesia
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Wisata Edukasi Aceh. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};
