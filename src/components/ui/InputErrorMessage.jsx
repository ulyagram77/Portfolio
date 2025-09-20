import PropTypes from 'prop-types';

const InputErrorMessage = ({ field }) => {
  return (
    <>
      {field.isDirty && field.error && (
        <p className="absolute bottom-0 left-0 text-rose-500">{field.error}</p>
      )}
    </>
  );
};

InputErrorMessage.propTypes = {
  field: PropTypes.object.isRequired,
};

export default InputErrorMessage;
