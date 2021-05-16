import React from "react";
import { Form } from "semantic-ui-react";

export const InputField = ({
  field,
  form: { touched, errors },
  label,
  ...props
}: any) => {
  const hasError = touched[field.name] && errors[field.name];

  return (
    <Form.Field>
      <label>{label}</label>
      <Form.Input error={hasError} {...field} {...props} />
    </Form.Field>
  );
};
