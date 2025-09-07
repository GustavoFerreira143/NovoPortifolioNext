'use client'

import { useTheme } from '../../app/ThemeContext';

function ContatoModal() {

    const { isDark, abreModal } = useTheme();

    return (
        <>
            <div className='grid grid-cols-12 '>
                <h1 className='text-end text-2xl md:text-3xl md:mt-5 col-span-10 md:col-span-8 '>Formas de Contato</h1>
                <div className='col-span-2 md:col-span-4 h-[100%] flex justify-end'>
                    <img src={`${isDark ? "/Icones/x-lg - Copia.svg" : "/Icones/x-lg.svg"}`} alt="" className='cursor-pointer' onClick={() => {
                        abreModal()
                        document.body.style.overflow = 'auto';
                    }} />
                </div>
            </div>
            <div className='flex items-center h-[70%] justify-around mt-5'>
                <div className={` rounded-lg hover:scale-105 transition easy-in-out duration-500 cursor-pointer `} onClick={() => window.location.href = "https://wa.me/5511919975222"}>
                    <div className='flex justify-center ' >
                        <img src={isDark ? "/Icones/whatsapp - Copia.svg" : "/Icones/whatsapp.svg"} alt="" className='w-10 md:w-20' />
                    </div>
                    <p className='text-center mt-5'>Whatsapp</p>
                </div>
                <div className={`rounded-lg hover:scale-105 transition easy-in-out duration-500 cursor-pointer`} onClick={() => window.location.href = "mailto:gustavo.feneita1@gmail.com"}>
                    <div className='flex justify-center' >
                        <img src={isDark ? "/Icones/envelope-at-fill - Copia.svg" : "/Icones/envelope-at-fill.svg"} alt="" className='w-10 md:w-20' />
                    </div>
                    <p className='text-center mt-5'>Email</p>
                </div>
                <div className={` rounded-lg  hover:scale-105 transition easy-in-out duration-500 cursor-pointer `} onClick={() => window.location.href = "https://www.linkedin.com/in/gustavo-ferreira-238348231/"}>
                    <div className='flex justify-center ' >
                        <img src={isDark ? "/Icones/linkedin - Copia.svg" : "/Icones/linkedin.svg"} alt="" className='w-10 md:w-20' />
                    </div>
                    <p className='text-center mt-5'>Linkedin</p>
                </div>
                <div className={`rounded-lg hover:scale-105 transition easy-in-out duration-500 cursor-pointer `} onClick={() => window.location.href = "https://github.com/GustavoFerreira143"}>
                    <div className='flex justify-center ' >
                        <img src={isDark ? "/Icones/github - Copia.svg" : "/Icones/github.svg"} alt="" className='w-10 md:w-20' />
                    </div>
                    <p className='text-center mt-5'>Github</p>
                </div>
            </div>
        </>
    );
}

export default ContatoModal
