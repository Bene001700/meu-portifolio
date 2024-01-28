'use client'
import {FaGithub, FaLinkedin, FaRegWindowClose} from "react-icons/fa";
import Image from 'next/image'
import style from '../styles/header.module.css'
import Link from 'next/link'
import { useEffect } from "react";



export default function Header(){
    
    const menu = ()=>{
        const menuHamburguer : HTMLElement | null = document.getElementById('menuHamburguer')
        const iconeCloseMenu :HTMLElement | null =  document.getElementById('iconeCloseMenu')
        const conteinerMenu : HTMLElement | null= document.getElementById('conteinerMenu')

    
        menuHamburguer?.addEventListener('click', ()=>{
            if (conteinerMenu != null) {
                conteinerMenu.style.transform = 'translateX(-0%)'
            }
        })

        iconeCloseMenu?.addEventListener('click', ()=>{
            if (conteinerMenu != null) {
                conteinerMenu.removeAttribute('style')
            }
        })

        window.addEventListener('resize', ()=>{
            if (window.innerWidth > 1050) {
                conteinerMenu?.removeAttribute('style')
            }
        })        
    }
    
    useEffect(()=>{

        menu()      
        return ()=>{
            removeEventListener('click', menu)
        }
        
    }, [])

    

    return <>
        <header className={style.header} id="header">
            <div className={style.logo}>
                <Image
                src={'/logo-ebenezer.png'}
                alt={'Logo Ebenezer'}
                width={183}
                height={49}
                />
            </div>
            <div className={style.menu_hamburguer} id="menuHamburguer" >
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={style.navegacao} id="conteinerMenu" >
                <ul>
                    <li><Link href={'#conteinerSobreMim'}>Sobre Mim</Link></li>
                    <li><Link href={'#conteinerProjetos'}>Projetos</Link></li>
                    <li><Link href={'#conteinerHabilidades'}>Habilidades</Link></li>
                    <li><Link href={'#conteinerContatos'}>Contatos</Link></li>
                </ul>
                <div>
                    <Link href={'https://github.com/Bene001700'} target="_blank">
                        <FaGithub />
                    </Link>
                    <Link href={'https://www.linkedin.com/in/ebenezer-silva/'} target="_blank">
                        <FaLinkedin/>
                    </Link>
                    <div id="iconeCloseMenu">
                        <FaRegWindowClose/>
                    </div>                
                </div>
            </div>
        </header>
    </>
}