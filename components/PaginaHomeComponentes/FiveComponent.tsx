'use client'

import { useTheme } from '../../app/ThemeContext';
import { motion } from "framer-motion";
import { useState } from 'react';

function FiveComponent() {

    const { isDark } = useTheme();
    const [TextoEmail, setTextoEmail] = useState(String);

    return (
        <>
            <div className={`lg:h-220 w-full relative pt-10 pb-15 md:pt-10 lg:p-20 ${isDark ? 'darkBackground darkText' : 'lightText lightBackground'}`}>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0 }}
                    className={`w-[90%] lg:w-[100%] h-[90%] overflow-hidden mx-auto p-5 rounded-lg 
      ${isDark ? 'darkBackgroundAlt darkText shadow-lg shadow-gray-500/50' : 'lightText lightBackgroundAlt shadow-lg'}`}>

                    <h1 className='text-2xl md:text-3xl text-center md:mb-5 p-5 md:mt-5'>Precisa entrar em Contato?</h1>
                    <div className='grid grid-cols-12  '>
                        <div className={` col-span-12 lg:col-span-6 ml-5 p-5 rounded-lg `}>
                            <h1 className='  text-lg md:text-3xl'>Me Envie um Email:</h1>
                            <h1 className='mt-5 lg:mt-10 text-lg md:text-1xl'>Digite a mensagem desejada abaixo e me clique no botão <br/> para me enviar de forma automatica.</h1>
                            <textarea placeholder='Digite Sua Mensagem' className={`${isDark ? 'border-b border-solid border-white placeholder-white' : 'border-b border-solid border-black placeholder-black'} w-[100%]  md:mr-15 h-30 block text-lg mt-10`} value={TextoEmail} onInput={(e) => setTextoEmail(e.currentTarget.value)}/>
                            <button className={`${isDark ? 'darkButton' : 'lightButton'} rounded-lg block w-[100%] h-15 mt-10 cursor-pointer`} 
                            onClick={() => {window.location.href = `mailto:gustavo.feneita1@gmail.com?subject=Contato%20via%20Site&body=${TextoEmail}`}}> Enviar</button>
                        </div>

                        <div className='col-span-12 lg:col-span-6 pb-15'>
                            <h1 className='mt-2 md:ml-5 text-lg md:text-3xl text-center mb-3 lg:mb-15 '>Minhas redes Sociais:</h1>
                            <div className='flex justify-center items-center h-[100%]'>
                            <div className={`rounded-lg h-[60%] lg:h-[50%] hover:scale-105 transition easy-in-out duration-500 cursor-pointer ` } onClick={()=> window.location.href = "https://wa.me/5511919975222"}>
                                <div className='flex justify-center'>
                                    <img src={isDark ? "/Icones/whatsapp - Copia.svg" : "/Icones/whatsapp.svg"} alt="" className='w-11 lg:w-15' />
                                </div>
                                <p className='lg:mt-5 mt-2 '>Whatsapp</p>
                            </div>
                            <div className={`rounded-lg h-[60%] lg:h-[50%] hover:scale-105 transition easy-in-out duration-500 cursor-pointer ml-8 md:ml-20`} onClick={()=> window.location.href = "https://www.linkedin.com/in/gustavo-ferreira-238348231/"}>
                                <div className='flex justify-center'>
                                    <img src={isDark ? "/Icones/linkedin - Copia.svg" : "/Icones/linkedin.svg"} alt="" className='w-11 lg:w-15' />
                                </div>
                                <p className='lg:mt-5 mt-2 ' >Linkedin</p>
                            </div>
                            <div className={`rounded-lg h-[60%] lg:h-[50%] hover:scale-105 transition easy-in-out duration-500 cursor-pointer ml-8 md:ml-20`} onClick={()=> window.location.href = "https://github.com/GustavoFerreira143"}>
                                <div className='flex justify-center '>
                                    <img src={isDark ? "/Icones/github - Copia.svg" : "/Icones/github.svg"} alt="" className='w-11 lg:w-15' />
                                </div>
                                <p className='lg:mt-5 mt-2 text-center'>Github</p>
                            </div>
                            </div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </>
    );
}

export default FiveComponent