import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";
import Card from "./Card.js";

// Card Component------------------------------

it("renders Card Component", () => {
  render(<Card />);
});

it("matches snapshot of Card", () => {
  const { asFragment } = render(<Card />);
  expect(asFragment()).toMatchSnapshot;
});
// Carousel Component---------------------------
it("renders Carousel", () => {
  render(<Carousel />);
});

it("matches snapshot of Carousel", () => {
  const { asFragment } = render(<Carousel />);
  console.log(asFragment().cloneNode(true).innerHTML);

  expect(asFragment()).toMatchSnapshot;
});

// RIGHT ARROW --------------------------------------------->
it("works when you click on the right arrow", function () {
  const { container } = render(
    <Carousel photos={TEST_IMAGES} title="images for testing" />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});
//------------- HIDE RIGHT ARROW -------------------------------------
it("Hide right arrow when on last image", () => {
  const { container } = render(
    <Carousel photos={TEST_IMAGES} title="images for testing" />
  );
  const rightArrow = container.querySelector(".bi-arrow-right-circle");

  // expect first image to show with right arrow visable
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();

  expect(rightArrow).toBeInTheDocument();

  // right click to second image and right arrow still visable

  fireEvent.click(rightArrow);

  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();

  expect(rightArrow).toBeInTheDocument();

  // right click to third/final image right arrow not visable
  fireEvent.click(rightArrow);

  expect(
    container.querySelector('img[alt="testing image 3"]')
  ).toBeInTheDocument();

  expect(rightArrow).not.toBeInTheDocument();
});
// LEFT ARROW ------------------------------------------------>
it("works when you clock on the left arrow", () => {
  const { container } = render(
    <Carousel photos={TEST_IMAGES} title="images for testing" />
  );

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel (click right arrow)
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();

  // move backwards in the carousel (click left arrow)
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
});

it("Hide left arrow when on first image", () => {
  const { container } = render(
    <Carousel photos={TEST_IMAGES} title="images for testing" />
  );
  // First image to show
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();

  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  expect(leftArrow).not.toBeInTheDocument();
});
