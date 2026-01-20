import { useState } from "react";
import { motion } from "framer-motion";

interface FlipCardProps {
  frontImage: string;
  frontAlt: string;
  backTitle: string;
  backDescription: string;
  className?: string;
}

const FlipCard = ({
  frontImage,
  frontAlt,
  backTitle,
  backDescription,
  className = "",
}: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`cursor-pointer ${className}`}
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ perspective: "1000px", height: "100%", width: "100%" }}
    >
      <motion.div
        className="relative h-full w-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <motion.div
          className="absolute inset-0 overflow-hidden rounded-2xl border border-primary/30"
          style={{ 
            backfaceVisibility: "hidden", 
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <img
            src={frontImage}
            alt={frontAlt}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <p className="text-sm font-medium text-primary">Click to flip →</p>
          </div>
        </motion.div>

        {/* Back Side */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-primary/30 p-6 text-center"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "linear-gradient(135deg, hsl(222 47% 12%), hsl(222 47% 8%))",
          }}
        >
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20" style={{ boxShadow: "0 0 40px hsl(187 100% 50% / 0.3)" }}>
            <span className="font-display text-2xl font-bold text-primary">DE</span>
          </div>
          <h3 className="mb-3 font-display text-xl font-bold text-foreground">
            {backTitle}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {backDescription}
          </p>
          <p className="mt-4 text-xs text-primary/60">Click to flip back</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FlipCard;
