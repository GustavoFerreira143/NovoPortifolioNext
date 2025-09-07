import { useState } from 'react'

export function Objetos() {
  
    const [projetos, setProjetos] = useState([
    {
      Titulo: "Projeto Web Furia",
      Img: "/images/furia.png", 
      Texto: "Site para funcionários e clientes da FURIA que aproxima o time da torcida. A premissa do site é foi com que a furia consiga conhecer e se aproximar de seus muitos fãns, nele os funcionarios podem adicionar noticias em tempo real, coletar dados de usuário referentes a furia e verificar de forma dinâmica, pode também enviar emails promossionais aos usuários que desejam recebe-los",
      Texto2: "Já seus fãns podem acessar de forma facil redes e sites da empresa, com o furia chatBot ele pode auxiliar e tirar duvidas dos usuários, além da aba de pesquisade usuário dinâmica e flexivel, onde é disponibilizado perguntas somente caso o usuário tenha interesse podendo ser preenchido opcionalmente.",
      Link1: "https://github.com/GustavoFerreira143?tab=repositories",
      Link2: "https://github.com/GustavoFerreira143/ProjetoFuriaGGPaginaDeFuncionarios",
      Link3: "https://furiasiteclientes.netlify.app",
      Link4: "https://furiasitefuncionarios.netlify.app"
    },
    {
      Titulo: "Rede Social Completa",
      Img: "/images/social.png",
      Texto: "Aplicativo completo de rede social com login, feed e mensagens.",
      Link1: "https://github.com/GustavoFerreira143/Criacao-de-Sistema-de-Rede-Social-Completa"
    },
    {
      Titulo: "App de Aluguel de Produtos",
      Img: "/images/aluguel.png",
      Texto: "Plataforma para aluguel de diversos produtos com sistema de avaliação.",
      Link1: "https://github.com/GustavoFerreira143/CriacaoDeAppLojaVirtual",
      Link2: "https://github.com/alugue-app"
    }
  ]);

    return {projetos, setProjetos}
}
