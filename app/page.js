import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="font-AvenirRomanFont text-4xl">
        Welcome to My Next.js App
      </h1>
      <p className="font-AvenirBlackFont">
        This text will use the custom font defined in Tailwind config.
      </p>
    </main>
  );
}
