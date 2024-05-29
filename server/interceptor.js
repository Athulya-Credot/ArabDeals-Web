// Interceptors.ts
import { ApolloLink, Observable, Operation, NextLink } from '@apollo/client';
import { useRouter } from 'next/router';
// Request Interceptor
export const requestInterceptor = new ApolloLink(
  (operation, forward) => {
    // Modify the operation before it is sent
    operation.setContext({
      headers: {
        Authorization: `Bearer ${localStorage.getItem('arabtoken')}`,
      },
    });

    // Call the next link in the chain
    return forward(operation);
  }
);

// Response Interceptor
export const responseInterceptor = new ApolloLink(
  (operation, forward) => {
    return new Observable((observer) => {
      const handleNext = (result) => {

        if (result.errors && result.errors.some((error) => error.extensions?.code === "UNAUTHORIZED")) {
          console.log("Redirecting to login page", result);
          // localStorage.removeItem("arabtoken");
          // window.location.href="/pages/login";
        } else {
          observer.next(result);
        }
      };

      const handleComplete = () => {
        observer.complete();
      };

      const handleError = (error) => {
        console.error('GraphQL Error:', error);
        observer.error(error);
      };

      // Check if forward is a function before calling it
      if (typeof forward === 'function') {
        const subscription = forward(operation).subscribe({
          next: handleNext,
          error: handleError,
          complete: handleComplete,
        });

        return () => {
          subscription.unsubscribe();
        };
      } else {
        // If forward is not a function, just complete the observer
        handleComplete();
      }
    });
  }
);
// export const responseInterceptor = new ApolloLink(
//   (operation, forward) => {
//     return new Observable((observer) => {
//       const subscription = forward(operation).subscribe({
//         next: (result) => {
//           console.log('GraphQL Result:', result?.errors);
//           // Check if there are errors in the result
//           if (result.errors && result.errors.some((error) => error.extensions?.code === "UNAUTHORIZED")) {
//             console.log("Redirecting to login page");
//             localStorage.removeItem("arabtoken");
//             window.location.href="/login";
//           } else {
//             observer.next(result);
//           }
//         },
//         error: (error) => {
//           // Handle errors globally
//           console.error('GraphQL Error:', error);
//           observer.error(error);
//         },
//         complete: () => {
//           observer.complete();
//         },
//       });

//       return () => {
//         subscription.unsubscribe();
//       };
//     });
//   }
// );

const getAuthToken = () => {
  const historyUrl = window.location.href
  // localStorage.setItem("historyUrl",historyUrl );
  return localStorage.getItem("arabtoken") || null;
};

export const authLink = new ApolloLink((operation, forward) => {
  const token = getAuthToken();
  operation.setContext(({ headers }) => ({
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  }));
  return forward(operation);
});