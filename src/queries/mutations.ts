import { gql } from "@apollo/client";

export const CREATE_COMBINATION = gql`
  mutation CreateCombination($numbers: [Int!]!) {
    createCombination(combination: { numbers: $numbers })
  }
`;

export const CREATE_BONUS = gql`
  mutation CreateBonus($numbers: [Int!]!) {
    createBonus(bonus: { numbers: $numbers })
  }
`;

export const CREATE_POWERBALL = gql`
  mutation CreatePowerBall($numbers: [Int!]!) {
    createPowerBall(powerBall: { numbers: $numbers })
  }
`;

export const CREATE_STRIKE = gql`
  mutation CreateStrike($numbers: [Int!]!) {
    createStrike(strike: { numbers: $numbers })
  }
`;
