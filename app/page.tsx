import { useRouter } from 'next/router'
import HeroSlider from "./components/sections/slider/heroSlider";
import AboutSection from "./components/sections/about/aboutSection";
import ServiceSection from "./components/sections/services/serviceSection";
import PerformanceSection from "./components/sections/performances/performanceSection";
import Properties from "./components/sections/Properties/PropertieSection";
export default function Page() {
    
    return (
        
            <>
                <HeroSlider />
                <AboutSection />
                <ServiceSection />
                <PerformanceSection />
                <Properties/>
            </>
    );

}