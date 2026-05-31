import ConfidenceSection from "@/components/about/confidence";
import ConsultationCTA from "@/components/about/consultation";
import ExpertTeam from "@/components/about/experts";
import RadiantJourneySection from "@/components/about/journey";
import SkincareExperts from "@/components/SkinExpert";
import React from "react";


export default function about() {
  return (
    <>
    <RadiantJourneySection />
      <ExpertTeam />
      <ConfidenceSection />
      <ConsultationCTA />
      </>

  );
};
