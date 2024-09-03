import payment from '@/public/payment.png'
import tiktok from "@/public/tictok.png";
import inst from "@/public/inst.png";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-footerBg bg-cover bg-no-repeat px-8 pt-8 text-black">
      <div className="content-wrapper px-2 md:px-[54px] flex flex-col md:flex-row justify-between items-start gap-4">
        <div className="flex flex-col gap-2 w-full">
          <h1 className="font-AvenirBlackFont text-3xl md:text-[39px]">athenify.ai</h1>
          <p className="font-AvenirBlackFont text-sm md:text-lg">
            Success is not final, failure is not fatal: It <br />
            is the courage to continue that counts.
          </p>
          <div className="flex gap-4 mt-4 mb-2">
            <Link href={"/"}>
              <Image src={tiktok} alt="image" />
            </Link>
            <Link href={"/"}>
              <Image src={inst} alt="image" />
            </Link>
          </div>
          <div className="flex flex-col md:flex-row gap-2 items-center justify-between border-t border-white py-2 w-full">
            <p className='text-base md:text-[22px] font-AvenirRomanFont'>Copyright 2023 athenify.ai, Inc Terms and Privacy</p>
            <Image src={payment} alt='payment image' />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;