import codelify from '../images/codelify-logo.svg';
import marketly from '../images/marketly-logo.svg';
import startup from '../images/startup-logo.svg';

export default function Clients() {
    return(
        <section className="py-20">
            <div className="container overflow-hidden">

                <h3 className=" text-[32px] text-center">Trusted by pioneering enterprise players</h3>

                <div className="mt-12 flex items-center w-full overflow-hidden relative border-white border-[1px] border-opacity-10 rounded-lg bg-darkBlue">
                    <div className="flex py-8 animate-marquee whitespace-nowrap">
                        <img src={codelify} alt="Codelify logo" className='mr-16 max-w-[150px]'/>
                        <img src={marketly} alt="Marketly logo" className='mr-16 max-w-[150px]'/>
                        <img src={startup} alt="Startup logo" className='mr-16 max-w-[150px]'/>
                        <img src={codelify} alt="Codelify logo" className='mr-16 max-w-[150px]'/>
                        <img src={marketly} alt="Marketly logo" className='mr-16 max-w-[150px]'/>
                        <img src={startup} alt="Startup logo" className='mr-16 max-w-[150px]'/>
                    </div>

                    <div className="flex py-8 animate-marquee2 whitespace-nowrap absolute top-0">
                        <img src={codelify} alt="Codelify logo" className='mr-16 max-w-[150px]'/>
                        <img src={marketly} alt="Marketly logo" className='mr-16 max-w-[150px]'/>
                        <img src={startup} alt="Startup logo" className='mr-16 max-w-[150px]'/>
                        <img src={codelify} alt="Codelify logo" className='mr-16 max-w-[150px]'/>
                        <img src={marketly} alt="Marketly logo" className='mr-16 max-w-[150px]'/>
                        <img src={startup} alt="Startup logo" className='mr-16 max-w-[150px]'/>
                    </div>
                </div>
                
            </div>
        </section>
    )
}