import Image from 'next/image'
import style from '../styles/projetos.module.css'
export default function Projetos(){
    return(
        <>
            <section className={style.projetos} id='conteinerProjetos'>
                <div className={style.titulo_projetos}>
                    <p>Projetos</p>
                </div>                
                <div className={style.projeto}>
                    <div className='projeto'>
                            <Image
                                src={'/Foto_meu_portifolio.png'}
                                width={450}
                                height={200}
                                alt={'Foto do meu portifolio'}
                            />
                        <div>
                            <p>Meu Portifólio</p>
                        </div>
                    </div>
                    <div className='projeto'>
                        <Image
                            src={'/Foto_Tela_de_Login_com_html_e_css.png'}
                            width={450}
                            height={200}
                            alt={'Foto tela de Login construido com html e css'}
                        />
                        <div>
                            <p>Tela de login - HTML5</p>
                        </div>
                    </div>
                </div>                
            </section>
        </>
    ) 
}