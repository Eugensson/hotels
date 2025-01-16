import { Hero } from "@/components/hero";
import { Find } from "@/components/find";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Featured } from "@/components/featured";
import { Testimonials } from "@/components/testimonials";
import { Recommendation } from "@/components/recommendation";

const Home = () => {
  return (
    <main className="max-w-[1440px] mx-auto bg-white overflow-hidden">
      <Header />
      <Hero />
      <Featured />
      <About />
      <Recommendation />
      <Find />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Home;
