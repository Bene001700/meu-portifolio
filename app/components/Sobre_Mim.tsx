'use client'
import { useEffect } from "react"
import  style  from "../styles/sobre_mim.module.css"
import Image from "next/image"
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
                    Sou uma pessoa que gosta de sempre estar aprendendo novas habilidades, e desafios
                    entendo como ferramentas para melhorar ainda mais. Gosto de sempre estar atento nos
                    detalhes no máximo que consigo, pois entendo como neçessario para fazer bem,  sempre o que venho faze-lo. 
                Tenho formação em Análise e Desenvolvimento de Sistema e atuo como 
                    Desenvolvedor Front-end, com conhecimentos sólidos em HTML5, CSS3, React, Javascript,
                    Typescript e NextJS, além de consumo de API Rest. 
                    </p>
                </div>        
            </section>
        </>
    )
}