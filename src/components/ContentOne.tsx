import { motion } from 'framer-motion'
const ContentOne = () => {
    return (
        <>
            <header className="px-8 pb-4 text-white borderContent lg:w-4/5 mr-96">
                <h2 className="text-3xl font-bold"

                >Sobre Mi</h2>
            </header>
            <motion.section className="px-8 max-w-[600px] flex flex-col gap-4 contentOne my-4"
                initial={{
                    opacity: 0,
                    x: 200
                }}
                whileInView={{
                    opacity: 1,
                    x: 0
                }}
                transition={{
                    duration: 0.8
                }}
            >
                <h3 className="primaryColor text-1xl">!Hola! Soy José Luis.</h3>
                <p>Soy <span className="primaryColor">Ingeniero en computación</span> egresado del Instituto Politécnico Nacional apasionado por la creación de software.</p>
                <p>Mi enfoque abarca tanto el <span className="primaryColor">Front-End</span> como el <span className="primaryColor">Back-End</span>, destacándome como desarrollador <span className="primaryColor">Full-Stack.</span></p>
            </motion.section>
            <motion.section
                initial={{
                    opacity: 0,
                    x: -200
                }}
                whileInView={{
                    opacity: 1,
                    x: 0
                }}
                transition={{
                    duration: 0.8
                }}
            >
                <header className="px-8 pb-4 pt-12 text-white w-full">
                    <h2 className="text-3xl font-bold">Mis servicios</h2>
                    <div className="grid grid-cols-2 w-full">
                        <div className="service__item">
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 serviceIcon">
                                <svg fill="#1BCBC3" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="c133de6af664cd4f011a55de6b001b19"> <path display="inline" d="M483.111,0.501l-42.59,461.314l-184.524,49.684L71.47,461.815L28.889,0.501H483.111z M397.29,94.302 H255.831H111.866l6.885,55.708h137.08h7.7l-7.7,3.205l-132.07,55.006l4.38,54.453l127.69,0.414l68.438,0.217l-4.381,72.606 l-64.058,18.035v-0.057l-0.525,0.146l-61.864-15.617l-3.754-45.07h-0.205H132.1h-0.202l7.511,87.007l116.423,34.429v-0.062 l0.21,0.062l115.799-33.802l15.021-172.761h-131.03h-0.323l0.323-0.14l135.83-58.071L397.29,94.302z"> </path> </g> </g></svg>                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Front-End</h3>
                            <p className="text-gray-400">Especializado para la creación interfaces de usuario atractivas y funcionales. Desde la creación de diseños responsivos hasta la implementación de interacciones dinámicas.</p>
                        </div>
                        <div className="service__item">
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 serviceIcon">
                                <svg fill="#1BCBC3" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="c133de6af664cd4f011a55de6b001b19"> <path display="inline" d="M483.111,0.501l-42.59,461.314l-184.524,49.684L71.47,461.815L28.889,0.501H483.111z M397.29,94.302 H255.831H111.866l6.885,55.708h137.08h7.7l-7.7,3.205l-132.07,55.006l4.38,54.453l127.69,0.414l68.438,0.217l-4.381,72.606 l-64.058,18.035v-0.057l-0.525,0.146l-61.864-15.617l-3.754-45.07h-0.205H132.1h-0.202l7.511,87.007l116.423,34.429v-0.062 l0.21,0.062l115.799-33.802l15.021-172.761h-131.03h-0.323l0.323-0.14l135.83-58.071L397.29,94.302z"> </path> </g> </g></svg>                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Back-End</h3>
                            <p className="text-gray-400">Especializado para el desarrollo de sistemas robustos y escalables que impulsen el funcionamiento eficiente de las aplicaciones web y empresariales.</p>
                        </div>
                    </div>
                </header>
            </motion.section>
        </>
    )
}
export default ContentOne;