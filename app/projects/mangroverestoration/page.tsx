import React from "react";

const Restoration = () => {
  return (
    <>
      <div className="[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]  text-white p-10 space-y-10">
        <div className=" ">
          <div className="flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-5">
            <img
              className="w-44 h-44 md:w-64 md:h-64 rounded-lg shadow-lg"
              src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Plantation_de_pal%C3%A9tuviers.jpg"
              alt="Mangrove Plantation"
            />
            <p className="md:text-lg">
              Mangrove restoration is vital for preserving coastal ecosystems,
              protecting shorelines, and supporting marine life. These unique
              trees act as natural barriers against storm surges, reduce coastal
              erosion, and provide habitats for diverse species. By restoring
              mangroves, we enhance biodiversity, support fisheries, and
              contribute to climate resilience by sequestering carbon.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-5">
            <p className="md:text-lg order-2 md:order-1">
              Urban greening initiatives focus on transforming cityscapes by
              increasing green spaces, planting trees, and creating sustainable
              environments. These projects improve air quality, reduce urban
              heat islands, and enhance residents' well-being. By integrating
              green spaces into urban planning, we foster healthier communities,
              promote biodiversity, and contribute to climate resilience in
              cities.
            </p>
            <img
              className="w-44 h-44 md:w-64 md:h-64 rounded-lg shadow-lg order-1 md:order-2"
              src="https://dialogue.earth/content/uploads/2022/02/Mangrove-restoration-in-Indonesia_2EG7A43-scaled-1.jpg"
              alt="Urban Greening"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-5">
            <img
              className="w-44 h-44 md:w-64 md:h-64 rounded-lg shadow-lg"
              src="https://www.u-tokyo.ac.jp/content/400174364.jpg"
              alt="Reforestation Project"
            />
            <p className="md:text-lg">
              Reforestation projects aim to restore deforested areas, enhance
              biodiversity, and combat climate change. By planting native trees,
              we restore habitats, support wildlife, and improve ecosystem
              services such as water purification and soil stabilization.
              Reforestation efforts also contribute to carbon sequestration,
              mitigating the effects of greenhouse gas emissions and fostering a
              sustainable future.
            </p>
          </div>
        </div>

        {/* supporters & payment  */}

        <div className="">
          <div className="flex flex-col md:flex-row gap-10 w-full max-w-4xl">
            <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Supporters
              </h2>
              <ul>
                <li>Roy Donated $300 to this project</li>
                <li>Roy Donated $300 to this project</li>
                <li>Roy Donated $300 to this project</li>
                <li>Roy Donated $300 to this project</li>
                <li>Roy Donated $300 to this project</li>
              </ul>
            </div>
            {/* Payments */}
            <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Payments</h2>
              {/* make a payment  */}

              <form className="max-w-md mx-auto space-y-4 p-6 bg-white shadow-md rounded-lg">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    // rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>

                <div>
                  <label
                    htmlFor="amount"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Amount
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                      $
                    </span>
                    <input
                      type="number"
                      id="amount"
                      name="amount"
                      className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="0.00"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Submit Payment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Restoration;
