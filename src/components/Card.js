import RightArrow from "../images/icon-right-arrow.svg";
import elipseBg from "../images/ellipse-purple.svg";

export default function Card(props) {
    return(
        <a href="#/" className="w-full p-8 bg-darkBlue/50 border-white border-[1px] border-opacity-10 rounded-lg shadow-soft backdrop-blur-[50px] relative group overflow-hidden">
            <img src={props.icon} alt={props.title} />
            <h4 className="text-xl mt-3">{props.title}</h4>
            <p className="text-base text-paleBlue mt-3">{props.text}</p>

            <img src={RightArrow} alt="" className="absolute top-8 right-8 w-5 opacity-0 transition duration-500 group-hover:opacity-100"/>
            <img src={elipseBg} alt="" className="absolute top-0 right-0 w-[400px] max-w-none opacity-0 transition duration-500 group-hover:opacity-100 translate-x-[45%] translate-y-[-45%] z-[-1]"/>
        </a>
    )
}