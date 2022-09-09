import LinkArrow from "../components/LinkArrow";
import mainImg from "../images/why-huble.png";


export default function Banner() {

    return(
        <section className="py-12 lg:py-20">
            <div className="container flex flex-col lg:flex-row justify-between items-center">
                <div className="lg:w-1/2 lg:pr-16 text-center lg:text-left">
                    <h1 className="text-[36px] lg:text-[48px] font-normal leading-[1.1em]">We help organizations make sense of infinity</h1>
                    <p className="text-[18px] lg:text-[22px] mt-8 text-paleBlue">Built by experts, for everyone — Hubble guarantees rapid time-to-value for teams across your enterprise, providing a telescopic view of everything.</p>

                    <div className="mt-8">
                        <LinkArrow link="/#" target="_self" text="Why Hubble?" theme="purple"/>
                    </div>
                </div>
                
                <div className="lg:w-1/2">
                    <img src={mainImg} alt="huble dashboard" className="w-full w-[320px] lg:w-[580px] mt-8 lg:mt-0"/>
                </div>
            </div>
        </section>
    )
}