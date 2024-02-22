import React, { useState } from "react";
import PropTypes from "prop-types";
import { TextInput } from "@strapi/design-system/TextInput";
import {
  Box,
  Button,
  ModalLayout,
  ModalBody,
  ModalHeader,
  Typography,
} from "@strapi/design-system";
import { useIntl } from "react-intl";

const Input = ({
  onChange,
  name,
  intlLabel,
  attribute,
  description,
  placeholder,
  error,
  value,
}) => {
  const { formatMessage } = useIntl();
  const [content, setContent] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const FRONT_END_URL = process.env.STRAPI_ADMIN_FRONT_END_URL;
  return (
    <Box>
      <TextInput
        placeholder={placeholder}
        label={formatMessage(intlLabel)}
        name={name}
        id={name}
        hint={description && formatMessage(description)}
        error={error}
        //Uncomment to save the data into DB

        onChange={(e) => {
          setContent(e.target.value);
          onChange({
            target: {
              name: name,
              value: e.target.value,
              type: attribute.type,
            },
          });
        }}
        value={value}
        withTags
      ></TextInput>

      <Box paddingTop={2}>
        <Button onClick={() => setIsVisible((prev) => !prev)}>Preview</Button>
      </Box>
      {isVisible && (
        <ModalLayout
          style={{ width: "95vw", height: "95vh" }}
          onClose={() => setIsVisible((prev) => !prev)}
          labelledBy="title"
        >
          <ModalHeader>
            <Typography
              fontWeight="bold"
              textColor="neutral800"
              as="h2"
              id="title"
            >
              Page Preview
            </Typography>
          </ModalHeader>
          <ModalBody style={{ maxHeight: "none" }}>
            <iframe
              src={FRONT_END_URL + value}
              style={{ height: "83vh" }}
              title={FRONT_END_URL + value}
              width={"100%"}
              allowFullScreen={"true"}
            ></iframe>
          </ModalBody>
        </ModalLayout>
      )}
    </Box>
  );
};

//default value if no value is given
Input.defaultProps = {
  description: null,
  error: null,
  labelAction: null,
  required: false,
  value: "",
};

// validation
Input.propTypes = {
  intlLabel: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  attribute: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.object,
  error: PropTypes.string,
  labelAction: PropTypes.object,
  required: PropTypes.bool,
  value: PropTypes.string,
};

export default Input;
