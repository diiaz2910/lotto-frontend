import { gql } from "@apollo/client";

export const GET_LOTTO = gql`
  query GetLotto {
    getCombinations {
      _id
      index
      numbers
    }
  }
`;

export const GET_LAST_LOTTO = gql`
  query GetLastLotto {
    getLastCombination {
      _id
      index
      numbers
    }
  }
`;

export const GET_BONUS = gql`
  query GetBonus {
    bonus {
      _id
      index
      numbers
    }
  }
`;

export const GET_STRIKE = gql`
  query GetStrike {
    strike {
      _id
      index
      numbers
    }
  }
`;

export const GET_POWERBALL = gql`
  query GetPowerBall {
    powerball {
      _id
      index
      numbers
    }
  }
`;

export const GET_CHART = gql`
  query GetCharts {
    getCharts {
      _id
      description
      imageUrl
    }
  }
`;
