import About from "../components/About";
import Companies from "../components/Companies";
import Dates from "../components/Dates";
import Footer from "../components/Footer";

import Hero from "../components/Hero";
import Video from "../components/Video";

export default function Home() {
    return (
        <>
            
            <Hero />
            <Companies />
            <Dates />
            <Video />
            <About />
            <Footer />
        </>

    )
}