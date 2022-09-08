import LinkArrow from "../components/LinkArrow";
import mainImg from "../images/why-huble.png";


export default function Banner() {

    return(
        <section className="py-20">
            <div className="container flex justify-between items-center">
                <div className="w-1/2 pr-16">
                    <h1 className="text-[48px] font-normal leading-[1.1em]">We help organizations make sense of infinity</h1>
                    <p className="text-[22px] mt-8 text-paleBlue">Built by experts, for everyone — Hubble guarantees rapid time-to-value for teams across your enterprise, providing a telescopic view of everything.</p>

                    <div className="mt-8">
                        <LinkArrow link="/#" target="_self" text="Why Hubble?" theme="purple"/>
                    </div>
                </div>
                
                <div className="w-1/2">
                    <img src={mainImg} alt="huble dashboard" className="w-[580px]"/>
                </div>
            </div>
        </section>
    )
}