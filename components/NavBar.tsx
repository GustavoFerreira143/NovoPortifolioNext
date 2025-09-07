'use client'

import { useTheme } from '../app/ThemeContext';
import { useState, useEffect } from 'react';
import ContatoModal from './ModalContato/ContatoModal'
import { motion, AnimatePresence } from "framer-motion";

function NavBar() {

    const { isDark, toggleTheme, Modal, abreModal } = useTheme();
    const [isVisible, setIsVisible] = useState(true);
    const [isHidden, setIsHidden] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(prev => !prev);

    useEffect(() => {
        let lastScrollTop = 0;

        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll < lastScrollTop) {
                setIsVisible(true);
                setIsHidden(false);
            }
            else {
                setIsVisible(false);
            }

            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <AnimatePresence >
                {Modal && (
                    <div className={`h-screen fixed z-5 w-full bg-black/80`}
                        onClick={() => {
                            abreModal();
                            document.body.style.overflow = 'auto';
                        }}>
                        <motion.div
                            key="dropdown"
                            initial={{ y: 400 }}
                            animate={{ y: 0 }}
                            exit={{ y: 400 }}
                            transition={{ duration: 0.3 }}
                            className={`w-[90%] lg:w-[50%] h-[35%] md:h-[40%] lg:h-[45%] overflow-hidden mx-auto p-5 rounded-lg relative translate-y-1/2 top-[8%] lg:top-[auto] 
                    ${isDark ? 'darkBackgroundAlt darkText shadow-2xl shadow-gray-500/50' : 'lightText lightBackgroundAlt shadow-2xl'}`}
                            onClick={(e) => e.stopPropagation()}>
                            <ContatoModal />
                        </motion.div>
                    </div>
                )
                }
            </AnimatePresence >
            <nav className={`grid grid-cols-12 p-3  z-1 w-full h-20 
        ${isVisible ? "animate-fadeInUp" : "animate-fadeInDown"} 
        ${isHidden ? "hidden" : "fixed"}
        ${isDark ? 'darkBackgroundAlt darkText shadow-md shadow-gray-800/50' : 'lightText lightBackgroundAlt shadow-md'}
        `}
                onAnimationEnd={() => {
                    if (!isVisible) {
                        setTimeout(() => setIsHidden(true), 10);
                    }
                }}>

                <div className='md:ml-10 col-span-7 md:col-span-5 h-15 flex'>
                    <img src="/Logo.png" alt="Logo" width={80} />
                    <h1 className="text-lg md:text-xl content-center ml-5">Start Dev</h1>
                </div>
                <div className='md:flex col-span-5 md:col-span-7 hidden justify-end md:mr-10'>
                    <button
                        onClick={toggleTheme}
                        className={`rounded h-[100%] px-5 cursor-pointer hover:scale-[105%] easy-in-out duration-500`}
                    >
                        <div className='flex justify-center'>
                            <img src={isDark ? "/Icones/palette-fill.svg" : "/Icones/palette.svg"} alt="" width={25} />
                        </div>

                        <p className='text-sm'>Alterar Tema</p>

                    </button>
                    <button
                        onClick={() => {
                            abreModal()
                            document.body.style.overflow = 'hidden';
                        }}
                        className={`rounded h-[100%] px-5 cursor-pointer hover:scale-[105%] easy-in-out duration-500`}
                    >
                        <div className='flex justify-center '>
                            <img src={isDark ? "/Icones/telephone-fill - Copia.svg" : "/Icones/telephone-fill.svg"} alt="" width={25} />
                        </div>
                        <p className='text-sm'>Contato</p>
                    </button>
                    <button
                        onClick={() => window.location.href = "/Arquivos/Curriculo_Gustavo_Dev_Atualizado.pdf"}
                        className={`rounded h-[100%] px-5 cursor-pointer hover:scale-[105%] easy-in-out duration-500`}
                    >
                        <div className='flex justify-center '>
                            <img src={isDark ? "/Icones/journal-text - Copia.svg" : "/Icones/journal-text.svg "} alt="" width={25} />
                        </div>
                        <p className='text-sm'>Curriculo</p>
                    </button>
                </div>

                <div className='md:hidden col-span-5 flex relative justify-end'>
                    <button
                        onClick={toggleDropdown}
                        className={`rounded h-[75%] mt-2 px-2 cursor-pointer
                    ${isDark ? 'darkButton' : 'lightButton'}`}
                    >
                        Config ▼
                    </button>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                key="dropdown"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className={`absolute top-12 w-38 h-60 z-5 mt-3 rounded-md pl-3 
                            ${isDark ? 'darkBackgroundAlt shadow-lg shadow-gray-800/50' : ' lightBackgroundAlt shadow-lg'}`}
                            >
                                <a
                                    onClick={toggleTheme}
                                    className={`rounded cursor-pointer h-[33%] hover:scale-[105%] easy-in-out duration-500 flex items-center w-[90%] mx-auto`}
                                >
                                    <img src={isDark ? "/Icones/palette-fill.svg" : "/Icones/palette.svg"} alt="" width={25} />
                                    <p className='text-sm ml-2 text-center'>Alterar Tema</p>
                                </a>
                                <a
                                    onClick={() => {
                                        abreModal()
                                        document.body.style.overflow = 'hidden';
                                    }}
                                    className={`rounded cursor-pointer h-[33%] hover:scale-[105%] easy-in-out duration-500 flex items-center w-[90%] mx-auto`}
                                >
                                    <img src={isDark ? "/Icones/telephone-fill - Copia.svg" : "/Icones/telephone-fill.svg"} alt="" width={25} />
                                    <p className='text-sm ml-2 text-center'>Contato</p>
                                </a>
                                <a
                                    onClick={() => window.location.href = "/Arquivos/Curriculo_Gustavo_Dev_Atualizado.pdf"}
                                    className={`rounded cursor-pointer h-[33%] hover:scale-[105%] easy-in-out duration-500 flex items-center w-[90%] mx-auto`}
                                >
                                    <img src={isDark ? "/Icones/journal-text - Copia.svg" : "/Icones/journal-text.svg "} alt="" width={25} />
                                    <p className='text-sm ml-2 text-center'>Curriculo</p>
                                </a>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </nav>
        </>
    )
}

export default NavBar