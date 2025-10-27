import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Github } from "lucide-react";

const Members = () => {
  const members = [
    {
      name: "Reynaldo Septian Nasrullah",
      role: "Ketua Kelompok",
      nim: "2024001",
      email: "repan1@example.com",
      expertise: ["Mengerjakan Sub Bab 1", "Penyusunan Materi"],
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad"
    },
    {
      name: "Arya Prana Jaya",
      role: "UI",
      nim: "2024002",
      email: "repan2@example.com",
      expertise: ["Mengerjakan Sub Bab 2", "Mengerjakan Design"],
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad"
    },
    {
      name: "Mas Hadi Wijaya",
      role: "UX",
      nim: "2024003",
      email: "repan3@example.com",
      expertise: ["Mengerjakan Sub Bab 3", "Mengerjakan Backend"],
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad"
    },
    {
      name: "Danon Putra Wardani",
      role: "Merangkum Materi",
      nim: "2024004",
      email: "repan4@example.com",
      expertise: ["Merangkum Semua Materi Terkait PHIWM", "Rangkuman"],
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad"
    },
    {
      name: "Ahmad Raihan Zauqi",
      role: "Persiapan Component",
      nim: "2024005",
      email: "repan5@example.com",
      expertise: ["Mengerjakan Sub Bab 4", "Menyediakan Gambar Atau Component Yang diperlukan"],
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern-bg.jpg')] opacity-5 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 text-sm px-4 py-2 glass-panel border-accent/30" variant="outline">
              Tim Pembuatan Website Museum Muhammadiyah (PHIWM)
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Anggota Kelompok
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Tim yang berdedikasi untuk menyusun dan mengembangkan Museum Digital PHIWM
            </p>
          </div>
        </div>
      </section>

      {/* Members Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {members.map((member, index) => (
              <Card 
                key={index} 
                className="glass-panel border-accent/20 hover:border-accent/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-accent/30 group-hover:border-accent/60 transition-all duration-300 shadow-glow">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-2xl font-display mb-2">{member.name}</CardTitle>
                  <Badge className="mb-2 bg-accent/20 text-accent border-accent/30" variant="outline">
                    {member.role}
                  </Badge>
                  <CardDescription className="text-sm font-mono">
                    NIM: {member.nim}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Expertise */}
                  <div>
                    <p className="text-20 font-semibold text-muted-foreground mb-2">Daftar Kerja:</p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, idx) => (
                        <Badge 
                          key={idx} 
                          variant="secondary" 
                          className="text-20 font-bold bg-secondary/50 hover:bg-secondary/70"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="pt-4 border-t border-accent/20">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
                      <Mail className="w-4 h-4" />
                      <a href={`mailto:${member.email}`} className="truncate">
                        {member.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Info Section */}
      <section className="py-20 border-t border-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-panel border-accent/20">
              <CardHeader>
                <CardTitle className="text-3xl font-display text-center">Tentang Tim Kami</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                <p className="leading-relaxed">
                  Tim kami terdiri dari siswa yang memiliki rasa ingin tahu dalam mempelajari dan 
                  mengembangkan pemahaman tentang Pedoman Hidup Islami Warga Muhammadiyah (PHIWM). 
                  Kami berkolaborasi untuk menyajikan 
                  informasi yang akurat dan mudah dipahami.
                </p>
                <p className="leading-relaxed">
                  Proyek Museum Digital PHIWM ini merupakan wujud dari komitmen kami untuk 
                  melestarikan dan menyebarluaskan nilai-nilai Islami yang terkandung dalam PHIWM 
                  kepada generasi muda melalui platform digital yang modern dan interaktif.
                </p>
                <div className="pt-6 flex justify-center gap-4">
                  <Badge variant="outline" className="text-sm px-4 py-2 bg-primary/10 border-primary/30">
                    5 Anggota Aktif
                  </Badge>
                  <Badge variant="outline" className="text-sm px-4 py-2 bg-accent/10 border-accent/30">
                    Berbagai Keahlian Namun Satu Pendapat
                  </Badge>
                  <Badge variant="outline" className="text-sm px-4 py-2 bg-secondary/50 border-secondary">
                    Satu Tujuan
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Members;