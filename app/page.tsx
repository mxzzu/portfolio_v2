import Header from "@/app/elements/header";
import Jobs from "@/app/elements/jobs";
import Languages from "@/app/elements/languages";
import Skills from "@/app/elements/skills";
import Studies from "@/app/elements/studies";
import { about } from "@/app/data/about";
import Photo from "@/app/elements/photo";
import DailyColumn from "@/app/elements/dailyColumn";
import Contact from "@/app/elements/contact";
import Footer from "@/app/elements/footer";

export default function Home() {
  return (
    // <main>
    //   <Header />

    //   <div className="h-(--spacing-gap-40)" />

    //   <div className="flex gap-gap-30">
    //     <div className="flex flex-2 flex-col gap-(--spacing-gap-40)">
    //       <p>{about.description}</p>
    //       <div className="flex flex-2 flex-col gap-(--spacing-gap-40)">
    //         <Languages />
    //         <Jobs />
    //       </div>
    //       <div className="flex flex-1 flex-col gap-(--spacing-gap-40)">
    //         {/* photo */}
    //         <Photo />
    //         {/* daily column */}
    //       </div>
    //       {/* skills */}
    //       <Skills />
    //       {/* hobby */}
    //       {/* contacts */}
    //     </div>
    //     <div className="flex flex-1 flex-col gap-(--spacing-gap-40)">
    //       <Studies />
    //       {/* works */}
    //     </div>
    //   </div>
    // </main>

    <main>
      <Header />
      <div className="h-(--spacing-gap-40)" />

      {/* Griglia principale a 3 colonne su desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* CONTAINER SINISTRA + CENTRO (Occupa 2/3 della griglia) */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* DESCRIZIONE: Questa sta sopra a tutto il blocco di sinistra e centro */}
          <div className="md:col-span-2">
            <p className="text-justify">{about.description}</p>
          </div>

          {/* SOTTO-COLONNA SINISTRA (Lidl, Skills, Languages) */}
          <div className="flex flex-col gap-10">
            <Languages />
            <Jobs />
            <Skills />
          </div>

          {/* SOTTO-COLONNA CENTRALE (Photo, Daily Column, Hobby, Contacts) */}
          <div className="flex flex-col gap-10 px-4">
            <Photo />
            <DailyColumn />
            <Contact />
          </div>
        </div>

        {/* COLONNA DESTRA (Knowledge Acquired, Works) */}
        <div className="md:col-span-1 flex flex-col gap-10">
          <Studies />
        </div>
      </div>
      <Footer />
    </main>
  );
}
