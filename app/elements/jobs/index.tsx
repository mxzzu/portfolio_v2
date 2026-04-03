import styles from "./jobs.module.css";
import SectionTitle from "@/app/components/sectionTitle";
import { jobs } from "@/app/data/jobs";

export default function Jobs() {
  return (
    <section className="bordered">
      <SectionTitle title="industry dispatches" />

      <div className={styles.jobsContainer}>
        {jobs.map((job, index) => (
          <div key={index} className={styles.jobContainer}>
            <div className={styles.headerContainer}>
              <div className={styles.titleContainer}>
                <h4>{job.role}</h4>
                <h4>{job.dates}</h4>
              </div>
              <p>{job.company}</p>
            </div>
            <div className={styles.dutieWrapper}>
              {Object.entries(job.duties).map(([title, description], index) => (
                <div key={index} className={styles.dutieContainer}>
                  <div className={styles.dotContainer}>
                    <div className={styles.dot}></div>
                    <p className="bold">{title}</p>
                  </div>
                  <p className="ml-[16px]">{description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
