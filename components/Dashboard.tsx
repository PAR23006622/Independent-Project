import Graph from './Graph';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h1>Jane Cooper</h1>
        <p>Total 566 followers</p>
      </div>
      <div className={styles.stats}>
        <h3>Insights</h3>
        <Graph />
      </div>
    </div>
  );
};

export default Dashboard;
