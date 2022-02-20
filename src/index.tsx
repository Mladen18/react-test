import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { PostContextProvider } from "./context/context";

const queryClient = new QueryClient();

ReactDOM.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <PostContextProvider>
        <App />
      </PostContextProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
