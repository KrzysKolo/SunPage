import React, { useState } from 'react';
import Button from '../Button';
import { CheckBox, Input, SuccessMessage, TextArea } from '../formComponents';
import { FormWrapper, NameDiv, AddressDiv, TextDiv, CheckDiv, HeaderForm, ButtonDiv } from './style'
import {  FormikValues, useFormik } from "formik";
import * as yup from "yup";

const Form = () => {
  const [checked, setCheckced] = useState<boolean>(true);
  const [valueName] = useState<string>('');
  const [valueLastName] = useState<string>('');
  const [valueEmail] = useState<string>('');
  const [valuePhone] = useState<string>('');
  const [valueTextArea] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);

  const handeleCheckBoxChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setCheckced(event.target.checked)
  };
  const initialValues  = {
    name: valueName,
    lastName: valueLastName,
    email: valueEmail,
    phone: valuePhone,
    message: valueTextArea
  };
  const validationSchema = yup.object({
    name: yup.string().required("Required").min(3, "Imię musi mieć min 3 znaki").max(20, "Imię może mieć max 20 znaków"),
    lastName: yup.string().required("Required").min(3, "Nazwisko musi mieć min 3 znaki").max(20, "Nazwisko może mieć max 20 znaków"),
    email: yup.string().required("Required").email("Adres zawiera błędy"),
    phone: yup.number().required("Required"),
    message: yup.string().required("Required").min(3, "Wiadomość musi mieć min 3 znaki").max(200, "Wiadomość może mieć max 200 znaków"),
  });

  const onSubmit = (values: FormikValues, { resetForm }: any) => {
    setSuccess(true);
    setTimeout(() => setSuccess(false), 5000);
    console.log('Form data', values);
    resetForm();
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });


  return (
    <FormWrapper onSubmit={formik.handleSubmit}>
      <HeaderForm>
        <h3>Napisz do nas</h3>
      </HeaderForm>
      <NameDiv>
        <Input
          placeholder='Imię'
          type='text'
          value={formik.values.name}
          id='name'
          onChange={formik.handleChange}
          error={formik.errors.name}
          message={formik.errors.name}
          touched={formik.touched.name}
        />
        <Input
          placeholder='Nazwisko'
          type='text'
          value={formik.values.lastName}
          id='lastName'
          onChange={formik.handleChange}
          error={formik.errors.lastName}
          message={formik.errors.lastName}
          touched={formik.touched.lastName}
        />
      </NameDiv>
      <AddressDiv>
        <Input
          placeholder='Adres e-mail'
          type='text'
          value={formik.values.email}
          id='email'
          onChange={formik.handleChange}
          error={formik.errors.email}
          message={formik.errors.email}
          touched={formik.touched.email}
        />
        <Input
          placeholder='Numer telefonu'
          type='text'
          value={formik.values.phone}
          id='phone'
          onChange={formik.handleChange}
          error={formik.errors.phone}
          message={formik.errors.phone}
          touched={formik.touched.phone}
        />
      </AddressDiv>
      <TextDiv>
        <TextArea
          placeholder='Twoja wiadomość'
          value={formik.values.message}
          id="message"
          onChange={formik.handleChange}
          error={formik.errors.message}
          message={formik.errors.message}
          touched={formik.touched.message}
        />
      </TextDiv>
      { success && <SuccessMessage success='Dane zostały przesłane!' />}
      <CheckDiv>
        <div>
          <CheckBox onChange={handeleCheckBoxChange} checked={checked} />
        </div>
        <p>Zapoznałem się z regulaminem i wyrażam zgodę na przetwarzanie moich danych osobowych przez Sungroup.pl</p>
      </CheckDiv>
      <ButtonDiv>
        <Button btnText='Wyślij wiadomość' btnLink='' onClick={formik.handleSubmit} />
      </ButtonDiv>
    </FormWrapper>
  )
}

export default Form;