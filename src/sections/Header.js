import Ticker from "../components/Ticker";
import MainNav from "../components/MainNav";
import logo from "../images/hubble-logo.svg";
import Button from "../components/Button";
import burgerMenu from "../images/icon-burger-menu.svg";
import { useState, useEffect } from "react";

export default function Header(props) {
    
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 100);
        });
      }, [])

      const scrolled = scroll ? "shadow-medium" : ""

    return(
        <header className={`fixed top-0 w-full bg-darkBlue z-10 transition ${scrolled}`}>
            <Ticker />

            <div className="p-6 2xl:px-12 flex justify-between items-center">
                <a href="/"><img src={logo} alt="hubble logo" /></a>

                <div className="hidden lg:block">
                    <MainNav />
                </div>

                <div className="hidden lg:block">
                    <Button link="#" target="_self" text="Get a demo"/>
                </div>

                <img src={burgerMenu} alt="" className="block lg:hidden w-6 hover:opacity-75 transition cursor-pointer" onClick={props.mobileMenuClick}/>
            </div>
        </header>
    )
}