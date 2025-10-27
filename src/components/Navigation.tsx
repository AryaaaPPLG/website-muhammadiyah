import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BookOpen, History, Lightbulb, FileText, Download, Users } from "lucide-react";
import img from "../assets/Logo_Muhammadiyah.png"

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navItems = [
    { id: "pengertian", label: "Pengertian", icon: BookOpen },
    { id: "sejarah", label: "Sejarah", icon: History },
    { id: "hakikat", label: "Hakikat & Fungsi", icon: Lightbulb },
    { id: "matan", label: "Matan PHIWM", icon: FileText },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      // Detect active section
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50  transition-all duration-300 ${
        scrolled ? "glass-panel shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <Link to="/" className="font-display text-xl font-bold text-primary hover:text-primary/80 transition-colors">
            <img className="translate-x-20 w-10 h-10" src={img} alt="" />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {isHomePage && navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-secondary text-foreground"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              );
            })}
            
            {!isHomePage && (
              <Link
                to="/"
                className="px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 hover:bg-secondary text-foreground"
              >
                <BookOpen className="w-4 h-4" />
                <span className="text-sm font-medium">Beranda</span>
              </Link>
            )}
            
            <Link
              to="/download"
              className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                location.pathname === "/download"
                  ? "bg-accent text-accent-foreground"
                  : "hover:bg-secondary text-foreground"
              }`}
            >
              <Download className="w-4 h-4" />
              <span className="text-sm font-medium">Download</span>
            </Link>

            <Link
              to="/members"
              className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                location.pathname === "/members"
                  ? "bg-accent text-accent-foreground"
                  : "hover:bg-secondary text-foreground"
              }`}
            >
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium">Anggota</span>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            <Link to="/download" className="glass-panel p-2 rounded-lg">
              <Download className="w-5 h-5" />
            </Link>
            {!isHomePage && (
              <Link to="/" className="glass-panel p-2 rounded-lg">
                <BookOpen className="w-5 h-5" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
