import { motion } from 'framer-motion';
import "./style.css";
import { useState } from 'react';
import SocialNetworks from './SocialNetworks';
import { Button } from '@nextui-org/react';
const ProfileCard = ({ text }: { text: string }) => {
    const textAnimation = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0
        },
    }
    return (
        <motion.div className="card md:shadow-2xl md:shadow-black z-40" initial={{ opacity: 0, y: -200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="card__img">
                <img className='h-2/3 w-full' src="https://img.freepik.com/foto-gratis/ilustracion-lluvia-ciudad-futurista_23-2151406574.jpg?t=st=1715330686~exp=1715334286~hmac=0e915f64c80fa41717ce86ba859e04d1b4ea3d6d69560a1c28a4d20087cd1f2a&w=1380" alt="Cyberpunk IMG" />
            </div>
            <div className="card__avatar">
                <img loading='lazy' src="/images/yo1.webp" alt="Yo" className="rounded-full"></img>
            </div>
            <div className="card__title text-slate-300">José Luis Sánchez Mendoza</div>
            <div className="card__subtitle">
                <motion.span
                    initial="hidden"
                    animate="visible"
                    transition={{ staggerChildren: 0.03, repeat: Infinity }}
                    aria-hidden
                >
                    {text.split('').map((value, index) => (
                        value === " " ? <span key={index}> </span> :
                            <motion.span
                                key={index}
                                variants={textAnimation}
                                className='inline-block'
                            >
                                {value}
                            </motion.span>
                    ))}
                </motion.span>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
                <a href="/CV_JOSE_LUIS.pdf" target='_BLANK'>
                    <Button variant='ghost' color='secondary' className='mt-4'>Descarga Mi CV</Button>
                </a>
            </motion.div>
            <div className="card__wrapper">
                <SocialNetworks />
            </div>
        </motion.div>

    )
}
export default ProfileCard;