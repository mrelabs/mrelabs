import Link from "next/link";


const futureProducts = [
  {
    number: "02",
    name: "Coming Soon",
    description:
      "Future intelligent systems designed to simplify workflows and solve complex challenges.",
  },

  {
    number: "03",
    name: "Coming Soon",
    description:
      "New platforms focused on automation, intelligence, and improving how people work.",
  },

  {
    number: "04",
    name: "Coming Soon",
    description:
      "Additional MRE Labs solutions currently being explored and developed.",
  },
];


export default function Products() {

  return (

    <main
      className="
        min-h-screen
        px-6
        text-white
      "
    >


      <section
        className="
          mx-auto
          max-w-6xl

          py-24
        "
      >


        <p
          className="
            text-sm
            uppercase
            tracking-[0.3em]

            text-gray-500
          "
        >
          Products
        </p>


        <h1
          className="
            mt-5

            max-w-4xl

            text-5xl
            font-bold
            tracking-tight

            sm:text-6xl
          "
        >
          Intelligent software solutions built by MRE Labs.
        </h1>


        <p
          className="
            mt-6

            max-w-3xl

            text-xl
            leading-relaxed

            text-gray-400
          "
        >
          Intelligent systems designed to reduce complexity,
          empower people, and transform the way businesses operate.
        </p>



        {/* Featured Product */}


        <div
          className="
            group

            mt-16

            rounded-3xl

            border
            border-white/10

            bg-white/[0.03]

            p-10

            transition

            duration-500

            hover:border-white/20

            hover:bg-white/[0.05]

            md:p-14
          "
        >


          <div
            className="
              flex

              flex-col

              justify-between

              gap-10

              md:flex-row
              md:items-end
            "
          >


            <div
              className="
                max-w-2xl
              "
            >


              <p
                className="
                  text-sm

                  uppercase

                  tracking-[0.3em]

                  text-gray-500
                "
              >
                Product 01
              </p>



              <h2
                className="
                  mt-5

                  text-5xl

                  font-semibold

                  tracking-tight
                "
              >
                MRE Talent
              </h2>



              <p
                className="
                  mt-6

                  text-lg

                  leading-relaxed

                  text-gray-400
                "
              >
                An AI-powered talent intelligence platform helping
                businesses manage candidates, automate recruitment
                processes, and make smarter hiring decisions.
              </p>


            </div>



            <Link
              href="/products/talent"

              className="
                inline-flex

                items-center
                justify-center

                rounded-xl

                bg-white

                px-7
                py-4

                font-semibold

                text-black

                transition

                hover:bg-gray-200
              "
            >
              Explore MRE Talent
            </Link>


          </div>


        </div>



        {/* Future Products */}


        <div
          className="
            mt-8

            grid

            gap-6

            sm:grid-cols-2

            lg:grid-cols-3
          "
        >


          {futureProducts.map((product) => (

            <div
              key={product.number}

              className="
                rounded-2xl

                border
                border-white/10

                bg-white/[0.02]

                p-8

                transition

                duration-300

                hover:border-white/20

                hover:bg-white/[0.04]
              "
            >


              <p
                className="
                  text-xs

                  uppercase

                  tracking-[0.3em]

                  text-gray-500
                "
              >
                Product {product.number}
              </p>



              <h3
                className="
                  mt-5

                  text-2xl

                  font-semibold
                "
              >
                {product.name}
              </h3>



              <p
                className="
                  mt-4

                  leading-relaxed

                  text-gray-500
                "
              >
                {product.description}
              </p>



              <p
                className="
                  mt-8

                  text-xs

                  uppercase

                  tracking-widest

                  text-gray-600
                "
              >
                In Development
              </p>


            </div>

          ))}


        </div>


      </section>


    </main>

  );

}