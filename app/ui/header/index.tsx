import Image from 'next/image'
import styles from './header.module.css'
import Separator from '../separator'

export default function Header() {
    return (
        <header>
            <div className={styles.logoContainer}>
                <Image 
                    src="/logo.webp"
                    alt="mazzu logo"
                    width={3038}
                    height={580}
                />
            </div>

            <div>
                <h2>Software developer</h2>
                <Separator>
                    <div className={styles.headerSeparatorDiv}>
                        <h3>price: one great opportunity</h3>
                        <h3>03/04/2026</h3>
                    </div>
                </Separator>
            </div>

            <div className={styles.logoContainer}>
                <Image 
                    src="/logo.webp"
                    alt="mazzu logo"
                    width={3038}
                    height={580}
                />
            </div>
        </header>
    )
}