import React from 'react';
import { motion } from 'motion/react';

export function AnimatedReveal({
  children,
  animation = 'up',
  delay = 0,
  hover = 'none',
  style = {},
  className = '',
  disabled = false,
  ...props
}) {
  if (disabled) {
    const hoverClass =
      hover === 'lift' ? 'hover-lift' : hover === 'scale' ? 'hover-scale' : '';
    return (
      <div
        className={`${hoverClass} ${className}`.trim()}
        style={style}
        {...props}
      >
        {children}
      </div>
    );
  }
  const getVariants = () => {
    switch (animation) {
      case 'left':
        return {
          initial: { opacity: 0, x: -30 },
          animate: { opacity: 1, x: 0 },
        };
      case 'right':
        return {
          initial: { opacity: 0, x: 30 },
          animate: { opacity: 1, x: 0 },
        };
      case 'scale':
        return {
          initial: { opacity: 0, scale: 0.92 },
          animate: { opacity: 1, scale: 1 },
        };
      case 'fade':
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
        };
      case 'up':
      default:
        return {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
        };
    }
  };

  const variants = getVariants();

  const hoverClass =
    hover === 'lift'
      ? 'hover-lift'
      : hover === 'scale'
      ? 'hover-scale'
      : '';

  const hoverProps =
    hover === 'lift'
      ? { whileHover: { y: -6, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } } }
      : hover === 'scale'
      ? { whileHover: { scale: 1.025, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } } }
      : {};

  return (
    <motion.div
      initial={variants.initial}
      whileInView={variants.animate}
      viewport={{ once: true, margin: '60px', amount: 0 }}
      transition={{
        duration: 0.65,
        delay: delay ? delay / 1000 : 0,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`${hoverClass} ${className}`.trim()}
      style={style}
      {...hoverProps}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeInView({ children, delay = 0, animation = 'up', style = {}, className = '', ...props }) {
  return (
    <AnimatedReveal animation={animation} delay={delay} style={style} className={className} {...props}>
      {children}
    </AnimatedReveal>
  );
}
