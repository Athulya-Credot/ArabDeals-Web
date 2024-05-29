import { useEffect } from "react";
import Helmet from "react-helmet";
import { Provider, useStore } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import { wrapper } from "../store/index.js";
import Layout from '../components/layout';
// import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { actions as DemoAction } from "../store/demo";
import apolloClient from "../server/apollo.js"
import "../public/sass/style.scss";

const App = ({ Component, pageProps }) => {
    const store = useStore();

    // useEffect(() => {
    //     if (store.getState().demo.current !== 36) {
    //         store.dispatch(DemoAction.refreshStore(36));
    //     }
    // }, [])

    return (
        // <ApolloProvider client={apolloClient}>
        <Provider store={store}>
           
            <PersistGate
                persistor={store.__persistor}
                loading={<div className="loading-overlay">
                    <div className="bounce-loader">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </div>
                </div>}>
                <Helmet>
                    <meta charSet="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                    <title>Arab Deal</title>

                    <meta name="keywords" content="React Template" />
                    <meta name="description" content="Porto - React eCommerce Template" />
                    <meta name="author" content="SW-THEMES" />
                </Helmet>
                    

                <Layout>
                    <Component {...pageProps} />
                </Layout>
           
            </PersistGate>
         
        </Provider >
        
    )
};

App.getInitialProps = async ({ Component, ctx }) => {
    let pageProps = {};
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
};

export default wrapper.withRedux(App);
