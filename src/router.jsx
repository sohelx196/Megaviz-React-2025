import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./components/Homepage";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Services from "./components/Services";
import ITConsultancy from "./components/it_Solution/ITConsultancy";
import Infrastructure from "./components/it_Solution/Infrastructure";
import CyberSecurity from "./components/it_Solution/CyberSecurity";
import BackupSolution from "./components/it_Solution/BackupSolution";



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
            },
            {
                path: "cyberSecurity",
                element:<CyberSecurity/>
            },
            {
                path: "backupSolution",
                element:<BackupSolution/>
            },
            



            
        ]
        

    }
])

export default router;