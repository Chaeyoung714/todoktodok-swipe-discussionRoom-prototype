import { motion } from "framer-motion";

export const SwipeHints = () => {
  return (
    <motion.div 
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-black/20 backdrop-blur-md rounded-full px-6 py-3 z-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <div className="flex items-center space-x-6 text-white/80 text-sm">
        <div className="flex items-center space-x-2">
          <span>←→</span>
          <span>비슷한 의견</span>
        </div>
        <div className="w-px h-4 bg-white/20" />
        <div className="flex items-center space-x-2">
          <span>↑↓</span>
          <span>다른 의견</span>
        </div>
      </div>
    </motion.div>
  );
};