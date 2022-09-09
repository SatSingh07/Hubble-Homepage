export default function MainNav() {
    return(
        <nav className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-12 items-center font-light mt-8 lg:mt-0">
            <a href="/#" className="hover:text-purple transition duration-500">Platform</a>
            <a href="/#" className="hover:text-purple transition duration-500">Solution</a>
            <a href="/#" className="hover:text-purple transition duration-500">Resources</a>
            <a href="/#" className="hover:text-purple transition duration-500">Company</a>
        </nav>
    )
}