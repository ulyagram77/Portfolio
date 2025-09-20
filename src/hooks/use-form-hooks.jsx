import { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';

export const useValidation = (value, rules) => {
  const [error, setError] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    let newError = null;

    for (const rule in rules) {
      switch (rule) {
        case 'isEmpty':
          if (!value) {
            newError = t(rules[rule].message) || 'Required!';
          }
          break;
        case 'min':
          if (value.length < rules[rule].value) {
            newError = t(rules[rule].message) || 'Too short value!';
          }
          break;
        case 'email': {
          const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;

          if (!emailRegex.test(String(value).toLowerCase())) {
            newError = t(rules[rule].message) || 'Not email!';
          }
          break;
        }
        default:
          break;
      }
      if (newError) break;
    }

    setError(newError);
  }, [value, rules, t]);

  return { error, setError };
};

export const useInput = (initialValue, validation) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);

  const valid = useValidation(value, validation);

  const isValid = isDirty && valid.error;

  const resetField = () => {
    setValue(initialValue);
    setDirty(false);
    valid.setError(null);
  };

  const onChange = e => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    setDirty(true);
  };

  return { value, resetField, isDirty, isValid, onChange, onBlur, ...valid };
};
