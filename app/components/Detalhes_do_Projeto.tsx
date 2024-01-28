'use client'
import Link from 'next/link';
import style from '../styles/detalhesDoProjeto.module.css'
import { IoMdArrowRoundBack } from "react-icons/io";
import { useEffect } from 'react';

type DetalhesProps = {   
  descricao: string 
  linkCodigo: string
  linkSite: string 
}

export default function Detalhes_do_Projeto ({descricao, linkCodigo, linkSite}: DetalhesProps){
   
    useEffect(()=>{
        const back : HTMLElement | null = document.querySelector("#back")
        const destalhe : HTMLElement | null =  document.querySelector('#Detalhes')
        
        back?.addEventListener('click', ()=>{
            destalhe?.removeAttribute('style')
        })
       
    },[])

    return (
        <>
            <section className={style.detalhesDoProjeto} id='Detalhes'>
                <div className={style.back} id='back'>
                    <IoMdArrowRoundBack/>
                </div>
                <div className={style.detalhe}>
                    <div className={style.descricao}>
                        <strong>Descrição</strong>
                        <p>
                            {descricao}
                        </p>
                        <div>
                            <Link href={linkCodigo} target='_blank'>
                                Ver código
                            </Link>
                            <Link href={linkSite} target='_blank'>
                                Ver site
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

