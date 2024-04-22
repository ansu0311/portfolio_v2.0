import { motion } from "framer-motion";
import styles from "./style.module.scss";

type Props = {
  isActive: boolean;
  toggleMenu: any;
};

export default function Button({ isActive, toggleMenu }: Props) {
  return (
    <div className={styles.button}>
      <motion.div
        className={styles.slider}
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className={styles.el}
          onClick={() => {
            toggleMenu();
          }}
        >
          <PerspectiveText
            label={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            }
          />
        </div>
        <div
          className={styles.el}
          onClick={() => {
            toggleMenu();
          }}
        >
          <PerspectiveText
            label={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            }
          />
        </div>
      </motion.div>
    </div>
  );
}

type Props2 = {
  label: any;
};

function PerspectiveText({ label }: Props2) {
  return (
    <div className={styles.perspectiveText}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}
