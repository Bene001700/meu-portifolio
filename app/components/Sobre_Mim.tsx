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
                <div className={style.apresentacao}>
                    <p>Ola! Eu Sou o</p>
                    <h1>Ebenezer Silva</h1>
                    <p className={style.area_atuacao}>Desenvolvedor Front-end</p>
                    <p>                
                    Sou uma pessoa que gosta de estar sempre aprendendo novas habilidades e, entendo desafios 
                    como ferramentas para melhorar ainda mais. Gosto de sempre estar atento nos detalhes 
                    ao máximo que consigo pois, entendo como necessário para fazer bem feito. Formado em 
                    Análise e Desenvolvimento de Sistema, atuo como Desenvolvedor Front-end com conhecimentos
                    sólidos em HTML5, CSS3, React, Javascript, Typescript, NextJS e consumo de API Rest.
                    </p>
                </div>        
            </section>
        </>
    )
}