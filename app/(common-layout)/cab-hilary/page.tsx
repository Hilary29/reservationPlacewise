"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Link from "next/link";
import { Tab } from "@headlessui/react";
import CheckboxCustom from "@/components/Checkbox";
import CreditCardIcon from "@heroicons/react/24/solid/CreditCardIcon";
import React,{useState} from "react";



function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const Page = () => {

  return (

    <>
    
    <div className="bg-[var(--bg-2)] mt-10 lg:mt-14 px-3">
      <div className="container">
        {/* Block contenant tous les cadres*/}
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
            
          <div className="col-span-12 xl:col-span-6">

            <div className="section-space--sm">
                <div
              className="bg-[var(--secondary-light)] rounded-md md:rounded-md lg:rounded-md p-1 sm:p-2 md:p-6 lg:px-10">
                <p>Annulation gratuite jusqu'à 48h à l'avance </p>           
            </div>
              <div className="p-3 sm:p-4 lg:p-6 bg-white rounded-md mb-8">
                <h4 className="mb-5 text-2xl font-semibold">
                  {" "}
                  Driver and Cab details{" "}
                </h4>
                <ul className="flex flex-col gap-4 mb-5">
                  <li>
                    <div className="flex gap-4">
                      <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                        <i className="las la-check text-lg text-primary"></i>
                      </div>
                      <span className="inline-block">
                        Driver Name and Photo: We&apos;ve the driver&apos;s
                        name and photo, so you don&apos;t afraid arrive tour.
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-4">
                      <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                        <i className="las la-check text-lg text-primary"></i>
                      </div>
                      <span className="inline-block">
                        Driver rating: You will also be able to view your
                        driver&apos;s rating from other passengers. This
                        rating is based on their driving and customer service
                        skills and can help you determine the quality of your
                        ride.
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-4">
                      <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                        <i className="las la-check text-lg text-primary"></i>
                      </div>
                      <span className="inline-block">
                        Contact information: You will be provided with the
                        driver&apos;s phone number, so you can contact them if
                        needed.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

            <div className="p-3 sm:p-4 lg:p-6 bg-white rounded-md mb-10">     
                  <h4 className="mb-8 text-2xl font-semibold">
                    Billing Address
                  </h4>                
                  <form action="#">
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-12">
                        <label
                          htmlFor="name"
                          className="text-xl font-medium block mb-3">
                          Name 
                        </label>
                        <input
                          type="text"
                          className="w-full bg-[var(--bg-1)] border border-neutral-40 rounded-md py-3 px-5 focus:outline-none"
                          placeholder="Enter Name.."
                          id="name"
                        />
                      </div>
                      <div className="col-span-12">
                        <label
                          htmlFor="firstName"
                          className="text-xl font-medium block mb-3">
                          Firstname 
                        </label>
                        <input
                          type="text"
                          className="w-full bg-[var(--bg-1)] border border-neutral-40 rounded-md py-3 px-5 focus:outline-none"
                          placeholder="Enter FirstName.."
                          id="firstName"
                        />
                      </div>
                      <div className="col-span-12">
                        <label
                          htmlFor="email"
                          className="text-xl font-medium block mb-3">
                          Email 
                        </label>
                        <input
                          type="email"
                          className="w-full bg-[var(--bg-1)] border border-neutral-40 rounded-md py-3 px-5 focus:outline-none"
                          placeholder="Enter Email.."
                          id="email"               
                         />
                      </div>
                      <div className="col-span-12">
                        <label
                          htmlFor="phoneNumber"
                          className="text-xl font-medium block mb-3">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          className="w-full bg-[var(--bg-1)] border border-neutral-40 rounded-md py-3 px-5 focus:outline-none"
                          placeholder=""
                          id="phoneNumber"
                        />
                      </div>
                      <div className="col-span-12">
                      <button type="submit"
                      className="link inline-flex items-center gap-2 mt-6 lg:mt-8 py-3 px-6 rounded-md bg-primary text-white :bg-primary-400 hover:text-white font-medium w-full justify-center mb-6">
                      <span className="inline-block"> Save Address </span>
                      </button>
                      </div>
                    </div>
                  </form>
            </div>
            </div>
          </div>

          <div className="col-span-12 xl:col-span-6">
            <div className="section-space--sm relative">        
              <div className="bg-white rounded-md py-4 px-6 ">
                <p className="mb-4 text-2xl font-bold"> Payement Methods </p>
                
                <Tab.Group>
                  <Tab.List className="flex gap-3 about-tab mb-7">
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          "focus:outline-none",
                          selected ? "font-medium border-2 border-primary rounded-md" : ""
                        )
                      }>
                        <Image
                      width={174}
                      height={62}
                      src="/img/CardLogo.png"
                      alt="image"
                      className=""
                    />


                    </Tab>{""}
                   
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          "focus:outline-none",
                          selected ? "font-medium border-2 border-primary rounded-md" : ""
                        )
                      }>
                      
                      <Image
                      width={183}
                      height={61}
                      src="/img/PaypalLogo.png"
                      alt="image"
                      className=""
                    />
                    </Tab>{" "}
                   
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          "focus:outline-none",
                          selected ? "font-medium border-2 border-primary rounded-md" : ""
                        )
                      }>
                      
                      <Image
                      width={250}
                      height={64}
                      src="/img/MomoLogo.png"
                      alt="image"
                      className=""
                    />
                    </Tab>{" "}
                   
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          "focus:outline-none",
                          selected ? "font-medium border-2 border-primary rounded-md " : ""
                        )
                      }>

                      <Image
                      width={274}
                      height={64}
                      src="/img/OMLogo.png"
                      alt="image"
                      className=""
                    />

                    </Tab> 
                  </Tab.List>
                  <Tab.Panels className="tab-content">
                    <Tab.Panel>
                    <form className="flex flex-col gap-4">
                      <label
                          htmlFor="review-cardNumber"
                          className="text-xl font-medium block">
                          Card Number 
                        </label>
                        <input
                          type="text"
                          className="w-full bg-[var(--bg-1)] border border-neutral-40 rounded-md py-3 px-4 focus:outline-none"
                          placeholder=""
                          id="review-cardNumber"
                        />

                        <label
                          htmlFor="review-cardNumber"
                          className="text-xl font-medium block ">
                          Expiry Date 
                        </label>
                        <input
                          type="text"
                          className="w-full bg-[var(--bg-1)] border border-neutral-40 rounded-md py-3 px-4 focus:outline-none"
                          placeholder=""
                          id="review-cardNumber"
                        />
                    </form>
                    </Tab.Panel>

                    <Tab.Panel>
                      
                    <form className="flex flex-col gap-4">
                      <label
                          htmlFor="review-cardNumber"
                          className="text-xl font-medium block">
                          Card Number 
                        </label>
                        <input
                          type="text"
                          className="w-full bg-[var(--bg-1)] border border-neutral-40 rounded-md py-3 px-4 focus:outline-none"
                          placeholder=""
                          id="review-cardNumber"
                        />

                        <label
                          htmlFor="review-cardNumber"
                          className="text-xl font-medium block ">
                          Expiry Date 
                        </label>
                        <input
                          type="text"
                          className="w-full bg-[var(--bg-1)] border border-neutral-40 rounded-md py-3 px-4 focus:outline-none"
                          placeholder=""
                          id="review-cardNumber"
                        />
                    </form>
                    </Tab.Panel>

                    <Tab.Panel>
                    <form className="flex flex-col gap-5">
                      <label
                          htmlFor="review-phoneNumber"
                          className="text-xl font-medium block mb-0">
                          Phone Number 
                        </label>
                        <input
                          type="text"
                          className="w-full bg-[var(--bg-1)] border border-neutral-40 rounded-md py-3 px-5 focus:outline-none"
                          placeholder=""
                          id="review-phoneNumber"
                        />
                    </form>
                    </Tab.Panel>

                    <Tab.Panel>
                      <form className="flex flex-col gap-5">
                      <label
                          htmlFor="review-phoneNumber"
                          className="text-xl font-medium block mb-0">
                          Phone Number 
                        </label>
                        <input
                          type="text"
                          className="w-full bg-[var(--bg-1)] border border-neutral-40 rounded-md py-3 px-5 focus:outline-none"
                          placeholder=""
                          id="review-phoneNumber"
                        />
                        </form>
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>

                <div>
                <ul className="flex flex-col gap-4 py-8">
                  <li>
                    <div className="flex gap-4">
                      <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                        <i className="las la-check text-lg text-primary"></i>
                      </div>
                      <span className="inline-block">
                        Price: 20k
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-4">
                      <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                        <i className="las la-check text-lg text-primary"></i>
                      </div>
                      <span className="inline-block">
                       Additionnal Taxes: 30k
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-4">
                      <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                        <i className="las la-check text-lg text-primary"></i>
                      </div>
                      <span className="inline-block">
                        Total Price: 50k
                      </span>
                    </div>
                  </li>
                </ul>
                </div>


                <Link
                  href="#"
                  className="link inline-flex items-center gap-2 mt-6 lg:mt-8 py-3 px-6 rounded-md bg-primary text-white :bg-primary-400 hover:text-white font-medium w-full justify-center mb-6">
                  <span className="inline-block"> Complete Payement </span>
                </Link>
              </div>


              




            </div>
                 
          </div>
        </div>
      </div>
    </div> 
  </>



  );
};

export default Page;
