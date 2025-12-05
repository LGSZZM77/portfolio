import Call from './components/Call';
import Intro from './components/Intro';
import Project from './components/Project';
import Stack from './components/Stack';

export default function Home() {
  const sections = [
    { component: Intro, id: 'home' },
    { component: Stack, id: 'stack' },
    { component: Project, id: 'project' },
    { component: Call, id: 'call' },
  ];

  return (
    <div>
      {sections.map(({ component: SectionComponent, id }) => (
        <section
          className="h-screen w-full pt-15 flex justify-center items-center bg-red-100"
          key={id}
          id={id}>
          <div className="w-8/10 h-full bg-blue-300">
            <SectionComponent />
          </div>
        </section>
      ))}
    </div>
  );
}
