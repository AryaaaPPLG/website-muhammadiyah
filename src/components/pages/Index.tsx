import { BookOpen, History, Lightbulb, FileText, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import ExhibitSection from "@/components/ExhibitSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      <main id="content">
        {/* Pengertian PHIWM */}
        <ExhibitSection
          id="pengertian"
          title="Pengertian PHIWM"
          subtitle="Memahami esensi dan makna Pedoman Hidup Islami Warga Muhammadiyah"
          icon={BookOpen}
        >
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              <strong className="text-primary">Pedoman Hidup Islami Warga Muhammadiyah (PHIWM)</strong> adalah
              seperangkat alat nilai norma islami yang bersumber pada alquran dan as-Sunnah untuk menjadi pola bagi tingkah laku warga Muhammadiyah dalam menjalani kehidupan sehari-hari sehingga tercermin kepribadian islami menuju terwujudnya masyarakat islam yang sebenar-benarnya.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="glass-panel p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-accent flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Tujuan Utama
                </h3>
                <p className="text-muted-foreground">
                  Mewujudkan Masyarakat Islam yang sebenar-benarnya
                </p>
              </div>

              <div className="glass-panel p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-accent flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Landasan Filosofis
                </h3>
                <p className="text-muted-foreground">
                  berlandaskan pada alquran dan as-Sunnah 
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary/5 border-l-4 border-primary rounded-r-xl">
              <p className="italic text-foreground">
                "PHIWM menjadi kompas moral dan spiritual yang membimbing setiap warga Muhammadiyah
                dalam menghadapi dinamika kehidupan modern tanpa kehilangan identitas Islamnya."
              </p>
            </div>
          </div>
        </ExhibitSection>

        {/* Sejarah Perumusan PHIWM */}
        <ExhibitSection
          id="sejarah"
          title="Sejarah Perumusan"
          subtitle="Perjalanan historis penyusunan dan pengembangan PHIWM"
          icon={History}
        >
          <div className="space-y-8">
            <p className="text-lg leading-relaxed">
              Perumusan PHIWM merupakan hasil keputusan Muktamar Muhammadiyah ke - 44 tanggal 8-11 juli 2000 di jakarta. Muktamar ke - 44 di jakarta memiliki nilai sejarahnya tersendiri, karena Muktamar ini dilaksanakan pada masa transisi, yaitu: berakhirnya Pemerintahan Orde Baru dan dimulainya pemerintahan Reformasi. 

              PHIWM ini dirumuskan dengan Pertimbangan dan latar belakang sebagai berikut:
            </p>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>

              <div className="space-y-8 ml-20">
                <div className="glass-panel p-6 rounded-xl">
                  <div className="absolute -left-2 w-4 h-4 bg-primary rounded-full glow-effect"></div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Perumusan Dan Pertimbangan Serta Latar Belakang</h3>
                  <p className="text-sm text-muted-foreground mb-2">Pedoman yang menjadi acuan</p>
                  <p>
                    Kepentingan adanya pedoman yang dijadikan acuan bagi segenap anggota Muhammadiyah dalam kehidupan pribadi, keluarga, organisasi, bermasyarakat, berbangsa, dan bernegara.
                  </p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                  <div className="absolute -left-2 w-4 h-4 bg-accent rounded-full glow-effect"></div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Perubahan Sosial Politik</h3>
                  <p className="text-sm text-muted-foreground mb-2">Perubahan sosial politik pasca reformasi</p>
                  <p>
                    Perubahan sosial politik dalam kehidupan berbangsa dan bernegara pasca reformasi yang pada akhirnya mempengaruhi kehidupan dan dinamika persyarikatan muhammadiyah.
                  </p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                  <div className="absolute -left-2 w-4 h-4 bg-primary rounded-full glow-effect"></div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Pergeseran alam pikiran masyarakat</h3>
                  <p className="text-sm text-muted-foreground mb-2">Pergeseran Alam Pikiran Masyarakat</p>
                  <p>
                    Pergeseran alam pikiran masyarakat yang cenderung pragmatis, materialistic dan hedonistik sebagai bentuk gaya hidup masyarakat modern memasuki era baru abad ke-21.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ExhibitSection>

        {/* Hakikat dan Fungsi PHIWM */}
        <ExhibitSection
          id="hakikat"
          title="Hakikat & Fungsi"
          subtitle="Memahami esensi dan peran PHIWM dalam kehidupan warga Muhammadiyah"
          icon={Lightbulb}
        >
          <div className="space-y-10 ">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Hakikat PHIWM</h3>
              <p className="text-lg leading-relaxed mb-6">
                Landasan dan sumber PHIWM adalah Alquran dan as-Sunnah Nabi Muhammad Saw yang merupakan pengembangan dan pengayaan dari pemikiran-pemikiran baku dalam muhammadiyah seperti MKCH Muhammadiyah, Muqadimah Anggaran Dasar (MAD) Muhammadiyah, Matan Kepribadian Muhammadiyah, Khittah Perjuangan Muhammadiyah, serta hasil keputusan-keputusan Majelis Tarjih Muhammadiyah.
              </p>

            <div className="flex mx-auto justify-center">
              <div className=" gap-6">
                <div className="text-center p-6 glass-panel rounded-xl">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🕌</span>
                  </div>
                  <h4 className="font-semibold mb-2">Tujuan dari PHIWM</h4>
                  <p className="text-sm text-muted-foreground">
                    Tujuan dari PHIWM adalah terbentuknya perilaku individu dan kolektif seluruh anggota Muhammadiyah yang menunjukkan keteladanan yang baik (uswatun hasanah) menuju terwujudnya Masyarakat Islam yang sebenar-benarnya.
                  </p>
                </div>

  </div>
  </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Fungsi PHIWM</h3>
              
              <div className="space-y-4">
                {[
                  {
                    number: "01",
                    title: "Hal-Hal Pokok",
                    desc: "Mengandung hal-hal pokok atau prinsip dan penting dalam bentuk acuan nilai dan norma"
                  },
                  {
                    number: "02",
                    title: "Khazanah",
                    desc: "Bersifat pengayaan dalam arti  banyak khazanah untuk membentuk keluhuran dan kemuliaan ruhani dan tindakan"
                  },
                  {
                    number: "03",
                    title: "Aktual",
                    desc: "Aktual, yakni memiliki keterkaitan dengan tuntunan dan kepentingan kehidupan sehari-hari"
                  },
                  {
                    number: "04",
                    title: "Filter Budaya",
                    desc: "Menyaring nilai-nilai budaya yang sesuai dengan ajaran Islam"
                  }
                ].map((item, index) => (
                  <div key={index} className="glass-panel p-6 rounded-xl flex gap-6 items-start">
                    <div className="text-4xl font-display font-bold text-primary/30">
                      {item.number}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ExhibitSection>

        {/* Matan PHIWM */}
        <ExhibitSection
          id="matan"
          title="Matan PHIWM"
          subtitle="Naskah inti dan pokok-pokok ajaran PHIWM"
          icon={FileText}
        >
          <div className="space-y-8">
            <div className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-primary/20">
              <h3 className="text-2xl font-semibold mb-6 text-center">Pokok-Pokok Ajaran</h3>
              
              <div className="space-y-6">
                <div className="glass-panel p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3 text-primary flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm">1</span>
                    Aqidah
                  </h4>
                  <p className="ml-10 text-muted-foreground">
                    Beriman kepada Allah, Malaikat, Kitab-kitab, Rasul-rasul, Hari Akhir, dan Qada serta Qadar
                    dengan pemahaman yang murni berdasarkan Al-Qur'an dan As-Sunnah.
                  </p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3 text-primary flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm">2</span>
                    Ibadah
                  </h4>
                  <p className="ml-10 text-muted-foreground">
                    Melaksanakan ibadah wajib dan sunnah sesuai tuntunan Rasulullah SAW, termasuk shalat,
                    puasa, zakat, haji, dan berbagai bentuk ibadah lainnya.
                  </p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3 text-primary flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm">3</span>
                    Akhlak
                  </h4>
                  <p className="ml-10 text-muted-foreground">
                    Menghiasi diri dengan akhlak mulia, berperilaku jujur, amanah, ikhlas, sabar, syukur,
                    tawadhu, dan sifat-sifat terpuji lainnya.
                  </p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3 text-primary flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm">4</span>
                    Muamalah
                  </h4>
                  <p className="ml-10 text-muted-foreground">
                    Mengatur hubungan sosial dan ekonomi berdasarkan prinsip keadilan, kejujuran, dan saling
                    menguntungkan sesuai syariat Islam.
                  </p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3 text-primary flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm">5</span>
                    Kemasyarakatan
                  </h4>
                  <p className="ml-10 text-muted-foreground">
                    Berperan aktif dalam pembangunan masyarakat, dakwah, pendidikan, dan amal sosial
                    untuk mewujudkan masyarakat Islam yang sebenar-benarnya.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-accent/5 border-l-4 border-accent rounded-r-xl">
              <p className="text-sm text-muted-foreground mb-2">Catatan Penting:</p>
              <p className="italic">
                "Implementasi PHIWM harus dilakukan secara konsisten dan berkelanjutan dalam seluruh
                aspek kehidupan, dengan tetap memperhatikan konteks zaman dan tempat, namun tidak
                mengorbankan prinsip-prinsip dasar ajaran Islam."
              </p>
            </div>
          </div>
        </ExhibitSection>
      </main>

      {/* Download CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="exhibit-card text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 glass-panel rounded-2xl mb-6">
              <Download className="w-8 h-8 text-accent" />
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Download Materi Pembelajaran
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Unduh seluruh materi PHIWM Bab V dalam format PDF untuk dipelajari kapan saja dan dimana saja
            </p>
            
            <Link to="/download">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6">
                <Download className="w-5 h-5 mr-2" />
                Lihat Materi Download
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-panel py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <h3 className="font-display text-2xl font-bold text-primary mb-2">PHIWM</h3>
            <p className="text-muted-foreground">
              Pedoman Hidup Islami Warga Muhammadiyah
            </p>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto my-6"></div>
          <p className="text-sm text-muted-foreground">
            Museum Digital Kemuhamadiyahan © 2025
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
