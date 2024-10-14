/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useState } from "react";
import { generateClient } from "aws-amplify/api";
import { createPet } from "../graphql/mutations";
import { getOverrideProps } from "./utils";
import MyIcon from "./MyIcon";
import { Button, Flex, Text, TextField } from "@aws-amplify/ui-react";
const client = generateClient();
export default function EditProfile(props) {
  const { AddPet, overrides, ...rest } = props;
  const [
    textFieldTwoNineSevenSixSixNineTwoTwoValue,
    setTextFieldTwoNineSevenSixSixNineTwoTwoValue,
  ] = useState("");
  const [
    textFieldTwoNineSevenSixSixNineTwoThreeValue,
    setTextFieldTwoNineSevenSixSixNineTwoThreeValue,
  ] = useState("");
  const [
    textFieldTwoNineSevenSixSixNineTwoFourValue,
    setTextFieldTwoNineSevenSixSixNineTwoFourValue,
  ] = useState("");
  const [
    textFieldThreeEightSevenSevenEightOneZeroValue,
    setTextFieldThreeEightSevenSevenEightOneZeroValue,
  ] = useState("");
  const [
    textFieldThreeEightSevenSevenEightOneEightValue,
    setTextFieldThreeEightSevenSevenEightOneEightValue,
  ] = useState("");
  const [
    textFieldThreeEightSevenSevenEightFiveZeroValue,
    setTextFieldThreeEightSevenSevenEightFiveZeroValue,
  ] = useState("");
  const buttonOnClick = async () => {
    await client.graphql({
      query: createPet.replaceAll("__typename", ""),
      variables: {
        input: {
          Name: textFieldTwoNineSevenSixSixNineTwoTwoValue,
          About: textFieldTwoNineSevenSixSixNineTwoThreeValue,
          Age: textFieldTwoNineSevenSixSixNineTwoFourValue,
          Breed: textFieldThreeEightSevenSevenEightOneZeroValue,
          Colour: textFieldThreeEightSevenSevenEightOneEightValue,
          Image: textFieldThreeEightSevenSevenEightFiveZeroValue,
        },
      },
    });
  };
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "EditProfile")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <MyIcon
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            type="close"
            {...getOverrideProps(overrides, "MyIcon")}
          ></MyIcon>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Add Pet Profile"
            {...getOverrideProps(overrides, "Add Pet Profile")}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            width="unset"
            height="unset"
            label="Pet Name"
            placeholder="Pet Name"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoTwoValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoTwoValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField29766922")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="About"
            placeholder="Description about Pet"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoThreeValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoThreeValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField29766923")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Age"
            placeholder="Give Pet Age"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoFourValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoFourValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField29766924")}
          ></TextField>
        </Flex>
        <TextField
          width="unset"
          height="unset"
          label="Breed"
          placeholder="Pet Breed"
          shrink="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={textFieldThreeEightSevenSevenEightOneZeroValue}
          onChange={(event) => {
            setTextFieldThreeEightSevenSevenEightOneZeroValue(
              event.target.value
            );
          }}
          {...getOverrideProps(overrides, "TextField3877810")}
        ></TextField>
        <TextField
          width="unset"
          height="unset"
          label="Colour"
          placeholder="Pet Skin Colour"
          shrink="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={textFieldThreeEightSevenSevenEightOneEightValue}
          onChange={(event) => {
            setTextFieldThreeEightSevenSevenEightOneEightValue(
              event.target.value
            );
          }}
          {...getOverrideProps(overrides, "TextField3877818")}
        ></TextField>
        <TextField
          width="unset"
          height="unset"
          label="Image Address"
          placeholder="Give the Copy image Address of Image"
          shrink="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={textFieldThreeEightSevenSevenEightFiveZeroValue}
          onChange={(event) => {
            setTextFieldThreeEightSevenSevenEightFiveZeroValue(
              event.target.value
            );
          }}
          {...getOverrideProps(overrides, "TextField3877850")}
        ></TextField>
        <Button
          width="76px"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Save"
          onClick={() => {
            buttonOnClick();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
