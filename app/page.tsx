import About from "@/components/About";
import Awards from "@/components/Awards";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import { homeJsonLd, jsonLdString } from "@/lib/structuredData";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(homeJsonLd()) }}
      />
      <div className="container mx-auto max-w-[1320px] px-5 md:px-10 xl:px-5">
        {/* Hero: the short intro */}
        <Hero />
      </div>

      {/* Portfolio: the projects right after the intro */}
      <Portfolio />

      <div className="container mx-auto max-w-[1320px] px-5 md:px-10 xl:px-5">
        {/* Services */}
        <Services />

        {/* Clients */}
        <Clients />
      </div>

      {/* Awards */}
      <Awards />

      {/* About: the founder, after the work */}
      <div className="container mx-auto max-w-[1320px] px-5 md:px-10 xl:px-5">
        <About />
      </div>

      {/* Testimonial */}
      {/* <Testimonial /> */}

      {/* Blog */}
      {/* <Blog /> */}

      {/* Contact */}
      <Contact />
    </>
  );
}
