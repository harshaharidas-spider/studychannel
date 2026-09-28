import HeaderNavbar from "./components/HeaderNavbar";
import HeroSection from "./components/HeroSection";
import HomeContentSection from "./components/HomeContentSection";
import FooterSection from "./components/FooterSection";
import FloatingContactWidget from "./components/FloatingContactWidget";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col select-none">
      <HeaderNavbar />
      <HeroSection />
      <HomeContentSection />
      <FooterSection />
      <FloatingContactWidget />
    </main>
  );
}
