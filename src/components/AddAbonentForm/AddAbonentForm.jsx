import { InputList, Label, Button } from './AddAbonentForm.styled';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
const shortid = require('shortid');

const initialValues = {
  name: '',
  number: '',
  id: '',
};
const Input = styled(Field)`
  margin-left: auto;
  outline: none;
  border-color: #a9a9a9;
  border-radius: 4px;
  :focus {
    border-color: #4169e1;
    box-shadow: 1px 1px 2px 0 #4169e1;
  }
`;
export const AddForm = ({ onSubmit }) => {
  const hendleSubmit = ({ name, number, id }, { resetForm }) => {
    id = shortid.generate();
    onSubmit({ name, number, id });

    resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={hendleSubmit}>
      <div>
        <Form autoComplete="off">
          <InputList>
            <li>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </li>
            <li>
              <Label htmlFor="number">Number</Label>
              <Input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </li>
          </InputList>

          <Button type="submit">Add contact</Button>
        </Form>
      </div>
    </Formik>
  );
};
