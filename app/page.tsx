import Header from "./elements/header";
import Jobs from "./elements/jobs";
import Languages from "./elements/languages";
import Studies from "./elements/studies";

export default function Home() {
  return (
    <main>
      <Header/>
      <Languages />
      <Jobs />
      <Studies />
    </main>
  );
}
