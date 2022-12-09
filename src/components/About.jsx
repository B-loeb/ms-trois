import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Habitant morbi tristique senectus et netus et. Amet volutpat consequat mauris nunc congue nisi vitae. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Turpis massa tincidunt dui ut ornare lectus sit. Enim tortor at auctor urna nunc id cursus. Eget magna fermentum iaculis eu non diam. Magna sit amet purus gravida quis blandit. Quis lectus nulla at volutpat diam ut venenatis tellus in. At augue eget arcu dictum varius. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Neque egestas congue quisque egestas diam in. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src="/assets/images/img11.jpg" alt="Drone Equiptment"
            height="430px" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
