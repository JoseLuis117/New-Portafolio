import { useEffect, useState } from "react";
import ContentOne from "./ContentOne";
import Navbar from "./NavBar";
import ProfileCard from "./Profile";
import Experience from "./Experience";
import { motion, AnimatePresence } from "framer-motion";
import Skills from "./Skills";
import Proyects from "./Proyects";
import Contact from "./Contact";

const MainComponent = () => {
    const [actual, setActual] = useState(0);
    const [cursorVariant, setCursorVariant] = useState("default");
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    })
    useEffect(() => {
        const mouseMove = (e: any) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }
        window.addEventListener('mousemove', mouseMove);
        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }
    }, [])
    const variants = {
        default: {
            x: mousePosition.x - 10,
            y: mousePosition.y - 10,
        },
        big: {
            x: mousePosition.x - 25,
            y: mousePosition.y - 25,
            height: 60,
            width: 60,
            backgroundColor: 'transparent',
            border: '2px solid #1BCBC3',

        }
    }
    return (
        <main className="absolute z-10 md:flex md:justify-center md:items-center w-full h-full md:px-8">
            <motion.div
                className="bg-principal h-8 w-8 rounded-full fixed top-0 left-0 opacity-50 z-50"

                variants={variants}
                animate={cursorVariant}
                transition={{
                    duration: 0
                }}
                style={{ pointerEvents: 'none' }}
            ></motion.div>
            <motion.div
                onMouseEnter={() => setCursorVariant('big')}
                onMouseLeave={() => setCursorVariant('default')}
                initial={{opacity:0, x:-200}}
                animate={{opacity:1, x:0}}
                transition={{duration:0.7}}
            >
                <Navbar actual={actual} setActual={setActual} />
            </motion.div>
            <div className="flex justify-center md:w-full md:block px-4 md:px-0 md:max-w-[400px]">
                <ProfileCard text="Desarrollador Web Full Stack" />
            </div>
            <div className="flex flex-col md:h-screen md:justify-center relative w-full md:p-auto px-4 md:px-0  mt-8 md:mt-auto max-w-[700px]">
                <AnimatePresence>
                    {actual === 0 && (
                        <motion.section
                            key="contentOne"
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
                            exit={{ opacity: 0, y: -100, transition: { duration: 0.4 } }}
                            className="py-8 card2 md:overflow-y-scroll h-full contenedor md:absolute"
                        >
                            <ContentOne />
                        </motion.section>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {actual === 1 && (
                        <motion.section
                            key="experience"
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
                            exit={{ opacity: 0, y: -100, transition: { duration: 0.4 } }}
                            className="py-8 card2 md:overflow-y-scroll h-full contenedor md:absolute"

                        >
                            <Experience />
                        </motion.section>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {actual === 2 && (
                        <motion.section
                            key="experience"
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
                            exit={{ opacity: 0, y: -100, transition: { duration: 0.4 } }}
                            className="py-8 card2 overflow-y-scroll h-full contenedor md:absolute"

                        >
                            <Skills />
                        </motion.section>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {actual === 3 && (
                        <motion.section
                            key="experience"
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
                            exit={{ opacity: 0, y: -100, transition: { duration: 0.4 } }}
                            className="py-8 card2 overflow-y-scroll h-full contenedor md:absolute"

                        >
                            <Proyects />
                        </motion.section>
                    )}
                </AnimatePresence>
                {/* <AnimatePresence>
                    {actual === 4 && (
                        <motion.section
                            key="experience"
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
                            exit={{ opacity: 0, y: -100, transition: { duration: 0.4 } }}
                            className="py-8 card2 overflow-y-scroll h-full contenedor md:absolute"

                        >
                            <Contact />
                        </motion.section>
                    )}
                </AnimatePresence> */}
            </div>
        </main>
    )
}

export default MainComponent;
