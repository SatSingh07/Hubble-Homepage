export default function ResourcesNav() {
    return(
        <div className="flex flex-col text-center sm:text-left">
            <h6 className="mb-4 sm:mb-8 text-paleBlue text-lg opacity-70">Resources</h6>
            <nav className="flex flex-col justify-center gap-4 font-light">
                <a href="/#" className="hover:text-purple transition duration-500">Customer Stories</a>
                <a href="/#" className="hover:text-purple transition duration-500">Articles</a>
                <a href="/#" className="hover:text-purple transition duration-500">Press</a>
                <a href="/#" className="hover:text-purple transition duration-500">Guides</a>
            </nav>
        </div>
    )
}