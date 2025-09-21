import { useCallback, useRef, useState } from 'react';

import { useTranslation } from 'react-i18next';

import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

import { validationShema } from '@/constants';
import { withSectionWrapper } from '@/hoc';
import { useConfetti, useInput } from '@/hooks';
import { styles } from '@/styles';
import { slideIn } from '@/utils/motion';

import { EarthCanvas } from '../canvas';
import { ConfettiEffect, InputErrorMessage, Modal, SocialIcons } from '../ui';

const Contact = withSectionWrapper(() => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const formRef = useRef();

  const { t } = useTranslation();

  const name = useInput('', validationShema.name);
  const email = useInput('', validationShema.email);
  const message = useInput('', validationShema.message);

  const { trigger, triggerConfetti } = useConfetti(10000);

  const isFormValid = name.error || email.error || message.error;

  const resetForm = useCallback(() => {
    name.resetField();
    email.resetField();
    message.resetField();
  }, [name, email, message]);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      setLoading(true);

      const public_key = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;
      const template_id = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
      const service_id = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;

      emailjs
        .send(
          service_id,
          template_id,
          {
            from_name: name.value,
            to_name: 'Kyrylo Ulianov',
            from_email: email.value,
            to_email: 'ulyak.work@gmail.com',
            message: message.value,
          },
          public_key,
        )
        .then(
          () => {
            setLoading(false);
            setShowModal(true);
            triggerConfetti();
            resetForm();
          },
          error => {
            setLoading(false);
            console.log(error);
            alert('Something went wrong!');
          },
        );
    },
    [name.value, email.value, message.value, triggerConfetti, resetForm],
  );

  return (
    <>
      <div className="relative flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] rounded-2xl bg-black-100 p-8"
        >
          <p className={styles.sectionSubText}>{t('contact.subtitle')}</p>
          <h3 className={styles.sectionHeadText}>{t('contact.title')}</h3>
          <SocialIcons className="mb-8 mt-3" />

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            <label className="relative flex h-[130px] flex-col gap-3">
              <span className="font-medium text-white">
                {t('contact.form.fields.0.label')}
              </span>
              <input
                type="text"
                name="name"
                value={name.value}
                onChange={e => name.onChange(e)}
                onBlur={e => name.onBlur(e)}
                placeholder={t('contact.form.fields.0.placeholder')}
                className={`rounded-lg bg-tertiary px-6 py-4 font-medium text-white placeholder:text-secondary ${name.isValid ? 'border-2 border-rose-500 outline-rose-500' : ''}`}
                autoComplete="name"
              />
              <InputErrorMessage field={name} />
            </label>

            <label className="relative flex h-[130px] flex-col gap-3">
              <span className="font-medium text-white">
                {t('contact.form.fields.1.label')}
              </span>
              <input
                type="email"
                name="email"
                value={email.value}
                onChange={e => email.onChange(e)}
                onBlur={e => email.onBlur(e)}
                placeholder={t('contact.form.fields.1.placeholder')}
                className={`rounded-lg bg-tertiary px-6 py-4 font-medium text-white placeholder:text-secondary ${email.isValid ? 'border-2 border-rose-500 outline-rose-500' : ''}`}
                autoComplete="email"
              />
              <InputErrorMessage field={email} />
            </label>

            <label className="relative flex h-[273px] flex-col gap-3">
              <span className="font-medium text-white">
                {t('contact.form.fields.2.label')}
              </span>
              <textarea
                name="message"
                rows="7"
                value={message.value}
                onChange={e => message.onChange(e)}
                onBlur={e => message.onBlur(e)}
                placeholder={t('contact.form.fields.2.placeholder')}
                className={`resize-none rounded-lg bg-tertiary px-6 py-4 font-medium text-white placeholder:text-secondary ${message.isValid ? 'border-2 border-rose-500 outline-rose-500' : ''}`}
              />
              <InputErrorMessage field={message} />
            </label>

            <button
              type="submit"
              className="btn rounded-xl bg-tertiary px-8 py-3 font-bold text-white shadow-md shadow-primary md:w-full lg:w-fit"
              disabled={loading || isFormValid}
            >
              {loading
                ? t('contact.form.button.loading')
                : t('contact.form.button.text')}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
        >
          <EarthCanvas />
        </motion.div>
      </div>

      <ConfettiEffect show={trigger} />
      <Modal open={showModal} setOpen={setShowModal} />
    </>
  );
}, 'contact');

export default Contact;
