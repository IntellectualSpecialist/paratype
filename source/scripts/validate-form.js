const AlertMessages = {
  EMPTY: 'Заполните поле.',
  EMAIL: 'Email должен быть в формате "example@domen.ru".'
};

const formElements = document.querySelectorAll('.form');

const initFormValidate = (form) => {
  const formElement = form.querySelector('form');
  let emailInputElement;

  if (formElement) {
    emailInputElement = formElement.querySelector('[name="email"]');
  }

  const isValidEmail = (email) => {
    const pattern = /^[a-zA-Zа-яёА-ЯЁ0-9._%+-]+@[a-zA-Zа-яёА-ЯЁ0-9.-]+\.(?:[рР][фФ]|[a-zA-Z0-9-]{2,})$/;
    return pattern.test(email);
  };

  const cleanFields = () => {
    if (emailInputElement.classList.contains('custom-input--invalid')) {
      emailInputElement.classList.remove('custom-input--invalid');
    }

    formElement.reset();
  };

  const setNovalidateAttribute = () => {
    formElement.setAttribute('novalidate', 'true');
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    const email = emailInputElement.value;

    if (!email) {
      emailInputElement.setCustomValidity(AlertMessages.EMPTY);
      emailInputElement.classList.add('custom-input--invalid');
      emailInputElement.reportValidity();

      return;
    }

    if (!isValidEmail(email)) {
      emailInputElement.setCustomValidity(AlertMessages.EMAIL);
      emailInputElement.classList.add('custom-input--invalid');
      emailInputElement.reportValidity();

      return;
    } else {
      emailInputElement.setCustomValidity('');
    }

    formElement.submit();
    cleanFields();
  };


  const onFieldsInput = (evt) => {
    if (evt.target.matches('input')) {
      if (evt.target.value) {
        const currentField = evt.target.closest('.custom-input');

        if (currentField.classList.contains('custom-input--invalid')) {
          currentField.classList.remove('custom-input--invalid');
        }
      }
    }
  };

  const registerFormEvents = () => {
    formElement.addEventListener('submit', onFormSubmit);
    formElement.addEventListener('input', onFieldsInput);
  };

  setNovalidateAttribute();
  cleanFields();
  registerFormEvents();
};

const initFormsValidate = () => {
  if (formElements.length) {
    formElements.forEach((form) => {
      initFormValidate(form);
    });
  }
};

export { initFormsValidate };
