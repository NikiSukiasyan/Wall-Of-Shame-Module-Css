import styles from "./Excuse.module.css";

function Excuse() {
  return (
    <>
      <div className={styles.container}>
        <p>Name</p>
        <p className={styles.excuse}>Excuse</p>
        <p className={styles.count}>Count</p>
      </div>
    </>
  );
}

export default Excuse;
