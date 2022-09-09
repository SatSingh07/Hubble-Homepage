import CompanyInfo from "../components/CompanyInfo";
import MainNavFooter from "../components/MainNavFooter";
import SolutionsNav from "../components/SolutionsNav";
import ResourcesNav from "../components/ResourcesNav";
import CompanyNav from "../components/CompanyNav";
import Newsletter from "../components/Newsletter";
import Copyright from "../components/Copyright";

export default function Footer() {
    return(
        <footer className="py-12 lg:py-20">
            <div className="container">

                <div className="flex flex-col md:flex-row justify-between">
                    <CompanyInfo />

                    <div className="flex flex-col sm:flex-row justify-between gap-8 lg:gap-14 lg:max-w-4xl mt-8 lg:mt-0">
                        <MainNavFooter />
                        <SolutionsNav />
                        <ResourcesNav />
                        <CompanyNav />
                    </div>
                </div>

                <div className="mt-12 lg:mt-20">
                    <Newsletter />
                </div>

                <div className="mt-12 lg:mt-20 pt-12 lg:pt-20 border-t-[1px] border-paleBlue border-opacity-20">
                    <Copyright />
                </div>
            </div>
        </footer>
    )
}