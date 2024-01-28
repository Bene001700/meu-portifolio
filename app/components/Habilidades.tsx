import { FaGithub,FaHtml5, FaCss3Alt, FaReact, FaGitAlt} from "react-icons/fa";
import { SiNextdotjs} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

import style from '../styles/habilidades.module.css'
export default function Habilidades(){
    return (
        <>
            <section className={style.conteinerHabilidades} id="conteinerHabilidades">
                <div className={style.titulo_habilidades}>
                    <p>Habilidades</p>
                </div>
                <div className={style.habilidades}>
                    <div>
                        <FaHtml5/>
                        <p>HTML5</p>
                    </div>
                    <div>
                        <FaCss3Alt />
                        <p>CSS3</p>
                    </div>
                    <div>
                        <FaReact/>
                        <p>React</p>
                    </div>
                    <div>
                        <FaGithub />
                        <p>GitHub</p>
                    </div>
                    <div>
                        <FaGitAlt />
                        <p>Git</p>
                    </div>
                    <div>
                        <SiNextdotjs/>
                        <p>NextJs</p>
                    </div>
                    <div>
                        <IoLogoJavascript />
                        <p>Javascript</p>
                    </div>
                </div>
            </section>
        </>
    )
}