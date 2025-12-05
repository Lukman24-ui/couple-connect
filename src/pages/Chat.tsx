import { AppCard } from "@/components/couple/AppCard";
import { CoupleAvatar } from "@/components/couple/Avatar";
import { ChatBubble } from "@/components/couple/ChatBubble";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Heart, Smile, Bell, Image, Mic } from "lucide-react";
import { useState } from "react";

const Chat = () => {
  const [message, setMessage] = useState("");

  const messages = [
    { message: "Good morning love! ☀️", time: "8:00 AM", isOwn: false, senderName: "Sarah" },
    { message: "Morning! Did you sleep well?", time: "8:02 AM", isOwn: true },
    { message: "Yes! Ready for our morning walk?", time: "8:03 AM", isOwn: false, senderName: "Sarah" },
    { message: "Absolutely! Let me just finish my coffee ☕", time: "8:05 AM", isOwn: true },
    { message: "Don't forget we have dinner with my parents tonight!", time: "8:10 AM", isOwn: false, senderName: "Sarah" },
    { message: "Already on my calendar! I got them a nice bottle of wine 🍷", time: "8:12 AM", isOwn: true },
    { message: "You're the best! 🥰", time: "8:13 AM", isOwn: false, senderName: "Sarah" },
  ];

  const quickStickers = ["❤️", "😘", "🥰", "💕", "✨", "🙌"];

  const reminders = [
    { title: "Date Night", time: "Tonight, 7:00 PM", icon: "💑" },
    { title: "Grocery Shopping", time: "Tomorrow, 10:00 AM", icon: "🛒" },
  ];

  return (
    <div className="min-h-screen bg-background pb-24 flex flex-col">
      <div className="max-w-lg mx-auto px-4 pt-6 flex-1 flex flex-col w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 opacity-0 animate-fade-in-up">
          <div className="flex items-center gap-3">
            <CoupleAvatar name="Sarah" size="lg" ring />
            <div>
              <h1 className="text-lg font-bold text-foreground">Sarah 💕</h1>
              <p className="text-xs text-mint-dark">Online • Last seen just now</p>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5 text-muted-foreground" />
          </Button>
        </div>

        {/* Shared Reminders */}
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2 -mx-4 px-4 opacity-0 animate-fade-in-up stagger-1">
          {reminders.map((reminder, index) => (
            <div
              key={index}
              className="min-w-[160px] px-3 py-2 rounded-2xl bg-mint/30 flex items-center gap-2"
            >
              <span className="text-lg">{reminder.icon}</span>
              <div>
                <p className="text-xs font-semibold text-foreground">{reminder.title}</p>
                <p className="text-[10px] text-muted-foreground">{reminder.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-3 mb-4 -mx-4 px-4">
          {messages.map((msg, index) => (
            <ChatBubble key={index} {...msg} />
          ))}
        </div>

        {/* Quick Stickers */}
        <div className="flex items-center gap-2 mb-3">
          {quickStickers.map((sticker, index) => (
            <button
              key={index}
              className="w-10 h-10 rounded-xl bg-muted hover:bg-mint/30 flex items-center justify-center text-lg transition-all hover:scale-110"
            >
              {sticker}
            </button>
          ))}
        </div>

        {/* Encouragement Button */}
        <Button variant="mint" className="w-full mb-3">
          <Heart className="h-4 w-4 mr-2" fill="currentColor" />
          Send Encouragement
        </Button>

        {/* Input */}
        <div className="flex items-center gap-2 p-2 bg-card rounded-3xl shadow-card">
          <Button variant="ghost" size="icon-sm">
            <Image className="h-5 w-5 text-muted-foreground" />
          </Button>
          <Input
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 border-0 bg-transparent focus-visible:ring-0 text-sm"
          />
          <Button variant="ghost" size="icon-sm">
            <Smile className="h-5 w-5 text-muted-foreground" />
          </Button>
          <Button variant="ghost" size="icon-sm">
            <Mic className="h-5 w-5 text-muted-foreground" />
          </Button>
          <Button size="icon-sm" className="rounded-full">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
