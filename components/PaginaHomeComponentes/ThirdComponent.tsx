'use client'

import { useTheme } from '../../app/ThemeContext';
import { motion, AnimatePresence } from "framer-motion";
import { Objetos } from "./ObjetosProjetos/Objetos"
import { useState, useEffect } from 'react';
import ModalVerDetalhes from '../ModalVerProjetoDetalhes/ModalVerDetalhes';

type Projeto = {
    Titulo: string;
    Img: string;
    Texto: string;
    Texto2?: string;   // opcional
    Link1: string;
    Link2?: string;
    Link3?: string;
    Link4?: string;
};


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

function ThirdComponent() {

    const [current, setCurrent] = useState(0);
    const { isDark } = useTheme();
    const { projetos, setProjetos } = Objetos();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedData, setSelectedData] = useState<Projeto | null>(null);

    function openModal(item: Projeto) {
    setSelectedData(item);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
    }
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);


    return (
        <>
            <ModalVerDetalhes
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                data={selectedData} />


            <div className={` md:h-auto w-full relative pb-15 lg:p-20 flex items-center ${isDark ? 'darkBackground darkText' : 'lightText lightBackground'}`}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0 }}
                    className={`w-[90%] lg:w-[100%] h-[100%] mx-auto rounded-lg grid ${isDark ? 'darkBackgroundAlt darkText shadow-lg shadow-gray-500/50' : 'lightText lightBackgroundAlt shadow-lg'}`}>
                    <h1 className='text-center text-2xl col-span-full mt-10 lg:mt-15 mb-10 lg:h-[15%]'>
                        Projetos desenvolvidos e respectivas linguagens
                    </h1>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 pb-10 lg:h-[85%]'>
                        {projetos.map((projeto, index) => (
                            index == 0 ?
                                <motion.div
                                    key={index}
                                    initial={{ y: 100, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.2 + index * 0.2, ease: "easeOut" }}
                                    viewport={{ once: false, amount: 0 }}
                                    onClick={() => {
                                        openModal(projeto); document.body.style.overflow = 'hidden'
                                    }}
                                    className={`${isDark ? 'darkBackground darkText shadow-lg' : 'lightText lightBackground'} h-[95%] rounded-lg flex flex-col hover:scale-[105%] transition easy-in-out duration-500 cursor-pointer`}>

                                    <h1 className='text-center font-semibold text-xl mt-4 lg:h-[10%]'>
                                        {projeto.Titulo}
                                    </h1>
                                    <div className="relative h-65 m-3 lg:h-[75%] rounded-lg overflow-hidden flex justify-center items-center">
                                        <img
                                            src="/ProjetosIMG/ProjetoFuriaGG/Furia_Esports_logo.png"
                                            alt={`Slide ${current}`}
                                            className="object-fit h-[90%] w-[80%] transition-all duration-700"
                                        />

                                    </div>
                                    <p className='w-[90%] text-sm mx-auto my-5 lg:h-[15%] '>
                                        Site para funcionários e clientes da FURIA que aproxima o time da torcida. A premissa do site é foi com que a furia consiga conhece...
                                        <a className='text-blue-400 ml-1 cursor-pointer'>VER COMPLETO</a>
                                    </p>
                                </motion.div>
                                :
                                index == 2 ?
                                    <motion.div
                                        key={index}
                                        initial={{ y: 100, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.2 + index * 0.2, ease: "easeOut" }}
                                        viewport={{ once: false, amount: 0 }}
                                        className={`${isDark ? 'darkBackground darkText shadow-lg' : 'lightText lightBackground'} h-[95%] hidden rounded-lg lg:flex lg:flex-col hover:scale-[105%] transition easy-in-out duration-500 cursor-pointer`}>

                                        <h1 className='text-center font-semibold text-xl mt-4  lg:h-[10%] '>
                                            {projeto.Titulo}
                                        </h1>
                                        <div className="relative h-65 lg:h-[75%]  m-3 rounded-lg overflow-hidden">


                                        </div>
                                        <p className='m-5 text-sm lg:h-[15%] '>
                                            {projeto.Texto}
                                            <a className='text-blue-400 ml-1 cursor-pointer'>VER COMPLETO</a>
                                        </p>
                                    </motion.div>
                                    :
                                    <motion.div
                                        key={index}
                                        initial={{ y: 100, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.2 + index * 0.2, ease: "easeOut" }}
                                        viewport={{ once: false, amount: 0 }}
                                        className={`${isDark ? 'darkBackground darkText shadow-lg' : 'lightText lightBackground'} lg:h-[95%] rounded-lg flex flex-col hover:scale-[105%] transition easy-in-out duration-500 cursor-pointer`}>

                                        <h1 className='text-center font-semibold text-xl mt-4 lg:h-[10%] '>
                                            {projeto.Titulo}
                                        </h1>
                                        <div className="relative h-65 lg:h-[75%]   m-3 rounded-lg overflow-hidden">


                                        </div>
                                        <p className='m-5 text-sm lg:h-[15%] '>
                                            {projeto.Texto}
                                            <a className='text-blue-400 ml-1 cursor-pointer'>VER COMPLETO</a>
                                        </p>
                                    </motion.div>
                        ))}
                    </div>
                    <motion.div
                        initial={{ y: 8, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0 }} className={`${isDark ? 'lightText lightBackground ' : 'darkBackground darkText shadow-lg'} text-center font-lg py-2 rounded`}>
                        <h1 className={`hover:scale-[105%] transition easy-in-out duration-500 cursor-pointer rounded`}>Ver Todos os Projetos</h1>
                    </motion.div>
                </motion.div>
            </div>


        </>
    );
}

export default ThirdComponent