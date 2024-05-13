import TimeLine from "./TimeLine"
import TimeLineEducation from "./TimeLineEducation"
import { motion } from 'framer-motion'
const Experience = () => {
    
    return (
        <>
            <header className="px-8 pb-4 text-white borderContent w-4/5 mr-96">
                <h2 className="text-3xl font-bold">Mi Experiencia</h2>
            </header>
            <section className="px-4 grid grid-cols-2 gap-4 contentOne my-4 lg:pl-12">
                <div>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2 items-center"
>
                            <div className="minIcons rounded-full flex justify-center items-center">
                                <i className="fa fa-briefcase" aria-hidden="true"></i>
                            </div>
                            <div className="h-[40px] w-[40px] max-w-[40px] max-h-[40px]">
                                <span className="text-sm sm:text-base">Experiencia</span>
                            </div>
                        </div>
                        <TimeLine />
                    </div>
                </div>
                <div>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2 items-center">
                            <div className="minIcons rounded-full flex justify-center items-center">
                                <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                            </div>
                            <div className="h-[40px] w-[40px] max-w-[40px] max-h-[40px]">
                                <span className="text-sm sm:text-base">Educación</span>
                            </div>
                        </div>
                        <TimeLineEducation />
                    </div>
                </div>
            </section>

        </>
    )
}
export default Experience