import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import About from "@/components/About";
import PilotForm from "@/components/PilotForm";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <About />
    <Problem />
    <Features />
    <PilotForm />
    <Footer />
  </div>
);

export default Index;
