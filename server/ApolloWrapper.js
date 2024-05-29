
"use client";

import { ApolloLink, HttpLink, InMemoryCache } from "@apollo/client";
import {
    ApolloNextAppProvider,
    NextSSRInMemoryCache,
    NextSSRApolloClient,
    SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { requestInterceptor, responseInterceptor } from "../../interceptor";


function makeClient() {
    const httpLink = new HttpLink({
        uri: process.env.NEXT_PUBLIC_API_URL,
        // fetchOptions: { cache: "no-store" },
    });

    const link =
        ApolloLink.from([
            requestInterceptor,
            responseInterceptor,
            httpLink
        ])


    return new NextSSRApolloClient({
        cache: new NextSSRInMemoryCache(),
        link: link
    });
}

export function ApolloWrapper({ children }) {
    return (
        <ApolloNextAppProvider makeClient={makeClient}>
            {children}
        </ApolloNextAppProvider>
    );
}
