import { useQuery } from "@apollo/client";
import { GET_LAST_STRIKE } from "../../../queries/queries";

const Strike = () => {
  const { loading, error, data } = useQuery(GET_LAST_STRIKE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message} </p>;

  const item = data.getLastStrike;

  return (
    <div>
      <h1>Last Strike</h1>
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
};

export default Strike;
