import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import IndividualEmplyoerNavBar from "./NavBarIndividualEmployer";
import Swiper from 'swiper';
import Footer from "../LandingPageComponents/Footer";
import './EmployerIndividualProfileStyle.css'

function EmployerIndividualProfile() {
  const { id } = useParams();
  const [employer, setEmplyoer] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`http://localhost:5000/employer/me`, {
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEmplyoer(data);
      });
  }, []);

  // var swiper = new Swiper('.blog-slider', {
  //   spaceBetween: 30,
  //   effect: 'fade',
  //   loop: true,
  //   mousewheel: {
  //     invert: false,
  //   },
  //   // autoHeight: true,
  //   pagination: {
  //     el: '.blog-slider__pagination',
  //     clickable: true,
  //   }
  // });

  return (
    <div>
      <div>
        <IndividualEmplyoerNavBar />
      </div>

      <div class="blog-slider">
        <div class="blog-slider__wrp swiper-wrapper">
          <div class="blog-slider__item swiper-slide">
            <div class="blog-slider__img">
              <img
                src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg"
                alt=""
              />
            </div>
            <div class="blog-slider__content">
              <span class="blog-slider__code">26 December 2019</span>
              <div class="blog-slider__title">Lorem Ipsum Dolor</div>
              <div class="blog-slider__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae voluptate repellendus magni illo ea animi?{" "}
              </div>
              <a href="#" class="blog-slider__button">
                READ MORE
              </a>
            </div>
          </div>
          <div class="blog-slider__item swiper-slide">
            <div class="blog-slider__img">
              <img
                src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759871/jason-leung-798979-unsplash.jpg"
                alt=""
              />
            </div>
            <div class="blog-slider__content">
              <span class="blog-slider__code">26 December 2019</span>
              <div class="blog-slider__title">Lorem Ipsum Dolor2</div>
              <div class="blog-slider__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae voluptate repellendus magni illo ea animi?
              </div>
              <a href="#" class="blog-slider__button">
                READ MORE
              </a>
            </div>
          </div>

          <div class="blog-slider__item swiper-slide">
            <div class="blog-slider__img">
              <img
                src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759871/alessandro-capuzzi-799180-unsplash.jpg"
                alt=""
              />
            </div>
            <div class="blog-slider__content">
              <span class="blog-slider__code">26 December 2019</span>
              <div class="blog-slider__title">Lorem Ipsum Dolor</div>
              <div class="blog-slider__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae voluptate repellendus magni illo ea animi?
              </div>
              <a href="#" class="blog-slider__button">
                READ MORE
              </a>
            </div>
          </div>
        </div>
        <div class="blog-slider__pagination"></div>
      </div>

      {/* <div className="col-md-8">
        <div className="card mb-3" style={rowDetailsStyle}>
          <div className="card-body">
            <div className="row"></div>

            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Employer Name</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {employer && employer.employerName}
              </div>
            </div>

            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Website</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {employer && employer.website}
              </div>
            </div>
            <hr />

            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Location</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {employer && employer.location}
              </div>
            </div>
            <hr />

            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Field Of Business</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {employer && employer.fieldOfBusiness}
              </div>
            </div>
            <hr />

            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0"> Email</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {employer && employer.email}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0"> Phone No.</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {employer && employer.phoneNo}
              </div>
            </div>
          </div>
        </div>
      </div>  */}

      <div>
        <Footer />
      </div>
    </div>
  );
}

const rowDetailsStyle = {
  fontSize: 19,
  fontFamily: "Lucidatypewriter, monospace",
  borderColor: "gray",
  height: "95%",
};
export default EmployerIndividualProfile;
