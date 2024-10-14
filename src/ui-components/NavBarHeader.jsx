/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useAuthSignOutAction,
  useNavigateAction,
} from "./utils";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
export default function NavBarHeader(props) {
  const { pet, overrides, ...rest } = props;
  const petStoreOnClick = useNavigateAction({ type: "reload" });
  const buttonOnClick = useAuthSignOutAction({ global: false });
  return (
    <Flex
      gap="486px"
      direction="row"
      width="1440px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="0px 2px 2px rgba(0, 0, 0, 0.10000000149011612)"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NavBarHeader")}
      {...rest}
    >
      <Flex
        gap="37px"
        direction="row"
        width="623px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 321")}
      >
        <Text
          fontFamily="Italianno"
          fontSize="36px"
          fontWeight="400"
          color="rgba(0,34,102,1)"
          lineHeight="24px"
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
          children="Pet Store"
          onClick={() => {
            petStoreOnClick();
          }}
          {...getOverrideProps(overrides, "Pet Store")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          fontStyle="italic"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="63px"
          height="24px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Add Pet"
          {...getOverrideProps(overrides, "Add Pet")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(92,102,112,1)"
          lineHeight="24px"
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
          children="Contact"
          {...getOverrideProps(overrides, "Contact")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(92,102,112,1)"
          lineHeight="24px"
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
          children="About Us"
          {...getOverrideProps(overrides, "About Us")}
        ></Text>
      </Flex>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Sign Out"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
