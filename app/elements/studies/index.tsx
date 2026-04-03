import styles from "./studies.module.css";
import SectionTitle from "@/app/components/sectionTitle";
import { studies } from "@/app/data/studies";

export default function Studies() {
  return (
    <section>
      <SectionTitle title="knowledge acquired" />

      <div className={styles.studiesContainer}>
        {studies.map((study, index) => (
          <div key={index} className={styles.studyContainer}>
            <h4 className="baskervville">{study.school}</h4>
            <div className={styles.descriptionContainer}>
              <div className={styles.titleContainer}>
                <h4>{study.course}</h4>
                <h4>{study.dates}</h4>
              </div>
              <p>{study.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
