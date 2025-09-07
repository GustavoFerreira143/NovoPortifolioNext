'use client'

import { useTheme } from '../../app/ThemeContext';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';
import { Objetos } from "../PaginaHomeComponentes/ObjetosProjetos/Objetos"

interface ModalVerDetalhesProps {
  isOpen: boolean;
  onClose: () => void;
  data: any; 
}

export default function ModalVerDetalhes({ isOpen, onClose, data }: ModalVerDetalhesProps) {

    const [current, setCurrent] = useState(0);
    const { isDark } = useTheme();
    const images = [
        "/ProjetosIMG/ProjetoFuriaGG/HomeClientes.png",
        "/ProjetosIMG/ProjetoFuriaGG/AtualizacaoDeNoticias.png",
        "/ProjetosIMG/ProjetoFuriaGG/AtualizarUsuarios.png",
        "/ProjetosIMG/ProjetoFuriaGG/CadastrarUserFuria.png",
        "/ProjetosIMG/ProjetoFuriaGG/CarteirinhaDeFa.png",
        "/ProjetosIMG/ProjetoFuriaGG/ChatClientes.png",
        "/ProjetosIMG/ProjetoFuriaGG/DashboardFuncionarios.png",
        "/ProjetosIMG/ProjetoFuriaGG/EnviarEmailFuncionarios.png",
        "/ProjetosIMG/ProjetoFuriaGG/LoginDeUsuárioFuncionarioFuria.png",
        "/ProjetosIMG/ProjetoFuriaGG/ModalCadastro.png",
        "/ProjetosIMG/ProjetoFuriaGG/NoticiasFuria.png",
        "/ProjetosIMG/ProjetoFuriaGG/PesquisaDeUsuario.png",
        "/ProjetosIMG/ProjetoFuriaGG/VerificacaoDePesquisaDeUsers.png",
    ];
    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };
    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <div className={`h-screen fixed top-0 z-10 w-full bg-black/80 p-4 md:p-10`} onClick={() => {onClose(); document.body.style.overflow = 'auto'}} >
                        <motion.div
                            key="dropdown"
                            initial={{ y: 400 }}
                            animate={{ y: 0 }}
                            exit={{ y: 400 }}
                            transition={{ duration: 0.3 }}
                            className={`w-[95%] lg:w-[50%] overflow-hidden mx-auto p-5 rounded-lg relative top-[8%] lg:top-[2%] 
                        ${isDark ? 'darkBackgroundAlt darkText shadow-2xl shadow-gray-500/50' : 'lightText lightBackgroundAlt shadow-2xl'}`}
                            onClick={(e) => e.stopPropagation()}>
                            <div className='grid grid-cols-12 '>
                                <h1 className='text-end text-2xl md:text-3xl md:mt-5 col-span-10 md:col-span-8 '>{data.Titulo}</h1>
                                <div className='col-span-2 md:col-span-4 h-[80%] flex justify-end'>
                                    <img src={`${isDark ? "/Icones/x-lg - Copia.svg" : "/Icones/x-lg.svg"}`} alt="" className='cursor-pointer hover:scale-[105%] easy-in-out duration-500' onClick={() => {
                                        document.body.style.overflow = 'auto';
                                        onClose();
                                    }} />
                                </div>
                            </div>
                            <div className='flex items-center justify-around mt-5'>
                                <div className="relative h-86 rounded-lg overflow-hidden">
                                    <motion.div
                                        className="flex"
                                        animate={{ x: `-${current * 100}%` }}
                                        transition={{ duration: 0.7, ease: "easeInOut" }}
                                    >
                                        {images.map((src, idx) => (
                                            <div key={idx} className="min-w-full h-90">
                                                <img
                                                    src={src}
                                                    alt={`Slide ${idx}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ))}
                                    </motion.div>


                                    <button
                                        onClick={prevSlide}
                                        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded cursor-pointer"
                                    >
                                        ‹
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded cursor-pointer"
                                    >
                                        ›
                                    </button>

                                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                                        {images.map((_, idx) => (
                                            <div
                                                key={idx}
                                                className={`h-2 w-2 rounded-full ${idx === current ? 'bg-white' : 'bg-gray-400'
                                                    }`}
                                            ></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className='text-center my-5'><strong>Sobre o Projeto</strong></p>
                            <div className=' w-[95%] mx-auto h-30 overflow-y-auto'>
                               
                                <p>
                                    {data.Texto}
                                    <br/>
                                    {data.Texto2}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence >
        </>
    );
}

