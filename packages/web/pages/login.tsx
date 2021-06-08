import { Field, Formik } from "formik";
import { Button, Form } from "semantic-ui-react";
import withApollo from "./../lib/withApollo";
import { InputField } from "../components/formik-fields/InputField";
import { MeDocument, useLoginMutation } from "../generated/graphql";
import { normalizeErrors } from "../utils/normalizeErrors";
import { useRouter } from "next/dist/client/router";
import Layout from "../components/Layout";

interface LoginProps {}

interface FormValues {
  usernameOrEmail: string;
  password: string;
}

const Login: React.FC<LoginProps> = ({}) => {
  const router = useRouter();
  const [login] = useLoginMutation({
    refetchQueries: [{ query: MeDocument }],
  });

  return (
    <Layout title="Login">
      <Formik<FormValues>
        initialValues={{ usernameOrEmail: "", password: "" } as FormValues}
        onSubmit={async (input, { setErrors, setSubmitting }) => {
          const response = await login({ variables: { input } });

          if (response.data?.login.errors?.length) {
            setSubmitting(false);
            setErrors(normalizeErrors(response.data?.login.errors));
          } else {
            router.push("/home");
          }
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              label="Username or E-mail"
              placeholder="Username or E-mail"
              name="usernameOrEmail"
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
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default withApollo({ ssr: false })(Login);
