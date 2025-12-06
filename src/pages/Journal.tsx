import { AppCard } from "@/components/couple/AppCard";
import { CoupleAvatars } from "@/components/couple/Avatar";
import { EmotionBars } from "@/components/couple/EmotionBar";
import { ProgressRing } from "@/components/couple/ProgressRing";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Plus, Heart, Sparkles, Calendar, ChevronRight } from "lucide-react";

const Journal = () => {
  const { profile, partnerProfile } = useAuth();
  const userName = profile?.full_name?.split(' ')[0] || 'Kamu';
  const partnerName = partnerProfile?.full_name?.split(' ')[0] || 'Pasangan';

  const emotions = [
    { label: "Bahagia", value: 48, color: "happiness" as const },
    { label: "Sedih", value: 33, color: "muted" as const },
    { label: "Tenang", value: 27, color: "mint" as const },
    { label: "Cemas", value: 40, color: "accent" as const },
  ];

  const journalEntries = [
    {
      date: "Hari ini",
      title: "Pagi yang Penuh Syukur",
      preview: "Bangun dengan perasaan bersyukur memiliki satu sama lain...",
      tags: ["Syukur", "Pagi"],
      mood: "😊",
      partner: userName
    },
    {
      date: "Kemarin",
      title: "Refleksi Malam Romantis",
      preview: "Makan malam yang luar biasa di restoran favorit kita...",
      tags: ["Kencan", "Cinta"],
      mood: "🥰",
      partner: partnerName
    },
    {
      date: "2 Des",
      title: "Merencanakan Masa Depan",
      preview: "Kami berbicara tentang mimpi dan tujuan untuk tahun depan...",
      tags: ["Tujuan", "Masa Depan"],
      mood: "✨",
      partner: "Berdua"
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="max-w-lg mx-auto px-4 pt-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 opacity-0 animate-fade-in-up">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Jurnal Ku</h1>
            <p className="text-sm text-muted-foreground">Lacak mood bersama</p>
          </div>
          <CoupleAvatars
            partner1={{ name: userName }}
            partner2={{ name: partnerName }}
            size="md"
          />
        </div>

        {/* Mood Score */}
        <AppCard variant="elevated" className="mb-4 text-center" delay={100}>
          <h2 className="text-6xl font-bold text-foreground mb-2">420</h2>
          <p className="text-muted-foreground mb-4">Rayakan apa yang membuatmu tersenyum hari ini.</p>
          
          <div className="flex items-center justify-center gap-2 mb-2">
            <Heart className="h-4 w-4 text-turquoise" fill="currentColor" />
            <span className="text-sm font-medium">Sinkronisasi Mood Couple: 85%</span>
          </div>
          <ProgressRing progress={85} size={48} strokeWidth={4} color="turquoise" showLabel={false} className="mx-auto" />
        </AppCard>

        {/* Emotions */}
        <AppCard className="mb-4" delay={200}>
          <h3 className="text-base font-semibold text-foreground mb-2">Emosi</h3>
          <p className="text-sm text-muted-foreground mb-4">Berikut empat emosi inti untuk jurnalmu</p>
          
          <EmotionBars emotions={emotions} />
        </AppCard>

        {/* Gratitude Section */}
        <div className="grid grid-cols-2 gap-3 mb-6 opacity-0 animate-fade-in-up stagger-3">
          <AppCard className="bg-mint/30">
            <Sparkles className="h-5 w-5 text-turquoise mb-2" />
            <h4 className="font-semibold text-sm mb-1">Syukur {userName}</h4>
            <p className="text-xs text-muted-foreground">"Aku bersyukur untuk ritual kopi pagi kita bersama"</p>
          </AppCard>
          <AppCard className="bg-happiness/10">
            <Sparkles className="h-5 w-5 text-happiness mb-2" />
            <h4 className="font-semibold text-sm mb-1">Syukur {partnerName}</h4>
            <p className="text-xs text-muted-foreground">"Terima kasih atas dukungannya selama proyekku"</p>
          </AppCard>
        </div>

        {/* Journal Entries */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-foreground">Entri Terbaru</h3>
            <Button variant="ghost" size="sm" className="text-turquoise">Lihat semua</Button>
          </div>
          
          <div className="space-y-3">
            {journalEntries.map((entry, index) => (
              <AppCard key={index} className="hover:shadow-elevated transition-all cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-turquoise/10 flex items-center justify-center text-xl">
                    {entry.mood}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-sm text-foreground">{entry.title}</h4>
                      <span className="text-xs text-muted-foreground">• {entry.date}</span>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-1 mb-2">{entry.preview}</p>
                    <div className="flex items-center gap-2">
                      {entry.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-full bg-mint/50 text-[10px] font-medium text-turquoise-dark"
                        >
                          {tag}
                        </span>
                      ))}
                      <span className="text-[10px] text-muted-foreground ml-auto">{entry.partner}</span>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </AppCard>
            ))}
          </div>
        </div>

        {/* Create Journal Button */}
        <Button className="w-full" variant="happiness" size="lg">
          <Plus className="h-5 w-5 mr-2" />
          Buat Jurnal Bersama
        </Button>
      </div>
    </div>
  );
};

export default Journal;
