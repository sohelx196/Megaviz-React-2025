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
import Telephony from "./components/it_Solution/Telephony";
import Cctv from "./components/it_Solution/Cctv";
import ItSupport from "./components/it_Solution/ItSupport";
import SystemMonitoring from "./components/it_Solution/SystemMonitoring";



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
            {
                path: "telephony",
                element:<Telephony/>
            },
            {
                path: "cctv",
                element:<Cctv/>
            },
            {
                path: "itSupport",
                element:<ItSupport/>
            },
            {
                path: "systemMonitoring",
                element:<SystemMonitoring/>
            },


            
        ]
        

    }
])

export default router;