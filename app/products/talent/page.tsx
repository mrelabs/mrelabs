export default function Talent() {

  const features = [
    {
      title: "CV Analysis",
      description:
        "Automatically extract candidate insights, skills, experience, and qualifications to create clearer candidate profiles.",
    },

    {
      title: "Candidate Matching",
      description:
        "Use intelligent matching systems to identify the strongest candidates based on role requirements and experience.",
    },

    {
      title: "Workflow Automation",
      description:
        "Reduce repetitive recruitment tasks and streamline candidate management processes.",
    },

    {
      title: "Analytics",
      description:
        "Gain insights into recruitment activity, candidate pipelines, and hiring performance.",
    },
  ];


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


        {/* Hero */}


        <div
          className="
            max-w-4xl
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
            MRE Labs Product
          </p>



          <h1
            className="
              mt-5

              text-6xl

              font-bold

              tracking-tight
            "
          >
            MRE Talent
          </h1>



          <p
            className="
              mt-6

              text-2xl

              text-gray-400
            "
          >
            AI-powered talent intelligence platform.
          </p>



          <p
            className="
              mt-8

              max-w-3xl

              text-lg

              leading-relaxed

              text-gray-400
            "
          >
            Helping businesses discover, understand, and manage
            talent through intelligent systems designed to simplify
            recruitment and improve decision-making.
          </p>


        </div>



        {/* Problem */}


        <div
          className="
            mt-24

            max-w-4xl
          "
        >

          <h2
            className="
              text-3xl

              font-semibold
            "
          >
            The Problem
          </h2>


          <p
            className="
              mt-5

              text-lg

              leading-relaxed

              text-gray-400
            "
          >
            Recruitment teams spend countless hours reviewing CVs,
            managing applications, and searching for the right
            candidates. Traditional processes create unnecessary
            complexity and slow down hiring decisions.
          </p>


        </div>



        {/* Solution */}


        <div
          className="
            mt-16

            max-w-4xl
          "
        >

          <h2
            className="
              text-3xl

              font-semibold
            "
          >
            The Solution
          </h2>


          <p
            className="
              mt-5

              text-lg

              leading-relaxed

              text-gray-400
            "
          >
            MRE Talent uses intelligent technology to analyse
            candidate information, automate repetitive workflows,
            and provide businesses with deeper insights into their
            recruitment pipeline.
          </p>


        </div>



        {/* Features */}


        <div
          className="
            mt-24
          "
        >

          <h2
            className="
              text-3xl

              font-semibold
            "
          >
            Features
          </h2>



          <div
            className="
              mt-8

              grid

              gap-6

              md:grid-cols-2
            "
          >

            {features.map((feature) => (

              <div
                key={feature.title}

                className="
                  rounded-2xl

                  border
                  border-white/10

                  bg-white/[0.03]

                  p-8

                  transition

                  duration-300

                  hover:border-white/20

                  hover:bg-white/[0.05]
                "
              >

                <h3
                  className="
                    text-xl

                    font-semibold
                  "
                >
                  {feature.title}
                </h3>


                <p
                  className="
                    mt-4

                    leading-relaxed

                    text-gray-400
                  "
                >
                  {feature.description}
                </p>


              </div>

            ))}


          </div>


        </div>



        {/* CTA */}


        <div
          className="
            mt-24

            rounded-3xl

            border
            border-white/10

            bg-white/[0.03]

            p-10

            text-center
          "
        >

          <h2
            className="
              text-3xl

              font-semibold
            "
          >
            Interested in MRE Talent?
          </h2>


          <p
            className="
              mx-auto

              mt-4

              max-w-xl

              text-gray-400
            "
          >
            MRE Talent is currently being developed.
            Register your interest to be among the first to
            experience the platform.
          </p>



          <a
            href="mailto:developer@mrelabs.xyz"

            className="
              mt-8

              inline-flex

              rounded-xl

              bg-white

              px-8

              py-4

              font-semibold

              text-black

              transition

              hover:bg-gray-200
            "
          >
            Request Early Access
          </a>


        </div>



      </section>


    </main>

  );

}