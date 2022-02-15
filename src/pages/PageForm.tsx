import React, { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import logCompName from "../helper/logCompName";
import { createPost } from "../services/api";
import { FormValues, postErrors } from "../interface/index";
import { useMutation } from "react-query";
import FormStyle from "./PageForm.module.scss";

const PageForm: React.FC<{ message: string }> = ({ message }) => {
  // Log Message props
  const componentName: string = "Form Page";
  useEffect(() => {
    logCompName(message, componentName);
  }, [message]);

  const mutation = useMutation(createPost);

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
        onSubmit={(values: FormValues, { setSubmitting, resetForm }) => {
          try {
            const data = mutation.mutateAsync(values);
            console.log(data); // data
            resetForm();
          } catch (error) {
            console.error(error); // error
          }
          setSubmitting(false);
        }}
      >
        {({ values, handleBlur, isSubmitting }) => (
          <Form className={FormStyle.form}>
            <div className={FormStyle.form__wrapper}>
              <label htmlFor="title">Enter Title*</label>
              <Field
                id="title"
                type="text"
                name="title"
                placeholder="Post Title"
                onBlur={handleBlur}
                value={values.title}
                className={FormStyle.form__input}
              />
              <ErrorMessage name="title" component="div" className={FormStyle.error} />
            </div>
            <div className={FormStyle.form__wrapper}>
              <label htmlFor="body">Enter Body*</label>
              <Field
                id="body"
                type="text"
                name="body"
                placeholder="Post Body"
                onBlur={handleBlur}
                value={values.body}
                className={FormStyle.form__input}
              />
              <ErrorMessage name="body" component="div" className={FormStyle.error} />
            </div>
            <button className={FormStyle.button} type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default PageForm;
