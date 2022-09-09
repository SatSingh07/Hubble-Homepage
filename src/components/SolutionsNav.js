export default function MainNavFooter() {
    return(
        <div className="flex flex-col text-center sm:text-left">
            <h6 className="mb-4 sm:mb-8 text-paleBlue text-lg opacity-70">Solutions</h6>
            <nav className="lg:w-[420px] lg:list-2col flex flex-col gap-4 font-light">
                <a href="/#" className="hover:text-purple transition duration-500">Vulnerability Management</a>
                <a href="/#" className="hover:text-purple transition duration-500">Security Operations</a>
                <a href="/#" className="hover:text-purple transition duration-500">Data Governance</a>
                <a href="/#" className="hover:text-purple transition duration-500">IT Blind Spots</a>
                <a href="/#" className="hover:text-purple transition duration-500">Business Continuity</a>
                <a href="/#" className="hover:text-purple transition duration-500">For CISOs</a>
                <a href="/#" className="hover:text-purple transition duration-500">For CIOs</a>
                <a href="/#" className="hover:text-purple transition duration-500">For Security Operators</a>
                <a href="/#" className="hover:text-purple transition duration-500">For IT Operators</a>
            </nav>
        </div>
    )
}