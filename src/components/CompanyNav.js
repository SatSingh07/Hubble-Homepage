export default function CompanyNav() {
    return(
        <div className="flex flex-col text-center sm:text-left">
            <h6 className="mb-4 sm:mb-8 text-paleBlue text-lg opacity-70">Company</h6>
            <nav className="flex flex-col justify-center gap-4 font-light">
                <a href="/#" className="hover:text-purple transition duration-500">About</a>
                <a href="/#" className="hover:text-purple transition duration-500">Careers</a>
                <a href="/#" className="hover:text-purple transition duration-500">Contact</a>
            </nav>
        </div>
    )
}