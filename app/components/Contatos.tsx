import { FaGithub, FaLinkedin, FaWhatsapp, FaPhone} from "react-icons/fa";
import style from '../styles/contatos.module.css'
import Link from "next/link";
export default function Contatos(){
    return (
        <>
            <section className={style.conteinerContatos} id="conteinerContatos">
                <div className={style.titulo_contatos}>
                    <p>Contatos</p>
                </div>
                <div className={style.contatos}>
                    <Link href={'https://github.com/Bene001700'} target="_blank">
                        <FaGithub/>
                        <p>GitHub</p>
                    </Link>
                    <Link href={'https://www.linkedin.com/in/ebenezer-silva/'} target="_blank">
                        <FaLinkedin />
                        <p>Linkedin</p>
                    </Link>
                    <Link href={'https://wa.link/b5ikit'} target="_blank" >
                        <FaWhatsapp />
                        <p>Whatsapp</p>
                    </Link>
                    <Link   href={"tel: +5587981143313"} target="_blank">
                        <FaPhone/>
                        <p>Telefone</p>
                    </Link>
                </div>
            </section>
        </>
    )
}