export default function Button(props) {
    
    const theme = (
        props.transparent ? "bg-transparent border-white hover:bg-gray-700" : "bg-purple border-purple hover:bg-purple2 hover:border-purple2"
    )

    return(
        <a 
            className={`${theme} ${props.style} max-w-full px-10 py-3 rounded-md text-center font-medium border-[1px] active:scale-95 transition duration-500`}
            href={props.link} 
            target={props.target}>
                {props.text}
        </a>
    )
}