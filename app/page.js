import Hero from "../components/hero";
import SkincarePhilosophy from "@/components/philosophy";
import SignatureTreatments from "@/components/treatments";
import WhyTrustGlisten from "@/components/whyTrust";
import Testimonials from "@/components/Clientsays";
import SkincareExperts from "@/components/SkinExpert";

export default function Home() {
  return (
    <>
      <Hero />
      <SkincarePhilosophy />
      <SignatureTreatments />
      <WhyTrustGlisten />
      <Testimonials />
      <SkincareExperts />
    </>
  );
}
