import { Icon } from '@/components/Icon';
import Collapse from '@mui/material/Collapse';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import classNames from 'classnames';
import { useState } from 'react';
import { NavbarElement } from './Navbar.types';
import { navbarElements } from './NavbarElements';
import styles from './navbar.module.scss';

const NavElement = ({ element }: { element: NavbarElement }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.navbarElement}>
      <MenuItem onClick={() => setOpen(!open)}>
        {element.icon && (
          <ListItemIcon>
            <Icon iconName={element.icon} />
          </ListItemIcon>
        )}
        <ListItemText>{element.title}</ListItemText>
        {element.elements && (
          <Icon
            iconName="ExpandMore"
            className={classNames(styles.navbarExpandIcon, open ? styles['navbarExpandIcon--expanded'] : null)}
          />
        )}
      </MenuItem>

      {element.elements && (
        <Collapse in={open}>
          <MenuList>
            {element.elements.map((childElement, index) => (
              <MenuItem key={index} className={styles.navbarChildElement}>
                <ListItemText>{childElement.title}</ListItemText>
              </MenuItem>
            ))}
          </MenuList>
        </Collapse>
      )}
    </div>
  );
};

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {navbarElements.map((section, index) => {
        return (
          <div key={index}>
            <h6 className={styles.navbarSectionTitle}>{section.title}</h6>
            <MenuList>
              {section.elements.map((element, index) => {
                return <NavElement element={element} key={index} />;
              })}
            </MenuList>
          </div>
        );
      })}
    </nav>
  );
};
