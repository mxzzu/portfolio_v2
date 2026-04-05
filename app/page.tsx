import Header from "./elements/header";
import Jobs from "./elements/jobs";
import Languages from "./elements/languages";
import Studies from "./elements/studies";
import { about } from "@/app/data/about";

export default function Home() {
  return (
    <main>
      <Header/>

      <div className="h-(--spacing-gap-40)" />

      <div className="flex gap-(--spacing-gap-30)">
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
