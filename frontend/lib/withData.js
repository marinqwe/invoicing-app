import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { endpoint, prodEndpoint } from '../config';
import { LOCAL_STATE_QUERY } from '../components/Header';

export function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include'
        },
        headers
      });
    },
    // local data
    clientState: {
      resolvers: {
        Mutation: {
          toggleForm(_, variables, { cache }) {
            //read value from cache
            const { showCreateForm } = cache.readQuery({
              query: LOCAL_STATE_QUERY
            });
            //make state value opposite and save to cache
            const data = {
              data: {
                showCreateForm: !showCreateForm
              }
            };
            cache.writeData(data);
            return data;
          },
          setToDefault(_, variables, { cache }) {
            const data = {
              data: {
                showCreateForm: false
              }
            };
            cache.writeData(data);
            return data;
          }
        }
      },
      defaults: {
        showCreateForm: false
      }
    }
  });
}

export default withApollo(createClient);
