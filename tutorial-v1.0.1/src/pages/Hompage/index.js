import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Navbar from "pages/Navbar";

const HomePage = () => {
  return (
    <>
      <div className="bg-white-A700 font-pangeaafrikantrial h-[8060px] mx-auto overflow-auto pt-[45px] relative w-full">
        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
          <div className="flex flex-col md:gap-10 gap-[145px] items-center justify-start w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[7000px] items-center justify-end max-w-[1683px] mx-auto p-[73px] md:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group2.svg')" }}
            >
              <div className="flex flex-col items-center justify-start mb-[221px] mt-[1000px] w-[98%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex sm:flex-1 flex-col gap-5 items-start justify-start md:mt-0 mt-3.5 w-auto sm:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-green-A700 sm:text-xl w-auto"
                      size="txtPangeaAfrikanTrialSemiBold24"
                    >
                      About Us
                    </Text>
                    <Text
                      className="leading-[58.00px] max-w-[572px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-gray-900"
                      size="txtPangeaAfrikanTrialMedium48"
                    >
                      We provide the best opportunities to students
                      around the glob.
                    </Text>
                    <div className="flex flex-col font-inter gap-5 items-center justify-start w-full">
                      <Text
                        className="leading-[26.00px] text-base text-gray-900_01 w-full"
                        size="txtInterRegular16"
                      >
                        Welcome to <b>GoLearnHub</b>, we take pride in our commitment to providing unparalleled opportunities to students around the globe. We believe that coding is not just a skill; it's a passport to innovation and empowerment.
                      </Text>
                      <Text
                        className="leading-[26.00px] text-base text-gray-900_01 w-full"
                        size="txtInterRegular16"
                      >
                        Our mission is simple yet powerful: to offer a platform where both novice learners and seasoned developers can discover, learn, and innovate. From foundational concepts to advanced techniques, <b>GoLearnHub</b> is your partner in the exciting journey of mastering programming. Join us as we cultivate a community where code isn't just lines on a screen but a gateway to endless possibilities. Your coding success story begins here at <b>GoLearnHub</b>.
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[122px]"
                      rightIcon={
                        <Img
                          className="h-5 ml-2.5"
                          src="images/img_materialsymbolsarrowforwardrounded.svg"
                          alt="material-symbols:arrow-forward-rounded"
                        />
                      }
                      shape="round"
                      variant="fill"
                    >
                      <div className="font-medium leading-[normal] text-base text-center">
                        Join Us
                      </div>
                    </Button>
                  </div>
                  <div className="md:h-[474px] h-[514px] relative w-[100%] md:w-full">
                    <div className="absolute bg-gray-100 h-[474px] inset-[0] justify-center m-auto rounded-tl-[10px] rounded-tr-[10px] w-[100%]"></div>
                    <Img
                      className="absolute bottom-[0] h-[246px] left-[0] object-cover rounded-[10px] w-[50%] md:w-full"
                      src="images/img_rectangle13.png"
                      alt="rectangleThirteen"
                    />
                    <Img
                      className="absolute h-[246px] right-[0] object-cover rounded-[10px] top-[0] w-[50%] md:w-full"
                      src="images/img_rectangle14.png"
                      alt="rectangleFourteen"
                    />
                  </div>


                </div>
                <div className="h-[400px] md:h-[560px] mt-40 relative w-[97%] md:w-full">
                  <Img
                    className="h-[400px] m-auto object-cover rounded-[10px] w-full"
                    src="images/img_rectangle19.png"
                    alt="rectangleNineteen"
                  />
                  <div className="absolute flex flex-col gap-[13px] h-max inset-[0] items-center justify-center m-auto w-[41%]">
                    <Text
                      className="text-2xl md:text-[22px] text-center text-green-A700 sm:text-xl"
                      size="txtPangeaAfrikanTrialSemiBold24"
                    >
                      Join Us
                    </Text>
                    <div className="flex flex-col gap-5 items-center justify-start w-full">
                      <Text
                        className="leading-[50.00px] text-4xl sm:text-[32px] md:text-[34px] text-center text-white-A700 w-full"
                        size="txtPangeaAfrikanTrialMedium36"
                      >
                        Join Us by Creating Account or Start a Free Trial
                      </Text>
                      <Text
                        className="leading-[26.00px] text-base text-center text-white-A700 w-full"
                        size="txtInterRegular16WhiteA700"
                      >
                        Install our top-rated dropshipping app to your
                        e-commerce site and get access to US Suppliers,
                        AliExpress vendors, and the best dropshipping and custom
                        products.
                      </Text>
                      <div className="flex flex-row font-pangeaafrikantrial gap-4 items-center justify-center w-[72%] md:w-full">
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[172px]"
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
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[150px]"
                          rightIcon={
                            <Img
                              className="h-5 mt-px mb-0.5 ml-2.5"
                              src="images/img_materialsymbolsarrowforwardrounded.svg"
                              alt="material-symbols:arrow-forward-rounded"
                            />
                          }
                          shape="round"
                          color="white_A700"
                        >
                          <div className="font-medium leading-[normal] text-base text-center">
                            Contact Us
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start mt-[154px] w-[97%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-center text-green-A700 sm:text-xl"
                      size="txtPangeaAfrikanTrialSemiBold24"
                    >
                      Our Benefits
                    </Text>
                    <Text
                      className="leading-[58.00px] mt-[23px] text-5xl sm:text-[38px] md:text-[44px] text-center text-gray-900 w-[67%] sm:w-full"
                      size="txtPangeaAfrikanTrialMedium48"
                    >
                      By Joining <span className="text-green-A700">GoLearnHub</span> Platform, One Can Avail a Lot Of
                      <span className="text-green-A700"> Benefits</span>.
                    </Text>
                    <div className="flex flex-col font-pangeaafrikantrial gap-10 items-center justify-start mt-10 w-full">
                      <div className="gap-4 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                        <div className="bg-gray-50 flex flex-1 flex-col h-[280px] md:h-auto items-start justify-start p-5 rounded-[10px] w-full">
                          <div className="flex flex-col gap-5 items-start justify-start w-auto">
                            <div className="flex flex-col font-pangeaafrikantrial items-center justify-start w-[54px]">
                              <div className="h-[54px] relative w-[54px]">
                                <div className="absolute bg-green-A700_63 bottom-[0] h-[54px] inset-x-[0] mx-auto rounded-[50%] w-[54px] flex items-center justify-center">
                                  <Text
                                    className="text-[34px] text-green-A700"
                                    size="txtPangeaAfrikanTrialMedium34"
                                  >
                                    01
                                  </Text>
                                </div>
                              </div>
                            </div>

                            <Text
                              className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                              size="txtPangeaAfrikanTrialMedium24"
                            >
                              Interactive Learning
                            </Text>
                            <Text
                              className="leading-[26.00px] max-w-[336px] md:max-w-full text-base text-gray-900_01"
                              size="txtInterRegular16"
                            >
                              <span className="text-gray-900_01 font-inter text-left font-normal">
                                Say goodbye to boring lectures. Immerse yourself in interactive learning experiences, quizzes, and coding challenges that make mastering programming concepts engaging and enjoyable.
                              </span>

                            </Text>
                          </div>
                        </div>
                        <div className="border border-gray-100 border-solid flex flex-1 flex-col h-[236px] md:h-auto items-start justify-start p-5 rounded-[10px] w-full">
                          <div className="flex flex-col gap-5 items-start justify-start w-auto">
                            <div className="flex flex-col font-pangeaafrikantrial items-center justify-start w-[54px]">
                              <div className="h-[54px] relative w-[54px]">
                                <div className="absolute bg-green-A700_63 bottom-[0] h-[54px] inset-x-[0] mx-auto rounded-[50%] w-[54px] flex items-center justify-center">
                                  <Text
                                    className="text-[34px] text-green-A700"
                                    size="txtPangeaAfrikanTrialMedium34"
                                  >
                                    02
                                  </Text>
                                </div>
                              </div>
                            </div>

                            <Text
                              className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                              size="txtPangeaAfrikanTrialMedium24"
                            >
                              Expert Instructors
                            </Text>
                            <Text
                              className="leading-[26.00px] max-w-[336px] md:max-w-full text-base text-gray-900_01"
                              size="txtInterRegular16"
                            >
                              <span className="text-gray-900_01 font-inter text-left font-normal">
                                Learn from industry experts passionate about programming. Our instructors bring real-world experience to the virtual classroom, providing invaluable insights and guidance
                              </span>

                            </Text>
                          </div>
                        </div>
                        <div className="bg-gray-50 flex flex-1 flex-col h-[236px] md:h-auto items-start justify-start p-5 rounded-[10px] w-full">
                          <div className="flex flex-col gap-5 items-start justify-start w-auto">
                            <div className="flex flex-col font-pangeaafrikantrial items-center justify-start w-[54px]">
                              <div className="h-[54px] relative w-[54px]">
                                <div className="absolute bg-green-A700_63 bottom-[0] h-[54px] inset-x-[0] mx-auto rounded-[50%] w-[54px] flex items-center justify-center">
                                  <Text
                                    className="text-[34px] text-green-A700"
                                    size="txtPangeaAfrikanTrialMedium34"
                                  >
                                    03
                                  </Text>
                                </div>
                              </div>
                            </div>

                            <Text
                              className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                              size="txtPangeaAfrikanTrialMedium24"
                            >
                              Career Guidance
                            </Text>
                            <Text
                              className="leading-[26.00px] max-w-[336px] md:max-w-full text-base text-gray-900_01"
                              size="txtInterRegular16"
                            >
                              <span className="text-gray-900_01 font-inter text-left font-normal">
                                Receive personalized career guidance, job readiness resources, and industry insights to help you succeed in the competitive world of programming
                              </span>

                            </Text>
                          </div>
                        </div>
                        <div className="border border-gray-100 border-solid flex flex-1 flex-col h-[236px] md:h-auto items-start justify-start p-5 rounded-[10px] w-full">
                          <div className="flex flex-col gap-5 items-start justify-start w-auto">
                            <div className="flex flex-col font-pangeaafrikantrial items-center justify-start w-[54px]">
                              <div className="h-[54px] relative w-[54px]">
                                <div className="absolute bg-green-A700_63 bottom-[0] h-[54px] inset-x-[0] mx-auto rounded-[50%] w-[54px] flex items-center justify-center">
                                  <Text
                                    className="text-[34px] text-green-A700"
                                    size="txtPangeaAfrikanTrialMedium34"
                                  >
                                    04
                                  </Text>
                                </div>
                              </div>
                            </div>

                            <Text
                              className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                              size="txtPangeaAfrikanTrialMedium24"
                            >
                              Affordable Pricing
                            </Text>
                            <Text
                              className="leading-[26.00px] max-w-[336px] md:max-w-full text-base text-gray-900_01"
                              size="txtInterRegular16"
                            >
                              <span className="text-gray-900_01 font-inter text-left font-normal">
                                Unlock the world of coding without breaking the bank – our affordable pricing plans make quality programming education accessible to all.
                              </span>
                            </Text>
                          </div>
                        </div>
                        <div className="bg-gray-50 flex flex-1 flex-col h-[236px] md:h-auto items-start justify-start p-5 rounded-[10px] w-full">
                          <div className="flex flex-col gap-5 items-start justify-start w-auto">
                            <div className="flex flex-col font-pangeaafrikantrial items-center justify-start w-[54px]">
                              <div className="h-[54px] relative w-[54px]">
                                <div className="absolute bg-green-A700_63 bottom-[0] h-[54px] inset-x-[0] mx-auto rounded-[50%] w-[54px] flex items-center justify-center">
                                  <Text
                                    className="text-[34px] text-green-A700"
                                    size="txtPangeaAfrikanTrialMedium34"
                                  >
                                    05
                                  </Text>
                                </div>
                              </div>
                            </div>

                            <Text
                              className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                              size="txtPangeaAfrikanTrialMedium24"
                            >
                              Active Community Support
                            </Text>
                            <Text
                              className="leading-[26.00px] max-w-[336px] md:max-w-full text-base text-gray-900_01"
                              size="txtInterRegular16"
                            >
                              <span className="text-gray-900_01 font-inter text-left font-normal">
                                Join a vibrant community of learners and mentors. Engage in discussions, seek help, and collaborate on projects. Our community fosters a supportive environment for continuous growth.
                              </span>
                            </Text>
                          </div>
                        </div>
                        <div className="border border-gray-100 border-solid flex flex-1 flex-col h-[236px] md:h-auto items-start justify-start p-5 rounded-[10px] w-full">
                          <div className="flex flex-col gap-5 items-start justify-start w-auto">
                            <div className="flex flex-col font-pangeaafrikantrial items-center justify-start w-[54px]">
                              <div className="h-[54px] relative w-[54px]">
                                <div className="absolute bg-green-A700_63 bottom-[0] h-[54px] inset-x-[0] mx-auto rounded-[50%] w-[54px] flex items-center justify-center">
                                  <Text
                                    className="text-[34px] text-green-A700"
                                    size="txtPangeaAfrikanTrialMedium34"
                                  >
                                    06
                                  </Text>
                                </div>
                              </div>
                            </div>

                            <Text
                              className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                              size="txtPangeaAfrikanTrialMedium24"
                            >
                              Regular Updates and New Content
                            </Text>
                            <Text
                              className="leading-[26.00px] max-w-[336px] md:max-w-full text-base text-gray-900_01"
                              size="txtInterRegular16"
                            >
                              <span className="text-gray-900_01 font-inter text-left font-normal">
                                Stay ahead in the ever-evolving programming landscape. Benefit from regular updates and new content, ensuring that your skills are aligned with the latest industry trends and technologies.
                              </span>
                            </Text>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start mt-[1451px] w-[97%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-center text-green-A700 sm:text-xl"
                      size="txtPangeaAfrikanTrialSemiBold24"
                    >
                      Blog Posts
                    </Text>
                    <Text
                      className="capitalize leading-[58.00px] mt-[21px] text-5xl sm:text-[38px] md:text-[44px] text-center text-gray-900 w-[67%] sm:w-full"
                      size="txtPangeaAfrikanTrialMedium48"
                    >
                      Articles will help to to stay up to date with all the
                      knowledge
                    </Text>
                    <Text
                      className="leading-[26.00px] mt-[30px] text-base text-center text-gray-900_01 w-1/2 sm:w-full"
                      size="txtInterRegular16"
                    >
                      Install our top-rated dropshipping app to your e-commerce
                      site and get access to US Suppliers, AliExpress vendors,
                      and the best.
                    </Text>
                    <div className="flex flex-col font-pangeaafrikantrial items-center justify-start mt-[60px] w-full">
                      <div className="gap-4 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                        <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                          <Img
                            className="h-[253px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[376px] md:w-full"
                            src="images/img_rectangle32.png"
                            alt="rectangleThirtyTwo"
                          />
                          <Text
                            className="leading-[100.00%] max-w-[376px] md:max-w-full text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                            size="txtPangeaAfrikanTrialSemiBold24Gray90001"
                          >
                            Why Java is best programming language?
                          </Text>
                          <div className="flex flex-col font-inter items-center justify-start">
                            <Text
                              className="leading-[26.00px] text-base text-gray-900_01 w-full"
                              size="txtInterRegular16"
                            >
                              Java is a class-based object-oriented simple
                              programming language. Though we can not consider
                              it to be fully ...{" "}
                            </Text>
                          </div>
                          <Button
                            className="cursor-pointer flex items-center justify-center min-w-[156px]"
                            rightIcon={
                              <Img
                                className="h-5 mt-px mb-0.5 ml-2.5"
                                src="images/img_materialsymbolsarrowforwardrounded_green_a700.svg"
                                alt="material-symbols:arrow-forward-rounded"
                              />
                            }
                            shape="round"
                          >
                            <div className="font-medium leading-[normal] text-base text-center">
                              Read Article
                            </div>
                          </Button>
                        </div>
                        <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                          <Img
                            className="h-[253px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[376px] md:w-full"
                            src="images/img_rectangle32_253x376.png"
                            alt="rectangleThirtyTwo"
                          />
                          <Text
                            className="leading-[100.00%] max-w-[376px] md:max-w-full text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                            size="txtPangeaAfrikanTrialSemiBold24Gray90001"
                          >
                            Why Java is best programming language?
                          </Text>
                          <div className="flex flex-col font-inter items-center justify-start">
                            <Text
                              className="leading-[26.00px] text-base text-gray-900_01 w-full"
                              size="txtInterRegular16"
                            >
                              Java is a class-based object-oriented simple
                              programming language. Though we can not consider
                              it to be fully ...{" "}
                            </Text>
                          </div>
                          <Button
                            className="cursor-pointer flex items-center justify-center min-w-[156px]"
                            rightIcon={
                              <Img
                                className="h-5 mt-px mb-0.5 ml-2.5"
                                src="images/img_materialsymbolsarrowforwardrounded_green_a700.svg"
                                alt="material-symbols:arrow-forward-rounded"
                              />
                            }
                            shape="round"
                          >
                            <div className="font-medium leading-[normal] text-base text-center">
                              Read Article
                            </div>
                          </Button>
                        </div>
                        <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                          <Img
                            className="h-[253px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[376px] md:w-full"
                            src="images/img_rectangle32_1.png"
                            alt="rectangleThirtyTwo"
                          />
                          <Text
                            className="leading-[100.00%] max-w-[376px] md:max-w-full text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                            size="txtPangeaAfrikanTrialSemiBold24Gray90001"
                          >
                            Why Java is best programming language?
                          </Text>
                          <div className="flex flex-col font-inter items-center justify-start">
                            <Text
                              className="leading-[26.00px] text-base text-gray-900_01 w-full"
                              size="txtInterRegular16"
                            >
                              Java is a class-based object-oriented simple
                              programming language. Though we can not consider
                              it to be fully ...{" "}
                            </Text>
                          </div>
                          <Button
                            className="cursor-pointer flex items-center justify-center min-w-[156px]"
                            rightIcon={
                              <Img
                                className="h-5 mt-px mb-0.5 ml-2.5"
                                src="images/img_materialsymbolsarrowforwardrounded_green_a700.svg"
                                alt="material-symbols:arrow-forward-rounded"
                              />
                            }
                            shape="round"
                          >
                            <div className="font-medium leading-[normal] text-base text-center">
                              Read Article
                            </div>
                          </Button>
                        </div>
                        <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                          <Img
                            className="h-[253px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[376px] md:w-full"
                            src="images/img_rectangle32_2.png"
                            alt="rectangleThirtyTwo"
                          />
                          <Text
                            className="leading-[100.00%] max-w-[376px] md:max-w-full text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                            size="txtPangeaAfrikanTrialSemiBold24Gray90001"
                          >
                            Why Java is best programming language?
                          </Text>
                          <div className="flex flex-col font-inter items-center justify-start">
                            <Text
                              className="leading-[26.00px] text-base text-gray-900_01 w-full"
                              size="txtInterRegular16"
                            >
                              Java is a class-based object-oriented simple
                              programming language. Though we can not consider
                              it to be fully ...{" "}
                            </Text>
                          </div>
                          <Button
                            className="cursor-pointer flex items-center justify-center min-w-[156px]"
                            rightIcon={
                              <Img
                                className="h-5 mt-px mb-0.5 ml-2.5"
                                src="images/img_materialsymbolsarrowforwardrounded_green_a700.svg"
                                alt="material-symbols:arrow-forward-rounded"
                              />
                            }
                            shape="round"
                          >
                            <div className="font-medium leading-[normal] text-base text-center">
                              Read Article
                            </div>
                          </Button>
                        </div>
                        <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                          <Img
                            className="h-[253px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[376px] md:w-full"
                            src="images/img_rectangle32_3.png"
                            alt="rectangleThirtyTwo"
                          />
                          <Text
                            className="leading-[100.00%] max-w-[376px] md:max-w-full text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                            size="txtPangeaAfrikanTrialSemiBold24Gray90001"
                          >
                            Why Java is best programming language?
                          </Text>
                          <div className="flex flex-col font-inter items-center justify-start">
                            <Text
                              className="leading-[26.00px] text-base text-gray-900_01 w-full"
                              size="txtInterRegular16"
                            >
                              Java is a class-based object-oriented simple
                              programming language. Though we can not consider
                              it to be fully ...{" "}
                            </Text>
                          </div>
                          <Button
                            className="cursor-pointer flex items-center justify-center min-w-[156px]"
                            rightIcon={
                              <Img
                                className="h-5 mt-px mb-0.5 ml-2.5"
                                src="images/img_materialsymbolsarrowforwardrounded_green_a700.svg"
                                alt="material-symbols:arrow-forward-rounded"
                              />
                            }
                            shape="round"
                          >
                            <div className="font-medium leading-[normal] text-base text-center">
                              Read Article
                            </div>
                          </Button>
                        </div>
                        <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                          <Img
                            className="h-[253px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[376px] md:w-full"
                            src="images/img_rectangle32_4.png"
                            alt="rectangleThirtyTwo"
                          />
                          <Text
                            className="leading-[100.00%] max-w-[376px] md:max-w-full text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                            size="txtPangeaAfrikanTrialSemiBold24Gray90001"
                          >
                            Why Java is best programming language?
                          </Text>
                          <div className="flex flex-col font-inter items-center justify-start">
                            <Text
                              className="leading-[26.00px] text-base text-gray-900_01 w-full"
                              size="txtInterRegular16"
                            >
                              Java is a class-based object-oriented simple
                              programming language. Though we can not consider
                              it to be fully ...{" "}
                            </Text>
                          </div>
                          <Button
                            className="cursor-pointer flex items-center justify-center min-w-[156px]"
                            rightIcon={
                              <Img
                                className="h-5 mt-px mb-0.5 ml-2.5"
                                src="images/img_materialsymbolsarrowforwardrounded_green_a700.svg"
                                alt="material-symbols:arrow-forward-rounded"
                              />
                            }
                            shape="round"
                          >
                            <div className="font-medium leading-[normal] text-base text-center">
                              Read Article
                            </div>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start mt-[227px] w-[97%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <a
                      href="javascript:"
                      className="text-2xl md:text-[22px] text-center text-green-A700 sm:text-xl"
                    >
                      <Text size="txtPangeaAfrikanTrialSemiBold24">FAQs</Text>
                    </a>
                    <Text
                      className="capitalize mt-5 text-5xl sm:text-[38px] md:text-[44px] text-center text-gray-900"
                      size="txtPangeaAfrikanTrialMedium48"
                    >
                      Frequently Asked Questions
                    </Text>
                    <Text
                      className="leading-[26.00px] mt-[17px] text-base text-center text-gray-900_01 w-1/2 sm:w-full"
                      size="txtInterRegular16"
                    >
                      Install our top-rated dropshipping app to your e-commerce
                      site and get access to US Suppliers, AliExpress vendors,
                      and the best.
                    </Text>
                    <div className="flex flex-col items-center justify-start mt-[60px] w-full">
                      <div className="gap-4 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                        <div className="bg-white-A700 border hover:border-0 border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-4 rounded-[10px] hover:shadow-bs shadow-bs hover:w-full w-full">
                          <div className="flex flex-col gap-[11px] items-start justify-start mb-4 w-[99%] md:w-full">
                            <div className="flex flex-col font-pangeaafrikantrial items-center justify-start">
                              <Text
                                className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                                size="txtPangeaAfrikanTrialMedium24Gray90001"
                              >
                                What is dropshipping?
                              </Text>
                            </div>
                            <Text
                              className="leading-[26.00px] text-base text-gray-900_01 w-full"
                              size="txtInterRegular16"
                            >
                              <>
                                Over 350,000 online businesses and entrepreneurs
                                have used Modalyst. It&#39;s the easiest way to
                                find the best print on demand companies
                              </>
                            </Text>
                          </div>
                        </div>
                        <div className="border hover:border-0 border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-4 rounded-[10px] hover:shadow-bs hover:w-full w-full">
                          <div className="flex flex-col gap-[11px] items-start justify-start mb-4 w-[99%] md:w-full">
                            <div className="flex flex-col font-pangeaafrikantrial items-center justify-start">
                              <Text
                                className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                                size="txtPangeaAfrikanTrialMedium24Gray90001"
                              >
                                What is refund policy?
                              </Text>
                            </div>
                            <Text
                              className="leading-[26.00px] text-base text-gray-900_01 w-full"
                              size="txtInterRegular16"
                            >
                              <>
                                Over 350,000 online businesses and entrepreneurs
                                have used Modalyst. It&#39;s the easiest way to
                                find the best print on demand companies
                              </>
                            </Text>
                          </div>
                        </div>
                        <div className="border hover:border-0 border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-4 rounded-[10px] hover:shadow-bs hover:w-full w-full">
                          <div className="flex flex-col gap-[11px] items-start justify-start mb-4 w-[99%] md:w-full">
                            <div className="flex flex-col font-pangeaafrikantrial items-center justify-start">
                              <Text
                                className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                                size="txtPangeaAfrikanTrialMedium24Gray90001"
                              >
                                Who are your suppliers?
                              </Text>
                            </div>
                            <Text
                              className="leading-[26.00px] text-base text-gray-900_01 w-full"
                              size="txtInterRegular16"
                            >
                              <>
                                Over 350,000 online businesses and entrepreneurs
                                have used Modalyst. It&#39;s the easiest way to
                                find the best print on demand companies
                              </>
                            </Text>
                          </div>
                        </div>
                        <div className="border hover:border-0 border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-4 rounded-[10px] hover:shadow-bs hover:w-full w-full">
                          <div className="flex flex-col gap-[11px] items-start justify-start mb-4 w-[99%] md:w-full">
                            <div className="flex flex-col font-pangeaafrikantrial items-center justify-start">
                              <Text
                                className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                                size="txtPangeaAfrikanTrialMedium24Gray90001"
                              >
                                Why choose us?
                              </Text>
                            </div>
                            <Text
                              className="leading-[26.00px] text-base text-gray-900_01 w-full"
                              size="txtInterRegular16"
                            >
                              <>
                                Over 350,000 online businesses and entrepreneurs
                                have used Modalyst. It&#39;s the easiest way to
                                find the best print on demand companies
                              </>
                            </Text>
                          </div>
                        </div>
                        <div className="border hover:border-0 border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-4 rounded-[10px] hover:shadow-bs hover:w-full w-full">
                          <div className="flex flex-col gap-[11px] items-start justify-start mb-4 w-[99%] md:w-full">
                            <div className="flex flex-col font-pangeaafrikantrial items-center justify-start">
                              <Text
                                className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                                size="txtPangeaAfrikanTrialMedium24Gray90001"
                              >
                                What is the shipping cost?
                              </Text>
                            </div>
                            <Text
                              className="leading-[26.00px] text-base text-gray-900_01 w-full"
                              size="txtInterRegular16"
                            >
                              <>
                                Over 350,000 online businesses and entrepreneurs
                                have used Modalyst. It&#39;s the easiest way to
                                find the best print on demand companies
                              </>
                            </Text>
                          </div>
                        </div>
                        <div className="border hover:border-0 border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-4 rounded-[10px] hover:shadow-bs hover:w-full w-full">
                          <div className="flex flex-col gap-[11px] items-start justify-start mb-4 w-[99%] md:w-full">
                            <div className="flex flex-col font-pangeaafrikantrial items-center justify-start">
                              <Text
                                className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                                size="txtPangeaAfrikanTrialMedium24Gray90001"
                              >
                                What is dropshipping?
                              </Text>
                            </div>
                            <Text
                              className="leading-[26.00px] text-base text-gray-900_01 w-full"
                              size="txtInterRegular16"
                            >
                              <>
                                Over 350,000 online businesses and entrepreneurs
                                have used Modalyst. It&#39;s the easiest way to
                                find the best print on demand companies
                              </>
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 flex flex-col items-center justify-end p-7 sm:px-5 w-full">
              <div className="flex flex-col items-center justify-start max-w-[1150px] mt-48 mx-auto md:px-5 w-full">
                <div className="flex md:flex-col flex-row font-pangeaafrikantrial md:gap-10 items-center justify-between w-full">
                  <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-[71%] md:w-full">
                    <div className="flex flex-col items-center justify-end pt-0.5 px-0.5">
                      <Text
                        className="mt-1 text-3xl sm:text-[26px] md:text-[28px] text-green-A700"
                        size="txtPangeaAfrikanTrialBold30"
                      >
                        eLearning
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-center w-auto sm:w-full">
                      <Text
                        className="text-lg text-white-A700 w-auto"
                        size="txtPangeaAfrikanTrialRegular18"
                      >
                        Home
                      </Text>
                      <Text
                        className="text-lg text-white-A700 w-auto"
                        size="txtPangeaAfrikanTrialRegular18"
                      >
                        Features
                      </Text>
                      <Text
                        className="text-lg text-white-A700 w-auto"
                        size="txtPangeaAfrikanTrialRegular18"
                      >
                        Benefits
                      </Text>
                      <Text
                        className="text-lg text-white-A700 w-auto"
                        size="txtPangeaAfrikanTrialRegular18"
                      >
                        Courses
                      </Text>
                      <Text
                        className="text-lg text-white-A700 w-auto"
                        size="txtPangeaAfrikanTrialRegular18"
                      >
                        Blogs
                      </Text>
                      <a
                        href="javascript:"
                        className="text-lg text-white-A700 w-auto"
                      >
                        <Text size="txtPangeaAfrikanTrialRegular18">Login</Text>
                      </a>
                    </div>
                  </div>
                  <List
                    className="md:flex-1 sm:flex-col flex-row gap-5 grid grid-cols-4 w-[16%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex h-[30px] justify-end relative w-full">
                      <Img
                        className="h-5 mt-auto mx-auto w-5"
                        src="images/img_info.svg"
                        alt="info"
                      />
                      <div className="absolute bg-white-A700_1e h-[30px] inset-[0] justify-center m-auto rounded-[50%] w-[30px]"></div>
                    </div>
                    <div className="flex h-[30px] justify-end relative w-full">
                      <Img
                        className="h-5 mt-auto mx-auto w-5"
                        src="images/img_trash.svg"
                        alt="trash"
                      />
                      <div className="absolute bg-white-A700_1e h-[30px] inset-[0] justify-center m-auto rounded-[50%] w-[30px]"></div>
                    </div>
                    <div className="flex h-[30px] justify-end relative w-full">
                      <Img
                        className="h-5 mt-auto mx-auto w-5"
                        src="images/img_eye.svg"
                        alt="eye"
                      />
                      <div className="absolute bg-white-A700_1e h-[30px] inset-[0] justify-center m-auto rounded-[50%] w-[30px]"></div>
                    </div>
                    <div className="flex h-[30px] justify-end relative w-full">
                      <Img
                        className="h-5 mt-auto mx-auto w-5"
                        src="images/img_facebook.svg"
                        alt="facebook"
                      />
                      <div className="absolute bg-white-A700_1e h-[30px] inset-[0] justify-center m-auto rounded-[50%] w-[30px]"></div>
                    </div>
                  </List>
                </div>
                <Line className="bg-blue_gray-700_66 h-px mt-[100px] w-full" />
                <Text
                  className="mt-[30px] text-base text-right text-white-A700"
                  size="txtInterRegular16WhiteA700"
                >
                  Copyright © 2023 eLearning.com
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[4%] h-[400px] inset-x-[0] max-w-[1160px] mx-auto md:px-5 w-full">
          <Img
            className="h-[400px] m-auto object-cover rounded-[10px] w-full"
            src="images/img_rectangle19_400x1160.png"
            alt="rectangleNineteen_One"
          />
          <div className="absolute flex flex-col gap-[13px] h-max inset-[0] items-center justify-center m-auto w-[41%]">
            <Text
              className="text-2xl md:text-[22px] text-center text-green-A700 sm:text-xl"
              size="txtPangeaAfrikanTrialSemiBold24"
            >
              Join Us
            </Text>
            <div className="flex flex-col gap-5 items-center justify-start w-full">
              <Text
                className="leading-[50.00px] text-4xl sm:text-[32px] md:text-[34px] text-center text-white-A700 w-full"
                size="txtPangeaAfrikanTrialMedium36"
              >
                Join Us by Creating Account or Start a Free Trial
              </Text>
              <Text
                className="leading-[26.00px] text-base text-center text-white-A700 w-full"
                size="txtInterRegular16WhiteA700"
              >
                Install our top-rated dropshipping app to your e-commerce site
                and get access to US Suppliers, AliExpress vendors, and the best
                dropshipping and custom products.
              </Text>
              <div className="flex flex-row font-pangeaafrikantrial gap-4 items-center justify-center w-[72%] md:w-full">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[172px]"
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
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[150px]"
                  rightIcon={
                    <Img
                      className="h-5 mt-px mb-0.5 ml-2.5"
                      src="images/img_materialsymbolsarrowforwardrounded.svg"
                      alt="material-symbols:arrow-forward-rounded"
                    />
                  }
                  shape="round"
                  color="white_A700"
                >
                  <div className="font-medium leading-[normal] text-base text-center">
                    Contact Us
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[38%] flex flex-col items-start justify-start md:px-5 right-[0] w-full">
          <div className="bg-gray-900_01 flex flex-col items-end justify-start md:pl-10 sm:pl-5 pl-[84px] py-[84px] w-[86%] md:w-full">
            <div className="flex flex-col items-center justify-start mb-[5px] w-[96%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-center text-green-A700 sm:text-xl"
                size="txtPangeaAfrikanTrialSemiBold24"
              >
                Our Courses
              </Text>
              <Text
                className="leading-[58.00px] mt-[23px] text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700 w-3/5 sm:w-full"
                size="txtPangeaAfrikanTrialMedium48WhiteA700"
              >
                Our Best Courses Offered and Teach By Best of The Instructors
              </Text>
              <Text
                className="leading-[26.00px] mt-[30px] text-base text-center text-white-A700 w-[44%] sm:w-full"
                size="txtInterRegular16WhiteA700"
              >
                Install our top-rated dropshipping app to your e-commerce site
                and get access to US Suppliers, AliExpress vendors, and the
                best.
              </Text>
              <div className="flex flex-col font-inter gap-10 items-start justify-start mt-[60px] w-full">
                <List
                  className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start sm:ml-[0] p-5 rounded-[10px] w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="h-[221px] relative w-full">
                        <Img
                          className="h-[221px] m-auto object-cover rounded-[10px] w-full"
                          src="images/img_courseimage.png"
                          alt="courseimage"
                        />
                        <Button
                          className="absolute flex h-10 items-center justify-center right-[6%] top-[9%] w-10"
                          shape="circle"
                          color="white_A700_4c"
                          size="md"
                          variant="fill"
                        >
                          <Img
                            className="h-5"
                            src="images/img_mdifavourite.svg"
                            alt="mdifavourite"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-row items-center justify-between mt-[15px] w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                          size="txtPangeaAfrikanTrialSemiBold24Gray90001"
                        >
                          Basics of JAVA
                        </Text>
                        <Button
                          className="cursor-pointer font-inter font-medium min-w-[101px] my-1 rounded-md text-center text-xs"
                          color="green_100"
                          size="xs"
                          variant="fill"
                        >
                          Beginner Level
                        </Button>
                      </div>
                      <div className="flex flex-col items-center justify-start mt-3.5 w-full">
                        <Text
                          className="leading-[26.00px] text-base text-gray-900_01 w-full"
                          size="txtInterRegular16"
                        >
                          Java is a class-based object-oriented simple
                          programming language. Though we can not consider it to
                          be fully ...{" "}
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[5px] items-end justify-start mt-3 w-auto">
                        <Text
                          className="text-4xl sm:text-[32px] md:text-[34px] text-green-A700 w-auto"
                          size="txtPangeaAfrikanTrialMedium36GreenA700"
                        >
                          125.65
                        </Text>
                        <Text
                          className="text-base text-gray-900_01 w-auto"
                          size="txtInterMedium16"
                        >
                          AED
                        </Text>
                      </div>
                      <div className="flex flex-row font-pangeaafrikantrial gap-4 items-center justify-between mt-[19px] w-full">
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[264px] text-base text-center"
                          shape="round"
                          variant="fill"
                        >
                          View Course
                        </Button>
                        <Button
                          className="flex h-14 items-center justify-center rounded-[50%] w-14"
                          shape="circle"
                        >
                          <Img
                            className="h-6"
                            src="images/img_materialsymbol.svg"
                            alt="materialsymbol"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start sm:ml-[0] p-5 rounded-[10px] w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="h-[221px] relative w-full">
                        <Img
                          className="h-[221px] m-auto object-cover rounded-[10px] w-full"
                          src="images/img_courseimage_221x336.png"
                          alt="courseimage"
                        />
                        <Button
                          className="absolute flex h-10 items-center justify-center right-[6%] top-[9%] w-10"
                          shape="circle"
                          color="white_A700_4c"
                          size="md"
                          variant="fill"
                        >
                          <Img
                            className="h-5"
                            src="images/img_mdifavourite.svg"
                            alt="mdifavourite"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-row gap-[25px] items-center justify-between mt-[15px] w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                          size="txtPangeaAfrikanTrialSemiBold24Gray90001"
                        >
                          OOP Fundamentals
                        </Text>
                        <Button
                          className="cursor-pointer font-inter font-medium min-w-[101px] my-1 rounded-md text-center text-xs"
                          color="green_100"
                          size="xs"
                          variant="fill"
                        >
                          Beginner Level
                        </Button>
                      </div>
                      <div className="flex flex-col items-center justify-start mt-3.5 w-full">
                        <Text
                          className="leading-[26.00px] text-base text-gray-900_01 w-full"
                          size="txtInterRegular16"
                        >
                          Java is a class-based object-oriented simple
                          programming language. Though we can not consider it to
                          be fully ...{" "}
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[5px] items-end justify-start mt-3 w-auto">
                        <Text
                          className="text-4xl sm:text-[32px] md:text-[34px] text-green-A700 w-auto"
                          size="txtPangeaAfrikanTrialMedium36GreenA700"
                        >
                          15.65
                        </Text>
                        <Text
                          className="text-base text-gray-900_01 w-auto"
                          size="txtInterMedium16"
                        >
                          AED
                        </Text>
                      </div>
                      <div className="flex flex-row font-pangeaafrikantrial gap-4 items-center justify-between mt-[19px] w-full">
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[264px] text-base text-center"
                          shape="round"
                          variant="fill"
                        >
                          View Course
                        </Button>
                        <Button
                          className="flex h-14 items-center justify-center rounded-[50%] w-14"
                          shape="circle"
                        >
                          <Img
                            className="h-6"
                            src="images/img_materialsymbol.svg"
                            alt="materialsymbol"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start sm:ml-[0] p-5 rounded-[10px] w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="h-[221px] relative w-full">
                        <Img
                          className="h-[221px] m-auto object-cover rounded-[10px] w-full"
                          src="images/img_courseimage_1.png"
                          alt="courseimage"
                        />
                        <Button
                          className="absolute flex h-10 items-center justify-center right-[6%] top-[9%] w-10"
                          shape="circle"
                          color="white_A700_4c"
                          size="md"
                          variant="fill"
                        >
                          <Img
                            className="h-5"
                            src="images/img_mdifavourite.svg"
                            alt="mdifavourite"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-row items-center justify-between mt-[15px] w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                          size="txtPangeaAfrikanTrialSemiBold24Gray90001"
                        >
                          Intro to UI/UX
                        </Text>
                        <Button
                          className="cursor-pointer font-inter font-medium min-w-[101px] my-1 rounded-md text-center text-xs"
                          color="green_100"
                          size="xs"
                          variant="fill"
                        >
                          Beginner Level
                        </Button>
                      </div>
                      <div className="flex flex-col items-center justify-start mt-3.5 w-full">
                        <Text
                          className="leading-[26.00px] text-base text-gray-900_01 w-full"
                          size="txtInterRegular16"
                        >
                          Java is a class-based object-oriented simple
                          programming language. Though we can not consider it to
                          be fully ...{" "}
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[5px] items-end justify-start mt-3 w-auto">
                        <Text
                          className="text-4xl sm:text-[32px] md:text-[34px] text-green-A700 w-auto"
                          size="txtPangeaAfrikanTrialMedium36GreenA700"
                        >
                          16.58
                        </Text>
                        <Text
                          className="text-base text-gray-900_01 w-auto"
                          size="txtInterMedium16"
                        >
                          AED
                        </Text>
                      </div>
                      <div className="flex flex-row font-pangeaafrikantrial gap-4 items-center justify-between mt-[19px] w-full">
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[264px] text-base text-center"
                          shape="round"
                          variant="fill"
                        >
                          View Course
                        </Button>
                        <Button
                          className="flex h-14 items-center justify-center rounded-[50%] w-14"
                          shape="circle"
                        >
                          <Img
                            className="h-6"
                            src="images/img_materialsymbol.svg"
                            alt="materialsymbol"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start sm:ml-[0] p-5 rounded-[10px] w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="h-[221px] relative w-full">
                        <Img
                          className="h-[221px] m-auto object-cover rounded-[10px] w-full"
                          src="images/img_courseimage_2.png"
                          alt="courseimage"
                        />
                        <Button
                          className="absolute flex h-10 items-center justify-center right-[6%] top-[9%] w-10"
                          shape="circle"
                          color="white_A700_4c"
                          size="md"
                          variant="fill"
                        >
                          <Img
                            className="h-5"
                            src="images/img_mdifavourite.svg"
                            alt="mdifavourite"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-row items-center justify-between mt-[15px] w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                          size="txtPangeaAfrikanTrialSemiBold24Gray90001"
                        >
                          UI Certification
                        </Text>
                        <Text
                          className="bg-green-100 justify-center my-1 px-2 rounded-md text-green-A700 text-xs w-auto"
                          size="txtInterMedium12"
                        >
                          Beginner Level
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start mt-3.5 w-full">
                        <Text
                          className="leading-[26.00px] text-base text-gray-900_01 w-full"
                          size="txtInterRegular16"
                        >
                          Java is a class-based object-oriented simple
                          programming language. Though we can not consider it to
                          be fully ...{" "}
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[5px] items-end justify-start mt-3 w-auto">
                        <Text
                          className="text-4xl sm:text-[32px] md:text-[34px] text-green-A700 w-auto"
                          size="txtPangeaAfrikanTrialMedium36GreenA700"
                        >
                          45.15
                        </Text>
                        <Text
                          className="text-base text-gray-900_01 w-auto"
                          size="txtInterMedium16"
                        >
                          AED
                        </Text>
                      </div>
                      <div className="flex flex-row font-pangeaafrikantrial gap-4 items-center justify-between mt-[19px] w-full">
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[264px] text-base text-center"
                          shape="round"
                          variant="fill"
                        >
                          View Course
                        </Button>
                        <Button
                          className="flex h-14 items-center justify-center rounded-[50%] w-14"
                          shape="circle"
                        >
                          <Img
                            className="h-6"
                            src="images/img_materialsymbol.svg"
                            alt="materialsymbol"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="flex md:flex-col flex-row font-pangeaafrikantrial md:gap-5 items-center justify-start w-[90%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtPangeaAfrikanTrialSemiBold24WhiteA700"
                  >
                    View All Courses
                  </Text>
                  <Line className="bg-gray-700 h-0.5 md:ml-[0] ml-[51px] md:mt-0 my-[27px] w-[63%]" />
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[151px] md:ml-[0] ml-[51px]"
                    rightIcon={
                      <Img
                        className="h-5 mt-px mb-0.5 ml-2.5"
                        src="images/img_materialsymbolsarrowforwardrounded.svg"
                        alt="material-symbols:arrow-forward-rounded"
                      />
                    }
                    shape="round"
                    color="white_A700"
                  >
                    <div className="font-medium leading-[normal] text-base text-center">
                      All Courses
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Img
          className="absolute h-[219px] inset-x-[0] mx-auto top-[10%]"
          src="images/img_institutes.svg"
          alt="institutes"
        /> */}
        <Navbar />
      </div>
    </>
  );
};

export default HomePage;
