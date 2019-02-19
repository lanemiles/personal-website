/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: something
// ====================================================

export interface something_hobbies {
  __typename: "Hobby";
  name: string | null;
}

export interface something {
  hobbies: (something_hobbies | null)[] | null;
}
