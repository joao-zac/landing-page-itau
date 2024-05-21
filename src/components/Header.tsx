import Image from "next/image"

import Container from "./Container"

import ItemMenus from "./ItemMenu"
import Search from "./Search"

import Logo from "@/assets/logo.svg"
import IconUser from "@/assets/icon-user.svg"

export function Header () {
    return (
        <header className="relative flex items-center w-50 h-20 bg-primary-orange">
            <div className="absolute top-0 right-0 bg-primary-blue w-[19%] h-full z-0"></div>
            
            <Container>

                <div className="flex flex-1 items-center justify-between">
                    <div className="flex items-center gap-14">
                        <Image src={Logo} alt="Uma logo" />
                        <ul className="flex items-center gap-12">
                            <li>
                                <ItemMenus name="Para você"/>
                            </li>

                            <li>
                                <ItemMenus name="Para empresas"/>
                            </li>

                            <li>
                                <ItemMenus name="Serviços"/>
                            </li>

                            <li>
                                <ItemMenus name="Ajuda"/>
                            </li>
                        </ul>
                        
                    </div>
                    
                    <div>
                        <Search />
                    </div>

                </div>

                <button className="flex items-center gap-4 bg-primary-blue h-20 pl-10 z-10">
                    <Image src={IconUser} alt="Icone de usuario" />
                    <span className="text-white font-bold">Acessar Conta</span>
                </button>
            </Container>
        </header>
    )
}