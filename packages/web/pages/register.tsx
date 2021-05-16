import { Field, Formik } from "formik";
import { Button, Form } from "semantic-ui-react";
import withApollo from "./../lib/withApollo";
import { InputField } from "./../components/formik-fields/input";
import { registerSchema } from "@codesy/common";

interface RegisterProps {}

interface FormValues {
  username: string;
  email: string;
  password: string;
}

const Register: React.FC<RegisterProps> = ({}) => {
  const submit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" } as FormValues}
      onSubmit={submit}
      validationSchema={registerSchema}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Field
            label="Username"
            placeholder="Username"
            name="username"
            component={InputField}
          />
          <Field
            label="email"
            placeholder="E-mail"
            name="email"
            component={InputField}
          />
          <Field
            label="Password"
            placeholder="Password"
            name="password"
            component={InputField}
            type="password"
          />

          <Button type="submit" primary>
            Create Account
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default withApollo({ ssr: false })(Register);
