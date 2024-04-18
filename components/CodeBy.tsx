import Link from "next/link";
import styles from "./style.module.scss";
type Props = {
  coder: string;
  to: string;
};

export default function CodeBy({ to, coder }: Props) {
  const name = coder.split(" ");
  return (
    <Link href={to}>
      <div className={styles.logo}>
        <p className={styles.copyright}>©</p>
        <div className={styles.name}>
          <p className={styles.codeBy}>Code by</p>
          <p className={styles.ansuman}>{name[0]}</p>
          <p className={styles.nayak}>{name[1]}</p>
        </div>
      </div>
    </Link>
  );
}
