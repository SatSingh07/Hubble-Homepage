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
import Footer from "./sections/Footer";
import MobileMenu from "./components/MobileMenu";
import { useState } from "react";

export default function App() {

	const [menuState, setMenuState] = useState(false);

	function toggleMenu(toggle) {
		setMenuState( prevMenuState => !prevMenuState )
	}

	return (
		<>
			<Header mobileMenuClick={toggleMenu} />
			<MobileMenu display={menuState} mobileMenuClick={toggleMenu} />
			<Banner /> 
			<CardGrid />
			<Clients />
			<BannerSecondary />
			<Stats />
			<ScrollSection />
			<GradientSection />
			<Tabs />
			<CallToAction />
			<Footer />
		</>
	);
}
