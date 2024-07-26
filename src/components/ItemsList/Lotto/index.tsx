import React from "react";
import { useQuery } from "@apollo/client";
import { GET_LOTTO } from "../../../queries/queries";

const Lotto = () => {
  const { loading, error, data } = useQuery(GET_LOTTO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message} </p>;

  return (
    <div>
      <h1>Lotto Numbers</h1>
      <ul>
        {data.getCombinations.map(
          (item: { _id: string; numbers: number[] }) => (
            <li key={item._id}>
              <h2> {item.numbers.join(", ")} </h2>
              <p> {item._id} </p>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Lotto;
