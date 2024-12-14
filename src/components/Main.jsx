import React from "react";

const Main = () => {
  const details = [
    {
      id: 0,
      image: "../public/img1.jpeg",
      name: "Luxury 3-Bedroom Apartment in Downtown",
      bedrooms: "3",
      bathrooms: "2",
      parking: "2-car garage",
      location: "123 Main St, Downtown",
      neighbourhood: "Downtown Central",
      amenities: "Gym, Park, Restaurants",
    },
    {
      id: 1,
      image: "../public/img1.jpeg",
      name: "Luxury 3-Bedroom Apartment in Downtown",
      bedrooms: "3",
      bathrooms: "2",
      parking: "2-car garage",
      location: "123 Main St, Downtown",
      neighbourhood: "Downtown Central",
      amenities: "Gym, Park, Restaurants",
    },
  ];
  const fullDetails = details.map((detail) => (
    <div className="border-2 m-2 border-gray-500 mr-[990px] rounded-xl ">
      <section className="m-3 flex  h-[400px]  w-[400px] ">
        <img className="rounded-md" src={detail.image} alt="" />
      </section>

      <section className="m-3 text-black ">
        <ul className="list-disc m-3">
          <u>
            <li>{detail.name}</li>
          </u>

          <p>
            <strong>Bedrooms:</strong> {detail.bedrooms}
          </p>
          <p>
            <strong>Bathrooms:</strong>
            {detail.bathrooms}
          </p>

          <p>
            <strong>Parking:</strong>
            {detail.parking}
          </p>
          <p>
            <strong>Location:</strong> {detail.location}
          </p>
          <p>
            <strong>Neighborhood:</strong>
            {detail.neighbourhood}
          </p>
          <p>
            <strong>Amenities:</strong>
            {detail.amenities}
          </p>
        </ul>
      </section>
    </div>
  ));

  return (
    <main>
      <section className="h-[400px] rounded-2xl mx-40 mt-3 bg-blue-300"></section>

      {fullDetails}
    </main>
  );
};

export default Main;
