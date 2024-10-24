import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    
    <div className={styles.sidebar}>
      <h2>Insights</h2>
      <ul>
        <li>Reports</li>
        <li>Comments</li>
        <li>Channels</li>
      </ul>
    </div>
  );
};

export default Sidebar;
