import { render ,screen} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe , expect , expectTypeOf, test } from "vitest";
import AboutUs from '../AboutUs'



describe("About Page Testing" , ()=>{

  test("All Images Test " , ()=>{

    render(
        <MemoryRouter>
            <AboutUs/>
        </MemoryRouter>
    )
     
    // Main Image Test
    let studentImgMain = screen.getByAltText("Team Meeting Desktop")
    expect(studentImgMain).toBeInTheDocument();
    expect(studentImgMain).toHaveAttribute("loading" ,  "lazy")
    expect(studentImgMain).toHaveClass("rounded-2xl w-full max-w-3xl object-cover z-10")
    expect(studentImgMain).toHaveAttribute("src" , expect.stringContaining("student"))
    

    // Arrrow Image test
    const arrowIcon = screen.getAllByAltText("Arrow");
    arrowIcon.forEach(icon=>{
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveClass("w-3 h-3 transition-transform duration-300 group-hover:rotate-45")
      expect(icon).toHaveAttribute("loading" , "lazy");
      expect(icon).toHaveAttribute("src" , expect.stringContaining("arrorw"))
    })

    // what we do images
    const appDevImg = screen.getByAltText("Mobile app Development")
    expect(appDevImg).toBeInTheDocument();
    expect(appDevImg).toHaveClass("w-full h-full object-cover")
    expect(appDevImg).toHaveAttribute("loading" , "lazy");
    expect(appDevImg).toHaveAttribute("src" , expect.stringContaining("mobileAppDev"))
    
    const webDesign = screen.getByAltText("Website Design")
    expect(webDesign).toBeInTheDocument();
    expect(webDesign).toHaveClass("w-full h-full object-cover")
    expect(webDesign).toHaveAttribute("loading" , "lazy");
    expect(webDesign).toHaveAttribute("src" , expect.stringContaining("websiteDesign"))
    
    const webDev = screen.getByAltText("Website Development")
    expect(webDev).toBeInTheDocument();
    expect(webDev).toHaveClass("w-full h-full object-cover")
    expect(webDev).toHaveAttribute("loading" , "lazy");
    expect(webDev).toHaveAttribute("src" , expect.stringContaining("websiteDevelopment"))
    
    
    // AboutUs Images Testing
    const projectFinish = screen.getByAltText("Project Finish")
    expect(projectFinish).toBeInTheDocument();
    expect(projectFinish).toHaveClass("w-full h-full object-cover opacity-3 rotate-[6deg] scale-110")
    expect(projectFinish).toHaveAttribute("loading" , "lazy")
    expect(projectFinish).toHaveAttribute("src" , expect.stringContaining("projectFinish1"))

    const howWeWork = screen.getByAltText("How We Work")
    expect(howWeWork).toBeInTheDocument();
    expect(howWeWork).toHaveClass("w-full h-full object-cover block")
    expect(howWeWork).toHaveAttribute("loading" , "lazy")
    expect(howWeWork).toHaveAttribute("src" , expect.stringContaining("howWeWork"))

    const playIcon = screen.getByAltText("Play Icon")
    expect(playIcon).toBeInTheDocument();
    expect(playIcon).toHaveClass("absolute bottom-1 right-1 sm:bottom-2 sm:right-2 md:bottom-3 md:right-3 lg:-bottom-1 lg:-right-2 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 object-contain z-10")
    expect(playIcon).toHaveAttribute("loading" , "lazy")
    expect(playIcon).toHaveAttribute("src" , expect.stringContaining("playIcon"))

    const cardIcon = screen.getByAltText("Card Icon")
    expect(cardIcon).toBeInTheDocument();
    expect(cardIcon).toHaveClass("h-8 sm:h-10 md:h-12 object-contain")
    expect(cardIcon).toHaveAttribute("loading" , "lazy")
    expect(cardIcon).toHaveAttribute("src" , expect.stringContaining("cardImg"))
    
    
    // Vision mission card
    const vision = screen.getByAltText("Vision")
    expect(vision).toBeInTheDocument();
    expect(vision).toHaveClass("w-full max-w-[320px] sm:max-w-[360px] object-contain")
    expect(vision).toHaveAttribute("loading" , "lazy")
    expect(vision).toHaveAttribute("src" , expect.stringContaining("ourVision"))

    const mission = screen.getByAltText("Mission")
    expect(mission).toBeInTheDocument();
    expect(mission).toHaveClass("w-full max-w-[320px] sm:max-w-[360px] object-contain")
    expect(mission).toHaveAttribute("loading" , "lazy")
    expect(mission).toHaveAttribute("src" , expect.stringContaining("ourMission"))
    
    
    const starIcon = screen.getByAltText("star icon");
    expect(starIcon).toBeInTheDocument();
    expect(starIcon).toHaveClass("w-4 h-4")
    expect(starIcon).toHaveAttribute("src" , expect.stringContaining("newStar"))



     
  })





})