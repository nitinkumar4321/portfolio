import Lottie from 'lottie-react';
import { motion } from 'framer-motion';

interface LottieAnimationProps {
  animationData: any;
  className?: string;
}

const LottieAnimation = ({ animationData, className }: LottieAnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <Lottie animationData={animationData} loop={true} />
    </motion.div>
  );
};

export default LottieAnimation;
