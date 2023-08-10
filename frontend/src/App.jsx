import { gql, useQuery } from "@apollo/client";
import "./App.css";

const BOOKS = gql`
  query {
    test {
      title
      author
    }
  }
`;

function Books() {
  const { loading, data, error } = useQuery(BOOKS);
  console.log(data, loading, error);

  return data.test.map(({ title, author }) => (
    <div key={title}>{`${title}:${author}`}</div>
  ));
}

function App() {
  return (
    <div className="App">
      <h2>GraphQL Client</h2>
      <Books />
    </div>
  );
}

export default App;
