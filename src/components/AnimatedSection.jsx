import { motion, useScroll, useTransform, useSpring, useMotionValue, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  slideRight: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  rotateIn: {
    hidden: { opacity: 0, rotate: -3, scale: 0.95 },
    visible: { opacity: 1, rotate: 0, scale: 1 },
  },
};

const reducedVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const easings = {
  smooth: [0.16, 1, 0.3, 1],
};

export default function AnimatedSection({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.7,
  className = "",
  once = true,
  as = "div",
}) {
  const shouldReduce = useReducedMotion();
  const Component = motion[as] || motion.div;
  const v = shouldReduce ? reducedVariants : variants[variant];

  return (
    <Component
      variants={v}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: shouldReduce ? 0.3 : duration, delay, ease: easings.smooth }}
      className={className}
    >
      {children}
    </Component>
  );
}

export function StaggerContainer({ children, className = "", staggerDelay = 0.1 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ staggerChildren: staggerDelay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }) {
  return (
    <motion.div
      variants={variants.fadeUp}
      transition={{ duration: 0.6, ease: easings.smooth }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxSection({ children, className = "", speed = 0.3 }) {
  const shouldReduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rawY = useTransform(scrollYProgress, [0, 1], [speed * 80, speed * -80]);
  const y = useSpring(rawY, { stiffness: 80, damping: 30 });

  if (shouldReduce) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <motion.div ref={ref} style={{ y, willChange: "transform" }} className={className}>
      {children}
    </motion.div>
  );
}

export function MagneticButton({ children, className = "", strength = 0.3 }) {
  const shouldReduce = useReducedMotion();
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function GlassOrb({ className = "", size = "300px", color = "rgba(244,131,155,0.1)" }) {
  return (
    <div
      className={`absolute rounded-full pointer-events-none animate-float-slow will-change-transform ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      }}
    />
  );
}
