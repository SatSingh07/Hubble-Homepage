import RightArrow from "../images/icon-right-arrow.svg";

export default function LinkArrow(props) {

    let theme = {}

    if(props.theme === "purple") {
        theme = "bg-purple border-purple group-hover:bg-purple2 group-hover:border-purple2"
    } else if (props.theme === "darkBlue") {
        theme = "bg-darkBlue border-darkBlue group-hover:bg-gray-700"
    } else {
        theme = "bg-transparent border-white group-hover:bg-gray-700"
    }

    const customStyles = props.style;

    return(
        <a href={props.link} target={props.target} className={`inline-flex items-center group hover:underline transition duration-500 ${customStyles}`}>

            {props.text}

            <span className={`${theme} w-8 h-8 ml-3 inline-flex justify-center items-center border-[1px] rounded-full group-hover:translate-x-2 transition duration-500`}>
                <img src={RightArrow} alt="" className="w-3"/>
            </span>
        </a>
    )
}