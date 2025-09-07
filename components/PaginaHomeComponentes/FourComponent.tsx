'use client'

import { useTheme } from '../../app/ThemeContext';
import { motion } from "framer-motion";

const hardSkills = [
    '/ImgsLinguagens/C.png', '/ImgsLinguagens/CSharp.png',
    '/ImgsLinguagens/HTML.png', '/ImgsLinguagens/CSS.png',
    '/ImgsLinguagens/JAVASCRIPTALT.png', '/ImgsLinguagens/Typescript.png',
    '/ImgsLinguagens/Python.png',
    '/ImgsLinguagens/MySql.png', '/ImgsLinguagens/SQLServer.png', '/ImgsLinguagens/Postgree.png',
    '/ImgsLinguagens/Git.png', '/ImgsLinguagens/GitHub.png'
];

const softSkills = [
    'Trabalho em equipe',
    'Documentação clara',
    'Fácil comunicabilidade',
    'Foco',
    'Força de vontade',
    'Inovação',
    'Coleta de Requisitos',
    'Foco na Entrega',
    'Qualidade do Produto',
];

function FourComponent() {

    const { isDark } = useTheme();

    return (
        <>
<div className={` w-full relative pb-15 pt-10 md:pb-30 md:pt-20 lg:p-20 ${isDark ? 'darkBackground darkText' : 'lightText lightBackground'}`}>
  <div
    className={`w-[90%] lg:w-[100%] h-[90%] overflow-hidden mx-auto p-5 md:p-5 lg:p-20 rounded-lg
      ${isDark ? 'darkBackgroundAlt darkText shadow-lg shadow-gray-500/50' : 'lightText lightBackgroundAlt shadow-lg'}`}
  >
    <div>
      {/* SOFT SKILLS */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0 }}
      >
        <h2 className="text-2xl lg:text-3xl mb-8 lg:mb-10 font-semibold mt-3 text-center">
          Soft Skills
        </h2>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8 lg:gap-10 w-[95%] lg:w-[90%] mx-auto rounded-lg p-6`}
        >
          {softSkills.map((skill, index) => (
            <motion.div
              key={index}
              className={`p-4 text-center rounded shadow-md cursor-pointer transition transform hover:scale-105 hover:shadow-xl 
                ${isDark ? 'border border-white darkBackground' : 'border lightBackground'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <p className="text-base lg:text-lg font-medium">{skill}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* HARD SKILLS */}
      <motion.div
        className="mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.1 }}
      >
        <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-8 lg:mb-16">
          Hard Skills
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-5 justify-items-center w-[95%] lg:w-[90%] mx-auto">
          {hardSkills.map((skill, index) => (
            <motion.div
              key={index}
              className={`p-2 rounded transition-transform transform hover:scale-110 hover:shadow-lg ${
                isDark
                  ? 'border border-white darkBackground' : 'border lightBackground'
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <img
                src={`${skill}`}
                alt=""
                className="w-14 h-14 lg:w-20 lg:h-20 p-2 rounded-lg cursor-pointer"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
</div>

        </>
    );
}

export default FourComponent