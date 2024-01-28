import Contatos from "./components/Contatos";
import Detalhe from "./components/Detalhe";
import Detalhes_do_Projeto from "./components/Detalhes_do_Projeto";
import Footer from "./components/Footer";
import Habilidades from "./components/Habilidades";
import Header from "./components/Header";
import Projetos from "./components/Projetos";
import Sobre_Mim from "./components/Sobre_Mim";

export default function Home() {
  return (
    <>
      <Header />      
      <Sobre_Mim />
      <Projetos/>  
      <Habilidades />
      <Contatos/>
      <Footer/>
      <Detalhe/>
    </>
  )
}
