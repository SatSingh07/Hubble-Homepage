import LinkArrow from "../components/LinkArrow";
import gradiendBg from "../images/gradient-bg.jpg";
import dashboard from "../images/hubble-dashboard-2.png";
import planet from "../images/planet-2.png";
import orbits from "../images/orbits-2.png";

export default function GradientSection() {

    const style = {
        backgroundImage: `url(${gradiendBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    }

    return(
        <section style={style} className="my-20 pt-20 relative">
            <div className="max-w-[886px] m-auto flex flex-col text-center relative">
                <h3 className="text-[48px] font-normal leading-[1.1em] mt-8 mx-auto">The Technology Intelligence Platform</h3>

                <p className="text-[20px] max-w-[645px] mt-8 mx-auto">Hubble is the world's first Technology Intelligence Platform that helps you see things more clearly than ever before.</p>

                <LinkArrow link="#/" text="Explore our Platform" target="_self" theme="darkBlue" style={`mt-8 mx-auto`}/>
                
                <div className="relative mt-10 z-[1]">
                    <img src={dashboard} alt="hubble dashboard" className="" />
                    <img src={orbits} alt="" className="absolute top-[10%] right-[6%] translate-x-[50%] translate-y-[-50%]" />
                </div>

                <img src={planet} alt="" className="absolute bottom-0 left-0 translate-x-[-50%] z-[0] opacity-30" />
            </div>

            <div className="absolute bottom-0 w-full h-2/5 bg-gradient-to-t from-darkBlue z-[2]"></div>
        </section>
    )
}