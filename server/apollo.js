import { withApollo } from 'next-apollo';
// import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloClient, InMemoryCache, ApolloLink, HttpLink, ApolloProvider, gql } from '@apollo/client';
import { requestInterceptor, responseInterceptor, authLink } from './interceptor';

const API_URI = process.env.NEXT_PUBLIC_SERVER_URL;

const httpLink = new HttpLink({ uri: API_URI });


const apolloClient = new ApolloClient({
    // uri:API_URI,
    link: ApolloLink.from([authLink, responseInterceptor, httpLink]),
    cache: new InMemoryCache()
});

export default withApollo(apolloClient);