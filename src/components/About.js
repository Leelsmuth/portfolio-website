import React from 'react'
import biologo from '../images/femi.jpeg'


function About() {
  return (
    <section id="container-about" className="container-about">
      <h1>About Me</h1>

      <img src={biologo} width="230" height="280" alt="abtimg" />
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    </p>

    </section>
  )
}

export default About