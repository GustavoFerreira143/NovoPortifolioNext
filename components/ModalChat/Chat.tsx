'use client'

import { useTheme } from '../../app/ThemeContext';
import { Typewriter } from 'react-simple-typewriter';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { DadosIA } from './DadosIA';

function Chat() {
    const { isDark } = useTheme();
    const [modal, setModal] = useState(false);
    const [mensagem, setMensagem] = useState("");
    const [historicoChat, setHistoricoChat] = useState([]);
    const scrollRef = useRef(null);
    const { obterResposta } = DadosIA();

    function ConversaIa() {
        if (mensagem.trim() === "") return;

        const resposta = obterResposta(mensagem);

        setHistoricoChat(prev => [
            ...prev,
            { tipo: "cliente", texto: mensagem },
            { tipo: "bot", texto: resposta }
        ]);

        setMensagem("");
    }

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [historicoChat]);

    return (
        <>
            <div
                onClick={() => {
                    setModal(!modal);
                    document.body.style.overflow = 'hidden';
                }}
                className={`${isDark ? 'lightBackground darkText' : 'lightText darkBackground'} p-3 fixed z-4 botaoChat bottom-5 right-6 h-13 w-13 cursor-pointer transition hover:scale-[108%] easy-in-out duration-500`}
            >
                <img
                    src={`${isDark ? '/Icones/chat-left-text-fill.svg' : '/Icones/chat-left-text-fillBranco.svg'}`}
                    className='h-[100%] w-[100%]'
                    alt=""
                />
            </div>
            <AnimatePresence>
                {modal && (
                    <div className={`fixed h-screen w-full bg-black/80 z-15 top-0 transition easy-in-out duration-500 flex justify-center items-center`}
                        onClick={() => {
                            setModal(false);
                            document.body.style.overflow = 'auto';
                        }}>
                        <motion.div
                            key="dropdown"
                            initial={{ y: 400 }}
                            animate={{ y: 0 }}
                            exit={{ y: 400 }}
                            transition={{ duration: 0.3 }}
                            className={`w-[90%] lg:w-[50%] h-[80%] mx-auto p-5 rounded-lg relative  
                    ${isDark ? 'darkBackgroundAlt darkText shadow-2xl shadow-gray-500/50' : 'lightText lightBackgroundAlt shadow-2xl'}`} 
                     onClick={(e) => e.stopPropagation()}
                        >

                            <div className='grid grid-cols-12 my-2 h-[15%]'>
                                <div className='col-span-11 flex items-center'>
                                    <img src="ChatBot.png" className='h-16 w-16 chatBot float-left' alt="" />
                                    <div className='ml-3'>
                                        <p>Jorge Henrique Chat Bot</p>
                                        <p className='text-green-500'>Online</p>
                                    </div>
                                </div>
                                <div className='col-span-1'>
                                    <img
                                        src={`${isDark ? '/Icones/x-lg - Copia.svg' : ' /Icones/x-lg.svg'}`}
                                        className='h-12 w-12 mt-1 cursor-pointer hover:scale-[105%] easy-in-out transition duration-500'
                                        onClick={() => {
                                            setModal(false);
                                            document.body.style.overflow = 'auto';
                                        }}
                                        alt=""
                                    />
                                </div>
                            </div>

                            <div ref={scrollRef} className={`h-[70%] overflow-y-auto w-full flex flex-col gap-2 pr-2 rounded-lg ${isDark ? 'border border-white ' : 'border border-black '}`}>
                                {historicoChat.map((msg, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ x: msg.tipo === "bot" ? -100 : 100, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.4 }}
                                        className={`
                                    max-w-[70%] px-4 py-2 break-words
                                    ${msg.tipo === "bot"
                                                ? `balaoresposta ${isDark ? 'border border-white self-start' : 'border border-black self-start'}`
                                                : `balaocliente ${isDark ? 'border border-white self-end' : 'border border-black self-end'}`
                                            }`}
                                    >
                                        {msg.tipo === "bot" ? (
                                            <Typewriter
                                                words={[msg.texto]}
                                                loop={1}
                                                typeSpeed={30}
                                            />
                                        ) : (
                                            <span>{msg.texto}</span>
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            <div className='h-[10%] flex items-center mt-5'>
                                <input
                                    placeholder='Digite Sua Mensagem'
                                    className={`${isDark ? 'border-b border-white placeholder-white' : 'border-b border-black placeholder-black'} w-[90%] h-10 text-md bg-transparent outline-none`}
                                    value={mensagem}
                                    onInput={(e) => setMensagem(e.currentTarget.value)}
                                    onKeyDown={(e) => { if (e.key === 'Enter') ConversaIa(); }}
                                />
                                <button
                                    className='flex justify-center w-[10%] h-10 cursor-pointer'
                                    onClick={ConversaIa}
                                >
                                    <img
                                        src={`${isDark ? '/Icones/send.svg' : '/Icones/send - Copia.svg'}`}
                                        className='h-8 w-8 hover:scale-[105%] transition easy-in-out duration-500'
                                        alt=""
                                    />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}

export default Chat;
