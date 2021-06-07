import { Field, Formik } from "formik";
import { Button, Form } from "semantic-ui-react";
import withApollo from "../lib/withApollo";
import { InputField } from "../components/formik-fields/InputField";
import { useCreateCodeReviewMutation } from "../generated/graphql";
import { normalizeErrors } from "../utils/normalizeErrors";
import { useRouter } from "next/dist/client/router";
import { TextAreaField } from "../components/formik-fields/TextAreaField";
import { ListCodeReviewsDocument } from "./../generated/graphql";
import Link from "next/link";
import Layout from "../components/Layout";

interface CreateCodeReviewProps {}

interface FormValues {
  numDays: number;
  codeUrl: string;
  techTags: string[];
  notes: string;
}

const CreateCodeReview: React.FC<CreateCodeReviewProps> = ({}) => {
  const router = useRouter();
  const [createCodeReview] = useCreateCodeReviewMutation({
    refetchQueries: [{ query: ListCodeReviewsDocument }],
  });

  return (
    <Layout title="Create code review request" showMenu>
      <Formik<FormValues>
        initialValues={
          { numDays: 3, codeUrl: "", techTags: [], notes: "" } as FormValues
        }
        onSubmit={async (input, { setErrors, setSubmitting }) => {
          const response = await createCodeReview({
            variables: { input },
          });

          if (response.data?.createCodeReview.errors?.length) {
            setSubmitting(false);
            setErrors(normalizeErrors(response.data?.createCodeReview.errors));
          } else {
            router.push("/home");
          }
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              label="Number of days"
              placeholder="Number of days"
              name="numDays"
              type="number"
              component={InputField}
            />
            <Field
              label="GitHub URL"
              placeholder="GitHub URL"
              name="codeUrl"
              component={InputField}
            />
            <Field
              label="Notes"
              placeholder="Notes"
              name="notes"
              component={TextAreaField}
            />

            <Button type="submit" disabled={isSubmitting} primary>
              Submit
            </Button>

            <Link href="/home">
              <Button>Go to Home</Button>
            </Link>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default withApollo({ ssr: false })(CreateCodeReview);
