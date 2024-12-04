import { createBrowserRouter } from "react-router";
import Home from "../pages/homepages";
import SingleUsers from "../pages/SingleUsers";
import Posts from "../pages/postspage";
import Todos from "../pages/todospage";

export const routers = createBrowserRouter([
   {
      path:'/',
      element: <Home />
   },
   {
      path:'/user/:id',
      element: <SingleUsers />
   },
   {
      path: '/posts',
      element: <Posts />
   },
   {
      path: '/todos',
      element: <Todos />
   }
])