import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import MainPage from "./pages/MainPage";

import { ChakraProvider } from "@chakra-ui/react";
import ArticlePage from "./pages/ArticlePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/:articleName",
    element: <ArticlePage />,
  },
  {
    path: "/about",
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <NavBar />
        <RouterProvider router={router} />
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
