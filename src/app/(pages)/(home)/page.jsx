import About from "./about";
import CTA from "./cta";
import Feature from "./feature";
import Hero from "./hero";
import Quote from "./quote";

export default function page() {
  return (
    <main>
      <Hero />
      <Quote />
      <Feature />
      <About />
      <CTA />
    </main>
  )
}
