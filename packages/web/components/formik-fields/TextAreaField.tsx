import React from "react";
import { Form, TextArea } from "semantic-ui-react";

export const TextAreaField = ({
  field,
  form: { touched, errors },
  label,
  ...props
}: any) => {
  const hasError = touched[field.name] && errors[field.name];

  return (
    <Form.Field>
      <label>{label}</label>
      <TextArea error={hasError} {...field} {...props} />
    </Form.Field>
  );
};
