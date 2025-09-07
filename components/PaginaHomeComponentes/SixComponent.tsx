'use client'

import { useTheme } from '../../app/ThemeContext';
import { motion } from "framer-motion";


function SixComponent() {

    const { isDark } = useTheme();

    return (
        <>
            <div className={`w-full pt-15 pb-20 md:pb-25 md:pt-25 lg:p-20 lg:py-40 ${isDark ? 'darkBackground darkText' : 'lightText lightBackground'}`}>
                <motion.div
                    initial={{ y: 100 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.3 }}
                    className={`w-[90%] lg:w-[100%]  overflow-hidden mx-auto p-5 rounded-lg 
      ${isDark ? 'darkBackgroundAlt darkText shadow-lg shadow-gray-500/50' : 'lightText lightBackgroundAlt shadow-lg'}`}>

                    <h1 className='text-2xl md:text-3xl text-center md:mb-5 md:mt-5 '>Ficou com alguma dúvida?</h1>

                    <div className='grid grid-cols-12 items-center'>
                        <div className='col-span-12 lg:col-span-6 ml-5 lg:w-[80%]'>
                            <h1 className='md:ml-5 text-lg md:text-3xl'>Pois não se preocupe!</h1>
                            <h1 className='text-sm md:text-lg mt-2 md:ml-5 '>
                                O meu Bot irá te ajudar. Basta iniciar um Chat clicando 
                                no ícone localizado no canto inferior direito de sua tela.
                            </h1>
                        </div>

                        <div className='col-span-12 lg:col-span-6 flex justify-center items-center'>
                            <img
                                src="ChatBot.png"
                                alt="ChatBot"
                                className="ChatImg max-w-full md:h-100 lg:h-120 object-contain p-4 lg:p-10"
                            />
                        </div>
                    </div>

                </motion.div>
            </div>
        </>
    );
}

export default SixComponent