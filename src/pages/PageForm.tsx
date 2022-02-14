import React, { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import logCompName from "../helper/logCompName";
import { createPost } from "../services/api";
import { FormValues, postErrors } from "../interface/index";

const PageForm: React.FC<{ message: string }> = ({ message }) => {
  // Log Message props
  const componentName: string = "Form Page";
  useEffect(() => {
    logCompName(message, componentName);
  }, [message]);

  return (
    <React.Fragment>
      <h1>Create new post</h1>
      <Formik
        initialValues={{ title: "", body: "", userId: 1 }}
        validate={(values) => {
          let errors: Partial<postErrors> = {};
          if (values.title === "") {
            errors.title = "Required! Please enter title.";
          }
          if (values.body === "") {
            errors.body = "Required! Please enter body text.";
          }
          return errors;
        }}
        onSubmit={async (values: FormValues, actions) => {
          const response = await createPost(values.title, values.body, values.userId);
          actions.setSubmitting(false);
          if (response) {
            console.log(response);
          }
          actions.resetForm({
            values: {
              title: "",
              body: "",
              userId: values.userId + 1,
            },
          });
        }}
      >
        {({ values, handleBlur, isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="title">Enter Title*</label>
              <Field id="title" type="text" name="title" placeholder="Post Title" onBlur={handleBlur} value={values.title} />
              <ErrorMessage name="title" component="div" />
            </div>
            <div>
              <label htmlFor="body">Enter Body*</label>
              <Field id="body" type="text" name="body" placeholder="Post Body" onBlur={handleBlur} value={values.body} />
              <ErrorMessage name="body" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default PageForm;
