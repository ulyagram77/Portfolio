import Confetti from 'react-confetti';

import PropTypes from 'prop-types';

import { Portal } from '../common';

const ConfettiEffect = ({ show = false }) => {
  return (
    show && (
      <Portal rootId="body">
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-40">
          <Confetti recycle={false} numberOfPieces={1000} className="z-40" />
        </div>
      </Portal>
    )
  );
};

ConfettiEffect.propTypes = {
  show: PropTypes.bool,
};

export default ConfettiEffect;
