export default function Newsletter() {
    return(
        <div className="flex flex-col md:flex-row justify-between items-center">
            <h6 className="text-paleBlue text-[22px] lg:text-[28px] text-center md:text-left">Get the latest updates. <br/>Subscribe for our newsletter</h6>

            <form action="" className="border-white border-[1px] border-opacity-10 rounded-lg w-full md:w-3/5 lg:w-[588px] mt-4 md:mt-0 flex justify-between items-center p-2">

                <input type="email" placeholder="Enter your email" className="bg-transparent w-full mx-4 h-8 focus-visible:outline-none focus-visible:border-b-[1px] border-purple" />
                
                <button type="submit" className="bg-purple border-purple hover:bg-purple2 hover:border-purple2 px-10 py-3 rounded-md text-center font-medium border-[1px] active:scale-95 transition duration-500">Subscribe</button>

            </form>
        </div>
    )
}