import RightArrow from "../images/icon-right-arrow.svg";

export default function Ticker() {
	return (
		<div className="bg-purple flex w-full">

			<div className="flex py-2 animate-marquee whitespace-nowrap">
                <a href="/#" className="text-sm tracking-wider capitalize inline-flex gap-[15px] mr-[100px]">
                    <span className="font-medium">Latest news</span>
                    <span className="font-light">Hubble announces it's latest announcement</span>
                    <img src={RightArrow} alt=""/>
                </a>

                <a href="/#" className="text-sm tracking-wider capitalize inline-flex gap-[15px] mr-[100px]">
                    <span className="font-medium">Latest news</span>
                    <span className="font-light">Hubble announces it's latest announcement</span>
                    <img src={RightArrow} alt=""/>
                </a>

                <a href="/" className="text-sm tracking-wider capitalize inline-flex gap-[15px] mr-[100px]">
                    <span className="font-medium">Latest news</span>
                    <span className="font-light">Hubble announces it's latest announcement</span>
                    <img src={RightArrow} alt=""/>
                </a>
			</div>

			<div className="flex py-2 animate-marquee2 whitespace-nowrap absolute top-0">
                <a href="/#" className="text-sm tracking-wider capitalize inline-flex gap-[15px] mr-[100px]">
                    <span className="font-medium">Latest news</span>
                    <span className="font-light">Hubble announces it's latest announcement</span>
                    <img src={RightArrow} alt=""/>
                </a>

                <a href="/#" className="text-sm tracking-wider capitalize inline-flex gap-[15px] mr-[100px]">
                    <span className="font-medium">Latest news</span>
                    <span className="font-light">Hubble announces it's latest announcement</span>
                    <img src={RightArrow} alt=""/>
                </a>

                <a href="/#" className="text-sm tracking-wider capitalize inline-flex gap-[15px] mr-[100px]">
                    <span className="font-medium">Latest news</span>
                    <span className="font-light">Hubble announces it's latest announcement</span>
                    <img src={RightArrow} alt=""/>
                </a>
			</div>

		</div>
	);
}
