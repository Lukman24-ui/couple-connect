import { AppCard } from "@/components/couple/AppCard";
import { CoupleAvatars } from "@/components/couple/Avatar";
import { GoalCard } from "@/components/couple/GoalCard";
import { MilestoneTimeline, defaultMilestones } from "@/components/couple/MilestoneTimeline";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { 
  Plane, 
  Home, 
  Dumbbell, 
  GraduationCap, 
  Trophy,
  Star,
  Plus,
  CheckCircle2,
  Target
} from "lucide-react";

const Goals = () => {
  const { profile, partnerProfile } = useAuth();
  const userName = profile?.full_name?.split(' ')[0] || 'Kamu';
  const partnerName = partnerProfile?.full_name?.split(' ')[0] || 'Pasangan';

  const goals = [
    {
      icon: Plane,
      title: "Liburan Impian",
      description: "Menabung untuk trip Bali bersama",
      progress: 57,
      target: "Rp 15.000.000",
      current: "Rp 8.500.000",
      color: "turquoise" as const,
    },
    {
      icon: Home,
      title: "Dana Rumah",
      description: "Uang muka untuk rumah pertama kita",
      progress: 45,
      target: "Rp 100.000.000",
      current: "Rp 45.000.000",
      color: "mint" as const,
    },
    {
      icon: Dumbbell,
      title: "Tantangan Kebugaran",
      description: "Selesaikan 30 hari olahraga bersama",
      progress: 73,
      target: "30 hari",
      current: "22 hari",
      color: "happiness" as const,
    },
    {
      icon: GraduationCap,
      title: "Belajar Bersama",
      description: "Selesaikan kursus online sebagai pasangan",
      progress: 35,
      target: "12 modul",
      current: "4 modul",
      color: "accent" as const,
    },
  ];

  const bucketList = [
    { title: "Lihat sunset di Santorini", completed: false },
    { title: "Masak makanan 5 hidangan bersama", completed: true },
    { title: "Belajar menari salsa", completed: false },
    { title: "Adopsi hewan peliharaan", completed: true },
    { title: "Lari maraton bersama", completed: false },
  ];

  const badges = [
    { icon: Trophy, title: "Tujuan Pertama", earned: true },
    { icon: Star, title: "Master Streak", earned: true },
    { icon: Target, title: "Penabung Hebat", earned: true },
    { icon: CheckCircle2, title: "Pahlawan Kebiasaan", earned: false },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="max-w-lg mx-auto px-4 pt-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 animate-fade-in-up">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Tujuan Couple</h1>
            <p className="text-sm text-muted-foreground">Tumbuh bersama, raih bersama</p>
          </div>
          <CoupleAvatars
            partner1={{ name: userName }}
            partner2={{ name: partnerName }}
            size="md"
          />
        </div>

        {/* Milestone Timeline */}
        <AppCard variant="gradient" className="mb-4" delay={100}>
          <h3 className="text-base font-semibold text-foreground mb-4">Perjalanan Kita 💕</h3>
          <MilestoneTimeline milestones={defaultMilestones} />
        </AppCard>

        {/* Goals */}
        <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-foreground">Tujuan Aktif</h3>
            <Button variant="ghost" size="sm" className="text-turquoise">Lihat semua</Button>
          </div>
          
          <div className="space-y-3">
            {goals.map((goal) => (
              <GoalCard key={goal.title} {...goal} />
            ))}
          </div>
        </div>

        {/* Bucket List */}
        <AppCard className="mb-4" delay={300}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold text-foreground">Bucket List Bersama</h3>
            <Button variant="ghost" size="icon-sm">
              <Plus className="h-4 w-4 text-turquoise" />
            </Button>
          </div>
          
          <div className="space-y-2">
            {bucketList.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-2 rounded-xl hover:bg-muted/50 transition-colors"
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    item.completed
                      ? "bg-turquoise text-primary-foreground"
                      : "border-2 border-border"
                  }`}
                >
                  {item.completed && <CheckCircle2 className="h-4 w-4" />}
                </div>
                <span
                  className={`text-sm ${
                    item.completed ? "text-muted-foreground line-through" : "text-foreground"
                  }`}
                >
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </AppCard>

        {/* Achievement Badges */}
        <AppCard delay={400}>
          <h3 className="text-base font-semibold text-foreground mb-4">Lencana Penghargaan</h3>
          
          <div className="grid grid-cols-4 gap-3">
            {badges.map((badge) => (
              <div
                key={badge.title}
                className="flex flex-col items-center gap-2"
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                    badge.earned
                      ? "bg-happiness/10"
                      : "bg-muted"
                  }`}
                >
                  <badge.icon
                    className={`h-6 w-6 ${
                      badge.earned ? "text-happiness" : "text-muted-foreground"
                    }`}
                  />
                </div>
                <span className="text-[10px] font-medium text-center text-muted-foreground">
                  {badge.title}
                </span>
              </div>
            ))}
          </div>
        </AppCard>
      </div>
    </div>
  );
};

export default Goals;
