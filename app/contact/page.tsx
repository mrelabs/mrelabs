export default function Contact() {

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
          flex
          min-h-screen
          max-w-4xl

          flex-col
          justify-center
        "
      >


        <h1
          className="
            text-5xl
            font-semibold
          "
        >
          Contact
        </h1>


        <p
          className="
            mt-8

            text-lg
            text-zinc-400
          "
        >
          Interested in working with MRE Labs?
          Get in touch.
        </p>


        <a
          href="mailto:developer@mrelabs.xyz"
          className="
            mt-8

            text-lg
            font-medium

            text-white

            transition-colors
            duration-300

            hover:text-zinc-300
          "
        >
          developer@mrelabs.xyz
        </a>


        <p
          className="
            mt-10

            text-sm
            text-zinc-500
          "
        >
          Support enquiries:
        </p>


        <a
          href="mailto:support@mrelabs.xyz"
          className="
            mt-2

            text-sm

            text-zinc-400

            transition-colors
            duration-300

            hover:text-zinc-300
          "
        >
          support@mrelabs.xyz
        </a>


      </section>


    </main>

  );

}