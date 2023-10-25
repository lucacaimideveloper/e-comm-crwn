import React from "react";
import { Group, FormInputLabel, Input } from "./formInput.styles";
const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />

      {label && (
        <FormInputLabel shrink={otherProps.value.lenght}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
