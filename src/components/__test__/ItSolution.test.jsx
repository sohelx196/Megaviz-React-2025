import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ITConsultancy from "../it_Solution/ITConsultancy";


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
       expect(mainImg).toHaveAttribute("loading" , "lazy");
       expect(mainImg).toHaveClass("absolute bottom-5 right-[-60px] sm:right-[-70px] md:right-[-70px] lg:right-[-90px] w-[200px] sm:w-[200px] md:w-[240px] lg:w-[260px] h-auto object-contain z-0 translate-y-12 md:translate-y-12 lg:translate-y-16");
       expect(mainImg).toHaveAttribute("src" , expect.stringContaining("toyMen"));

       const serviceImg = screen.getByAltText("ServiceImg");
       expect(serviceImg).toBeInTheDocument();
       expect(serviceImg).toHaveClass("absolute bottom-5 right-[-30px] sm:right-[-70px] md:right-[-70px] lg:right-[-90px] w-[220px] sm:w-[200px] md:w-[290px] lg:w-[330px] h-auto object-contain z-0 translate-y-6 md:translate-y-12 lg:translate-y-16")
       expect(serviceImg).toHaveAttribute("loading" , "lazy");
       expect(serviceImg).toHaveAttribute("src" , expect.stringContaining("twoWomen"));

       

    })


})