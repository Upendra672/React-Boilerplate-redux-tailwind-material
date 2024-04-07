import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
// import { AuthContext } from "./AuthContext"; // Assuming you have an AuthContext for managing authentication state

const Routes = () => {
//   const { isAuthenticated } = useContext(AuthContext); // this is for example
const isAuthenticated = false;

  // Define public routes
  const publicRoutes = [
    { path: "/",element: <Home />},
    { path: "*", element: <NotFound /> },
  ];

  // Define protected routes  
  const protectedRoutes = [
    {
      path: "profile",
      element: <Profile />,
    },
    { path: "*", element: <NotFound /> },
 
  ];

  // Use either public or protected routes based on authentication status
  const routes = isAuthenticated ? protectedRoutes : publicRoutes;

  const element = useRoutes(routes);

  return element;
};

export default Routes;
