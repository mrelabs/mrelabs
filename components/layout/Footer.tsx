import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6">

          <p className="text-sm text-zinc-500">
            Engineering intelligent systems.
          </p>

          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} MRE Labs. All rights reserved.
          </p>

        </div>
      </Container>
    </footer>
  );
}