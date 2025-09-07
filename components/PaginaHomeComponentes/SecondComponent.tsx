'use client'

import { useTheme } from '../../app/ThemeContext';
import { motion } from "framer-motion";
function SecondComponent() {

    const { isDark } = useTheme();
    
    return (
        <>
            <div className={`w-full relative pb-25 lg:pt-20 ${isDark ? 'darkBackground darkText' : 'lightText lightBackground'}`}>
                <div className={`w-[90%] h-[90%] lg:grid lg:grid-cols-12 overflow-hidden mx-auto rounded-lg
                    ${isDark ? 'darkBackgroundAlt darkText shadow-lg shadow-gray-500/50' : 'lightText lightBackgroundAlt shadow-lg'}`}>
                    <motion.div
                        initial={{ x: -200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0 }}
                        className='hidden lg:block lg:col-span-6 flex items-center justify-center md:p-5 lg:p-0 my-7'>
                        <img
                            src="/Argumento.png"
                            alt="Personagem"
                            className="max-w-full max-h-full object-contain rounded-lg"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0 }}
                        className='h-[100%] md:h-auto  lg:col-span-6 col-span-12 flex justify-center items-center mb-5  md:mt-10 lg:mt-0'>
                        <div className='md:text-start'>
                            <h1 className=' mx-10 text-lg md:text-2xl mt-5 md:mt-7'>
                                Negócio sendo deixado para trás? Buscando Inovação? Quer elevar sua competitividade no mercado? Pois então encontrou a pessoa certa!
                            </h1>
                            <p className='mx-3 md:mx-10 text-sm md:text-lg mt-5 md:mt-6 indent-10 ml-5'>
                                Vivemos em uma era em que a inovação tecnológica dita o ritmo do mercado. Empresas que resistem à transformação digital correm o risco de serem deixadas para trás, perdendo espaço para concorrentes mais ágeis e atualizados. Investir em tecnologia não apenas otimiza processos internos e reduz custos, mas também melhora a experiência do cliente, amplia o alcance da marca e permite a tomada de decisões estratégicas com base em dados. Negócios que adotam soluções tecnológicas tornam-se mais competitivos, adaptáveis e preparados para crescer em um cenário cada vez mais digital e dinâmico.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: -200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0 }}
                        className=' lg:hidden flex items-center justify-center md:p-5 lg:p-0 '>
                        <img
                            src="/Argumento.png"
                            alt="Personagem"
                            className="md:w-[100%] md:h-[100%]  max-w-full max-h-full object-fill rounded-lg"
                        />
                    </motion.div>
                </div>
            </div >
        </>
    );
}

export default SecondComponent