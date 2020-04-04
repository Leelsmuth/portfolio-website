import React from 'react'
import biologo from '../images/about_image.png'
import biologo1 from '../images/about_shape.png'


function About() {
  return (
    <section id="about">

      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="about-img">
              <img className="shape" src={biologo1} alt="" />

              <img className="man" src={biologo} alt="" />

            </div>
          </div>
          <div className="col-md-7 about-right">

            <h2 className="color-3"><b>About Me</b>
            </h2>
            <p className="p-first text-white">If you're just curious about my story, you're in the right spot</p>

            <p className="p-first text-white">
              In high school, I was that kid that seemed to never be paying attention. Seemingly in my own world of music and sports. I always felt in a way that doing things the conventional way was limiting, not letting me express my creativity to its fullest potentials. </p>
            <p className="text-white">
              When I started college I originally had the idea of going into animation. I still carried that idea at the back of my mind that I needed to prove myself. To let people know I can do anything I set my mind to. So I decided to study Engineering, like understanding Calculus and Quantum Mechanics made me Super-Human. After building my first website with some few Youtube tutorials on Wordpress, and getting instant gratification of praise from others, I was hooked. The internet was my outlet. A new way to show and share my passions. I eventually left Word Design in pursuit of a steady income and I got into Banking, working hard to make sure all my Customers had value for their money. I honed skills in Customer Service and Leadership. After 4yrs in Banking, I decided to go back to my first Love (well, more second or third love) and enrolled in a Full Stack Web Development Program with Lambda School.</p>

            <p className="text-white">I do the work I do now because I love it. I like the industry. I like the people I meet. I embrace the nerd. I like to make the web a better place. Hopefully we cross paths in the real world someday and we can make it a better place together.</p>

            <h3 className="color-3 social-link-text">

              <button className="btn btn-danger"><a href="mailto:femianjorin@rocketmail.com">Hire Me</a></button>
            </h3>

            <ul className="about-link">
              <li><a href="https://www.linkedin.com/in/oluwafemi-anjorin/" rel='noopener noreferrer' target='_blank'><i className="fa fa-linkedin-square"></i></a></li>

              <li><a href="https://github.com/Leelsmuth" rel='noopener noreferrer' target='_blank'><i className="fa fa-github-square"></i></a></li>

              <li><a href="https://twitter.com/femianjorin11" rel='noopener noreferrer' target='_blank'><i className="fa fa-twitter-square"></i></a></li>

            </ul>


          </div>
        </div>
      </div>

    </section>
  )
}

export default About