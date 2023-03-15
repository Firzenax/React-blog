import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import MainPage from "./pages/MainPage";

import { ChakraProvider } from "@chakra-ui/react";
import ArticlePage from "./pages/ArticlePage";
import AddArticlePage from "./pages/AddArticlePage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import useUser from "./hooks/useUser";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

const queryClient = new QueryClient();

function App() {
  const { user } = useUser();

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
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignUpPage />,
    },
    {
      path: "/addArticle",
      element: (
        <ProtectedRoute user={user}>
          <AddArticlePage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/about",
    },
  ]);

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
