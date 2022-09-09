import { useState } from "react";
import LinkArrow from "../components/LinkArrow";
import vmImage from "../images/vm.png";
import blueBlur from "../images/blur-blue-2.svg";
import purpleBlur from "../images/blur-purple-2.svg";

export default function Tabs() {

    const [activeTab, setActiveTab] = useState(1);

    const navItemStyle = "tab-nav-item px-6 py-2 rounded-md text-center transition duration-500 cursor-pointer";
    const activeNavItemStyle = "bg-purple"
    const navItemHighlight = "absolute w-[200px] max-w-[200px] bottom-[-0.5rem] left-1/2 z-[-1] translate-x-[-50%] translate-y-full"
    const tabBodyStyle = "flex flex-col lg:flex-row justify-between"
    
    function changeTab(index) {
        setActiveTab(index)
    }
    
    return(
        <section className="py-12 lg:py-20">
            <div className="container">
                <h3 className="text-[36px] lg:text-[48px] font-normal text-center leading-[1.1em] mt-8 mx-auto">Customize to your use case</h3>

                <ul className="bg-darkBlue border-white border-[1px] border-opacity-10 rounded-lg flex justify-between w-[90%] lg:w-[915px] mt-20 mx-auto p-2 relative z-[1] translate-y-[50%] overflow-x-scroll lg:overflow-visible whitespace-nowrap"> 
                    <li className="relative overflow-visible">
                        <button className={activeTab === 1 ? `${navItemStyle} ${activeNavItemStyle}` : `${navItemStyle}`} onClick={() => changeTab(1)}>
                            Vulnerability Management
                        </button>
                        <img src={purpleBlur} alt="" className={activeTab === 1 ? `${navItemHighlight} hidden lg:block` : `${navItemHighlight} hidden`} />
                    </li>

                    <li className="relative overflow-visible">
                        <button className={activeTab === 2 ? `${navItemStyle} ${activeNavItemStyle}` : `${navItemStyle}`} onClick={() => changeTab(2)}>
                            Security Operations
                        </button>
                        <img src={purpleBlur} alt="" className={activeTab === 2 ? `${navItemHighlight} hidden lg:block` : `${navItemHighlight} hidden`} />
                    </li>

                    <li className="relative overflow-visible">
                        <button className={activeTab === 3 ? `${navItemStyle} ${activeNavItemStyle}` : `${navItemStyle}`} onClick={() => changeTab(3)}>
                            Data Governance
                        </button>
                        <img src={purpleBlur} alt="" className={activeTab === 3 ? `${navItemHighlight} hidden lg:block` : `${navItemHighlight} hidden`} />
                    </li>

                    <li className="relative overflow-visible">
                        <button 
                            className={activeTab === 4 ? `${navItemStyle} ${activeNavItemStyle}` : `${navItemStyle}`} onClick={() => changeTab(4)}>
                            IT Blind Spots
                        </button>
                        <img src={purpleBlur} alt="" className={activeTab === 4 ? `${navItemHighlight} hidden lg:block` : `${navItemHighlight} hidden`} />
                    </li>
                </ul>               



                <div className="bg-darkBlue backdrop-blur-[50px] border-white border-[1px] border-opacity-10 rounded-2xl overflow-hidden">

                    <div className={activeTab === 1 ? `${tabBodyStyle}` : `${tabBodyStyle} hidden`}>
                        <div className="lg:w-[460px] flex flex-col gap-3 justify-center p-0 mx-8 mt-12 mb-6 lg:mb-12 lg:pl-16">
                            <h4 className="text-[32px]">Vulnerability Management</h4>
                            <p className="text-lg mt-3 text-paleBlue">Asset visibility from Hubble can be easily integrated with leading vulnerability management platforms to continuously improve scan coverage and performance.</p>
                            <LinkArrow link="/#" target="_self" text="Learn more" theme="purple"/>
                        </div>
                        
                        <img src={vmImage} alt="Vulnerability Management" className="lg:w-1/2" />

                        <img src={blueBlur} alt="" className="absolute bottom-0 left-1/2 z-[-1] opacity-50 translate-x-[-50%]" />
                    </div>


                    <div className={activeTab === 2 ? `${tabBodyStyle}` : `${tabBodyStyle} hidden`}>
                        <div className="lg:w-[460px] flex flex-col gap-3 justify-center p-0 mx-8 mt-12 mb-6 lg:mb-12 lg:pl-16">
                            <h4 className="text-[32px]">Security Operations</h4>
                            <p className="text-lg mt-3 text-paleBlue">Asset visibility from Hubble can be easily integrated with leading vulnerability management platforms to continuously improve scan coverage and performance.</p>
                            <LinkArrow link="/#" target="_self" text="Learn more" theme="purple"/>
                        </div>
                        
                        <img src={vmImage} alt="Security Operations" className="lg:w-1/2" />

                        <img src={blueBlur} alt="" className="absolute bottom-0 left-1/2 z-[-1] opacity-50 translate-x-[-50%]" />
                    </div>


                    <div className={activeTab === 3 ? `${tabBodyStyle}` : `${tabBodyStyle} hidden`}>
                        <div className="lg:w-[460px] flex flex-col gap-3 justify-centerp-0 mx-8 mt-12 mb-6 lg:mb-12 lg:pl-16">
                            <h4 className="text-[32px]">Data Governance</h4>
                            <p className="text-lg mt-3 text-paleBlue">Asset visibility from Hubble can be easily integrated with leading vulnerability management platforms to continuously improve scan coverage and performance.</p>
                            <LinkArrow link="/#" target="_self" text="Learn more" theme="purple"/>
                        </div>
                        
                        <img src={vmImage} alt="Data Governance" className="lg:w-1/2" />

                        <img src={blueBlur} alt="" className="absolute bottom-0 left-1/2 z-[-1] opacity-50 translate-x-[-50%]" />
                    </div>


                    <div className={activeTab === 4 ? `${tabBodyStyle}` : `${tabBodyStyle} hidden`}>
                        <div className="lg:w-[460px] flex flex-col gap-3 justify-centerp-0 mx-8 mt-12 mb-6 lg:mb-12 lg:pl-16">
                            <h4 className="text-[32px]">IT Blind Spots</h4>
                            <p className="text-lg mt-3 text-paleBlue">Asset visibility from Hubble can be easily integrated with leading vulnerability management platforms to continuously improve scan coverage and performance.</p>
                            <LinkArrow link="/#" target="_self" text="Learn more" theme="purple"/>
                        </div>
                        
                        <img src={vmImage} alt="IT Blind Spots" className="lg:w-1/2" />

                        <img src={blueBlur} alt="" className="absolute bottom-0 left-1/2 z-[-1] opacity-50 translate-x-[-50%]" />
                    </div>
                </div>
            </div>
        </section>
    )
}