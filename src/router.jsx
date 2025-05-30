import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./components/Homepage";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Services from "./components/Services";
import ITConsultancy from "./components/it_Solution/ITConsultancy";
import Infrastructure from "./components/it_Solution/Infrastructure";



 const router = createBrowserRouter([
    {
        path: "",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Homepage/>
            },
            {
                path: "aboutUs",
                element: <AboutUs/>
            },
            {
                path: "contactUs",
                element: <ContactUs/>       
            },
            {
                path:"services",
                element: <Services/>
            },

            {
                path: "itConsultancy",
                element:<ITConsultancy/>
            },

            {
                path: "infrastructure",
                element:<Infrastructure/>
            }
            
        ]
        

    }
])

export default router;