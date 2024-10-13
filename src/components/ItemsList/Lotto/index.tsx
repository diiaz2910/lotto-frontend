import { useQuery } from "@apollo/client";
import { GET_LAST_LOTTO } from "../../../queries/queries";

const Lotto = () => {
  const { loading, error, data } = useQuery(GET_LAST_LOTTO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message} </p>;

  const item = data.getLastCombination;

  return (
    <div>
      <h1>Last Lotto</h1>
      <ul>
        <li>
          <h2> {item.numbers.join(", ")} </h2>
        </li>
      </ul>
      {/*<h1>Game</h1>
      <ul>
        <li>
          <h2>{item.index}</h2>
        </li>
      </ul>*/}
    </div>
  );
};

export default Lotto;
