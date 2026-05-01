import Intro from "./components/Intro";
import Stack from "./components/Stack";
import Project from "./components/Project";
import About from "./components/About";

export default function Home() {
  return (
    <div id="main_body" className="bg-background text-foreground flex flex-col">
      <Intro />
      <Stack />
      <Project />
      <About />
      <div className="h-dvh"></div>
    </div>
  );
}
