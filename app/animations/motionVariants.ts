import { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // premium easeOut
    },
  },
};

export const stagger: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
