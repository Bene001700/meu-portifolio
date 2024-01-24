'use client'
import { useEffect } from "react"
import  style  from "../styles/sobre_mim.module.css"
export default function Sobre_Mim(){
    
    const animarHeader = ()=>{
        let posicao : number
        const conteinerSobreMim : HTMLElement | null= document.getElementById('conteinerSobreMim')
        const header = document.getElementById('header')
        window.addEventListener('scroll', ()=>{
            posicao = conteinerSobreMim != null ? Number(Math.abs(conteinerSobreMim?.getBoundingClientRect().top)) : 1
            if (Number(posicao) > 40) {
                if (header != null) {
                    header.style.boxShadow = '0px 1px 5px #fff'
                }
            }else{
                header?.removeAttribute('style')
            }
        })
    }

    useEffect(()=>{
        animarHeader()
        return removeEventListener('scroll', animarHeader)        
    }, [])

    return (
        <>
            <section className={style.sobre_mim} id="conteinerSobreMim">                
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