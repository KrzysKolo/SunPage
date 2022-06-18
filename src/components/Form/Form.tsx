import React, { useState } from 'react';
import Button from '../Button';
import { CheckBox, Input, TextArea } from '../formComponents';
import { FormWrapper, NameDiv, AddressDiv, TextDiv, CheckDiv, HeaderForm, ButtonDiv } from './style'

const Form = () => {
  const [checked, setCheckced] = useState<boolean>(false);
  const [valueName, setValueName] = useState<string>('');
  const [valueNameError, setValueNameError] = useState<string>('');
  const [valueLastName, setValueLastName] = useState<string>('');
  const [valueLastNameError, setValueLastNameError] = useState<string>('');
  const [valueEmail, setValueEmail] = useState<string>('');
  const [valueEmailError, setValueEmailError] = useState<string>('');
  const [valuePhone, setValuePhone] = useState<string>('');
  const [valuePhoneError, setValuePhoneError] = useState<string>('');
  const [valueTextArea, setValueTextArea] = useState<string>('');
  const [valueTextAreaError, setValueTextAreaError] = useState<string>('');

  const handeleCheckBoxChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setCheckced(event.target.checked)
  };
  const onSubmitForm = () => {
    if (valueName.length < 1) setValueNameError("Pole jest wymagane");
    if (valueLastName.length < 1) setValueLastNameError("Pole jest wymagane");
    if (valueEmail.length < 1) setValueEmailError("Pole jest wymagane");
    if (valuePhone.length < 1) setValuePhoneError("Pole jest wymagane");
    if (valueTextArea.length < 1) setValueTextAreaError("Pole jest wymagane");
    console.log("klikam submit")
  };
  console.log(valueName)
  return (
    <FormWrapper onSubmit={onSubmitForm}>
      <HeaderForm>
        <h3>Napisz do nas</h3>
      </HeaderForm>
      <NameDiv>
        <Input
          placeholder='Imię'
          type='text'
          value={valueName}
          id='name'
          onChange={(e: { target: { value: string; }; }) => { setValueName(e.target.value); }}
          error={valueNameError}
        />
        <Input
          placeholder='Nazwisko'
          type='text'
          value={valueLastName}
          id='lastName'
          onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setValueLastName(e.target.value)}
          error={valueLastNameError}
        />
      </NameDiv>
      <AddressDiv>
        <Input
          placeholder='Adres e-mail'
          type='text'
          value={valueEmail}
          id='email'
          onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setValueEmail(e.target.value)}
          error={valueEmailError}
        />
        <Input
          placeholder='Numer telefonu'
          type='text'
          value={valuePhone}
          id='phone'
          onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setValuePhone(e.target.value)}
          error={valuePhoneError}
        />
      </AddressDiv>
      <TextDiv>
        <TextArea
          placeholder='Twoja wiadomość'
          value={valueTextArea}
          id="message"
          onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setValueTextArea(e.target.value)}
          error={valueTextAreaError}
        />
      </TextDiv>
      <CheckDiv>
        <div>
          <CheckBox onChange={handeleCheckBoxChange} checked={checked} />
        </div>
        <p>Zapoznałem się z regulaminem i wyrażam zgodę na przetwarzanie moich danych osobowych przez Sungroup.pl</p>
      </CheckDiv>
      <ButtonDiv>
        <Button btnText='Wyślij wiadomość' btnLink='' onClick={onSubmitForm} />
      </ButtonDiv>
    </FormWrapper>
  )
}

export default Form;