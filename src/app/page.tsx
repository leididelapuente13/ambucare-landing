import { Header } from "@/app/ui/layout/header/Header";
import { Footer } from "./ui/layout/footer/Footer";
import Meta from "@/components/Meta";
import { ProjectDescription } from "@/app/ui/components/sections/ProjectDescription";
import { ProposalOfValue } from "@/app/ui/components/sections/ProposalOfValue";
import { FrequentQuestions } from "@/app/ui/components/sections/FrequentQuestions";
import { Polls } from "@/app/ui/components/sections/Polls";
import { ProposalBenefits } from "@/app/ui/components/sections/ProposalBenefits";
import { poppins } from "./ui/fonts";

export default function Home() {
  return (
    <>
      <Meta />
      <main className={poppins.className}>
        <Header />
        <ProjectDescription />
        <ProposalOfValue />
        <ProposalBenefits />
        <Polls />
        <FrequentQuestions />
        <Footer />
      </main>
    </>
  );
}
