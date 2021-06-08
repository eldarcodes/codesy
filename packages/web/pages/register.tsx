import { Field, Formik } from "formik";
import { Button, Form } from "semantic-ui-react";
import withApollo from "./../lib/withApollo";
import { InputField } from "../components/formik-fields/InputField";
import { registerSchema } from "@codesy/common";
import { useRegisterMutation } from "../generated/graphql";
import { normalizeErrors } from "../utils/normalizeErrors";
import { useRouter } from "next/dist/client/router";
import Layout from "../components/Layout";

interface RegisterProps {}

interface FormValues {
  username: string;
  email: string;
  password: string;
}

const Register: React.FC<RegisterProps> = ({}) => {
  const router = useRouter();
  const [register] = useRegisterMutation();

  return (
    <Layout title="Register">
      <Formik<FormValues>
        initialValues={{ username: "", email: "", password: "" } as FormValues}
        onSubmit={async (input, { setErrors, setSubmitting }) => {
          const response = await register({ variables: { input } });

          if (response.data?.register.errors?.length) {
            setSubmitting(false);
            setErrors(normalizeErrors(response.data?.register.errors));
          } else {
            router.push("/login");
          }
        }}
        validationSchema={registerSchema}
      >
        {({ handleSubmit, isSubmitting }) => (
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

            <Button type="submit" disabled={isSubmitting} primary>
              Create Account
            </Button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default withApollo({ ssr: false })(Register);
