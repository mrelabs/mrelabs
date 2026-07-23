import Link from "next/link";


export default function GlowButton() {

  return (

    <Link
      href="/products"

      className="
        group

        relative
        z-30

        inline-flex

        items-center
        justify-center

        overflow-hidden

        rounded-xl

        border
        border-white/20

        bg-white

        px-10
        py-4

        font-medium
        text-black

        shadow-[0_0_40px_rgba(255,255,255,0.15)]

        transition-all
        duration-500

        hover:-translate-y-1

        hover:shadow-[0_0_60px_rgba(255,255,255,0.3)]
      "
    >

      <span
        className="
          absolute
          inset-0

          -translate-x-full

          bg-gradient-to-r
          from-transparent
          via-white
          to-transparent

          opacity-50

          transition-transform
          duration-700

          group-hover:translate-x-full
        "
      />


      <span
        className="
          relative
          z-10
        "
      >
        Explore Solutions
      </span>


    </Link>

  );

}