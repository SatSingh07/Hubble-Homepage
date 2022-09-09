import Button from "../components/Button";
import ctaBg from "../images/cta-bg.png";

export default function CallToAction() {

    const style = {
        backgroundImage: `url(${ctaBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    }

    return(
        <section className="py-12 lg:py-20">
            <div className="container" >
                <div style={style} className="flex flex-col justify-center items-center rounded-2xl p-10 lg:min-h-[467px] gap-8 lg:gap-12">
                    <h5 className="text-[32px] lg:text-[48px] font-normal text-center leading-[1.1em] mt-8 max-w-lg mx-auto">Bring complete visibility to your digital assets</h5>
                    <Button link="#/" text="Get started" target="_self" theme="purple" style={`lg:w-[240px]`} />
                </div>
            </div>
        </section>
    )
}