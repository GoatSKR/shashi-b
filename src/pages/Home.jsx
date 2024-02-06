import About from "../components/About";
import Companies from "../components/Companies";
import Dates from "../components/Dates";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Video from "../components/Video";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Companies />
            <Dates />
            <Video />
            <About />
            <Footer />
        </>

    )
}