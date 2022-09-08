import see from "../images/see.png";
import seeIcon from "../images/icon-see.svg";
import understand from "../images/understand.png";
import understandIcon from "../images/icon-understand.svg";
import enable from "../images/enable.png";
import enableIcon from "../images/icon-enable.svg";
import blurRed from "../images/blur-red.svg";
import blurPurple from "../images/blur-purple.svg";
import blurBlue from "../images/blur-blue.svg";

export default function ScrollSection() {

    return(
        <section className="py-20">
            <div className="container overflow-visible relative">

                <h2 className="text-[48px] text-center font-normal leading-[1.1em] max-w-3xl m-auto mb-20">Build a single source of truth and drive transformation</h2>

                
                <div className="sticky top-[175px] bg-darkBlue backdrop-blur-[50px] border-white border-[1px] border-opacity-10 rounded-2xl flex justify-between overflow-hidden">
                    <img src={see} alt="Eliminate risk" className="w-1/2" />

                    <div className="w-[413px] flex flex-col gap-3 justify-center my-12 mx-16">
                        <span className="text-[#FB3D5D] text-[13px] flex items-center uppercase tracking-[0.15em]"><img src={seeIcon} alt="" className=" mr-2"/> See</span>
                        <h4 className="text-[32px]">Eliminate risk</h4>
                        <p className="text-lg mt-3 text-paleBlue">We provide visibility into your organization's environment. Giving you knowledge you don’t currently have — a single source of truth to eliminate risk.</p>
                    </div>

                    <img src={blurRed} alt="" className="absolute top-0 right-0 z-[-1] opacity-50" />
                </div>



                <div className="sticky top-[175px] bg-darkBlue backdrop-blur-[50px] border-white border-[1px] border-opacity-10 rounded-2xl flex justify-between overflow-hidden">
                    <img src={understand} alt="Gain context" className="w-1/2" />

                    <div className="w-[413px] flex flex-col gap-3 justify-center my-12 mx-16">
                        <span className="text-[#E359FF] text-[13px] flex items-center uppercase tracking-[0.15em]"><img src={understandIcon} alt="" className=" mr-2"/> Understand</span>
                        <h4 className="text-[32px]">Gain context</h4>
                        <p className="text-lg mt-3 text-paleBlue">Unlike other asset management tools, we bring context to existing data — providing the insights needed for a resilient business.</p>
                    </div>

                    <img src={blurPurple} alt="" className="absolute top-0 right-1/2 z-[-1] opacity-50 translate-x-[50%]" />
                </div>

                

                <div className="sticky top-[175px] bg-darkBlue backdrop-blur-[50px] border-white border-[1px] border-opacity-10 rounded-2xl flex justify-between overflow-hidden">
                    <img src={enable} alt="Unlock value" className="w-1/2" />

                    <div className="w-[413px] flex flex-col gap-3 justify-center my-12 mx-16">
                        <span className="text-[#3AFCFC] text-[13px] flex items-center uppercase tracking-[0.15em]"><img src={enableIcon} alt="" className=" mr-2"/> Enable</span>
                        <h4 className="text-[32px]">Unlock value</h4>
                        <p className="text-lg mt-3 text-paleBlue">Turn insights into action. Unlock value and drive digital transformation across your business with asset intelligence workflows.</p>
                    </div>

                    <img src={blurBlue} alt="" className="absolute bottom-0 right-0 z-[-1] opacity-50" />
                </div>

            </div>
        </section>  
    )
}