import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ListEvaluadoPage from "../pages/ListEvaluadoPage";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    }
    ,
    {
        path: "/evaluados",
        element: <ListEvaluadoPage />,
        errorElement: <ErrorPage />,
    }
]);

export default router;
