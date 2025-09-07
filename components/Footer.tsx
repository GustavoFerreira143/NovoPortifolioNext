'use client'

import { useTheme } from '../app/ThemeContext';
import { motion } from 'framer-motion'

function Footer() {
  const { isDark } = useTheme();

  return (
    <footer
      className={`w-full md:h-30
    ${isDark ? 'darkBackgroundAlt darkText ' : 'lightText lightBackgroundAlt '}`}>
      <div
        className='md:h-[100%] w-[100%] grid grid-cols-12 flex items-center '>
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className='col-span-12 md:col-span-6 text-center md:text-lg  mt-5 md:mt-0'>
          <p className=''>Criado por Gustavo Ferreira</p>
          <p className=''>© Direitos de Uso Somente ao Desenvolvedor</p>
        </motion.div>
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className='col-span-12 md:col-span-6 text-center md:text-lg flex justify-center md:justify-end md:mr-20 mt-5 md:mt-0 mb-5 md:mb-0' >
          <div className={`${isDark ? 'darkButton' : 'lightButton'} mr-10 md:mr-15  rounded-lg flex items-center p-3 cursor-pointer`} onClick={()=> window.location.href = "https://github.com/GustavoFerreira143"}>
            <img src={isDark ? "/Icones/github - Copia.svg" : "/Icones/github.svg"} alt="" className={` w-10  h-10`} />
            <p className='ml-2'>GitHub</p>
          </div>
          <div className={`${isDark ? 'darkButton' : 'lightButton'} rounded-lg flex items-center p-3 cursor-pointer`} onClick={()=> window.location.href = "https://www.linkedin.com/in/gustavo-ferreira-238348231/"}>
            <img src={isDark ? "/Icones/linkedin - Copia.svg" : "/Icones/linkedin.svg"} alt="" className={` w-10 h-10 `} />
            <p className='ml-2 '>Linkedin</p>
          </div>

        </motion.div>
      </div>
    </footer>
  )
}

export default Footer