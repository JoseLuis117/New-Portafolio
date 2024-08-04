import { useState } from "react";

const Navbar = ({ actual, setActual }: { actual: number, setActual: (value: number) => void }) => {
    return (
        <nav className="h-auto py-5 md:py-8 navbar flex md:flex-col rounded-l-md mr-2 gap-6 ">
            <div>
                <a href="#" className={`flex-1 flex flex-col items-center gap-2 transition-all ${actual === 0 ? 'hoverNav' : ''}`} onClick={() => setActual(0)}>
                    <span className="icon far fa-user"></span><span className="name font-normal text-center text-xs sm:text-sm">Sobre Mi</span>
                </a>
            </div>
            <div>
                <a href="#" className={`flex-1 flex flex-col items-center gap-2 transition-all ${actual === 3 ? 'hoverNav' : ''}`} onClick={() => setActual(3)}>
                    <span className="icon fa fa-cogs"></span>
                    <span className="name font-normal text-xs sm:text-sm">Proyectos
                    </span>
                </a>
            </div>
            <div>
                <a href="#" className={`flex-1 flex flex-col items-center gap-2 transition-all ${actual === 1 ? 'hoverNav' : ''}`} onClick={() => setActual(1)}>
                    <span className="icon far fa-list-alt"></span>
                    <span className="name font-normal text-xs sm:text-sm">Experiencia
                    </span>
                </a>
            </div>
            <div>
                <a href="#" className={`flex-1 flex flex-col items-center gap-2 transition-all ${actual === 2 ? 'hoverNav' : ''}`} onClick={() => setActual(2)}>
                    <span className="icon fa-solid fa-code"></span>
                    <span className="name font-normal text-xs sm:text-sm">Habilidades
                    </span>
                </a>
            </div>
            <div>
                <a href="#" className={`flex-1 flex flex-col items-center gap-2 transition-all ${actual === 4 ? 'hoverNav' : ''}`} onClick={() => setActual(4)}>
                    <span className="icon fa fa-phone"></span>
                    <span className="name font-normal text-xs sm:text-sm">Contactame
                    </span>
                </a>
            </div>
        </nav>
    )
}
export default Navbar;