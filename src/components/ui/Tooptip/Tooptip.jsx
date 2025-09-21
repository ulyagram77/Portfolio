import { useState } from 'react';

import PropTypes from 'prop-types';

import { cn } from '@/utils/cn';

const Tooltip = ({ children, tip }) => {
  const [visible, setVisible] = useState(false);

  return (
    <span
      className="relative inline-block h-fit"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
      tabIndex="0"
    >
      {children}
      <span
        role="tooltip"
        className={cn(
          "pointer-events-none absolute bottom-full left-1/2 z-[1000] -translate-x-1/2 -translate-y-2 select-none whitespace-nowrap rounded-md bg-[#915eff] px-3 py-1 text-[0.875rem] text-white transition-opacity duration-200 ease-in-out before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-x-[5px] before:border-b-0 before:border-t-[5px] before:border-x-transparent before:border-t-[#915eff] before:content-['']",
          visible ? 'opacity-100' : 'opacity-0',
        )}
      >
        {tip}
      </span>
    </span>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  tip: PropTypes.string.isRequired,
};

export default Tooltip;
