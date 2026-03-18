import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="bg-[#121212]">
      {/* 
        The scrollytelling section. 
        It has a height of 500vh to allow a long scroll.
        The canvas and overlay within will stick to the screen and animate based on progress.
      */}
      <section className="relative">
        <ScrollyCanvas />
        <Overlay />
      </section>

      {/* 
        The experience and projects sections appear normally _after_ you scroll past the 500vh mark.
      */}
      <Experience />
      <Projects />
      
      {/* Small footer */}
      <footer className="py-8 text-center text-white/30 text-sm border-t border-white/5">
        <p>© {new Date().getFullYear()} Scrollytelling Portfolio. Built with Next.js & Framer Motion.</p>
      </footer>
    </main>
  );
}
