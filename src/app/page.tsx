import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import About from "@/components/About";
import Books from "@/components/Books";
import Movement from "@/components/Movement";
import Speaking from "@/components/Speaking";
import Coaching from "@/components/Coaching";
import Affirmations from "@/components/Affirmations";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";

export default function Home() {
  return (
    <>
      <ScrollAnimations />
      <Navbar />
      <main>
        <Hero />
        <Story />
        <About />
        <Books />
        <Movement />
        <Speaking />
        <Coaching />
        <Affirmations />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
