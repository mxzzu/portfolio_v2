import styles from "./languages.module.css";
import { languages } from "@/app/data/languages";
import SectionTitle from "@/app/components/sectionTitle";

export default function Languages() {
  return (
    <section>
      <SectionTitle title="global correspondent" />

      <div className={styles.languageGrid}>
        <div className={styles.gridCol}>
          <p>language</p>
          <p>basic</p>
          <p>intermediate</p>
          <p>advanced</p>
          <p className="hidden md:block">native language</p>
        </div>
        {languages.map((language, index) => (
          <div key={index} className={styles.gridCol}>
            <p>{language.language}</p>

            <div className={styles.dotContainer}>
              <div
                className={`${styles.dot} ${language.level >= 1 && styles.dotFull}`}
              />
              <div
                className={`${styles.dot} ${language.level >= 2 && styles.dotFull}`}
              />
            </div>

            <div className={styles.dotContainer}>
              <div
                className={`${styles.dot} ${language.level >= 3 && styles.dotFull}`}
              />
              <div
                className={`${styles.dot} ${language.level >= 4 && styles.dotFull}`}
              />
            </div>

            <div className={styles.dotContainer}>
              <div
                className={`${styles.dot} ${language.level >= 5 && styles.dotFull}`}
              />
              <div
                className={`${styles.dot} ${language.level >= 6 && styles.dotFull}`}
              />
            </div>

            <div className={`hidden! ${styles.dotContainer} md:flex!`}>
              <div
                className={`${styles.dot} ${language.level >= 7 && styles.dotFull}`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
