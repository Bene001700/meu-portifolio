
import Image from 'next/image'
import style from '../styles/projetos.module.css'
export default function Projetos(){
    return(
        <>
            <section className={style.projetos}>
                <div className={style.titulo_projetos}>
                    <p>Projetos</p>
                </div>                
                <div className={style.projeto}>
                    <div>
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
                    <div>
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
                    <div>
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
                </div>                
            </section>
        </>
    ) 
}