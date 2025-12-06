import { AppCard } from "@/components/couple/AppCard";
import { CoupleAvatars } from "@/components/couple/Avatar";
import { HabitCard } from "@/components/couple/HabitCard";
import { ProgressBar } from "@/components/couple/ProgressBar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Moon, Brain, Droplets, BookOpen, Dumbbell, Apple, Plus } from "lucide-react";
import { useState } from "react";

const Habits = () => {
  const { profile, partnerProfile } = useAuth();
  const userName = profile?.full_name?.split(' ')[0] || 'Kamu';
  const partnerName = partnerProfile?.full_name?.split(' ')[0] || 'Pasangan';

  const [habits, setHabits] = useState([
    { icon: Moon, title: "Tidur 8 Jam", progress: 85, streak: 12, completed: true, partner1Progress: 90, partner2Progress: 80, color: "turquoise" as const },
    { icon: Brain, title: "Meditasi", progress: 60, streak: 5, completed: false, partner1Progress: 70, partner2Progress: 50, color: "mint" as const },
    { icon: Droplets, title: "Minum Air", progress: 75, streak: 20, completed: true, partner1Progress: 80, partner2Progress: 70, color: "happiness" as const },
    { icon: BookOpen, title: "Baca Bersama", progress: 40, streak: 3, completed: false, partner1Progress: 50, partner2Progress: 30, color: "accent" as const },
    { icon: Dumbbell, title: "Olahraga", progress: 90, streak: 15, completed: true, partner1Progress: 95, partner2Progress: 85, color: "turquoise" as const },
    { icon: Apple, title: "Makan Sehat", progress: 55, streak: 7, completed: false, partner1Progress: 60, partner2Progress: 50, color: "mint" as const },
  ]);

  const toggleHabit = (index: number) => {
    setHabits(prev => prev.map((h, i) => 
      i === index ? { ...h, completed: !h.completed } : h
    ));
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="max-w-lg mx-auto px-4 pt-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 opacity-0 animate-fade-in-up">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Kebiasaan Bersama</h1>
            <p className="text-sm text-muted-foreground">Bangun kebiasaan bersama</p>
          </div>
          <CoupleAvatars
            partner1={{ name: userName }}
            partner2={{ name: partnerName }}
            size="md"
          />
        </div>

        {/* Progress Overview */}
        <AppCard variant="gradient" className="mb-4" delay={100}>
          <h3 className="text-base font-semibold text-foreground mb-4">Progres Hari Ini</h3>
          
          <div className="grid grid-cols-4 gap-4">
            {[
              { icon: Moon, label: "Tidur", partner1: 90, partner2: 80 },
              { icon: Brain, label: "Pikiran", partner1: 70, partner2: 50 },
              { icon: Droplets, label: "Air", partner1: 80, partner2: 70 },
              { icon: BookOpen, label: "Belajar", partner1: 50, partner2: 30 },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-xl bg-card/50 flex items-center justify-center mb-2">
                  <item.icon className="h-5 w-5 text-turquoise" />
                </div>
                <span className="text-xs font-medium text-foreground mb-2">{item.label}</span>
                <div className="w-full space-y-1">
                  <ProgressBar progress={item.partner1} size="sm" color="turquoise" />
                  <ProgressBar progress={item.partner2} size="sm" color="mint" />
                </div>
              </div>
            ))}
          </div>
        </AppCard>

        {/* Couple Comparison */}
        <AppCard className="mb-4" delay={200}>
          <h3 className="text-base font-semibold text-foreground mb-4">Pencapaian Couple</h3>
          
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-turquoise" />
                  <span className="text-sm font-medium">{userName}</span>
                </div>
                <span className="text-sm font-bold text-turquoise">78%</span>
              </div>
              <ProgressBar progress={78} color="turquoise" size="md" />
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-mint-dark" />
                  <span className="text-sm font-medium">{partnerName}</span>
                </div>
                <span className="text-sm font-bold text-mint-dark">65%</span>
              </div>
              <ProgressBar progress={65} color="mint" size="md" />
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-border">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Rata-rata Gabungan</span>
              <span className="text-lg font-bold text-happiness">71.5%</span>
            </div>
          </div>
        </AppCard>

        {/* Habit List */}
        <div className="mb-6 opacity-0 animate-fade-in-up stagger-3">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-foreground">Kebiasaan Harian</h3>
            <Button variant="ghost" size="sm" className="text-turquoise">Edit</Button>
          </div>
          
          <div className="space-y-3">
            {habits.map((habit, index) => (
              <HabitCard 
                key={habit.title}
                {...habit}
                onToggle={() => toggleHabit(index)}
              />
            ))}
          </div>
        </div>

        {/* Add Habit FAB */}
        <Button 
          className="fixed bottom-24 right-4 w-14 h-14 rounded-full shadow-elevated z-40"
          size="icon-lg"
        >
          <Plus className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default Habits;
