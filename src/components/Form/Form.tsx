import React, { useState } from 'react';
import Button from '../Button';
import { CheckBox, Input, TextArea } from '../formComponents';
import { FormWrapper, NameDiv, AddressDiv, TextDiv, CheckDiv, HeaderForm, ButtonDiv } from './style'

const Form = () => {
  const [checked, setCheckced] = useState(false);
  const handeleCheckBoxChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setCheckced(event.target.checked)
    console.log("klikam")
  };

  return (
    <FormWrapper>
      <HeaderForm>
        <h3>Napisz do nas</h3>
      </HeaderForm>
      <NameDiv>
        <Input placeholder='Imię' type='text' />
        <Input placeholder='Nazwisko' type='text' />
      </NameDiv>
      <AddressDiv>
        <Input placeholder='Adres e-mail' type='text' />
        <Input placeholder='Numer telefonu' type='text' />
      </AddressDiv>
      <TextDiv>
        <TextArea placeholder='Twoja wiadomość' />
      </TextDiv>
      <CheckDiv>
        <div>
          <CheckBox onChange={handeleCheckBoxChange} checked={checked} />
        </div>
        <p>Zapoznałem się z regulaminem i wyrażam zgodę na przetwarzanie moich danych osobowych przez Sungroup.pl</p>
      </CheckDiv>
      <ButtonDiv>
        <Button btnText='Wyślij wiadomość' btnLink='/' />
      </ButtonDiv>
    </FormWrapper>
  )
}

export default Form;