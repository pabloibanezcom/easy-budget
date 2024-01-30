import flagGB from '@/assets/flags/gb.png';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import classnames from 'classnames';
import Image from 'next/image';
import styles from './languageSelector.module.scss';

type LanguageSelectorProps = {
  className?: string;
};

export const LanguageSelector = ({ className }: LanguageSelectorProps) => {
  return (
    <div className={classnames(styles.languageSelector, className)}>
      <Tooltip title="Languages">
        <IconButton aria-label="change theme">
          <Image src={flagGB} width={22} height={22} alt="Language" />
        </IconButton>
      </Tooltip>
    </div>
  );
};
