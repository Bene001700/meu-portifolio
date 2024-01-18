import Image from 'next/image'
import style from '../styles/header.module.css'


export default function Header(){
    return <>
        <header className={style.header}>
            <div className={style.logo}>
                <Image
                src={'/logo-ebenezer.png'}
                alt={'Logo Ebenezer'}
                width={183}
                height={49}
                />
            </div>
            <div className={style.menu_hamburguer}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </header>
    </>
}