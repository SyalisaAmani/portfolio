import { motion, useReducedMotion } from 'motion/react'

function Reveal({
  children,
  delay = 0,
  y = 24,
  className = '',
}) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.7,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default Reveal