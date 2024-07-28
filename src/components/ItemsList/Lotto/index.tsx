import React from "react";
import { useQuery } from "@apollo/client";
import { GET_LAST_LOTTO } from "../../../queries/queries";

const Lotto = () => {
  const { loading, error, data } = useQuery(GET_LAST_LOTTO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message} </p>;

  const item = data.getLastCombination;

  return (
    <div>
      <h1>Last Game</h1>
      <ul>
        <li>
          <h2> {item.numbers.join(", ")} </h2>
        </li>
      </ul>
      <h1>Game</h1>
      <ul>
        <li>
          <h2> {item.index} </h2>
        </li>
      </ul>
    </div>
  );
  /*return (
    <div>
      <h1>Lotto Numbers</h1>
      <ul>
        {data.getCombinations.map(
          (item: { _id: string; numbers: number[]; index: string }) => (
            <li key={item._id}>
              <h2> {item.numbers.join(", ")} </h2>
              <p> {item._id} </p>
              <p> {item.index} </p>
            </li>
          )
        )}
      </ul>
    </div>
  );*/
};

export default Lotto;
