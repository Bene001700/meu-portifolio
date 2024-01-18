import  style  from "../styles/sobre_mim.module.css"
export default function Sobre_Mim(){
    return (
        <>
            <section className={style.sobre_mim}>                
                <p className={style.titulo_sobre_mim}>Sobre Mim</p>               
                <div className={style.apresentacao}>
                    <p>Ola! Eu Sou o</p>
                    <h1>Ebenezer Silva</h1>
                    <p className={style.area_atuacao}>Desenvolvedor Front-end</p>
                    <p>
                        Atuo como desenvolvedor web front-end, implementando e construindo interfaces
                        utilizando-se de técnicas modernas de construção para a Web. Gosto de desafios,
                        pois entendo como ferramentas para melhorar ainda mais.
                    </p>
                </div>             
            </section>
        </>
    )
}