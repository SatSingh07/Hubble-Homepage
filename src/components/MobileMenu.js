import logo from "../images/hubble-logo.svg";
import MainNav from "./MainNav";
import Button from "../components/Button";
import closeMenu from "../images/icon-close.svg";

export default function MobileMenu(props) {

    const display = props.display ? "block" : "hidden"

    return(
        <div className={`${display} mobile-menu fixed top-0 left-0 w-full h-screen bg-darkBlue p-8 z-20`}>
            <a href="/"><img src={logo} alt="hubble logo" /></a>

            <MainNav />

            <Button link="#" target="_self" text="Get a demo" style={`mt-8 mx-auto w-[175px] block`}/>
            
            <img src={closeMenu} alt="" className="absolute top-8 right-8 block lg:hidden w-6 hover:opacity-75 transition cursor-pointer" onClick={props.mobileMenuClick} />
        </div>
    )
}