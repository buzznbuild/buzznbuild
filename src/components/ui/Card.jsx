import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const Card = ({ className, children, hoverEffect = true, ...props }) => {
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -10, boxShadow: '0 20px 40px -15px rgba(99, 102, 241, 0.3)' } : {}}
            className={cn(
                'glass-panel rounded-2xl p-6 transition-all duration-300',
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    )
}

export { Card }
