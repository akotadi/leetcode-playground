import { GraphiQL } from "graphiql";
import type { Fetcher } from '@graphiql/toolkit';
import 'graphiql/graphiql.min.css';
import { buildSchema } from "graphql";
import {schema as sdlSchema} from "./schema/leetcode-schema";

const fetcher: Fetcher = async graphQLParams => 
  fetch(
    'https://nice-whimsical-possum.glitch.me/https://leetcode.com/graphql',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(graphQLParams),
    },
  )
  .then(data => {console.log(data); return data.json();})
  .catch(error => console.error(error));

const schema = buildSchema(sdlSchema);

const App = () => {
  return <GraphiQL schema={schema} fetcher={fetcher} />
};

export default App
