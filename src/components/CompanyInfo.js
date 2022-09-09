import logo from "../images/hubble-logo.svg";
import linkedIn from "../images/icon-linkedin.svg";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";

export default function CompanyInfo() {
    return(
        <div className="text-center sm:text-left">
            <a href="/"><img src={logo} alt="hubble logo" className="w-[140px] m-auto sm:m-0"/></a>
            <a href="mailto:info@hubble.net" className="mt-4 inline-block hover:text-purple transition">info@hubble.net</a>

            <div className="flex gap-4 mt-12 items-center justify-center sm:justify-start">
                <a href="/" target="_blank" className="hover:opacity-75 transition"><img src={linkedIn} alt="hubble linkedIn" /></a>
                <a href="/" target="_blank" className="hover:opacity-75 transition"><img src={facebook} alt="hubble facebook" /></a>
                <a href="/" target="_blank" className="hover:opacity-75 transition"><img src={twitter} alt="hubble twitter" /></a>
            </div>
        </div>
    )
}