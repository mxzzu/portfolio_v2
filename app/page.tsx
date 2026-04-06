import Header from "@/app/elements/header";
import Jobs from "@/app/elements/jobs";
import Languages from "@/app/elements/languages";
import Skills from "@/app/elements/skills";
import Studies from "@/app/elements/studies";
import { about } from "@/app/data/about";

export default function Home() {
  return (
    <main>
      <Header/>

      <div className="h-(--spacing-gap-40)" />

      <div className="flex gap-gap-30">
        <div className="flex flex-2 flex-col gap-(--spacing-gap-40)">
          <p>{about.description}</p>
          <div className="flex flex-2 flex-col gap-(--spacing-gap-40)">
            <Languages />
            <Jobs />
          </div>
          <div className="flex flex-1 flex-col gap-(--spacing-gap-40)">
            {/* photo */}
            {/* daily column */}
          </div>
          {/* skills */}
          <Skills />
          {/* hobby */}
          {/* contacts */}
        </div>
        <div className="flex flex-1 flex-col gap-(--spacing-gap-40)">
          <Studies />
          {/* works */}
        </div>
      </div>
    </main>
  );
}
