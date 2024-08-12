import { useQuery } from "@apollo/client";
import { GET_LAST_BONUS } from "../../../queries/queries";

const Bonus = () => {
  const { loading, error, data } = useQuery(GET_LAST_BONUS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message} </p>;

  const item = data.getLastBonus;

  return (
    <div>
      <h1>Last Bonus</h1>
      <ul>
        <li>
          <h2> {item.numbers} </h2>
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

export default Bonus;
