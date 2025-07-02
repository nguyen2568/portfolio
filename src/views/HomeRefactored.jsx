import { About } from '.';
import { 
  HeroSection, 
  AboutSection, 
  ExperienceSection, 
  ProjectsSection, 
  ContactSection, 
  Footer 
} from '../components';

const Home = () => {
  return (
    <>
      <About />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;
