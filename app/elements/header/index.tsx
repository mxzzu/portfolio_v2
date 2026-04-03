import Image from "next/image";
import styles from "./header.module.css";
import Separator from "../../components/separator";

export default function Header() {
  return (
    <header>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <Image src="/logo.webp" alt="mazzu logo" width={3038} height={580} />
        </div>

        <div>
          <h2>Software developer</h2>
          <Separator>
            <div className={styles.headerSeparatorDiv}>
              <h3>price: one great opportunity</h3>
              <h3>{new Date().toLocaleDateString()}</h3>
            </div>
          </Separator>
        </div>

        <div className={`hidden ${styles.barCodeContainer} md:grid `}>
          <div className={styles.barCodeBarContainer}>
            <div className={styles.barCodeBar} />
            <div className={styles.barCodeBar} />
            <div className={styles.barCodeBar} />
            <div className={styles.barCodeBar} />
            <div className={styles.barCodeBar} />
            <div className={styles.barCodeBar} />
            <div className={styles.barCodeBar} />
            <div className={styles.barCodeBar} />
            <div className={styles.barCodeBar} />
            <div className={styles.barCodeBar} />
            <div className={styles.barCodeBar} />
            <div className={styles.barCodeBar} />
            <div className={styles.barCodeBar} />
            <div className={styles.barCodeBar} />
            <div className={styles.barCodeBar} />
          </div>
          <div className={styles.barCodeNumber}>
            <p>1</p>
            <p>2</p>
            <p>5</p>
            <p>3</p>
            <p>9</p>
            <p>0</p>
            <p>0</p>
            <p>7</p>
            <p>6</p>
            <p>5</p>
            <p>3</p>
          </div>
        </div>
      </div>
      
      <h1>Mazzurana Riccardo</h1>
      <Separator />
    </header>
  );
}