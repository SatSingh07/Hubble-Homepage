import dashboard from "../images/hubble-dashboard.png";
import orbits from "../images/orbits.png";
import nebula from "../images/nebula.png";
import planet from "../images/planet.png";
import starCluster from "../images/star-cluster.png";
import Button from "../components/Button";

export default function Banner() {

    return(
        <section className="relative mt-[133px] lg:mt-[113px]">
            
            <div className="flex flex-col lg:flex-row justify-between items-center container">
                <div className="w-full lg:w-[54%] relative z-[4]">
                    <h1 className="text-[42px] lg:text-[60px] text-center lg:text-left font-normal leading-[1.1em]">Asset intelligence at the speed of businesses</h1>
                    <p className="text-[18px] lg:text-[22px] text-center lg:text-left mt-8 text-paleBlue">Built for enterprise teams, Hubble’s Technology Intelligence Platform helps you construct a clear map of your technology asset domain and drive digital transformation.</p>

                    <div className="mt-8 flex gap-4 justify-center lg:justify-start">
                        <Button link="/#" target="_self" text="Get started" style={`lg:w-[283px]`}/>
                        <Button link="/#" target="_self" text="Why Hubble?" transparent/>
                    </div>
                </div>
                
                <div className="w-full lg:w-[46%] relative">
                    <div className="relative z-[2]">
                        <img src={dashboard} alt="huble dashboard" className="relative max-w-full lg:max-w-[750px] ml-0 lg:ml-4"/>
                        <img src={orbits} alt="" className="absolute top-[0] left-[0] w-[460px] animate-pulse hidden lg:block"/>
                        <div className="absolute bottom-0 w-full lg:w-[750px] h-2/5 bg-gradient-to-t from-darkBlue hidden lg:block"></div>
                    </div>

                    <img src={nebula} alt="" className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-0"/>
                    <img src={planet} alt="" className="absolute bottom-4 w-[195px] z-[1]"/>
                </div>
            </div>

            <img src={starCluster} alt="" className="absolute z-[-1] bottom-0 left-0 translate-x-[-50%] translate-y-[50%]"/>
        </section>
    )
}