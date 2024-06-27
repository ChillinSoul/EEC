import HeroSection from "./cmp/hero/heroSection";
import AboutSection from "./cmp/about/aboutSection";
import ProjectsShowcase from "./cmp/project/projectsShowcase";
import Testimonials from "./cmp/testimonials/testimonials";
import JoinUs from "./cmp/join/joinUs";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProjectsShowcase />
      {/* <Testimonials /> */}
      <JoinUs />
    </main>
  );
}
