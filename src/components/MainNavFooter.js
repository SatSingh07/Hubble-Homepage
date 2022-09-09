export default function MainNavFooter() {
    return(
        <div className="flex flex-col text-center sm:text-left">
            <h6 className="mb-4 sm:mb-8 text-paleBlue text-lg opacity-70">Hubble</h6>
            <nav className="flex flex-col justify-center gap-4 font-light">
                <a href="/#" className="hover:text-purple transition duration-500">Home</a>
                <a href="/#" className="hover:text-purple transition duration-500">Why Hubble?</a>
                <a href="/#" className="hover:text-purple transition duration-500">Platform</a>
                <a href="/#" className="hover:text-purple transition duration-500">Security</a>
            </nav>
        </div>
    )
}