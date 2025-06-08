import { render , screen} from "@testing-library/react";
import ContactUs from "../ContactUs";
import { describe, expect, test } from "vitest";
import { MemoryRouter } from "react-router-dom";


describe("Contact Page Testing" , ()=>{



    test("Testing input fields" , ()=>{
          
        render(
          <MemoryRouter>
            <ContactUs />
          </MemoryRouter>
        );
        
      //  Check input field are present
       let checkInput = screen.getAllByRole("textbox")
       expect(checkInput.length).toBeGreaterThan(0);


      // we checking the name attribute here
       const nameInput =  screen.getByLabelText("Your Name");
       expect(nameInput).toHaveAttribute("name" , "name")

       const emailInput = screen.getByLabelText("Email Address")
       expect(emailInput).toHaveAttribute("name","email")

       const phoneInput = screen.getByLabelText("Phone Number")
       expect(phoneInput).toHaveAttribute("name","mobile")
       
       const messageInput = screen.getByLabelText("Message")
       expect(messageInput).toHaveAttribute("name","message")

      
       

       

    })
    
    
    
    







    test("Map testing" , ()=>{
        
        render(
          <MemoryRouter>
            <ContactUs />
          </MemoryRouter>
        );
        
        const mapView = screen.getByTitle(/Dubai Tower Location/i)
        expect(mapView).toBeInTheDocument()
        expect(mapView).toHaveAttribute("src" , expect.stringContaining("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3077.206379021464!2d55.30488877455338!3d25.267786328839456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43e798a5737f%3A0xc9745423c81ccd2d!2sDubai%20Tower!5e0!3m2!1sen!2sin!4v1747977945239!5m2!1sen!2sin"))
        expect(mapView).toHaveClass("w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg shadow-md")
        

    })




    
})

