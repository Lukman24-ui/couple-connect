import { AppCard } from "@/components/couple/AppCard";
import { CoupleAvatars } from "@/components/couple/Avatar";
import { WeekCalendar } from "@/components/couple/WeekCalendar";
import { QuickAction } from "@/components/couple/QuickAction";
import { StatCard } from "@/components/couple/StatCard";
import { ProgressBar } from "@/components/couple/ProgressBar";
import { SunIllustration, LandscapeIllustration } from "@/components/couple/SunIllustration";
import { Wallet, Target, Dumbbell, BookHeart, Footprints, PiggyBank, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="max-w-lg mx-auto px-4 pt-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 opacity-0 animate-fade-in-up">
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Hi, Sarah & Mike 💙
            </h1>
            <p className="text-sm text-muted-foreground">Let's make today amazing together</p>
          </div>
          <CoupleAvatars
            partner1={{ name: "Sarah" }}
            partner2={{ name: "Mike" }}
            size="md"
          />
        </div>

        {/* Week Calendar */}
        <AppCard className="mb-4" delay={100}>
          <WeekCalendar />
        </AppCard>

        {/* Daily Overview Card */}
        <AppCard variant="sunset" className="mb-4 overflow-hidden relative" delay={200}>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-sm font-medium text-charcoal/70 mb-1">My Journal</h3>
              <h2 className="text-xl font-bold text-charcoal mb-2">Let's start your day</h2>
              <p className="text-sm text-charcoal/70">Begin with a mindful morning reflection together.</p>
            </div>
            <div className="relative -mr-2 -mt-2">
              <SunIllustration />
            </div>
          </div>
          <div className="mt-4 h-20 -mx-5 -mb-5">
            <LandscapeIllustration />
          </div>
        </AppCard>

        {/* Quick Actions */}
        <div className="mb-6 opacity-0 animate-fade-in-up stagger-3">
          <h3 className="text-lg font-semibold text-foreground mb-3">Shared Quick Actions</h3>
          <div className="grid grid-cols-4 gap-2">
            <QuickAction icon={Wallet} label="Add Expense" color="turquoise" />
            <QuickAction icon={Target} label="Track Habit" color="mint" />
            <QuickAction icon={Dumbbell} label="Workout" color="happiness" />
            <QuickAction icon={BookHeart} label="Journal" color="accent" />
          </div>
        </div>

        {/* Stats Preview */}
        <AppCard delay={400}>
          <h3 className="text-lg font-semibold text-foreground mb-4">Today's Overview</h3>
          
          <div className="space-y-4">
            <StatCard
              icon={Footprints}
              value="12,450"
              label="Combined Steps"
              trend={{ value: 15, positive: true }}
              color="turquoise"
            />
            
            <div className="pt-2">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <PiggyBank className="h-4 w-4 text-mint-dark" />
                  <span className="text-sm font-medium">Savings Goal</span>
                </div>
                <span className="text-sm font-bold text-turquoise">Rp 2.500.000</span>
              </div>
              <ProgressBar progress={65} color="mint" size="md" />
              <p className="text-xs text-muted-foreground mt-1">65% of Rp 4.000.000 monthly goal</p>
            </div>
            
            <div className="pt-2">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-happiness" />
                  <span className="text-sm font-medium">Habits Completed</span>
                </div>
                <span className="text-sm font-bold text-happiness">8/10</span>
              </div>
              <ProgressBar progress={80} color="happiness" size="md" />
              <p className="text-xs text-muted-foreground mt-1">Great job! 2 more habits to go</p>
            </div>
          </div>
        </AppCard>

        {/* Quick Journal Cards */}
        <div className="mt-6 opacity-0 animate-fade-in-up stagger-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-foreground">Quick Journal</h3>
            <Button variant="ghost" size="sm" className="text-turquoise">See all</Button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4">
            <div className="min-w-[160px] p-4 rounded-3xl bg-mint/30 shadow-soft">
              <span className="text-xl mb-2 block">🌱</span>
              <h4 className="font-semibold text-sm text-foreground mb-1">Pause & reflect</h4>
              <p className="text-xs text-muted-foreground mb-3">What are you grateful for today?</p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Today</span>
                <span className="px-2 py-0.5 rounded-full bg-mint text-xs font-medium text-turquoise-dark">Personal</span>
              </div>
            </div>
            <div className="min-w-[160px] p-4 rounded-3xl bg-happiness/10 shadow-soft">
              <span className="text-xl mb-2 block">😊</span>
              <h4 className="font-semibold text-sm text-foreground mb-1">Set Intentions</h4>
              <p className="text-xs text-muted-foreground mb-3">How do you want to feel?</p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Today</span>
                <span className="px-2 py-0.5 rounded-full bg-happiness/20 text-xs font-medium text-happiness">Family</span>
              </div>
            </div>
            <div className="min-w-[160px] p-4 rounded-3xl bg-turquoise/10 shadow-soft">
              <span className="text-xl mb-2 block">💑</span>
              <h4 className="font-semibold text-sm text-foreground mb-1">Couple Check-in</h4>
              <p className="text-xs text-muted-foreground mb-3">How are we doing?</p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Today</span>
                <span className="px-2 py-0.5 rounded-full bg-turquoise/20 text-xs font-medium text-turquoise">Together</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
