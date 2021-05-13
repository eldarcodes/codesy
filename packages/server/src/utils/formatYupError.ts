import { ValidationError } from "yup";

export const formatYupError = (err: ValidationError) => {
  const errors: Array<{ path: string; message: string }> = [];

  err.inner.forEach((e) => {
    errors.push({
      path: e.path as string,
      message: e.message,
    });
  });
  return errors;
};
