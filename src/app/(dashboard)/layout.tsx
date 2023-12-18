'use client';

import { CollapseButton, Footer, Header, HomeLink, Navbar } from '@/components/Dashboard';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import styles from './dashboard.module.scss';

const DEFAULT_THEME = 'light';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState(DEFAULT_THEME);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      setTheme(theme);
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme: string) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  return (
    <div className={classNames(styles.dashboardLayout, styles[`theme-${theme}`])}>
      <div className={classNames(styles.sidebar, collapsed && styles['sidebar--collapsed'])}>
        <HomeLink collapsed={collapsed} />
        <Navbar />
        <CollapseButton onClick={() => setCollapsed(!collapsed)} />
      </div>
      <div className={styles.mainContainer}>
        <Header onToggleTheme={toggleTheme} />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
