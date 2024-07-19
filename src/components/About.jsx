import React from 'react'

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mb-10"
    >
      <h1 className="text-3xl font-bold mb-5">About Me</h1>
      <p className="text-sm md:text-md text-justify">
        Hello, I'm Captain, a passionate Web developer with a keen eye for MERN
        Stack. With a background in IT, I strive to create impactful and
        visually stunning Software solutions that leave a lasting impression.
      </p>
      <br />
      <h1 className="text-green-700 font-semibold text-xl">Education</h1>
      <span>
        [Dgree/Certification], [Institution], [Year] [Dgree/Certification],
        [Institution], [Year] [Relavent Course], [Platform/Institution], [Year]
      </span>
      <br />
      <br />
      <h1 className="text-green-700 font-semibold text-xl">
        Skills & Expertise
      </h1>
      <span>
        [Dgree/Certification], [Institution], [Year] [Dgree/Certification],
        [Institution], [Year] [Relavent Course], [Platform/Institution], [Year]
      </span>
      <br />
      <br />
      <h1 className="text-green-700 font-semibold text-xl">
        Certification & Training
      </h1>
      <span>
        [Dgree/Certification], [Institution], [Year] [Dgree/Certification],
        [Institution], [Year] [Relavent Course], [Platform/Institution], [Year]
      </span>
      <br />
      <br />
      <hr />
    </div>
  );
}

export default About