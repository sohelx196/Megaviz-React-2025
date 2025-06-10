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
      
  })




})