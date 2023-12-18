import { Fragment } from 'react';
import { NavbarElement } from './Navbar.types';
import { navbarElements } from './NavbarElements';
import styles from './navbar.module.scss';

export const Navbar = () => {
  const renderElement = (element: NavbarElement) => {
    return <div>{element.title}</div>;
  };

  return (
    <nav className={styles.navbar}>
      {navbarElements.map((section, index) => {
        return (
          <div key={index}>
            <h6 className={styles.navbarSectionTitle}>{section.title}</h6>
            <div>
              {section.elements.map((element, index) => (
                <Fragment key={index}>{renderElement(element)}</Fragment>
              ))}
            </div>
          </div>
        );
      })}
    </nav>
  );
};
