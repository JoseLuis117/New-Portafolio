import { motion } from 'framer-motion'
const AnimationReveal = ({ text }: { text: string }) => {
    const varaints = {
        hidden: { opacity: 0 },
        reveal: { opacity: 1 }
    }
    return (
            <motion.span
                initial="hidden"
                whileInView="reveal"
                transition={{staggerChildren:0.2}}
            >
                {text.split('').map((value,index)=>(
                    <motion.span key={index}
                        variants={varaints}
                        transition={{duration:0.5}}
                    >
                        {value}
                    </motion.span>
                ))}
            </motion.span>
    )
}

export default AnimationReveal;