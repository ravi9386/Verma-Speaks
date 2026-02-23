import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { CreatePost } from "./pages/CreatePost";
import { BlogPost } from "./pages/BlogPost";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/create",
    Component: CreatePost,
  },
  {
    path: "/post/:id",
    Component: BlogPost,
  },
]);
