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

        <div className="flex items-center flex-col gap-(--spacing-gap-8)">
          <h2>Software developer</h2>
          <Separator className="p-0! w-4/5! h-(--padding) md:p-(--padding)! md:h-auto md:w-full!">
            <div className={`hidden! ${styles.headerSeparatorDiv} md:flex!`}>
              <h3>price: one great opportunity</h3>
              <h3>{new Date().toLocaleDateString()}</h3>
            </div>
          </Separator>
        </div>

        <div className={`hidden ${styles.barCodeContainer} lg:grid `}>
          <div className={styles.barCodeBarContainer}>
            {[...Array(15)].map((_, index) => (
              <div key={index} className={styles.barCodeBar} />
            ))}
          </div>
          <div className={styles.barCodeNumber}>
            {[...Array(11)].map((_, index) => (
              <p key={index}>{Math.floor(Math.random() * 10)}</p>
            ))}
          </div>
        </div>
      </div>

      <h1 className="hidden md:block">Mazzurana Riccardo</h1>
      <div className="block md:hidden">
        <h1 className="surnameSmall">Mazzurana</h1>
        <h1 className="nameSmall">Riccardo</h1>
      </div>
      <Separator />
    </header>
  );
}
