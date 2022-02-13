import React, { useEffect } from "react";
import { Formik, Field, Form } from "formik";
import logCompName from "../helper/logCompName";

const PageForm: React.FC<{ message: string }> = ({ message }) => {
  // Log Message props
  const componentName: string = "Form Page";
  useEffect(() => {
    logCompName(message, componentName);
  }, [message]);

  return (
    <Formik
      initialValues={{ user: "", comments: false, title: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <label htmlFor="comments">Comments</label>

        <Field type="checkbox" name="comments" />
        {/* {`${comments}`} */}

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default PageForm;
