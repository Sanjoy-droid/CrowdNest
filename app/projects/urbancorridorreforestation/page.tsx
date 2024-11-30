import React from "react";

const Restoration = () => {
  return (
    <>
      <div className="[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]  text-white p-10 space-y-10">
        <div className=" ">
          <div className="flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-5">
            <p className="md:text-lg">
              Urban corridor reforestation plays a crucial role in revitalizing
              urban environments, improving air quality, and enhancing the
              well-being of city dwellers. By planting trees along urban
              corridors, we create green buffers that mitigate pollution, reduce
              urban heat, and provide shade for pedestrians. These green spaces
              foster biodiversity, offer habitats for urban wildlife, and
              enhance aesthetic appeal. Additionally, urban corridor
              reforestation supports climate adaptation by absorbing carbon,
              managing stormwater runoff, and reducing the urban heat island
              effect, making cities more sustainable and livable.
            </p>
            <img
              className="w-44 h-44 md:w-64 md:h-64 rounded-lg shadow-lg"
              src="https://plus.unsplash.com/premium_photo-1681140560624-dc6ad807f7bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXJiYW4lMjB0cmVlJTIwcGxhbnRpbmd8ZW58MHx8MHx8fDA%3D"
              alt="Mangrove Plantation"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center mt-6 space-x-5">
            <img
              className="w-44 h-44 md:w-64 md:h-64 rounded-lg shadow-lg "
              src="https://plus.unsplash.com/premium_photo-1658506799688-b5a1f54e3c7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dHJlZSUyMHBsYW50aW5nfGVufDB8fDB8fHww"
              alt="Urban Greening"
            />
            <p className="md:text-lg order-2 md:order-1">
              Urban greening initiatives focus on transforming cityscapes by
              increasing green spaces, planting trees, and creating sustainable
              environments. These projects improve air quality, reduce urban
              heat islands, and enhance residents' well-being. By integrating
              green spaces into urban planning, we foster healthier communities,
              promote biodiversity, and contribute to climate resilience in
              cities.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center mt-8 space-y-5 md:space-y-0 md:space-x-5">
            <p className="md:text-lg">
              Urban corridor reforestation focuses on restoring green spaces
              along urban transportation networks, such as roads, railways, and
              waterways. By planting native trees and vegetation in these
              corridors, we create ecological linkages that enhance biodiversity
              and provide habitats for urban wildlife. These efforts improve air
              quality, reduce noise pollution, and mitigate the urban heat
              island effect. Additionally, urban corridor reforestations
              contribute to carbon sequestration and stormwater management,
              fostering sustainable urban environments and promoting the
              well-being of city residents.
            </p>
            <img
              className="w-44 h-44 md:w-64 md:h-64 rounded-lg shadow-lg"
              src="https://img.freepik.com/free-photo/cute-little-boys-planting-tree-park_1157-37420.jpg?t=st=1732936327~exp=1732939927~hmac=9ececdf4e01233108d32a0d7360ef04f4b4face0b229ea77818a3fdc6f6539e5&w=740"
              alt="Reforestation Project"
            />
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
