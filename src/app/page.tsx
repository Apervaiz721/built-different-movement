import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Books from "@/components/Books";
import Movement from "@/components/Movement";
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
        <Books />
        <Movement />
        <Affirmations />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
