import elipseLBlue from "../images/ellipse-light-blue.svg";
import elipseGreen from "../images/ellipse-green.svg";
import elipseBlue from "../images/ellipse-blue.svg";

export default function Stats() {
    return(
        <section className="pb-12 lg:pb-20">
            <div className="container flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-4">
                <div className="max-w-full w-96 lg:w-4/12 flex self-stretch justify-center items-center p-6 border-white border-[1px] border-opacity-10 rounded-lg overflow-hidden relative">
                    <span className="text-3xl md:text-5xl border-[#3AFCFC] border-r-[1px] pr-6 mr-6">74</span>
                    <p className="text-md md:text-lg lg:pr-4">Magna lectus cursus neque, enim</p>
                    <img src={elipseLBlue} alt="" className="absolute top-0 left-0 w-[400px] max-w-none translate-x-[-45%] translate-y-[-45%] opacity-75 z-[-1]"/>
                </div>

                <div className="max-w-full w-96 lg:w-4/12 flex self-stretch justify-center items-center p-6 border-white border-[1px] border-opacity-10 rounded-lg overflow-hidden relative">
                    <span className="text-3xl md:text-5xl border-[#D1FF5F] border-r-[1px] pr-6 mr-6">500+</span>
                    <p className="text-md md:text-lg lg:pr-4">Magna lectus cursus neque</p>
                    <img src={elipseGreen} alt="" className="absolute top-0 left-0 w-[400px] max-w-none translate-x-[-45%] translate-y-[-45%] opacity-75 z-[-1]"/>
                </div>

                <div className="max-w-full w-96 lg:w-4/12 flex self-stretch justify-center items-center p-6 border-white border-[1px] border-opacity-10 rounded-lg overflow-hidden relative">
                    <span className="text-3xl md:text-5xl border-[#0091FF] border-r-[1px] pr-6 mr-6">74</span>
                    <p className="text-md md:text-lg lg:pr-4">Magna lectus cursus neque, enim</p>
                    <img src={elipseBlue} alt="" className="absolute top-0 left-0 w-[400px] max-w-none translate-x-[-45%] translate-y-[-45%] opacity-75 z-[-1]"/>
                </div>
            </div>
        </section>
    )
}