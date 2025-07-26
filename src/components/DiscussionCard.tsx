import { motion, PanInfo } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { MessageCircle, Heart } from "lucide-react";

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

const cardBg = { background: '#F0F5F2' };
const strongColor = { color: '#1AB25C' };
const textColor = { color: '#181A1A' };
const badgeStyle = { background: '#FFFFFF', color: '#1AB25C', border: '1px solid #1AB25C' };
const exampleComments = [
  "🙋‍♂️ 좋은 의견 감사합니다!",
  "🤔 이 부분은 좀 더 설명해주실 수 있나요?",
  "👏 동의합니다. 실제로 적용해본 경험이 있나요?"
];

export const DiscussionCard = ({ 
  opinion, 
  onSwipeHorizontal, 
  onSwipeVertical,
  className = "" 
}: DiscussionCardProps) => {
  const [showComments, setShowComments] = useState(false);

  const handleDragEnd = (_: any, info: PanInfo) => {
    if (showComments) return; // 댓글 화면에서는 스와이프 비활성화
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
      drag={!showComments}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.2}
      onDragEnd={handleDragEnd}
      whileDrag={!showComments ? { scale: 1.05, rotate: Math.random() * 6 - 3 } : undefined}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      <div className="rounded-2xl p-6 shadow-card border border-white/10 h-[500px] flex flex-col" style={cardBg}>
        {!showComments ? (
          <>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={opinion.author.avatar} />
                  <AvatarFallback className="bg-primary/10 font-semibold" style={strongColor}>
                    {opinion.author.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold" style={strongColor}>{opinion.author.name}</h3>
                  <p className="text-sm" style={textColor}>{opinion.author.role}</p>
                </div>
              </div>
              {opinion.isCreator && (
                <Badge variant="default" style={badgeStyle}>
                  개설자
                </Badge>
              )}
            </div>
            <div className="mb-4">
              <h2 className="text-lg font-bold mb-2" style={strongColor}>{opinion.topic}</h2>
            </div>
            <div className="flex-1 mb-4">
              <p className="leading-relaxed" style={textColor}>{opinion.content}</p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {opinion.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-xs" style={textColor}>
                  #{tag}
                </Badge>
              ))}
            </div>
            <div className="flex items-center justify-between text-sm" style={textColor}>
              <span>{opinion.timestamp}</span>
              <div className="flex items-center space-x-4">
                <span className="flex items-center gap-1">
                  <Heart fill="#1AB25C" color="#1AB25C" size={18} />
                  <span>{opinion.likes}</span>
                </span>
                <button className="flex items-center" style={strongColor} onClick={() => setShowComments(true)}>
                  <MessageCircle className="w-5 h-5 mr-1" />
                  <span>{opinion.replies}</span>
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col h-full">
            <div className="flex items-center mb-4">
              <button className="mr-2 text-lg" style={strongColor} onClick={() => setShowComments(false)} aria-label="뒤로가기">
                ←
              </button>
              <h3 className="font-bold" style={strongColor}>댓글</h3>
            </div>
            <ul className="flex-1 overflow-y-auto mb-4 text-sm space-y-2 rounded p-2" style={{ background: '#F0F5F2', color: '#181A1A' }}>
              {exampleComments.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};