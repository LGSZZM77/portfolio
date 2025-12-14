import Contact from "./Contact/page";
import Intro from "./Intro/page";
import Project from "./Project/page";
import Stack from "./Stack/page";

export default function Home() {
  const sections = [
    { component: Intro, id: "home" },
    { component: Stack, id: "stack" },
    { component: Project, id: "project" },
    { component: Contact, id: "contact" },
  ];

  return (
    <div>
      {sections.map(({ component: SectionComponent, id }) => (
        <section
          className="flex min-h-screen w-full scroll-mt-16 justify-center sm:scroll-mt-18"
          key={id}
          id={id}
        >
          <div className="h-full w-8/10">
            <SectionComponent />
          </div>
        </section>
      ))}
    </div>
  );
}
