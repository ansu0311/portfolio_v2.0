import { TitleText2 } from "../smallComponents/TitleText";

type Props = {
  imgLink: string;
  info: string;
};

export function Body({ imgLink, info }: Props) {
  return (
    <main className="pb-4 sm:pb-0 pt-8 sm:pt-10 md:pt-8 lg:pt-5 h-auto sm:h-screen overflow-hidden max-w-6xl px-4 sm:px-8 xl:px-0 flex justify-center mx-auto">
      <div className="">
        <div className=" flex justify-center w-full">
          <div className="col-span-1 flex flex-col justify-center gap-0 xl:gap-5">
            <div className="flex gap-3 justify-center">
            <TitleText2 titles={["Web Designer"]} />
              <div className="text-[#c9fd74]">
              <TitleText2 titles={["/"]} />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 justify-center">
              <TitleText2 titles={["Developer"]} />
            </div>
          </div>
        </div>
        <div className="max-w-6xl px-4 sm:px-8 xl:px-0 pt-3 lg:pt-5">
          <div className="flex flex-col-reverse sm:flex-row justify-center gap-10">
            <div className="w-full sm:w-1/3 xl:w-1/4 text-sm lg:text-base text-justify flex justify-center my-auto">
              {info}
            </div>
            <div className="flex justify-center">
              <img
                src={imgLink}
                alt="profile"
                className="flex-shrink-0 object-cover rounded-lg h-[50vw] w-[50vw] sm:h-[45vw] sm:w-[30vw] md:h-[38vw] md:w-[24vw] lg:h-[30vw] lg:w-[22vw] xl:h-[25vw] xl:w-[18vw] "
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
