import styles from "./skills.module.css";
import SectionTitle from "@/app/components/sectionTitle";
import { skills } from "@/app/data/skills";

export default function Skills() {
  return (
    <section>
      <SectionTitle title="tools of the trade" subtitle="“The machinery, methods, and mastery powering every result.”" />

      <div className={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillContainer}>
            <div className={styles.titleContainer}>
              <h4 className="oswald">{skill.title}</h4>
              <div className={styles.levelContainer}>
                <p>{skill.level}</p>
              </div>
            </div>
            <p>{skill.description}</p>
            {/* LOGOS */}
          </div>
        ))}
      </div>
    </section>
  );
}
