import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ITConsultancy from "../it_Solution/ITConsultancy";
import Infrastructure from "../it_Solution/Infrastructure";
import CyberSecurity from "../it_Solution/CyberSecurity";
import BackupSolution from "../it_Solution/BackupSolution";
import Telephony from "../it_Solution/Telephony";
import Cctv from "../it_Solution/Cctv";
import ItSupport from "../it_Solution/ItSupport";
import SystemMonitoring from "../it_Solution/SystemMonitoring";


describe("It Solution pages Test" , ()=>{

    
     test("It Consultancy Images" , ()=>{

        render(
            <MemoryRouter>
                <ITConsultancy/>
            </MemoryRouter>
        )

       const backDots = screen.getByAltText("Dot Pattern");
       expect(backDots).toBeInTheDocument();
       expect(backDots).toHaveClass("absolute -top-5 sm:-top-2 md:-top-6 lg:-top-8 xl:-top-10 -right-2 sm:-right-2 md:-right-6 lg:-right-8 xl:-right-7 w-28 sm:w-32 md:w-44 lg:w-52 xl:w-60 z-0 pointer-events-none");
       expect(backDots).toHaveAttribute("loading" , "lazy");
       expect(backDots).toHaveAttribute("src" , expect.stringContaining("backDots"))

       const mainImg = screen.getByAltText("Team Working");
       expect(mainImg).toBeInTheDocument();
       expect(mainImg).toHaveAttribute("loading" , "lazy");
       expect(mainImg).toHaveClass("w-full h-[300px] md:h-[480px] lg:h-[500px] object-cover rounded-2xl md:rounded-l-none md:rounded-r-2xl relative z-10");
       expect(mainImg).toHaveAttribute("src" , expect.stringContaining("itConsultancyMain"));

       const helpImg = screen.getByAltText("HelpImg")
       expect(helpImg).toBeInTheDocument();
       expect(helpImg).toHaveAttribute("loading" , "lazy");
       expect(helpImg).toHaveClass("absolute bottom-5 right-[-60px] sm:right-[-70px] md:right-[-70px] lg:right-[-90px] w-[200px] sm:w-[200px] md:w-[240px] lg:w-[260px] h-auto object-contain z-0 translate-y-12 md:translate-y-12 lg:translate-y-16");
       expect(helpImg).toHaveAttribute("src" , expect.stringContaining("toyMen"));

       const serviceImg = screen.getByAltText("ServiceImg");
       expect(serviceImg).toBeInTheDocument();
       expect(serviceImg).toHaveClass("absolute bottom-5 right-[-30px] sm:right-[-70px] md:right-[-70px] lg:right-[-90px] w-[220px] sm:w-[200px] md:w-[290px] lg:w-[330px] h-auto object-contain z-0 translate-y-6 md:translate-y-12 lg:translate-y-16")
       expect(serviceImg).toHaveAttribute("loading" , "lazy");
       expect(serviceImg).toHaveAttribute("src" , expect.stringContaining("twoWomen"));

       
     })

     test("Infrastructure Images" , ()=>{
        render(
            <MemoryRouter>
                 <Infrastructure/>
            </MemoryRouter>
            )

          const backDots = screen.getByAltText("Dot Pattern");
          expect(backDots).toBeInTheDocument();
          expect(backDots).toHaveClass("absolute -top-5 sm:-top-2 md:-top-6 lg:-top-8 xl:-top-10 -right-2 sm:-right-2 md:-right-6 lg:-right-8 xl:-right-7 w-28 sm:w-32 md:w-44 lg:w-52 xl:w-60 z-0 pointer-events-none");
          expect(backDots).toHaveAttribute("loading" , "lazy");
          expect(backDots).toHaveAttribute("src" , expect.stringContaining("backDots"))

          const mainImg = screen.getByAltText("InfrastructureImg");
          expect(mainImg).toBeInTheDocument();
          expect(mainImg).toHaveClass("w-full h-[300px] md:h-[480px] lg:h-[500px] object-cover rounded-2xl md:rounded-l-none md:rounded-r-2xl relative z-10");
          expect(mainImg).toHaveAttribute("loading" , "lazy");
          expect(mainImg).toHaveAttribute("src" , expect.stringContaining("infrastructureMain"))

          const overlapInfrastructure = screen.getByAltText("infrastructurTeam");
          expect(overlapInfrastructure).toBeInTheDocument();
          expect(overlapInfrastructure).toHaveClass("rounded-[30px] w-[90%] h-[500px] lg:w-[80%] lg:h-[550px] xl:w-[70%] xl:h-[630px] object-cover mx-auto");
          expect(overlapInfrastructure).toHaveAttribute("loading" , "lazy");
          expect(overlapInfrastructure).toHaveAttribute("src" , expect.stringContaining("infrastructureOverlap"))

       const helpImg = screen.getByAltText("HelpImg")
       expect(helpImg).toBeInTheDocument();
       expect(helpImg).toHaveAttribute("loading" , "lazy");
       expect(helpImg).toHaveClass("absolute bottom-5 right-[-60px] sm:right-[-70px] md:right-[-70px] lg:right-[-90px] w-[200px] sm:w-[200px] md:w-[240px] lg:w-[260px] h-auto object-contain z-0 translate-y-12 md:translate-y-12 lg:translate-y-16");
       expect(helpImg).toHaveAttribute("src" , expect.stringContaining("toyMen"));

       const serviceImg = screen.getByAltText("ServiceImg");
       expect(serviceImg).toBeInTheDocument();
       expect(serviceImg).toHaveClass("absolute bottom-5 right-[-30px] sm:right-[-70px] md:right-[-70px] lg:right-[-90px] w-[220px] sm:w-[200px] md:w-[290px] lg:w-[330px] h-auto object-contain z-0 translate-y-6 md:translate-y-12 lg:translate-y-16")
       expect(serviceImg).toHaveAttribute("loading" , "lazy");
       expect(serviceImg).toHaveAttribute("src" , expect.stringContaining("twoWomen"));

          

          
     })

     test("Cyber Security Images" , ()=>{
        render(
            <MemoryRouter>
                <CyberSecurity/>
            </MemoryRouter>
          )

          const backDots = screen.getByAltText("Dot Pattern");
          expect(backDots).toBeInTheDocument();
          expect(backDots).toHaveClass("absolute -top-5 sm:-top-2 md:-top-6 lg:-top-8 xl:-top-10 -right-2 sm:-right-2 md:-right-6 lg:-right-8 xl:-right-7 w-28 sm:w-32 md:w-44 lg:w-52 xl:w-60 z-0 pointer-events-none");
          expect(backDots).toHaveAttribute("loading" , "lazy");
          expect(backDots).toHaveAttribute("src" , expect.stringContaining("backDots"))

          const mainImg = screen.getByAltText("CyberSecurityImg");
          expect(mainImg).toBeInTheDocument();
          expect(mainImg).toHaveClass("w-full h-[300px] md:h-[480px] lg:h-[500px] object-cover rounded-2xl md:rounded-l-none md:rounded-r-2xl relative z-10");
          expect(mainImg).toHaveAttribute("loading" , "lazy");
          expect(mainImg).toHaveAttribute("src" , expect.stringContaining("cyberSecurityMain"))

          const overlapCyberSecurity = screen.getByAltText("CyberSecurityOverlap");
          expect(overlapCyberSecurity).toBeInTheDocument();
          expect(overlapCyberSecurity).toHaveClass("rounded-[30px] w-[90%] h-[500px] lg:w-[80%] lg:h-[550px] xl:w-[70%] xl:h-[600px] object-cover mx-auto");
          expect(overlapCyberSecurity).toHaveAttribute("loading" , "lazy");
          expect(overlapCyberSecurity).toHaveAttribute("src" , expect.stringContaining("cyberOverlap"))
         
       const helpImg = screen.getByAltText("HelpImg")
       expect(helpImg).toBeInTheDocument();
       expect(helpImg).toHaveAttribute("loading" , "lazy");
       expect(helpImg).toHaveClass("absolute bottom-5 right-[-60px] sm:right-[-70px] md:right-[-70px] lg:right-[-90px] w-[200px] sm:w-[200px] md:w-[240px] lg:w-[260px] h-auto object-contain z-0 translate-y-12 md:translate-y-12 lg:translate-y-16");
       expect(helpImg).toHaveAttribute("src" , expect.stringContaining("toyMen"));

       const serviceImg = screen.getByAltText("ServiceImg");
       expect(serviceImg).toBeInTheDocument();
       expect(serviceImg).toHaveClass("absolute bottom-5 right-[-30px] sm:right-[-70px] md:right-[-70px] lg:right-[-90px] w-[220px] sm:w-[200px] md:w-[290px] lg:w-[330px] h-auto object-contain z-0 translate-y-6 md:translate-y-12 lg:translate-y-16")
       expect(serviceImg).toHaveAttribute("loading" , "lazy");
       expect(serviceImg).toHaveAttribute("src" , expect.stringContaining("twoWomen"));
       

     })

     test("Backup Solution Images" , ()=>{
        render(
            <MemoryRouter>
               <BackupSolution/>
            </MemoryRouter>
          )

          const backDots = screen.getByAltText("Dot Pattern");
          expect(backDots).toBeInTheDocument();
          expect(backDots).toHaveClass("absolute -top-5 sm:-top-2 md:-top-6 lg:-top-8 xl:-top-10 -right-2 sm:-right-2 md:-right-6 lg:-right-8 xl:-right-7 w-28 sm:w-32 md:w-44 lg:w-52 xl:w-60 z-0 pointer-events-none");
          expect(backDots).toHaveAttribute("loading" , "lazy");
          expect(backDots).toHaveAttribute("src" , expect.stringContaining("backDots"))

          const mainImg = screen.getByAltText("Backup Solution Image");
          expect(mainImg).toBeInTheDocument();
          expect(mainImg).toHaveClass("w-full h-[300px] md:h-[480px] lg:h-[500px] object-cover rounded-2xl md:rounded-l-none md:rounded-r-2xl relative z-10");
          expect(mainImg).toHaveAttribute("loading" , "lazy");
          expect(mainImg).toHaveAttribute("src" , expect.stringContaining("backupSolutionMain"))

          const backupSolutioOverlap = screen.getByAltText("Backup Solution Overlap");
          expect(backupSolutioOverlap).toBeInTheDocument();
          expect(backupSolutioOverlap).toHaveClass("rounded-[30px] w-[90%] h-[500px] lg:w-[80%] lg:h-[550px] xl:w-[70%] xl:h-[600px]  object-cover mx-auto");
          expect(backupSolutioOverlap).toHaveAttribute("loading" , "lazy");
          expect(backupSolutioOverlap).toHaveAttribute("src" , expect.stringContaining("backupSolutionOverlap"))
         
       const helpImg = screen.getByAltText("HelpImg")
       expect(helpImg).toBeInTheDocument();
       expect(helpImg).toHaveAttribute("loading" , "lazy");
       expect(helpImg).toHaveClass("absolute bottom-5 right-[-60px] sm:right-[-70px] md:right-[-70px] lg:right-[-90px] w-[200px] sm:w-[200px] md:w-[240px] lg:w-[260px] h-auto object-contain z-0 translate-y-12 md:translate-y-12 lg:translate-y-16 ");
       expect(helpImg).toHaveAttribute("src" , expect.stringContaining("toyMen"));

       const serviceImg = screen.getByAltText("ServiceImg");
       expect(serviceImg).toBeInTheDocument();
       expect(serviceImg).toHaveClass("absolute bottom-5 right-[-30px] sm:right-[-70px] md:right-[-70px] lg:right-[-90px] w-[220px] sm:w-[200px] md:w-[290px] lg:w-[330px] h-auto object-contain z-0 translate-y-6 md:translate-y-12 lg:translate-y-16 ")
       expect(serviceImg).toHaveAttribute("loading" , "lazy");
       expect(serviceImg).toHaveAttribute("src" , expect.stringContaining("twoWomen"));
       

     })

     test("Telephony Images" , ()=>{
        render(
            <MemoryRouter>
               <Telephony/>
            </MemoryRouter>
          )

          const backDots = screen.getByAltText("Dot Pattern");
          expect(backDots).toBeInTheDocument();
          expect(backDots).toHaveClass("absolute -top-5 sm:-top-2 md:-top-6 lg:-top-8 xl:-top-10 -right-2 sm:-right-2 md:-right-6 lg:-right-8 xl:-right-7 w-28 sm:w-32 md:w-44 lg:w-52 xl:w-60 z-0 pointer-events-none");
          expect(backDots).toHaveAttribute("loading" , "lazy");
          expect(backDots).toHaveAttribute("src" , expect.stringContaining("backDots"))

          const mainImg = screen.getByAltText("Telephony Image");
          expect(mainImg).toBeInTheDocument();
          expect(mainImg).toHaveClass("w-full h-[300px] md:h-[480px] lg:h-[500px] object-cover rounded-2xl md:rounded-l-none md:rounded-r-2xl relative z-10");
          expect(mainImg).toHaveAttribute("loading" , "lazy");
          expect(mainImg).toHaveAttribute("src" , expect.stringContaining("telephonyMain"))

          const telephonyOverlap = screen.getByAltText("Telephony Overlap");
          expect(telephonyOverlap).toBeInTheDocument();
          expect(telephonyOverlap).toHaveClass("rounded-[30px] w-[90%] h-[500px] lg:w-[80%] lg:h-[550px] xl:w-[70%] xl:h-[600px] object-cover mx-auto");
          expect(telephonyOverlap).toHaveAttribute("loading" , "lazy");
          expect(telephonyOverlap).toHaveAttribute("src" , expect.stringContaining("telephonyOverlap"))
         
       const helpImg = screen.getByAltText("HelpImg")
       expect(helpImg).toBeInTheDocument();
       expect(helpImg).toHaveAttribute("loading" , "lazy");
       expect(helpImg).toHaveClass("absolute bottom-5 right-[-60px] sm:right-[-70px] md:right-[-70px] lg:right-[-90px]  w-[200px] sm:w-[200px] md:w-[240px] lg:w-[260px]  h-auto object-contain z-0  translate-y-12 md:translate-y-12 lg:translate-y-16");
       expect(helpImg).toHaveAttribute("src" , expect.stringContaining("toyMen"));

       const serviceImg = screen.getByAltText("ServiceImg");
       expect(serviceImg).toBeInTheDocument();
       expect(serviceImg).toHaveClass("absolute bottom-5 right-[-30px] sm:right-[-70px] md:right-[-70px] lg:right-[-90px] w-[220px] sm:w-[200px] md:w-[290px] lg:w-[330px]  h-auto object-contain z-0  translate-y-6 md:translate-y-12 lg:translate-y-16")
       expect(serviceImg).toHaveAttribute("loading" , "lazy");
       expect(serviceImg).toHaveAttribute("src" , expect.stringContaining("twoWomen"));
       

     })

     test("CCTV Images" , ()=>{
        render(
            <MemoryRouter>
               <Cctv/>
            </MemoryRouter>
          )

          const backDots = screen.getByAltText("Dot Pattern");
          expect(backDots).toBeInTheDocument();
          expect(backDots).toHaveClass("absolute -top-5 sm:-top-2 md:-top-6 lg:-top-8 xl:-top-10 -right-2 sm:-right-2 md:-right-6 lg:-right-8 xl:-right-7 w-28 sm:w-32 md:w-44 lg:w-52 xl:w-60 z-0 pointer-events-none");
          expect(backDots).toHaveAttribute("loading" , "lazy");
          expect(backDots).toHaveAttribute("src" , expect.stringContaining("backDots"))

          const mainImg = screen.getByAltText("Cctv Image");
          expect(mainImg).toBeInTheDocument();
          expect(mainImg).toHaveClass("w-full h-[300px] md:h-[480px] lg:h-[500px] object-cover rounded-2xl md:rounded-l-none md:rounded-r-2xl relative z-10");
          expect(mainImg).toHaveAttribute("loading" , "lazy");
          expect(mainImg).toHaveAttribute("src" , expect.stringContaining("cctvMain"))

          const cctvOverlap = screen.getByAltText("Cctv Overlap");
          expect(cctvOverlap).toBeInTheDocument();
          expect(cctvOverlap).toHaveClass("rounded-[30px] w-[90%] h-[400px] lg:w-[80%] lg:h-[550px] xl:w-[70%] xl:h-[630px]  object-cover mx-auto");
          expect(cctvOverlap).toHaveAttribute("loading" , "lazy");
          expect(cctvOverlap).toHaveAttribute("src" , expect.stringContaining("cctvOverlap"))
         
       const helpImg = screen.getByAltText("HelpImg")
       expect(helpImg).toBeInTheDocument();
       expect(helpImg).toHaveAttribute("loading" , "lazy");
       expect(helpImg).toHaveClass("absolute bottom-5 right-[-60px] sm:right-[-70px] md:right-[-70px] lg:right-[-90px] w-[200px] sm:w-[200px] md:w-[240px] lg:w-[260px] h-auto object-contain z-0 translate-y-12 md:translate-y-12 lg:translate-y-16");
       expect(helpImg).toHaveAttribute("src" , expect.stringContaining("toyMen"));

       const serviceImg = screen.getByAltText("ServiceImg");
       expect(serviceImg).toBeInTheDocument();
       expect(serviceImg).toHaveClass("absolute bottom-5 right-[-30px] sm:right-[-70px] md:right-[-70px] lg:right-[-90px] w-[220px] sm:w-[200px] md:w-[290px] lg:w-[330px] h-auto object-contain z-0 translate-y-6 md:translate-y-12 lg:translate-y-16")
       expect(serviceImg).toHaveAttribute("loading" , "lazy");
       expect(serviceImg).toHaveAttribute("src" , expect.stringContaining("twoWomen"));
       
     
     })

     test("It Support Images" , ()=>{
        render(
            <MemoryRouter>
               <ItSupport/>
            </MemoryRouter>
          )

          const backDots = screen.getByAltText("Dot Pattern");
          expect(backDots).toBeInTheDocument();
          expect(backDots).toHaveClass("absolute -top-5 sm:-top-2 md:-top-6 lg:-top-8 xl:-top-10 -right-2 sm:-right-2 md:-right-6 lg:-right-8 xl:-right-7 w-28 sm:w-32 md:w-44 lg:w-52 xl:w-60 z-0 pointer-events-none");
          expect(backDots).toHaveAttribute("loading" , "lazy");
          expect(backDots).toHaveAttribute("src" , expect.stringContaining("backDots"))

          const mainImg = screen.getByAltText("ItSupport Image");
          expect(mainImg).toBeInTheDocument();
          expect(mainImg).toHaveClass("w-full h-[300px] md:h-[480px] lg:h-[500px] object-cover rounded-2xl md:rounded-l-none md:rounded-r-2xl relative z-10");
          expect(mainImg).toHaveAttribute("loading" , "lazy");
          expect(mainImg).toHaveAttribute("src" , expect.stringContaining("itSupportMain"))

          const itSupportOverlap = screen.getByAltText("ItSupport Overlap");
          expect(itSupportOverlap).toBeInTheDocument();
          expect(itSupportOverlap).toHaveClass("rounded-[30px] w-[90%] h-[400px] lg:w-[80%] lg:h-[550px] xl:w-[70%] xl:h-[630px] object-cover mx-auto");
          expect(itSupportOverlap).toHaveAttribute("loading" , "lazy");
          expect(itSupportOverlap).toHaveAttribute("src" , expect.stringContaining("itSupportOverlap"))
         
       const helpImg = screen.getByAltText("HelpImg")
       expect(helpImg).toBeInTheDocument();
       expect(helpImg).toHaveAttribute("loading" , "lazy");
       expect(helpImg).toHaveClass("absolute bottom-5  right-[-60px] sm:right-[-70px] md:right-[-70px] lg:right-[-90px] w-[200px] sm:w-[200px] md:w-[240px] lg:w-[260px] h-auto object-contain z-0  translate-y-12 md:translate-y-12 lg:translate-y-16");
       expect(helpImg).toHaveAttribute("src" , expect.stringContaining("toyMen"));
     
     })

     test("SystemMonitoring Images" , ()=>{
        render(
            <MemoryRouter>
               <SystemMonitoring/>
            </MemoryRouter>
          )

          const backDots = screen.getByAltText("Dot Pattern");
          expect(backDots).toBeInTheDocument();
          expect(backDots).toHaveClass("absolute -top-5 sm:-top-2 md:-top-6 lg:-top-8 xl:-top-10 -right-2 sm:-right-2 md:-right-6 lg:-right-8 xl:-right-7 w-28 sm:w-32 md:w-44 lg:w-52 xl:w-60 z-0 pointer-events-none");
          expect(backDots).toHaveAttribute("loading" , "lazy");
          expect(backDots).toHaveAttribute("src" , expect.stringContaining("backDots"))

          const mainImg = screen.getByAltText("SystemMonitoring Image");
          expect(mainImg).toBeInTheDocument();
          expect(mainImg).toHaveClass("w-full h-[300px] md:h-[480px] lg:h-[500px] object-cover rounded-2xl md:rounded-l-none md:rounded-r-2xl relative z-10");
          expect(mainImg).toHaveAttribute("loading" , "lazy");
          expect(mainImg).toHaveAttribute("src" , expect.stringContaining("systemMain"))

          const SystemMonitoringOverlap  = screen.getByAltText("System Monitoring Overlap");
          expect(SystemMonitoringOverlap).toBeInTheDocument();
          expect(SystemMonitoringOverlap).toHaveClass("rounded-[30px] w-[90%] h-[400px] lg:w-[80%] lg:h-[550px] xl:w-[70%] xl:h-[630px] object-cover mx-auto");
          expect(SystemMonitoringOverlap).toHaveAttribute("loading" , "lazy");
          expect(SystemMonitoringOverlap).toHaveAttribute("src" , expect.stringContaining("systemOverlap"))
         
       const helpImg = screen.getByAltText("HelpImg")
       expect(helpImg).toBeInTheDocument();
       expect(helpImg).toHaveAttribute("loading" , "lazy");
       expect(helpImg).toHaveClass("absolute bottom-5 right-[-60px] sm:right-[-70px] md:right-[-70px] lg:right-[-90px] w-[200px] sm:w-[200px] md:w-[240px] lg:w-[260px] h-auto object-contain z-0 translate-y-12 md:translate-y-12 lg:translate-y-16");
       expect(helpImg).toHaveAttribute("src" , expect.stringContaining("toyMen"));

       const serviceImg = screen.getByAltText("ServiceImg");
       expect(serviceImg).toBeInTheDocument();
       expect(serviceImg).toHaveClass("absolute bottom-5 right-[-30px] sm:right-[-70px] md:right-[-70px] lg:right-[-90px] w-[220px] sm:w-[200px] md:w-[290px] lg:w-[330px] h-auto object-contain z-0 translate-y-6 md:translate-y-12 lg:translate-y-16")
       expect(serviceImg).toHaveAttribute("loading" , "lazy");
       expect(serviceImg).toHaveAttribute("src" , expect.stringContaining("twoWomen"));
     
     })
    


})