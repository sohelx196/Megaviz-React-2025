import { render , screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, test } from "vitest";
import Services from "../Services";


describe("Service Page Testing" , ()=>{

  
    // Image test start
    test("Service Image test" , ()=>{

    
      render(
        <MemoryRouter>
            <Services/>
        </MemoryRouter>
      )
      
      const officeImg = screen.getByAltText("officeBg");
      expect(officeImg).toBeInTheDocument();
      expect(officeImg).toHaveClass("rounded-2xl object-cover w-full h-auto")
      expect(officeImg).toHaveAttribute("loading" , "lazy")
      expect(officeImg).toHaveAttribute("src" , expect.stringContaining("office1"));


      const clientImg = screen.getByAltText("Client Img");
      expect(clientImg).toBeInTheDocument();
      expect(clientImg).toHaveClass("rounded-2xl w-full h-auto")
      expect(clientImg).toHaveAttribute("loading" , "lazy")
      expect(clientImg).toHaveAttribute("src" , expect.stringContaining("clientCard"));

    //   Cards Images -->
    const itConsultancy = screen.getByAltText("IT Consultancy");
    expect(itConsultancy).toBeInTheDocument();
    expect(itConsultancy).toHaveClass("mb-4 w-36 h-36 z-20 transition-transform duration-500 ease-in-out group-hover:translate-y-[-5px]");
    expect(itConsultancy).toHaveAttribute("loading" , "lazy");
    expect(itConsultancy).toHaveAttribute("src" , expect.stringContaining("itConsultancy"));

    const cctvImg = screen.getByAltText("CCTV Surveillance");
    expect(cctvImg).toBeInTheDocument();
    expect(cctvImg).toHaveClass("mb-4 w-32 h-32 z-20 transition-transform duration-500 ease-in-out group-hover:translate-y-[-5px]");
    expect(cctvImg).toHaveAttribute("loading" , "lazy");
    expect(cctvImg).toHaveAttribute("src" , expect.stringContaining("cctv"));

    const infrastructure = screen.getByAltText("Infrastructure & Cloud");
    expect(infrastructure).toBeInTheDocument();
    expect(infrastructure).toHaveClass("w-32 h-32 z-20 transition-transform duration-500 ease-in-out group-hover:translate-y-[-5px]");
    expect(infrastructure).toHaveAttribute("loading" , "lazy");
    expect(infrastructure).toHaveAttribute("src" , expect.stringContaining("infra&cloud"));

    const cyberSecurity = screen.getByAltText("Cyber Security");
    expect(cyberSecurity).toBeInTheDocument();
    expect(cyberSecurity).toHaveClass("w-32 h-32 z-20 transition-transform duration-500 ease-in-out group-hover:translate-y-[-5px]");
    expect(cyberSecurity).toHaveAttribute("loading" , "lazy");
    expect(cyberSecurity).toHaveAttribute("src" , expect.stringContaining("cyberSecurity"));
    
    const backupSolution = screen.getByAltText("Backup Solutions");
    expect(backupSolution).toBeInTheDocument();
    expect(backupSolution).toHaveClass("w-32 h-32 z-20 transition-transform duration-500 ease-in-out group-hover:translate-y-[-5px]");
    expect(backupSolution).toHaveAttribute("loading" , "lazy");
    expect(backupSolution).toHaveAttribute("src" , expect.stringContaining("backupSollution"));

    const telephony = screen.getByAltText("Telephony");
    expect(telephony).toBeInTheDocument();
    expect(telephony).toHaveClass("w-24 h-24 mb-4 z-20 transition-transform duration-500 ease-in-out group-hover:translate-y-[-5px]");
    expect(telephony).toHaveAttribute("loading" , "lazy");
    expect(telephony).toHaveAttribute("src" , expect.stringContaining("telephony"));

    const itSupport = screen.getByAltText("IT Support");
    expect(itSupport).toBeInTheDocument();
    expect(itSupport).toHaveClass("w-32 h-32 z-20 transition-transform duration-500 ease-in-out group-hover:translate-y-[-5px]");
    expect(itSupport).toHaveAttribute("loading" , "lazy");
    expect(itSupport).toHaveAttribute("src" , expect.stringContaining("itSupport"));

    const systemMonitoring = screen.getByAltText("System Monitoring");
    expect(systemMonitoring).toBeInTheDocument();
    expect(systemMonitoring).toHaveClass("w-32 h-32 z-20 transition-transform duration-500 ease-in-out group-hover:translate-y-[-5px]");
    expect(systemMonitoring).toHaveAttribute("loading" , "lazy");
    expect(systemMonitoring).toHaveAttribute("src" , expect.stringContaining("systemMonitering"));
    
     
    })
   // Image test end
 
   
  

})