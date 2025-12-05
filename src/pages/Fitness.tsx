import { AppCard } from "@/components/couple/AppCard";
import { CoupleAvatars } from "@/components/couple/Avatar";
import { ActivityRing } from "@/components/couple/ActivityRing";
import { ProgressBar } from "@/components/couple/ProgressBar";
import { Button } from "@/components/ui/button";
import { Dumbbell, Timer, Flame, Footprints, Play, Calendar, Users } from "lucide-react";

const Fitness = () => {
  const workouts = [
    { icon: "🧘", title: "Morning Yoga", duration: "30 min", calories: 150, time: "7:00 AM" },
    { icon: "🏃", title: "Evening Run", duration: "45 min", calories: 350, time: "6:00 PM" },
    { icon: "💪", title: "Strength Training", duration: "40 min", calories: 280, time: "5:00 PM" },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="max-w-lg mx-auto px-4 pt-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 opacity-0 animate-fade-in-up">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Fitness Together</h1>
            <p className="text-sm text-muted-foreground">Stay active as a couple</p>
          </div>
          <CoupleAvatars
            partner1={{ name: "Sarah" }}
            partner2={{ name: "Mike" }}
            size="md"
          />
        </div>

        {/* Activity Rings */}
        <AppCard variant="gradient" className="mb-4" delay={100}>
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-base font-semibold text-foreground mb-4">Today's Activity</h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-turquoise" />
                  <span className="text-sm text-muted-foreground flex-1">Steps</span>
                  <span className="text-sm font-semibold">8,450 / 10,000</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-happiness" />
                  <span className="text-sm text-muted-foreground flex-1">Calories</span>
                  <span className="text-sm font-semibold">420 / 500</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-mint-dark" />
                  <span className="text-sm text-muted-foreground flex-1">Active Min</span>
                  <span className="text-sm font-semibold">35 / 45</span>
                </div>
              </div>
            </div>
            
            <ActivityRing
              steps={{ current: 8450, goal: 10000 }}
              calories={{ current: 420, goal: 500 }}
              minutes={{ current: 35, goal: 45 }}
              size={140}
            />
          </div>
        </AppCard>

        {/* Partner Comparison */}
        <AppCard className="mb-4" delay={200}>
          <h3 className="text-base font-semibold text-foreground mb-4">Partner Comparison</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-turquoise/10 flex items-center justify-center mx-auto mb-2">
                <span className="text-lg font-bold text-turquoise">S</span>
              </div>
              <p className="font-semibold text-sm">Sarah</p>
              <div className="mt-3 space-y-2">
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <Footprints className="h-3 w-3 text-muted-foreground" />
                    <span>9,200</span>
                  </div>
                  <ProgressBar progress={92} color="turquoise" size="sm" />
                </div>
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <Flame className="h-3 w-3 text-muted-foreground" />
                    <span>480</span>
                  </div>
                  <ProgressBar progress={96} color="happiness" size="sm" />
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-mint/50 flex items-center justify-center mx-auto mb-2">
                <span className="text-lg font-bold text-turquoise-dark">M</span>
              </div>
              <p className="font-semibold text-sm">Mike</p>
              <div className="mt-3 space-y-2">
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <Footprints className="h-3 w-3 text-muted-foreground" />
                    <span>7,700</span>
                  </div>
                  <ProgressBar progress={77} color="turquoise" size="sm" />
                </div>
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <Flame className="h-3 w-3 text-muted-foreground" />
                    <span>360</span>
                  </div>
                  <ProgressBar progress={72} color="happiness" size="sm" />
                </div>
              </div>
            </div>
          </div>
        </AppCard>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3 mb-6 opacity-0 animate-fade-in-up stagger-3">
          <Button variant="gradient" className="h-auto py-4 flex-col gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
              <Play className="h-5 w-5" />
            </div>
            <span>Start Workout Together</span>
          </Button>
          <Button variant="secondary" className="h-auto py-4 flex-col gap-2">
            <div className="w-10 h-10 rounded-xl bg-turquoise/10 flex items-center justify-center">
              <Calendar className="h-5 w-5 text-turquoise" />
            </div>
            <span className="text-foreground">Schedule Workout</span>
          </Button>
        </div>

        {/* Workout Plans */}
        <AppCard delay={400}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Today's Workouts</h3>
            <Button variant="ghost" size="sm" className="text-turquoise">See all</Button>
          </div>
          
          <div className="space-y-3">
            {workouts.map((workout, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 rounded-2xl bg-muted/50 hover:bg-muted transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-card shadow-soft flex items-center justify-center text-2xl">
                  {workout.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm text-foreground">{workout.title}</h4>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Timer className="h-3 w-3" />
                      {workout.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Flame className="h-3 w-3" />
                      {workout.calories} cal
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-muted-foreground">{workout.time}</span>
                  <Button variant="ghost" size="icon-sm" className="ml-2">
                    <Play className="h-4 w-4 text-turquoise" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </AppCard>
      </div>
    </div>
  );
};

export default Fitness;
