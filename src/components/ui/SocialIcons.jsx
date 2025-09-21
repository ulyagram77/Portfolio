import PropTypes from 'prop-types';

import { socialIcons } from '@/constants';
import { cn } from '@/utils/cn';

export const SocialIcons = ({ className }) => {
  return (
    <div className={cn('flex w-fit flex-row items-center gap-4', className)}>
      {socialIcons.map(social => (
        <a
          href={social.link}
          key={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="size-8 transition-transform duration-300 hoverable:hover:-translate-y-1 hoverable:hover:scale-110"
        >
          <img src={social.icon} className="object-contain" alt="social icon" />
        </a>
      ))}
    </div>
  );
};

SocialIcons.propTypes = {
  className: PropTypes.string,
};
