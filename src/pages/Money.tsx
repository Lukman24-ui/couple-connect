import { AppCard } from "@/components/couple/AppCard";
import { CoupleAvatars } from "@/components/couple/Avatar";
import { ProgressRing } from "@/components/couple/ProgressRing";
import { TransactionItem } from "@/components/couple/TransactionItem";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { 
  ArrowDownLeft, 
  ArrowUpRight, 
  ShoppingCart, 
  Utensils, 
  Car, 
  Film,
  Plus,
  TrendingUp,
  PiggyBank,
  Home,
  Plane
} from "lucide-react";

const Money = () => {
  const { profile, partnerProfile } = useAuth();
  const userName = profile?.full_name?.split(' ')[0] || 'Kamu';
  const partnerName = partnerProfile?.full_name?.split(' ')[0] || 'Pasangan';

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const transactions = [
    { icon: ShoppingCart, category: "Belanja", description: "Belanja mingguan di Superindo", amount: 450000, date: "Hari ini", partnerName: userName, type: "expense" as const },
    { icon: Utensils, category: "Makan", description: "Makan malam romantis", amount: 380000, date: "Kemarin", partnerName: partnerName, type: "expense" as const },
    { icon: TrendingUp, category: "Gaji", description: "Penghasilan bulanan", amount: 15000000, date: "1 Des", partnerName: userName, type: "income" as const },
    { icon: Car, category: "Transport", description: "Grab ke kantor", amount: 85000, date: "2 Des", partnerName: partnerName, type: "expense" as const },
    { icon: Film, category: "Hiburan", description: "Tiket bioskop", amount: 150000, date: "2 Des", partnerName: userName, type: "expense" as const },
  ];

  const savingsGoals = [
    { icon: Plane, title: "Liburan Bali", current: 8500000, target: 15000000, color: "turquoise" as const },
    { icon: Home, title: "Dana Rumah", current: 45000000, target: 100000000, color: "mint" as const },
    { icon: PiggyBank, title: "Darurat", current: 12000000, target: 20000000, color: "happiness" as const },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="max-w-lg mx-auto px-4 pt-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 opacity-0 animate-fade-in-up">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Keuangan Bersama</h1>
            <p className="text-sm text-muted-foreground">Kelola uang bersama</p>
          </div>
          <CoupleAvatars
            partner1={{ name: userName }}
            partner2={{ name: partnerName }}
            size="md"
          />
        </div>

        {/* Balance Card */}
        <AppCard variant="gradient" className="mb-4" delay={100}>
          <p className="text-sm text-charcoal/70 mb-1">Total Saldo</p>
          <h2 className="text-3xl font-bold text-turquoise mb-4">{formatCurrency(28500000)}</h2>
          
          <div className="flex gap-4">
            <div className="flex-1 bg-card/50 rounded-2xl p-3">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 rounded-full bg-mint flex items-center justify-center">
                  <ArrowDownLeft className="h-3 w-3 text-turquoise-dark" />
                </div>
                <span className="text-xs text-muted-foreground">Pemasukan</span>
              </div>
              <p className="font-bold text-foreground">{formatCurrency(30000000)}</p>
            </div>
            <div className="flex-1 bg-card/50 rounded-2xl p-3">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center">
                  <ArrowUpRight className="h-3 w-3 text-destructive" />
                </div>
                <span className="text-xs text-muted-foreground">Pengeluaran</span>
              </div>
              <p className="font-bold text-foreground">{formatCurrency(1500000)}</p>
            </div>
          </div>
        </AppCard>

        {/* Spending by Category */}
        <AppCard className="mb-4" delay={200}>
          <h3 className="text-lg font-semibold text-foreground mb-4">Pengeluaran Bulan Ini</h3>
          
          <div className="grid grid-cols-4 gap-3">
            {[
              { icon: Utensils, label: "Makanan", amount: 850000, percent: 35 },
              { icon: Car, label: "Transport", amount: 350000, percent: 15 },
              { icon: ShoppingCart, label: "Belanja", amount: 450000, percent: 20 },
              { icon: Film, label: "Hiburan", amount: 250000, percent: 10 },
            ].map((cat) => (
              <div key={cat.label} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-turquoise/10 flex items-center justify-center mb-2">
                  <cat.icon className="h-5 w-5 text-turquoise" />
                </div>
                <span className="text-xs font-medium text-foreground">{cat.label}</span>
                <span className="text-[10px] text-muted-foreground">{cat.percent}%</span>
              </div>
            ))}
          </div>
        </AppCard>

        {/* Savings Goals */}
        <div className="mb-6 opacity-0 animate-fade-in-up stagger-3">
          <h3 className="text-lg font-semibold text-foreground mb-3">Target Tabungan</h3>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4">
            {savingsGoals.map((goal) => (
              <AppCard key={goal.title} className="min-w-[200px] flex items-center gap-4">
                <ProgressRing 
                  progress={(goal.current / goal.target) * 100} 
                  size={60} 
                  strokeWidth={6} 
                  color={goal.color}
                  showLabel={false}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <goal.icon className="h-4 w-4 text-turquoise" />
                    <span className="font-semibold text-sm">{goal.title}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {formatCurrency(goal.current)}
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    dari {formatCurrency(goal.target)}
                  </p>
                </div>
              </AppCard>
            ))}
          </div>
        </div>

        {/* Transactions */}
        <AppCard delay={400}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Transaksi Terbaru</h3>
            <Button variant="ghost" size="sm" className="text-turquoise">Lihat semua</Button>
          </div>
          
          <div className="space-y-2">
            {transactions.map((tx, index) => (
              <TransactionItem key={index} {...tx} />
            ))}
          </div>
        </AppCard>

        {/* Add Transaction FAB */}
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

export default Money;
