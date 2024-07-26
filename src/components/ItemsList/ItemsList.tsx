import React from "react";
import { useQuery } from "@apollo/client";
import { GET_LOTTO } from "../../queries/queries";

const ItemList = () => {
  const { loading, error, data } = useQuery(GET_LOTTO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message} </p>;

  return (
    <div>
      <h1>Numbers</h1>
      <ul>
        {data.getCombinations.map((item: { id: string }) => (
          <li key={item.id}>{<h2>{item.id}</h2>}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
