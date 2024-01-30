import { Icon } from '@/components/Icon';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavbarElement } from './Navbar.types';
import { navbarSections } from './NavbarSections';
import styles from './navbar.module.scss';

type NavbarProps = {
  collapsed: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

const NavElement = ({ element, currentPath }: { element: NavbarElement; currentPath: string }) => {
  return (
    <MenuItem className={classNames(styles.navbarElement, currentPath === element.path && styles.activeElement)}>
      {element.path && (
        <Link href={element.path}>
          {element.icon && (
            <ListItemIcon>
              <Icon iconName={element.icon} className={styles.elementIcon} />
            </ListItemIcon>
          )}
          <ListItemText>{element.title}</ListItemText>
        </Link>
      )}
    </MenuItem>
  );
};

export const Navbar = ({ collapsed, onMouseEnter, onMouseLeave }: NavbarProps) => {
  const currentPath = usePathname();

  return (
    <nav
      className={classNames(styles.navbar, collapsed && styles['navbar--collapsed'])}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {navbarSections.map((section, index) => {
        return (
          <div key={index}>
            {section.title && (
              <div className={styles.setionTitleWrapper}>
                <div className={styles.setionTitleCollapsedBar}>
                  <hr />
                </div>
                <h6 className={styles.navbarSectionTitle}>{section.title}</h6>
              </div>
            )}
            <MenuList>
              {section.elements.map((element, idx) => (
                <NavElement element={element} key={idx} currentPath={currentPath} />
              ))}
            </MenuList>
          </div>
        );
      })}
    </nav>
  );
};
