import { Field, Formik } from "formik";
import { Button, Form } from "semantic-ui-react";
import withApollo from "./../lib/withApollo";
import { InputField } from "../components/formik-fields/InputField";
import { useCreateCodeReviewRequestMutation } from "../generated/graphql";
import { normalizeErrors } from "../utils/normalizeErrors";
import { useRouter } from "next/dist/client/router";
import { TextAreaField } from "../components/formik-fields/TextAreaField";

interface CreateCodeReviewRequestProps {}

interface FormValues {
  numDays: number;
  codeUrl: string;
  techTags: string[];
  notes: string;
}

const CreateCodeReviewRequest: React.FC<CreateCodeReviewRequestProps> =
  ({}) => {
    const router = useRouter();
    const [createCodeReviewRequest] = useCreateCodeReviewRequestMutation();

    return (
      <Formik<FormValues>
        initialValues={
          { numDays: 3, codeUrl: "", techTags: [], notes: "" } as FormValues
        }
        onSubmit={async (input, { setErrors, setSubmitting }) => {
          const response = await createCodeReviewRequest({
            variables: { input },
          });

          if (response.data?.createCodeReviewRequest.errors?.length) {
            setSubmitting(false);
            setErrors(
              normalizeErrors(response.data?.createCodeReviewRequest.errors)
            );
          } else {
            router.push("/");
          }
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              label="Number of days"
              placeholder="Number of days"
              name="numDays"
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
          </Form>
        )}
      </Formik>
    );
  };

export default withApollo({ ssr: false })(CreateCodeReviewRequest);
