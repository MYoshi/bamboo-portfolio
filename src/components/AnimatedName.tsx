import { motion } from 'framer-motion';

export default function AnimatedName({ name, className = '', addedDelay = 0 }: { name: string; className?: string; addedDelay?: number }) {
  return (
    <div className="flex flex-row text-white">
      {name.split('').map((char, i) => (
        <motion.h1
          key={char + i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: addedDelay + i * 0.05, duration: 0.3 }}
          className={className}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.h1>
      ))}
    </div>
  );
}
