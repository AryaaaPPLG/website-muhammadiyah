import { Download as DownloadIcon, FileText, BookOpen, History, Lightbulb, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import Navigation from "../Navigation";
 
 
 
const Download = () => {
  const materials = [
    {
      id: 1,
      title: "PHIWM - Bab V Lengkap",
      description: "Dokumen lengkap berisi semua materi Pedoman Hidup Islami Warga Muhammadiyah Bab V",
      icon: FileText,
      pages: 45,
      size: "2.3 MB",
      format: "PDF",
      color: "primary"
    },
    {
      id: 2,
      title: "Pengertian PHIWM",
      description: "Materi mendalam tentang pengertian, tujuan, dan landasan filosofis PHIWM",
      icon: BookOpen,
      pages: 8,
      size: "450 KB",
      format: "PDF",
      color: "accent"
    },
    {
      id: 3,
      title: "Sejarah Perumusan PHIWM",
      description: "Timeline dan perjalanan historis penyusunan PHIWM dari masa ke masa",
      icon: History,
      pages: 12,
      size: "680 KB",
      format: "PDF",
      color: "primary"
    },
    {
      id: 4,
      title: "Hakikat dan Fungsi PHIWM",
      description: "Pembahasan mendalam tentang esensi dan peran PHIWM dalam kehidupan",
      icon: Lightbulb,
      pages: 10,
      size: "520 KB",
      format: "PDF",
      color: "accent"
    },
    {
      id: 5,
      title: "Matan PHIWM",
      description: "Naskah inti dan pokok-pokok ajaran PHIWM yang dapat dipelajari",
      icon: FileCheck,
      pages: 15,
      size: "780 KB",
      format: "PDF",
      color: "primary"
    }
  ];

  const handleDownload = (title: string) => {
    toast.success(`Mengunduh ${title}...`, {
      description: "File akan segera tersedia",
    });
    
    // Simulasi download - dalam implementasi nyata, ini akan download file sebenarnya
    console.log(`Downloading: ${title}`);
  };

  return (
   
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Header */}
      <header className="glass-panel py-16 relative overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-20"></div>
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-[100px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 glass-panel rounded-2xl mb-6 glow-effect">
              <DownloadIcon className="w-10 h-10 text-primary" />
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-glow">
              Download Materi
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground">
              Unduh materi pembelajaran PHIWM Bab V dalam format PDF untuk dipelajari secara offline
            </p>
          </div>
        </div>
      </header>

      {/* Materials Grid */}
      <main className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {materials.map((material, index) => {
            const Icon = material.icon;
            
            return (
              <Card 
                key={material.id} 
                className="glass-panel border-border hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-${material.color}/10`}>
                      <Icon className={`w-6 h-6 text-${material.color}`} />
                    </div>
                    <span className="text-xs font-medium px-3 py-1 rounded-full glass-panel">
                      {material.format}
                    </span>
                  </div>
                  
                  <CardTitle className="text-xl mb-2">{material.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {material.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                    <span>{material.pages} halaman</span>
                    <span>{material.size}</span>
                  </div>
                  
                  <Button 
                    onClick={() => handleDownload(material.title)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <DownloadIcon className="w-4 h-4 mr-2" />
                    Download Materi
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">Informasi Penggunaan Materi</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-primary/5 rounded-xl">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Format File
                </h3>
                <p className="text-sm text-muted-foreground">
                  Semua materi tersedia dalam format PDF yang dapat dibuka di berbagai perangkat
                  tanpa memerlukan koneksi internet setelah diunduh.
                </p>
              </div>

              <div className="p-6 bg-accent/5 rounded-xl">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Hak Penggunaan
                </h3>
                <p className="text-sm text-muted-foreground">
                  Materi ini dapat digunakan untuk keperluan pembelajaran pribadi dan dakwah.
                  Dilarang memperjualbelikan atau mengubah isi tanpa izin.
                </p>
              </div>

              <div className="p-6 bg-primary/5 rounded-xl">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Pembaruan Materi
                </h3>
                <p className="text-sm text-muted-foreground">
                  Materi akan diperbarui secara berkala sesuai dengan perkembangan kajian dan
                  keputusan Muhammadiyah. Periksa kembali untuk versi terbaru.
                </p>
              </div>

              <div className="p-6 bg-accent/5 rounded-xl">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Bantuan & Dukungan
                </h3>
                <p className="text-sm text-muted-foreground">
                  Jika mengalami kendala dalam mengunduh atau membaca materi, silakan hubungi
                  pengurus Muhammadiyah setempat untuk bantuan.
                </p>
              </div>
            </div>
          </div>

          {/* Study Guide */}
          <div className="mt-8 p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-primary/20">
            <h3 className="text-xl font-semibold mb-4 text-center">Panduan Belajar</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="flex gap-3">
                <span className="text-primary font-bold">1.</span>
                <span>Mulai dengan membaca "PHIWM - Bab V Lengkap" untuk mendapat gambaran menyeluruh</span>
              </p>
              <p className="flex gap-3">
                <span className="text-primary font-bold">2.</span>
                <span>Pelajari setiap sub-bab secara berurutan untuk pemahaman yang sistematis</span>
              </p>
              <p className="flex gap-3">
                <span className="text-primary font-bold">3.</span>
                <span>Diskusikan materi dengan sesama warga Muhammadiyah untuk memperdalam pemahaman</span>
              </p>
              <p className="flex gap-3">
                <span className="text-primary font-bold">4.</span>
                <span>Implementasikan pembelajaran dalam kehidupan sehari-hari secara bertahap</span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Download;
