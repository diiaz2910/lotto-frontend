import { useQuery } from "@apollo/client";
import { GET_LAST_POWERBALL } from "../../../queries/queries";

const PowerBall = () => {
  const { loading, error, data } = useQuery(GET_LAST_POWERBALL);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message} </p>;

  const item = data.getLastPowerBall;

  return (
    <div>
      <h1>Last Powerball</h1>
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

export default PowerBall;
