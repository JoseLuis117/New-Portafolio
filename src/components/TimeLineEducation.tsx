import { Button } from "@nextui-org/react";
import { NextUIProvider } from "@nextui-org/system";
import { motion } from 'framer-motion';
const TimeLineEducation = () => {
    const variants = {
        hidden: {
            x: 200,
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
                <motion.li className="timeLine"
                    variants={variants}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-start">
                        <div className="relative mr-5">
                            <div className="timeLine__circle absolute w-3 h-3 bg-gray-500 rounded-full top-0 left-0 right-1.5 z-20"></div>
                            <div className="border-l-2 border-gray-700 absolute h-full left-1.5 z-10"></div>
                        </div>
                        <div className="block rounded-lg max-w-lg lg:ml-6 mb-10 space-y-4 mt-4">
                            <span className="timeLine__date">23/12/2023</span>
                            <p className="mb-6 text-xs">Instituto Politécnico Nacional (ESIME Culhuacán)</p>
                            <p className="text-xs text-gray-400">Ingeniero en computación</p>
                            <div>
                                <a href="#" target="_BLANK">
                                    <Button color="secondary" variant="ghost">
                                        Ver Certificado
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.li>
                <motion.li className="timeLine"
                    variants={variants}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-start">
                        <div className="relative mr-5">
                            <div className="timeLine__circle absolute w-3 h-3 bg-gray-500 rounded-full top-0 left-0 right-1.5 z-20"></div>
                            <div className="border-l-2 border-gray-700 absolute h-full left-1.5 z-10"></div>
                        </div>
                        <div className="block rounded-lg max-w-lg lg:ml-6 mb-10 space-y-4 mt-4">
                            <span className="timeLine__date">23/12/2023</span>
                            <p className="mb-6 text-xs">Bachilleres 4 Culhuacán</p>
                            <p className="text-xs text-gray-400">Auxiliar Programador</p>
                            <div>
                                <a href="https://siged.sep.gob.mx/SIGED/documentos.html?folio=e5fd8a95-6701-4fa0-819b-fac5609e5e9a" target="_BLANK">
                                    <Button color="secondary" variant="ghost">
                                        Ver Certificado
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.li>
            </motion.ol>
        </NextUIProvider>
    )
}
export default TimeLineEducation;