import { gql } from "@apollo/client";

export const CREATE_COMBINATION = gql`
  mutation CreateCombination($numbers: [Int!]!) {
    createCombination(combination: { numbers: $numbers })
  }
`;
