export type NavbarElement = {
  title: string;
  icon?: string;
  path?: string;
  elements?: NavbarElement[];
};

export type NavbarSection = {
  title?: string;
  elements: NavbarElement[];
};
