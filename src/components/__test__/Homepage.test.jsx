import { describe, expect, test } from "vitest";
import Homepage from "../Homepage";
import { render,screen } from "@testing-library/react";

import { MemoryRouter } from 'react-router-dom';

describe("HomePage Testing" , ()=>{


  test("Image Testing" , ()=>{
  
    render(
        <MemoryRouter>
          <Homepage />
        </MemoryRouter>
      );
  
      const arrowIcon = screen.getAllByAltText("Arrow");
      arrowIcon.forEach(icon => {
        expect(icon).toBeInTheDocument();
        expect(icon).toHaveClass("w-3 h-3 transition-transform duration-300 group-hover:rotate-45");
        expect(icon).toHaveAttribute("src" , expect.stringContaining("arrorw"));
      })

      const heroTopBg = screen.getByAltText("Top Background");
      expect(heroTopBg).toBeInTheDocument();
      expect(heroTopBg).toHaveAttribute("loading" , "lazy");
      expect(heroTopBg).toHaveClass("absolute top-0 left-0 w-full h-auto object-cover z-0 pointer-events-none");
      expect(heroTopBg).toHaveAttribute("src" , expect.stringContaining("heroBgTop"));

      const heroBottomBg = screen.getByAltText("Bottom Background");
      expect(heroBottomBg).toBeInTheDocument();
      expect(heroBottomBg).toHaveAttribute("loading" , "lazy");
      expect(heroBottomBg).toHaveClass("absolute bottom-0 left-0 w-full h-auto object-cover z-0 pointer-events-none");
      expect(heroBottomBg).toHaveAttribute("src" , expect.stringContaining("heroBgBottom"));

      const maceLogo = screen.getByAltText("Mace Logo");
      expect(maceLogo).toBeInTheDocument();
      expect(maceLogo).toHaveClass("max-w-full h-auto w-20 sm:w-28 md:w-32")
      expect(maceLogo).toHaveAttribute("loading" , "lazy")
      expect(maceLogo).toHaveAttribute("src" , expect.stringContaining("mace01"))

      const msAmlin = screen.getByAltText("Ms Amlin");
      expect(msAmlin).toBeInTheDocument();
      expect(msAmlin).toHaveClass("max-w-full h-auto w-24 sm:w-28 md:w-32")
      expect(msAmlin).toHaveAttribute("loading" , "lazy")
      expect(msAmlin).toHaveAttribute("src" , expect.stringContaining("mace02"))

      const astraZeneca = screen.getByAltText("AstraZeneca");
      expect(astraZeneca).toBeInTheDocument();
      expect(astraZeneca).toHaveClass("max-w-full h-auto w-24 sm:w-28 md:w-40")
      expect(astraZeneca).toHaveAttribute("loading" , "lazy")
      expect(astraZeneca).toHaveAttribute("src" , expect.stringContaining("mace03"))

      const inmarsat = screen.getByAltText("Inmarsat");
      expect(inmarsat).toBeInTheDocument();
      expect(inmarsat).toHaveClass("max-w-full h-auto w-24 sm:w-28 md:w-40")
      expect(inmarsat).toHaveAttribute("loading" , "lazy")
      expect(inmarsat).toHaveAttribute("src" , expect.stringContaining("mace04"))

      const rics = screen.getByAltText("Rics");
      expect(rics).toBeInTheDocument();
      expect(rics).toHaveClass("max-w-full h-auto w-24 sm:w-28 md:w-32")
      expect(rics).toHaveAttribute("loading" , "lazy")
      expect(rics).toHaveAttribute("src" , expect.stringContaining("mace05"))


      const growthIcon = screen.getByAltText("Growth Icon");
      expect(growthIcon).toBeInTheDocument();
      expect(growthIcon).toHaveClass("w-6 h-6 mb-2")
      expect(growthIcon).toHaveAttribute("loading" , "lazy")
      expect(growthIcon).toHaveAttribute("src" , expect.stringContaining("growth"))
      
      const bulbIcon = screen.getByAltText("Bulb Icon");
      expect(bulbIcon).toBeInTheDocument();
      expect(bulbIcon).toHaveClass("w-6 h-6 mb-2")
      expect(bulbIcon).toHaveAttribute("loading" , "lazy")
      expect(bulbIcon).toHaveAttribute("src" , expect.stringContaining("idea"))
      
      const syncIcon = screen.getByAltText("Sync Icon");
      expect(syncIcon).toBeInTheDocument();
      expect(syncIcon).toHaveClass("w-6 h-6 mb-2")
      expect(syncIcon).toHaveAttribute("loading" , "lazy")
      expect(syncIcon).toHaveAttribute("src" , expect.stringContaining("sync"))
      
      // About Company Images start

       const meetingImg = screen.getByAltText("Team Meeting");
       expect(meetingImg).toBeInTheDocument();
       expect(meetingImg).toHaveClass("rounded-[30px] w-full h-full max-h-[600px] object-cover");
       expect(meetingImg).toHaveAttribute("src" , expect.stringContaining("meeting01"))
       
      // About Company Images end


      // service Images testing start

       const itConsultancy = screen.getByAltText("IT Consultancy");
       expect(itConsultancy).toBeInTheDocument();
       expect(itConsultancy).toHaveAttribute("loading" , "lazy")
       expect(itConsultancy).toHaveClass("absolute bottom-0 right-[-20px] w-[180px] h-[180px] object-contain z-0 transition-transform duration-500 ease-in-out group-hover:translate-y-[-5px]");
       expect(itConsultancy).toHaveAttribute("src" , expect.stringContaining("card01"))

       const infrastructure = screen.getByAltText("Infrastructure & Cloud");
       expect(infrastructure).toBeInTheDocument();
       expect(infrastructure).toHaveAttribute("loading" , "lazy")
       expect(infrastructure).toHaveClass("absolute bottom-0 right-[-20px] w-[180px] h-[180px] object-contain z-0 transition-transform duration-500 ease-in-out group-hover:translate-y-[-5px]");
       expect(infrastructure).toHaveAttribute("src" , expect.stringContaining("card02"))

       const cyberSecurity = screen.getByAltText("Cyber Security Solutions");
       expect(cyberSecurity).toBeInTheDocument();
       expect(cyberSecurity).toHaveAttribute("loading" , "lazy")
       expect(cyberSecurity).toHaveClass("absolute bottom-0 right-[-20px] w-[180px] h-[180px] object-contain z-0 transition-transform duration-500 ease-in-out group-hover:translate-y-[-5px]");
       expect(cyberSecurity).toHaveAttribute("src" , expect.stringContaining("card03"))

       const systemMonitoring = screen.getByAltText("System Monitoring");
       expect(systemMonitoring).toBeInTheDocument();
       expect(systemMonitoring).toHaveAttribute("loading" , "lazy")
       expect(systemMonitoring).toHaveClass("absolute bottom-0 right-[-20px] w-[180px] h-[180px] object-contain z-0 transition-transform duration-500 ease-in-out group-hover:translate-y-[-5px]");
       expect(systemMonitoring).toHaveAttribute("src" , expect.stringContaining("card04"))

       const backupSolution = screen.getByAltText("Backup Solutions");
       expect(backupSolution).toBeInTheDocument();
       expect(backupSolution).toHaveAttribute("loading" , "lazy")
       expect(backupSolution).toHaveClass("absolute bottom-0 right-[-20px] w-[170px] h-[170px] object-contain z-0 transition-transform duration-500 ease-in-out group-hover:translate-y-[-5px]");
       expect(backupSolution).toHaveAttribute("src" , expect.stringContaining("card05"))

       const ecommerce = screen.getByAltText("E-Commerce");
       expect(ecommerce).toBeInTheDocument();
       expect(ecommerce).toHaveAttribute("loading" , "lazy")
       expect(ecommerce).toHaveClass("absolute bottom-0 right-[-20px] w-[180px] h-[180px] object-contain z-0 transition-transform duration-500 ease-in-out group-hover:translate-y-[-5px]");
       expect(ecommerce).toHaveAttribute("src" , expect.stringContaining("card06"))
       
       const itSupport = screen.getByAltText("IT Support");
       expect(itSupport).toBeInTheDocument();
       expect(itSupport).toHaveAttribute("loading" , "lazy")
       expect(itSupport).toHaveClass("absolute bottom-0 right-[-20px] w-[180px] h-[180px] object-contain z-0 transition-transform duration-500 ease-in-out group-hover:translate-y-[-5px]");
       expect(itSupport).toHaveAttribute("src" , expect.stringContaining("card07"))

       const telephony = screen.getByAltText("Telephony");
       expect(telephony).toBeInTheDocument();
       expect(telephony).toHaveAttribute("loading" , "lazy")
       expect(telephony).toHaveClass("absolute bottom-0 right-[-20px] w-[180px] h-[180px] object-contain z-0 transition-transform duration-500 ease-in-out group-hover:translate-y-[-5px]");
       expect(telephony).toHaveAttribute("src" , expect.stringContaining("card08"))

      // service Images testing end


      const whyChooseUs = screen.getByAltText("Team Working");
      expect(whyChooseUs).toBeInTheDocument();
      expect(whyChooseUs).toHaveAttribute("loading" , "lazy");
      expect(whyChooseUs).toHaveClass("rounded-[30px] w-full h-full max-h-[600px] object-cover");
      expect(whyChooseUs).toHaveAttribute("src" , expect.stringContaining("meeting02"));


      // Meet Our client Start

      //  const mace = screen.getByAltText("Mace");
      //  expect(mace).toBeInTheDocument();
      //  expect(mace).toHaveClass("h-10 sm:h-12 md:h-20 max-w-[140px] w-full object-contain");
      //  expect(mace).toHaveAttribute("loading" , "lazy");
      //  expect(mace).toHaveAttribute("src" , expect.stringContaining("mace"));

      //  const mundiPharma = screen.getByAltText("Mundi Pharma");
      //  expect(mundiPharma).toBeInTheDocument();
      //  expect(mundiPharma).toHaveClass("h-14 sm:h-16 md:h-20 max-w-[140px] w-full object-contain");
      //  expect(mundiPharma).toHaveAttribute("loading" , "lazy");
      //  expect(mundiPharma).toHaveAttribute("src" , expect.stringContaining("mundi_pharma"));


      
      // Meet Our client end



  })




})