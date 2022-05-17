import "../styles/globals.css";
import type { AppProps } from "next/app";

// React query
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import { BoardContextProvider } from "../context/BoardContext";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <BoardContextProvider>
        <Component {...pageProps} />;
      </BoardContextProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
