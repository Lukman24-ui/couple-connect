import { AppCard } from "@/components/couple/AppCard";
import { CoupleAvatar } from "@/components/couple/Avatar";
import { ProgressRing } from "@/components/couple/ProgressRing";
import { Button } from "@/components/ui/button";
import { 
  Bell, 
  DollarSign, 
  Palette, 
  RefreshCw, 
  ChevronRight, 
  Heart,
  Settings,
  LogOut,
  Shield,
  HelpCircle,
  Moon,
  Dumbbell,
  Target,
  BookHeart
} from "lucide-react";

const Profile = () => {
  const stats = [
    { icon: BookHeart, label: "Mood", value: 85, color: "turquoise" as const },
    { icon: Target, label: "Habits", value: 78, color: "mint" as const },
    { icon: Dumbbell, label: "Fitness", value: 92, color: "happiness" as const },
  ];

  const settings = [
    { icon: Bell, label: "Notifications", value: "On" },
    { icon: DollarSign, label: "Currency Format", value: "IDR (Rp)" },
    { icon: Palette, label: "Theme", value: "Turquoise" },
    { icon: RefreshCw, label: "Data Sync", value: "Auto" },
  ];

  const moreOptions = [
    { icon: Shield, label: "Privacy & Security" },
    { icon: HelpCircle, label: "Help & Support" },
    { icon: Moon, label: "Dark Mode", toggle: true },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="max-w-lg mx-auto px-4 pt-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 opacity-0 animate-fade-in-up">
          <h1 className="text-2xl font-bold text-foreground">Profile</h1>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5 text-muted-foreground" />
          </Button>
        </div>

        {/* Profile Card */}
        <AppCard variant="gradient" className="mb-4 text-center" delay={100}>
          <div className="relative inline-block mb-4">
            <CoupleAvatar name="Sarah Johnson" size="xl" ring />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-mint flex items-center justify-center">
              <Heart className="h-3 w-3 text-turquoise-dark" fill="currentColor" />
            </div>
          </div>
          
          <h2 className="text-xl font-bold text-foreground mb-1">Sarah Johnson</h2>
          <p className="text-sm text-muted-foreground mb-3">sarah.johnson@email.com</p>
          
          <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-turquoise/10 inline-flex">
            <Heart className="h-4 w-4 text-turquoise" fill="currentColor" />
            <span className="text-sm font-medium text-turquoise">Linked with Mike 💙</span>
          </div>
        </AppCard>

        {/* Stats */}
        <AppCard className="mb-4" delay={200}>
          <h3 className="text-base font-semibold text-foreground mb-4">Your Stats</h3>
          
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <ProgressRing
                  progress={stat.value}
                  size={64}
                  strokeWidth={6}
                  color={stat.color}
                  showLabel={false}
                />
                <div className="mt-2 text-center">
                  <p className="text-lg font-bold text-foreground">{stat.value}%</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </AppCard>

        {/* Settings */}
        <AppCard className="mb-4" delay={300}>
          <h3 className="text-base font-semibold text-foreground mb-4">Settings</h3>
          
          <div className="space-y-1">
            {settings.map((setting) => (
              <button
                key={setting.label}
                className="w-full flex items-center gap-3 p-3 rounded-2xl hover:bg-muted/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-turquoise/10 flex items-center justify-center">
                  <setting.icon className="h-5 w-5 text-turquoise" />
                </div>
                <span className="flex-1 text-left text-sm font-medium text-foreground">
                  {setting.label}
                </span>
                <span className="text-sm text-muted-foreground">{setting.value}</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </button>
            ))}
          </div>
        </AppCard>

        {/* More Options */}
        <AppCard className="mb-4" delay={400}>
          <h3 className="text-base font-semibold text-foreground mb-4">More</h3>
          
          <div className="space-y-1">
            {moreOptions.map((option) => (
              <button
                key={option.label}
                className="w-full flex items-center gap-3 p-3 rounded-2xl hover:bg-muted/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                  <option.icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <span className="flex-1 text-left text-sm font-medium text-foreground">
                  {option.label}
                </span>
                {option.toggle ? (
                  <div className="w-10 h-6 rounded-full bg-muted relative">
                    <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-card shadow-sm" />
                  </div>
                ) : (
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                )}
              </button>
            ))}
          </div>
        </AppCard>

        {/* Logout */}
        <Button variant="outline" className="w-full border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground">
          <LogOut className="h-4 w-4 mr-2" />
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default Profile;
