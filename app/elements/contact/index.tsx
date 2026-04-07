import SocialButton from "@/app/components/socialbutton";
import styles from "./contact.module.css";
import SectionTitle from "@/app/components/sectionTitle";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="relative contact">
      <SectionTitle title="subscription & inquiries" />

      <div className="absolute -bottom-5.5 left-15">
        <Image src="/scissors.webp" alt="Scissors" width={38} height={40} />
      </div>

      <div className={styles.contactContainer}>
        <div className={styles.mailContainer}>
          <p>MAIL:</p>
          <h5>riccardo.mazzurana@gmail.com</h5>
        </div>
        <div className={styles.otherContactsContainer}>
          <div className={styles.callCenterContainer}>
            <p>CALL CENTER:</p>
            <div className={styles.numberContainer}>
              <h5>+39 351 370 5799</h5>
            </div>
          </div>
          <div className={styles.socialContainer}>
            <p>SEE ALSO:</p>
            <div className={styles.buttonContainer}>
              <SocialButton
                label="github"
                href="https://www.github.com/mxzzu"
              />
              <SocialButton
                label="linkedin"
                href="https://www.linkedin.com/riccardo-mazzurana"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
