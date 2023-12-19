import React from "react";

import { Button, Img, Line, List, Text } from "components";

const Navbar = () => {
  return (
    <div className="absolute flex flex-col gap-[37px] inset-x-[0] items-center justify-start max-w-[1167px] mx-auto md:px-5 w-full">
    <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
      <div className="flex flex-col items-center justify-start md:mt-0 my-[3px] pt-0.5 px-0.5">
        <Text
          className="mt-1 text-3xl sm:text-[26px] md:text-[28px] text-green-A700"
          size="txtPangeaAfrikanTrialBold30"
        >
          GoLearnHub
        </Text>
      </div>
      <div className="flex sm:flex-1 sm:flex-col flex-row gap-4 items-center justify-center md:ml-[0] ml-[216px] md:mt-0 my-2 w-auto sm:w-full">
        <Button
          className="cursor-pointer font-medium leading-[normal] min-w-[55px] text-base text-center"
          shape="square"
          size="sm"
        >
          Home
        </Button>
        <div className="flex flex-col items-center justify-center px-1.5 py-2 w-auto">
          <Text
            className="text-base text-center text-gray-600 w-auto"
            size="txtPangeaAfrikanTrialRegular16"
          >
            Features
          </Text>
        </div>
        <div className="flex flex-col items-center justify-center px-1.5 py-2 w-auto">
          <Text
            className="text-base text-center text-gray-600 w-auto"
            size="txtPangeaAfrikanTrialRegular16"
          >
            Benefits
          </Text>
        </div>
        <div className="flex flex-col items-center justify-center px-1.5 py-2 w-auto">
          <Text
            className="text-base text-center text-gray-600 w-auto"
            size="txtPangeaAfrikanTrialRegular16"
          >
            Courses
          </Text>
        </div>
        <div className="flex flex-col items-center justify-center px-1.5 py-2 w-auto">
          <Text
            className="text-base text-center text-gray-600 w-auto"
            size="txtPangeaAfrikanTrialRegular16"
          >
            Blogs
          </Text>
        </div>
        <div className="flex flex-col items-center justify-center px-1.5 py-2 w-auto">
          <a
            href="javascript:"
            className="text-base text-center text-gray-600 w-auto"
          >
            <Text size="txtPangeaAfrikanTrialRegular16">Login</Text>
          </a>
        </div>
      </div>
      {/* <Button
        className="border border-gray-300 border-solid flex h-14 items-center justify-center ml-28 md:ml-[0] rounded-[50%] w-14"
        shape="circle"
        color="gray_100"
        variant="fill"
      >
        <Img className="h-5" src="images/img_search.svg" alt="search" />
      </Button> */}
      <Button
        className="cursor-pointer flex items-center justify-center min-w-[172px] ml-4 md:ml-[0]"
        rightIcon={
          <Img
            className="h-5 mt-px mb-0.5 ml-2.5"
            src="images/img_materialsymbolsarrowforwardrounded.svg"
            alt="material-symbols:arrow-forward-rounded"
          />
        }
        shape="round"
        variant="fill"
      >
        <div className="font-medium leading-[normal] text-base text-center">
          Start Free Trial
        </div>
      </Button>
    </header>
    <div className="md:h-[676px] h-[679px] relative w-full">
      <div className="absolute flex h-[676px] inset-y-[0] justify-end my-auto right-[1%] w-1/2 sm:w-full">
        <div className="bg-green-A700 h-[623px] ml-auto mt-auto rounded-bl-[10px] rounded-br-[160px] rounded-tl-[160px] rounded-tr-[160px] w-[83%]"></div>
        <div className="absolute h-[676px] inset-[0] justify-center m-auto w-full">
          <Img
            className="h-[676px] m-auto object-cover rounded-br-[160px] w-full"
            src="images/img_image2.png"
            alt="imageTwo"
          />
          <div className="absolute flex flex-col gap-[53px] justify-start right-[10%] top-[11%] w-[76%]">
            <div className="flex flex-row items-start justify-between md:ml-[0] ml-[54px] w-[88%] md:w-full">
              <div className="bg-white-A700 h-[30px] mt-[15px] rounded-[50%] w-[30px]"></div>
              <div className="bg-white-A700 h-[30px] mb-[15px] rounded-[50%] w-[30px]"></div>
            </div>
            <div className="flex flex-row gap-[78px] items-end justify-start w-[29%] md:w-full">
              <div className="bg-white-A700 h-[30px] rounded-[50%] w-[30px]"></div>
              <div className="bg-white-A700 h-3.5 mt-[15px] rounded-[50%] w-3.5"></div>
            </div>
          </div>
          <div className="absolute bg-green-A700 bottom-[32%] h-[18px] left-[1%] rounded-[50%] w-[18px]"></div>
        </div>
      </div>
      <div className="absolute bottom-1/4 flex flex-col font-inter gap-[29px] items-start justify-start left-[0] w-[34%]">
        
        <div className="flex flex-row font-pangeaafrikantrial gap-4 items-center justify-start w-[65%] md:w-full">
          <Button
            className="border border-gray-50_01 border-solid cursor-pointer flex items-center justify-center min-w-[129px] shadow-bs"
            rightIcon={
              <Img
                className="h-5 mt-px mb-[3px] ml-2.5"
                src="images/img_materialsymbolsarrowforwardrounded.svg"
                alt="material-symbols:arrow-forward-rounded"
              />
            }
            shape="round"
            variant="fill"
          >
            <div className="font-medium leading-[normal] text-base text-center">
              Register
            </div>
          </Button>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[109px]"
            rightIcon={
              <Img
                className="h-5 mt-px mb-[3px] ml-2.5"
                src="images/img_materialsymbolsarrowforwardrounded_green_a700.svg"
                alt="material-symbols:arrow-forward-rounded"
              />
            }
            shape="round"
          >
            <div className="font-medium leading-[normal] text-base text-center">
              Login
            </div>
          </Button>
        </div>
      </div>
      <Text
        className="absolute leading-[75.00px] left-[0] md:text-5xl text-[64px] text-gray-900_01 top-[13%]"
        size="txtPangeaAfrikanTrialSemiBold64"
      >
        <span className="text-gray-900_01 font-pangeaafrikantrial text-left font-semibold">
          <>
            You bring the
            <br />
          </>
        </span>
        <span className="text-green-A700 font-pangeaafrikantrial text-left font-semibold">
        Curiosity
        </span>
        <span className="text-gray-900_01 font-pangeaafrikantrial text-left font-semibold">
          <>
            , we&#39;ll make
            <br />
            learning code 
            <br />
            unforgettable.
          </>
        </span>
      </Text>
      {/* <div className="absolute bg-white-A700 border border-gray-50_01 border-solid bottom-[6%] flex md:flex-col flex-row font-pangeaafrikantrial gap-2.5 h-[90px] md:h-auto items-center justify-between left-[0] max-w-[767px] px-5 py-4 rounded-[45px] shadow-bs w-full">
        <List
          className="sm:flex-1 sm:flex-col flex-row gap-4 grid sm:grid-cols-1 grid-cols-2 justify-start w-auto sm:w-full"
          orientation="horizontal"
        >
          <div className="flex flex-col items-center justify-start pl-2.5 w-[284px]">
            <div className="flex flex-row gap-2.5 items-center justify-start w-[274px]">
              <div className="flex flex-row gap-[115px] items-center justify-center w-60">
                <Text
                  className="text-base text-center text-gray-600 w-auto"
                  size="txtPangeaAfrikanTrialRegular16"
                >
                  Select Course
                </Text>
                <Img
                  className="h-[18px] w-[18px]"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              </div>
              <Img
                className="h-20 w-6"
                src="images/img_mdihorizontalline.svg"
                alt="mdihorizontalli"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start pl-2.5 w-[284px]">
            <div className="flex flex-row gap-2.5 items-center justify-start w-[274px]">
              <div className="flex flex-row gap-[100px] items-center justify-start w-60">
                <Text
                  className="text-base text-center text-gray-600 w-auto"
                  size="txtPangeaAfrikanTrialRegular16"
                >
                  Select Instructor
                </Text>
                <Img
                  className="h-[18px] w-[18px]"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              </div>
              <Img
                className="h-20 w-6"
                src="images/img_mdihorizontalline.svg"
                alt="mdihorizontalli"
              />
            </div>
          </div>
        </List>
        <Button
          className="border border-gray-50_01 border-solid cursor-pointer flex items-center justify-center min-w-[120px] shadow-bs"
          rightIcon={
            <Img
              className="h-5 mt-[3px] mb-px"
              src="images/img_search_white_a700.svg"
              alt="search"
            />
          }
          shape="round"
          variant="fill"
        >
          <div className="font-medium leading-[normal] text-base text-center">
            Search
          </div>
        </Button>
      </div> */}
      <div className="absolute bg-white-A700 h-3.5 right-[0] rounded-[50%] top-[36%] w-3.5"></div>
      <div className="absolute bg-white-A700 bottom-[0] h-3.5 right-[38%] rounded-[50%] w-3.5"></div>
    </div>
  </div>
  );
};

export default Navbar;