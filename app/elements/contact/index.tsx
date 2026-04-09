import SocialButton from "@/app/components/SocialButton";
import styles from "./contact.module.css";
import SectionTitle from "@/app/components/SectionTitle";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="relative contact">
      <SectionTitle title="subscription & inquiries" />

      <div className="absolute -bottom-5.5 left-15">
        <Image src="/scissors.webp" alt="Scissors" width={38} height={40} />
      </div>

      <div className={styles.contactContainer}>
        <div className={styles.nameContainer}>
          <div className={styles.generalityContainer}>
            <p>NAME:</p>
            <input type="text" placeholder="MARIO" />
          </div>
          <div className={styles.generalityContainer}>
            <p>SURNAME:</p>
            <input type="text" placeholder="ROSSI" />
          </div>
        </div>
        <div className={styles.mailContainer}>
          <p>MAIL ADDRESS:</p>
          <input type="email" placeholder="EXAMPLE@GMAIL.COM" />
        </div>
        <div className={styles.mailContainer}>
          <p>TELL ME SOMETHING:</p>
          <input type="text" placeholder="Hi, I would like to ask..." />
        </div>
        <div className={styles.buttonContainer}>
          <SocialButton
                label="send"
                href="https://www.github.com/mxzzu"
              />
        </div>
      </div>
    </section>
  );
}
