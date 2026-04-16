import Image from "next/image";
import styles from "./footer.module.css";
import Separator from "@/app/components/Separator";
import SocialButton from "@/app/components/SocialButton";

export default function Footer() {
  return (
    <footer>
      <Separator footer />
      <h1>mazzurana riccardo</h1>
      <div className="flex justify-center">
        <Separator footer small />
      </div>
      <h2>software developer</h2>

      <div className={styles.contactsContainer}>
        <div className={styles.contactContainer}>
          <div className={styles.mailContainer}>
            <p>MAIL:</p>
            <h4>riccardo@mxzzu.it</h4>
          </div>
          <div className={styles.mailContainer}>
            <p>CALL CENTER:</p>
            <h4>+39 351 370 5799</h4>
          </div>
        </div>
        <div className={styles.contactContainer}>
          <div className={styles.mailContainer}>
            <p>SEE ALSO:</p>
            <div className={styles.buttonContainer}>
              <SocialButton label="github" href="https://github.com/mxzzu" />
              <SocialButton
                label="linkedin"
                href="https://www.linkedin.com/in/riccardo-mazzurana/"
              />
            </div>
          </div>
          <div className={styles.mailContainer}>
            <p>DESIGNED BY:</p>
            <Image
              src="/ludo_logo.png"
              alt="Lugo Logo"
              width={83}
              height={58}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
