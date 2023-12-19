import { getIcon } from './IconsCollection';

type IconProps = {
  iconName: string;
  className?: string;
};

export const Icon = ({ iconName, className }: IconProps) => {
  const IconComponent = getIcon(iconName);
  return IconComponent && <IconComponent className={className} />;
};
