import { motion, PanInfo } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface Opinion {
  id: string;
  author: {
    name: string;
    avatar?: string;
    role: string;
  };
  content: string;
  topic: string;
  tags: string[];
  timestamp: string;
  isCreator?: boolean;
  likes: number;
  replies: number;
}

interface DiscussionCardProps {
  opinion: Opinion;
  onSwipeHorizontal: (direction: "left" | "right") => void;
  onSwipeVertical: (direction: "up" | "down") => void;
  className?: string;
}

export const DiscussionCard = ({ 
  opinion, 
  onSwipeHorizontal, 
  onSwipeVertical,
  className = "" 
}: DiscussionCardProps) => {
  const handleDragEnd = (_: any, info: PanInfo) => {
    const threshold = 100;
    const velocity = 0.3;

    if (Math.abs(info.offset.x) > threshold || Math.abs(info.velocity.x) > velocity * 1000) {
      onSwipeHorizontal(info.offset.x > 0 ? "right" : "left");
    } else if (Math.abs(info.offset.y) > threshold || Math.abs(info.velocity.y) > velocity * 1000) {
      onSwipeVertical(info.offset.y > 0 ? "down" : "up");
    }
  };

  return (
    <motion.div
      className={`relative w-full max-w-sm mx-auto ${className}`}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.2}
      onDragEnd={handleDragEnd}
      whileDrag={{ scale: 1.05, rotate: Math.random() * 6 - 3 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-6 shadow-card border border-white/10 h-[500px] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src={opinion.author.avatar} />
              <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                {opinion.author.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-card-foreground">{opinion.author.name}</h3>
              <p className="text-sm text-muted-foreground">{opinion.author.role}</p>
            </div>
          </div>
          {opinion.isCreator && (
            <Badge variant="default" className="bg-accent text-accent-foreground">
              개설자
            </Badge>
          )}
        </div>

        {/* Topic */}
        <div className="mb-4">
          <h2 className="text-lg font-bold text-card-foreground mb-2">{opinion.topic}</h2>
        </div>

        {/* Content */}
        <div className="flex-1 mb-4">
          <p className="text-card-foreground leading-relaxed">{opinion.content}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {opinion.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              #{tag}
            </Badge>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{opinion.timestamp}</span>
          <div className="flex items-center space-x-4">
            <span>👍 {opinion.likes}</span>
            <span>💬 {opinion.replies}</span>
          </div>
        </div>

        {/* Swipe Indicators */}
        <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-between px-4 pointer-events-none">
          <div className="w-2 h-8 bg-primary/20 rounded-full" />
          <div className="w-2 h-8 bg-accent/20 rounded-full" />
        </div>
        
        <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 flex flex-col justify-between py-4 pointer-events-none">
          <div className="w-8 h-2 bg-secondary/20 rounded-full" />
          <div className="w-8 h-2 bg-muted/20 rounded-full" />
        </div>
      </div>
    </motion.div>
  );
};