import { fireEvent, render , screen} from "@testing-library/react";
import ContactUs from "../ContactUs";
import { describe, expect, test } from "vitest";
import { MemoryRouter } from "react-router-dom";


describe("Contact Ui Testing" , ()=>{



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
       expect(nameInput).toHaveAttribute("id" , "myName")
       expect(nameInput).toHaveAttribute("type" , "text")
       

       const emailInput = screen.getByLabelText("Email Address")
       expect(emailInput).toHaveAttribute("name","email")
       expect(emailInput).toHaveAttribute("id" , "myEmail")
       expect(emailInput).toHaveAttribute("type" , "email")

       const phoneInput = screen.getByLabelText("Phone Number")
       expect(phoneInput).toHaveAttribute("name","mobile")
       expect(phoneInput).toHaveAttribute("id","myMobile")
       expect(phoneInput).toHaveAttribute("type","number")
       
       
       const messageInput = screen.getByLabelText("Message")
       expect(messageInput).toHaveAttribute("name","message")
       expect(messageInput).toHaveAttribute("id","myMessage")
      

    })
    
    test("Input onchange Testing" , ()=>{

      render(
        <MemoryRouter>
          <ContactUs/>
        </MemoryRouter>
      )
        
      

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


    test("ContactUs Image Testing" , ()=>{

      render(
        <MemoryRouter>
          <ContactUs/>
        </MemoryRouter>
      )

    const facebook = screen.getByAltText("Facebook");
    expect(facebook).toBeInTheDocument();
    expect(facebook).toHaveAttribute("src" , expect.stringContaining("facebook"));

    const instagram = screen.getByAltText("Instagram");
    expect(instagram).toBeInTheDocument();
    expect(instagram).toHaveAttribute("src" , expect.stringContaining("instagram"));

    const twitter = screen.getByAltText("Twitter");
    expect(twitter).toBeInTheDocument();
    expect(twitter).toHaveAttribute("src" , expect.stringContaining("twitter"));

    const arrow = screen.getByAltText("Arrow");
    expect(arrow).toBeInTheDocument();
    expect(arrow).toHaveAttribute("src" , expect.stringContaining("arrorw"));

    
    })



   

    
})

