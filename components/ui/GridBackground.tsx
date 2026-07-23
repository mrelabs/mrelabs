export default function GridBackground() {

  return (

    <div
      className="
        pointer-events-none

        absolute
        inset-0

        z-0

        overflow-hidden
      "
    >

      <div
        className="
          absolute
          inset-0

          bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]

          bg-[size:80px_80px]

          opacity-40
        "
      />


      <div
        className="
          absolute

          left-1/2
          top-1/2

          h-[600px]
          w-[600px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-white/[0.06]

          blur-[120px]
        "
      />


      <div
        className="
          absolute

          left-1/2
          top-0

          h-[400px]
          w-[800px]

          -translate-x-1/2

          rounded-full

          bg-zinc-300/[0.05]

          blur-[100px]
        "
      />


      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,transparent_20%,black_85%)]
        "
      />


    </div>

  );

}