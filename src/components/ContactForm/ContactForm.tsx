import React, { useCallback, useState } from "react";
import "./ContactForm.scss";

export interface ContactFormProps {
  formId: string;
  formName: string; // what Netlify will name form on the admin panel
  wrapperClassName?: string;
  wrapperInlineStyles?: React.CSSProperties;
}

enum FormSubmissionState {
  NotSubmitted = "NOT_SUBMITTED",
  SubmittedAndSuccess = "SUBMITTED_SUCCESS",
  SubmittedAndFailed = "SUBMITTED_FAIL",
}

// Just the form
const ContactForm = (props: ContactFormProps) => {
  const { formId, formName, wrapperClassName, wrapperInlineStyles } = props;
  const [formSubmissionState, updateFormSubmissionState] =
    useState<FormSubmissionState>(FormSubmissionState.NotSubmitted);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [formFields, setFormFields] = useState<{ [key: string]: string }>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = useCallback(
    (event: { target: HTMLInputElement | HTMLTextAreaElement }) => {
      if (!event?.target?.value) return;
      const { name, value } = event.target;

      const updatedFormFields = {
        ...formFields,
        [name]: value,
      };

      // check if all fields are filled in
      let allFieldsHaveValues = true;
      for (const key in updatedFormFields) {
        if (updatedFormFields[key] === "") {
          allFieldsHaveValues = false;
        }
      }

      setIsValid(allFieldsHaveValues);
      setFormFields((prevState) => ({ ...prevState, [name]: value }));
    },
    [formFields]
  );

  const renderPostSubmitNode = (): JSX.Element => {
    if (formSubmissionState === FormSubmissionState.SubmittedAndSuccess) {
      return (
        <span className="contact-form__submit-node success">
          Thank you for reaching out! We will be in touch soon.
        </span>
      );
    } else if (formSubmissionState === FormSubmissionState.SubmittedAndFailed) {
      return (
        <span className="contact-form__submit-node error">
          Something went wrong. Please, feel free to email us through our
          contact page as an alternative
        </span>
      );
    }
    return <></>;
  };

  const encode = (data: { [x: string]: string }) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (event) => {
    if (!event) return;
    event?.preventDefault();
    const data = { ...formFields };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": event.target.getAttribute("name"),
        ...data,
      }),
    })
      .then(() =>
        updateFormSubmissionState(FormSubmissionState.SubmittedAndSuccess)
      )
      .catch((error) =>
        updateFormSubmissionState(FormSubmissionState.SubmittedAndFailed)
      );
  };

  return (
    <div
      className={` contact-form ${wrapperClassName || ""}`}
      style={wrapperInlineStyles}
    >
      <form
        name={formName}
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name={formId} value={formName}></input>

        <div className="contact-form__input-wrapper">
          <label>Name:</label>
          <input
            onChange={handleChange}
            className="contact-form__input"
            type="text"
            name="name"
          />
        </div>
        <div className="contact-form__input-wrapper">
          <label>Email:</label>
          <input
            onChange={handleChange}
            className="contact-form__input"
            type="email"
            name="email"
          />
        </div>
        <div className="contact-form__input-wrapper">
          <label>How can we tell your story?</label>
          <textarea
            onChange={handleChange}
            className="contact-form__input"
            name="message"
          />
        </div>
        <button
          type="submit"
          className={
            !isValid || formSubmissionState !== FormSubmissionState.NotSubmitted
              ? "contact-button-disabled"
              : ""
          }
          disabled={
            !isValid || formSubmissionState !== FormSubmissionState.NotSubmitted
          }
        >
          Submit
        </button>
        {renderPostSubmitNode()}
      </form>
    </div>
  );
};

export default ContactForm;
