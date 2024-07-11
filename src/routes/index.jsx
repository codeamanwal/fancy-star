import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../section/AboutUs";
import App from "../App";
import Knowledge from "../section/Knowledge";
import ContactUs from "../section/ContactUs";
import Operations from "../section/Operations";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/knowledge",
    element: <Knowledge />,
  },
  {
    path: "/contactus",
    element: <ContactUs />,
  },
  {
    path: "/operations",
    element: <Operations />,
  },
]);

export default router;
