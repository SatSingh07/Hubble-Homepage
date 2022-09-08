import Ticker from "../components/Ticker";
import logo from "../images/hubble-logo.svg";
import Button from "../components/Button";
import { useState, useEffect } from "react";

export default function Header() {
    
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

                <nav className="flex justify-center gap-12 font-light">
                    <a href="/#" className="hover:text-purple transition duration-500">Platform</a>
                    <a href="/#" className="hover:text-purple transition duration-500">Solution</a>
                    <a href="/#" className="hover:text-purple transition duration-500">Resources</a>
                    <a href="/#" className="hover:text-purple transition duration-500">Company</a>
                </nav>

                <Button link="#" target="_self" text="Get a demo"/>
            </div>
        </header>
    )
}