import Image from 'next/image';
import {
  FiBriefcase,
  FiCalendar,
  FiMail,
  FiMapPin,
  FiPhoneCall,
} from 'react-icons/fi';
import Avatar from '../../components/common/Avatar';
import SocialGroup from '../../components/SocialGroup';
import personalImage from '../../public/images/an_2.jpg';

const AboutMe = () => {
  return (
    <div>
      <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover bg-[url('/images/bg-sky.jpg')]">
        <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto lg:my-0 py-16 lg:py-0">
          <div
            id="profile"
            className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-[#f5f3f3] opacity-75 mx-6 lg:mx-0"
          >
            <div className="p-4 md:p-12 text-center lg:text-left">
              <div className="block lg:hidden mx-auto ">
                <Avatar src={personalImage} size={192} objectFit="cover" />
              </div>

              <h1 className="text-3xl font-bold pt-8 lg:pt-0">
                Lê Võ Hoàng An
              </h1>
              <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
              <p className="pt-2 text-gray-600 text-base lg:text-base flex items-center justify-center lg:justify-start">
                <FiBriefcase className="text-primary mr-2 text-xl" />
                Major: English Language
              </p>
              <p className="pt-2 text-gray-600 text-base lg:text-base flex items-center justify-center lg:justify-start">
                <FiCalendar className="text-primary mr-2 text-xl" />
                2001
              </p>
              <p className="pt-2 text-gray-600 text-base lg:text-base flex items-center justify-center lg:justify-start">
                <FiMapPin className="text-primary mr-2 text-xl" />
                Quang Tri
              </p>
              <p className="pt-2 text-gray-600 text-base lg:text-base flex items-center justify-center lg:justify-start">
                <FiPhoneCall className="text-primary mr-2 text-xl" />
                0868303246
              </p>
              <p className="pt-2 text-gray-600 text-base lg:text-base flex items-center justify-center lg:justify-start">
                <FiMail className="text-primary mr-2 text-xl" />
                levohoangan.01@gmail.com
              </p>
              <p className="pt-8 text-sm">
                “You only live once, but if you do it right, once is enough.”
              </p>

              <div className="pt-12 pb-8">
                <a
                  href="https://drive.google.com/file/d/17FSYgiB4INf2wRYoqNV6GNTiwpTrn10t/view?usp=sharing"
                  target="_blank"
                  className="bg-primary hover:bg-[#344cb8] text-white font-bold py-2 px-4 rounded-full"
                  rel="noreferrer"
                >
                  GET MY CV
                </a>
              </div>

              <div className="pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-center lg:justify-start space-x-12">
                <SocialGroup />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/5 hidden lg:block shadow-2xl">
            <Image
              width={360}
              height={550}
              placeholder="blur"
              src={personalImage}
              className="rounded-none lg:rounded-lg shadow-2xl"
              alt="img"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
