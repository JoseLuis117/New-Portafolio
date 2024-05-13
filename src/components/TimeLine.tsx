import { Button } from "@nextui-org/react";
import { NextUIProvider } from "@nextui-org/system";
import { motion } from 'framer-motion';
const TimeLine = () => {
    const variants = {
        hidden: {
            x: -200,
            opacity: 0
        },
        show: {
            x: 0,
            opacity: 1
        }
    }
    return (
        <NextUIProvider>
            <motion.ol
                initial="hidden"
                whileInView="show"
                transition={{ staggerChildren: 0.2 }}
            >
                <motion.li className="timeLine" variants={variants} transition={{ duration: 0.5 }}>
                    <div className="flex flex-start">
                        <div className="relative mr-5">
                            <div className="timeLine__circle absolute w-3 h-3 bg-gray-500 rounded-full top-0 left-0 right-1.5 z-20"></div>
                            <div className="border-l-2 border-gray-700 absolute h-full left-1.5 z-10"></div>
                        </div>
                        <div className="block rounded-lg max-w-lg mb-10 space-y-4">
                            <span className="timeLine__date">12/01/2024</span>
                            <p className="mb-6 text-sm">MiEmpeño</p>
                            <p className="text-xs text-gray-400">Desarrollador Web Full Stack en el proyecto MiEmpeño Partners</p>
                            <div>
                                <a href="https://dashboard.miempeno.com/auth/signin" target="_blank" rel="noopener noreferrer">
                                    <Button color="secondary" variant="ghost">Ver Sitio</Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.li>

                {/* <li className="border-l-2 timeLine">
                <div className="md:flex flex-start">
                    <div className="timeLine__circle-gray w-[0.6rem] h-[0.6rem] flex items-center justify-center rounded-full -ml-1.5">
                        
                    </div>
                    <div className="block p-6 rounded-lg shadow-lg max-w-md ml-6 mb-10">
                        
                    </div>
                </div>
            </li> */}
            </motion.ol>
        </NextUIProvider>
    )
}
export default TimeLine;