import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Desktop from "@/components/Desktop";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Stack from "@/components/Stack";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <LanguageProvider>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Desktop />
        <About />
        <Timeline />
        <Stack />
        <Services />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </LanguageProvider>
  );
}
