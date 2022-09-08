import Header from "./sections/Header";
import Banner from "./sections/Banner";
import CardGrid from "./sections/CardGrid";
import Clients from "./sections/Clients";
import BannerSecondary from "./sections/BannerSecondary";
import Stats from "./sections/Stats";
import ScrollSection from "./sections/ScrollSection";
import GradientSection from "./sections/GradientSection";
import Tabs from "./sections/Tabs";
import CallToAction from "./sections/CallToAction";

export default function App() {
	return (
		<>
			<Header />
			<Banner /> 
			<CardGrid />
			<Clients />
			<BannerSecondary />
			<Stats />
			<ScrollSection />
			<GradientSection />
			<Tabs />
			<CallToAction />
		</>
	);
}
