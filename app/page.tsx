import Hero from '@/components/Hero'
import Experience from "@/components/Experience"
import Skills from "@/components/Skills"
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { Sidebar } from '@/components/Sidebar';

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col mx-auto">
       
      <div className="max-w-full w-full overflow-x-hidden scroll-smooth bg-color-bg h-screen">
        
        <Sidebar />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
