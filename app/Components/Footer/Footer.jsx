
import tiktok from "@/public/tictok.png";
import inst from "@/public/inst.png";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#d0cfd7] to-[#c5d9f2] p-8 text-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="font-AvenirBlackFont text-3xl">athenify.ai</h1>
          <p className="font-AvenirRomanFont text-sm">
            Success is not final, failure is not fatal: It <br />
            is the courage to continue that counts.
          </p>
          <div className="flex gap-4 mt-4">
            <Link href={"/"}>
              <Image src={tiktok} alt="image" />
            </Link>
            <Link href={"/"}>
              <Image src={inst} alt="image" />
            </Link>
          </div>
          <div className="pt-1 md:mt-0 text-sm text-gray-500">
            <p>Copyright 2023 athenify.ai, Inc Terms and Privacy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
