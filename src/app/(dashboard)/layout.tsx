'use client';

import { CollapseButton, Footer, Header, HomeLink, Navbar } from '@/components/Dashboard';
import classNames from 'classnames';
import { useState } from 'react';
import styles from './dashboard.module.css';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={styles.dashboardLayout}>
      <div className={classNames(styles.sidebar, collapsed && styles['sidebar--collapsed'])}>
        <HomeLink collapsed={collapsed} />
        <Navbar />
        <CollapseButton onClick={() => setCollapsed(!collapsed)} />
      </div>
      <div className={styles.mainContainer}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
