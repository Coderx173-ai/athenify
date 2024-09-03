import Image from 'next/image';
import viewerImg from '@/public/about.png';

const ViewersSection = () => {
  return (
    <div className="content-wrapper px-2 md:px-[54px] pb-16 mt-20">
      <div className="flex flex-col md:flex-row w-full items-center gap-20">
        {/* 2022 Viewers Data */}
        <div className="text-center text-white space-y-4 w-full">
          <h2 className="text-[40px] font-semibold">2022</h2>
          <div className="space-y-10 text-start">
            <div className='bg-white/30 text-white rounded-lg p-4'>
              <p className="text-[30px]">Total viewers</p>
              <p className="text-[50px] font-bold">245M</p>
            </div>
            <div className='bg-white/30 text-white rounded-lg p-4'>
              <p className="text-[30px]">New viewers</p>
              <p className="text-[50px] font-bold">160M</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="rounded-xl w-full">
          <Image src={viewerImg} alt="Studio Setup" className='max-w-[313px] max-h-[425px] h-full w-full mx-auto rounded-lg' />
        </div>

        {/* 2024 Viewers Data */}
        <div className="text-center text-white space-y-4 w-full">
          <h2 className="text-[40px] font-semibold">2024</h2>
          <div className="space-y-10 text-start">
            <div className='bg-white/30 text-white rounded-lg p-4'>
              <p className="text-[30px]">Total viewers</p>
              <p className="text-[50px] font-bold">2.9B</p>
            </div>
            <div className='bg-white/30 text-white rounded-lg p-4'>
              <p className="text-[30px]">New viewers</p>
              <p className="text-[50px] font-bold">2.7B</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewersSection;
