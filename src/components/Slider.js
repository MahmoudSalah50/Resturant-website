import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export default function Slider() {
  return (
    <MDBCarousel showControls interval={3000} className="mt-2 bg-light">
      <MDBCarouselItem itemId={1} interval={1000}>
        <img
          src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="d-block immg w-100 carousel-image"
          alt="..."
        />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img
          src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="d-block immg w-100 carousel-image"
          alt="..."
        />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img
          src="https://images.pexels.com/photos/687824/pexels-photo-687824.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="d-block immg w-100 carousel-image"
          alt="..."
        />
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
