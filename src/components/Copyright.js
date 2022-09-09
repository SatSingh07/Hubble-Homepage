export default function Copyright() {
    return(
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <nav className="flex flex-col sm:flex-row justify-center gap-4 md:gap-12 font-light">
                <a href="/#" className="text-paleBlue opacity-70 hover:text-purple transition duration-500">Privacy Policy</a>
                <a href="/#" className="text-paleBlue opacity-70 hover:text-purple transition duration-500">Cookie Policy</a>
                <a href="/#" className="text-paleBlue opacity-70 hover:text-purple transition duration-500">Terms & Conditions</a>
            </nav>

            <p className="text-paleBlue opacity-70 mt-4 md:mt-0">© Hubble 2022 All right reserved</p>
        </div>
    )
}