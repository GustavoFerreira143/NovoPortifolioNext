'use client'

import { useTheme } from '../../app/ThemeContext';
import { Typewriter } from 'react-simple-typewriter';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";

function StartComponent() {

  const { isDark } = useTheme();
  const [showSecond, setShowSecond] = useState(false);


  useEffect(() => {
    const totalTime = 70 * 'Olá, Bem Vindo ao Portfólio'.length;
    const timeout = setTimeout(() => {
      setShowSecond(true);
    }, totalTime + 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className={`h-screen w-full relative pt-20 ${isDark ? 'darkBackground darkText' : 'lightText lightBackground'}`}>
        <div className={`w-[90%] md:h-[70%] lg:w-[90%] lg:h-[70%] rounded-lg absolute top-[10%] left-[5%] lg:left-[5%] lg:grid lg:grid-cols-12 mt-20 overflow-hidden ${isDark ? 'darkBackgroundAlt darkText shadow-lg shadow-gray-500/50' : 'lightText lightBackgroundAlt shadow-lg'}`}>
          <div className='lg:col-span-6 flex justify-center items-center h-20 lg:h-[100%]'>
            <div className='mt-5 lg:mb-[20%]'>
              <motion.h1
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: false, amount: 0 }}
                className='text-lg md:text-3xl'>
                <Typewriter
                  words={['Olá, Bem Vindo ao Portfólio']}
                  loop={1}
                  typeSpeed={80}
                />
              </motion.h1>
              {showSecond && (
                <motion.h1
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: false, amount: 0 }}className='text-md md:text-2xl text-center'>
                  <Typewriter
                    words={['Start Dev Gustavo']}
                    typeSpeed={80}
                  />
                </motion.h1>
              )}
            </div>
          </div>

          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false, amount: 0 }}
            className='lg:col-span-6 flex items-center justify-center md:p-5 lg:p-0 '>
            <img
              src="/MeuPersonagem.png"
              alt="Personagem"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </motion.div>

        </div>
      </div>
    </>
  );
}

export default StartComponent