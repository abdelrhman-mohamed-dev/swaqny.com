export const metadata = {
  title: "Home - Swaqny",
  description: "Discover Swaqny, your trusted partner in technical branding. We craft innovative solutions to elevate your brand identity with cutting-edge technology and creative design. Let's build your brand's future!",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <FeaturesPlanet />
      <LargeTestimonial />
      <Cta />
    </>
  );
}
