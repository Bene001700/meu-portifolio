'use client'
import {useEffect, useState } from "react"
import Detalhes_do_Projeto from "./Detalhes_do_Projeto"

interface TypeDetalhe {
    descricao: string 
    linkCodigo: string 
    linkSite: string
}

export default function Detalhe(){
const [projeto, setProjeto] =useState<TypeDetalhe>({descricao: '', linkCodigo: '', linkSite:''})
const verDetalhesProjetos = (n: number)=>{
    const detalhe :HTMLElement |null = document.querySelector('#Detalhes')   
    switch (n) {
        case 0:
            setProjeto({
                descricao: 'Projeto do portifólio. Aqui apresento todos os meus trabalhos anterior, acadêmico e pessoal. Para a construção foi utilizado as tecnologias de desenvolvimento de interface da web: Typescript e React',
                linkCodigo: 'https://github.com/Bene001700/meu-portifolio', 
                linkSite:'Oi duas vezes'
            })
            if (detalhe!= null) {
                detalhe.style.transform = 'translateX(0%)'
            }
            
            break;
    
        case 1:
            setProjeto({
                descricao: 'Projeto tela de login feita com HTML5 e CSS#. Nesse projeto eu construo uma tela de login com HTML e CSS',
                linkCodigo:'https://github.com/Bene001700/teladelogin',
                linkSite: 'https://bene001700.github.io/teladelogin/'
            })
            if (detalhe!= null) {
                detalhe.style.transform = 'translateX(0%)'
            }
            break;

        default:
            break;
    }
}

useEffect(()=>{
    const projetos = document.querySelectorAll(".projeto")

    for (let i = 0; i < projetos.length; i++) {
        projetos[i].addEventListener('click', ()=>{
            verDetalhesProjetos(i)
        })
        
    }
},[])
        return ( 
        <>
        
        <Detalhes_do_Projeto
            descricao={projeto.descricao}
            linkCodigo={projeto.linkCodigo}
            linkSite={projeto.linkSite}
        />
        </>
    )
}