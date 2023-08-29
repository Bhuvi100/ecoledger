import React from "react";

const About = () => {
  return (
    <div>
      <section class="bg-white">
        <div class="gap-16 items-center px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:px-6">
          <div class="font-light text-gray-500 sm:text-lg ">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
              What is Ecoledger ?
            </h2>
            <p class="mb-4">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick, but big
              enough to deliver the scope you want at the pace you need. Small
              enough to be simple and quick, but big enough to deliver the scope
              you want at the pace you need.
            </p>
            <p>
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </p>
          </div>
          <div class=" gap-4 mt-8">
            <img
              class="w-full rounded-lg"
              src="https://media.istockphoto.com/id/1371073807/vector/carbon-trading-concept-balance-of-co2-emission-with-reforestation.jpg?s=612x612&w=0&k=20&c=Zy8-j4ACqYrDdCWukMdAx7cN6b4fmV20wjIa-EBmklw="
              alt="office content 1"
            />
            {/* <img
              class="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            /> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
