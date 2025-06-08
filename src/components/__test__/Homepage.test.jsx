import { expect, test } from "vitest";
import Homepage from "../Homepage";
import { render,screen } from "@testing-library/react";

import { MemoryRouter } from 'react-router-dom';

test("Testing of Homepage Image" , ()=>{

  render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    );

  const arrowIcons = screen.getAllByAltText(/Arrow/i);
  expect(arrowIcons.length).toBeGreaterThan(0); 

  

})