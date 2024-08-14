import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8 p-10 rounded-xl">
        <h2 className="text-center text-3xl font-extrabold text-white">
          About CrowdNest
        </h2>
        <p className="text-white">
          Welcome to CrowdNest, your dedicated platform for crowdfunding tree
          planting projects. Our mission is to make the world greener, one tree
          at a time. We believe in the power of community and the impact that
          collective efforts can have on our environment.
        </p>
        <h3 className="text-2xl font-bold text-white mt-6">Our Mission</h3>
        <p className="text-white">
          At CrowdNest, we aim to combat deforestation and promote reforestation
          by connecting passionate individuals and organizations with projects
          that need their support. Whether you're an environmentalist, a
          community leader, or someone who simply cares about the planet,
          CrowdNest provides a platform for you to contribute to meaningful
          environmental projects.
        </p>
        <h3 className="text-2xl font-bold text-white mt-6">How It Works</h3>
        <p className="text-white">
          Our platform allows project creators to submit their tree planting
          initiatives, detailing their goals, the number of trees they plan to
          plant, and the funding required. Supporters can browse these projects,
          contribute funds, and track the progress of the initiatives they
          support. Transparency and accountability are at the core of our
          operations.
        </p>
        <h3 className="text-2xl font-bold text-white mt-6">Get Involved</h3>
        <p className="text-white">
          Joining the CrowdNest community is easy. Sign up as a supporter to
          start funding projects, or submit your own project to get the backing
          you need. Together, we can make a significant impact on the
          environment and leave a lasting legacy for future generations.
        </p>
        <h3 className="text-2xl font-bold text-white mt-6">Contact Us</h3>
        <p className="text-white">
          Have questions or need more information? Feel free to reach out to us
          at{" "}
          <a
            href="mailto:support@crowd-nest.com"
            className="text-blue-500 hover:underline"
          >
            support@crowd-nest.com
          </a>
          . We're here to help and support you in making the world a greener
          place.
        </p>
      </div>
    </div>
  );
};

export default About;
