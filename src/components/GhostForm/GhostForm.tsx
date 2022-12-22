import React from "react";

export enum GhostFormTypes {
  TEXT = "text",
  EMAIL = "email",
}

export enum GhostFormElements {
  INPUT = "input",
  TEXT_AREA = "textarea",
}

export interface GhostFormFieldValues {
  type: GhostFormTypes | undefined;
  name: string;
  elementType: GhostFormElements;
}

export interface GhostFormProps {
  formName: string;
  fields: GhostFormFieldValues[];
}

/**
 * Due to the way Netlify processes forms on a SSR site there's an issue
 * detecting forms when they're dynamically rendered using ThreeJS
 *
 * We need to include this as a kind of 'header' that gets rendered server side
 * to register the form
 *
 * !!!! IMPORTANT !!!!
 * The props passed in to build the form HAS to match exactly with the
 * values of the actual form
 */
const GhostForm = (props: GhostFormProps) => {
  const { formName, fields } = props;

  const formElements = fields.map((field, keyIndex) => {
    const { type, name } = field;
    if (field.elementType === "input") {
      return <input type={type} name={name} key={keyIndex} />;
    }
    if (field.elementType === "textarea") {
      return <textarea name={name} key={keyIndex} />;
    }
  });

  return (
    <form name={formName} hidden data-netlify="true">
      {formElements}
    </form>
  );
};

export default GhostForm;
