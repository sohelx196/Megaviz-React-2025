import { createBrowserRouter } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import App from "./App";



const PageNotFound = lazy(()=>import("./components/PageNotFound"));


const Homepage = lazy(() => import("./components/Homepage"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const Services = lazy(() => import("./components/Services"));
const Industries = lazy(()=> import("./components/morePages/Industries"));
const Blogs = lazy(()=> import("./components/morePages/Blogs"));
const CaseStudies = lazy(()=>import("./components/morePages/CaseStudies"));
const Career = lazy(()=>import("./components/morePages/Career"));


const ITConsultancy = lazy(() => import("./components/it_Solution/ITConsultancy"));
const Infrastructure = lazy(() => import("./components/it_Solution/Infrastructure"));
const CyberSecurity = lazy(() => import("./components/it_Solution/CyberSecurity"));
const BackupSolution = lazy(() => import("./components/it_Solution/BackupSolution"));
const Telephony = lazy(() => import("./components/it_Solution/Telephony"));
const Cctv = lazy(() => import("./components/it_Solution/Cctv"));
const ItSupport = lazy(() => import("./components/it_Solution/ItSupport"));
const SystemMonitoring = lazy(() => import("./components/it_Solution/SystemMonitoring"));

// Suspense wrapper
const withSuspense = (Component) => (
  <Suspense fallback={null}>
    <Component />
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
        { 
           path: "/", 
           element: withSuspense(Homepage) 
         },
        { 
           path: "aboutUs", 
           element: withSuspense(AboutUs) 
         },

         {
            path:"industries",
            element:withSuspense(Industries)
         },
         {
           path:"blogs",
           element:withSuspense(Blogs)
         },
         {
           path:"caseStudies",
           element:withSuspense(CaseStudies)
         },
         {
           path:"career",
           element:withSuspense(Career)
         },

         
         { 
            path: "contactUs",
            element: withSuspense(ContactUs) 
         },
        { 
           path: "services", 
           element: withSuspense(Services) 
         },
        { 
           path: "itConsultancy",
            element: withSuspense(ITConsultancy) 
         },
        { 
           path: "infrastructure",
            element: withSuspense(Infrastructure) 
         },
        { 
           path: "cyberSecurity",
            element: withSuspense(CyberSecurity) 
         },
        { 
           path: "backupSolution",
            element: withSuspense(BackupSolution) 
         },
        { 
           path: "telephony", 
           element: withSuspense(Telephony) 
         },
        { 
           path: "cctv",
            element: withSuspense(Cctv) 
         },
        { 
           path: "itSupport", 
           element: withSuspense(ItSupport) 
         },
        { 
           path: "systemMonitoring",
            element: withSuspense(SystemMonitoring) 
        },
        


        
        
  {
   path:"*",
   element:withSuspense(PageNotFound)
  }

        
    ], 
  },

]);

export default router;
