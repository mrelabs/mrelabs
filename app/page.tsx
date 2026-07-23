import TypingLogo from "@/components/effects/TypingLogo";
import GridBackground from "@/components/ui/GridBackground";
import GlowButton from "@/components/ui/GlowButton";


export default function Home() {

  return (

    <main
      className="
        relative
        isolate

        min-h-screen
        overflow-hidden

        bg-black
        text-white
      "
    >

      <GridBackground />


      <section
        className="
          relative
          z-10

          flex
          min-h-screen

          flex-col
          items-center
          justify-center

          px-6
          text-center
        "
      >

        <TypingLogo />


        <div
          className="
            relative
            z-20

            mt-12

            opacity-0

            animate-fade-in

            [animation-delay:1800ms]
          "
        >

          <GlowButton />

        </div>


      </section>


    </main>

  );

}