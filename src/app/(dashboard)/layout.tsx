import { Footer, Header, HomeLink, Navbar, UserBox } from '@/components/Dashboard';
import styles from './dashboard.module.css';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.dashboardLayout}>
      <div className={styles.sidebar}>
        <HomeLink />
        <Navbar />
        <UserBox />
      </div>
      <div className={styles.mainContainer}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
