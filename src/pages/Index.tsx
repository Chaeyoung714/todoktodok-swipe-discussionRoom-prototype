import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DiscussionCard, Opinion } from "@/components/DiscussionCard";
import { SwipeHints } from "@/components/SwipeHints";
import { mockOpinions, getNextOpinion } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [currentOpinion, setCurrentOpinion] = useState<Opinion>(mockOpinions[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { toast } = useToast();

  const handleSwipeHorizontal = (direction: "left" | "right") => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    const nextOpinion = getNextOpinion(currentOpinion.id, "horizontal");
    
    toast({
      description: direction === "left" ? "이전 비슷한 의견" : "다음 비슷한 의견",
      duration: 1000,
    });

    setTimeout(() => {
      setCurrentOpinion(nextOpinion);
      setIsTransitioning(false);
    }, 300);
  };

  const handleSwipeVertical = (direction: "up" | "down") => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    const nextOpinion = getNextOpinion(currentOpinion.id, "vertical");
    
    toast({
      description: direction === "up" ? "이전 다른 의견" : "다음 다른 의견",
      duration: 1000,
    });

    setTimeout(() => {
      setCurrentOpinion(nextOpinion);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-primary animate-gradient-shift bg-[length:400%_400%] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl" />
        <div className="absolute top-1/3 right-20 w-48 h-48 bg-white rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white rounded-full blur-xl" />
      </div>

      {/* Header */}
      <motion.header 
        className="relative z-10 pt-12 pb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-2xl font-bold text-white mb-2">
          💭 SwipeTalk
        </h1>
        <p className="text-white/80 text-sm">
          개발자들의 기술 토론 플랫폼
        </p>
      </motion.header>

      {/* Main Card Container */}
      <div className="relative z-10 flex items-center justify-center px-4" style={{ height: 'calc(100vh - 200px)' }}>
        <AnimatePresence mode="wait">
          <DiscussionCard
            key={currentOpinion.id}
            opinion={currentOpinion}
            onSwipeHorizontal={handleSwipeHorizontal}
            onSwipeVertical={handleSwipeVertical}
            className="animate-card-enter"
          />
        </AnimatePresence>
      </div>

      {/* Swipe Hints */}
      <SwipeHints />

      {/* Footer */}
      <motion.footer 
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white/60 text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        카드를 드래그해서 다른 의견들을 둘러보세요
      </motion.footer>
    </div>
  );
};

export default Index;
