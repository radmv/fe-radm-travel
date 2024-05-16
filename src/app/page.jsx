import {
  Categories,
  Footer,
  Header,
  Hero,
  MostPicked,
  Testimony,
} from "@/components";
import landingPage from "../json/landingPage.json";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero data={landingPage.hero} />
      <MostPicked data={landingPage.mostPicked} />
      <Categories data={landingPage.categories} />
      <Testimony data={landingPage.testimonial} />
      <Footer />
    </main>
  );
}
