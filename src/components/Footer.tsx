import { Compass } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-card border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        {/* GRID 3 KOLOM */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <Link
            to="/"
            state={{ scrollTo: "top" }}
            className="flex items-center space-x-2"
          >
            <Compass className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">
              Wisata Edukasi Aceh
            </span>
          </Link>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Menu Utama</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  state={{ scrollTo: "top" }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Beranda
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  state={{ scrollTo: "destinations" }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Destinasi
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  state={{ scrollTo: "about" }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">
              Destinasi Populer
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/destination/4"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Museum Tsunami
                </Link>
              </li>

              <li>
                <Link
                  to="/destination/1"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Taman Rusa Sibreh
                </Link>
              </li>

              <li>
                <Link
                  to="/destination/3"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Hutan Mangrove Langsa
                </Link>
              </li>

              <li>
                <Link
                  to="/destination/6"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Kebun Kopi Gayo
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Wisata Edukasi Aceh. Semua hak
            dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};
