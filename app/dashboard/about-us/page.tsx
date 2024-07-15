'use client'
import DashboardHead from "@/components/dashboard/Dashboard-head";
import DashboardFooter from "@/components/dashboard/Dashboard-footer";
import Image from "next/image";
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playwrite+CZ&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Playwrite+CZ:wght@100..400&display=swap');
  .about-font {
    font-family: 'Poppins', sans-serif;
    font-weight: 400; /* 根据需要调整权重 */
    font-style: normal; /* 你也可以设置为italic */

  }

  .b-font {
    font-family: 'Playwrite CZ', cursive;
    font-weight: 400; /* 根据需要调整权重 */
    font-style: normal; /* 你也可以设置为italic */

  }


`;

export default function AboutUs() {
    return (

        <>
            <GlobalStyle/>
            <div className="h-screen flex flex-col">
                <header className="flex justify-between items-center p-4 bg-white border-gray-300 w-full h-[10vh]">
                    <DashboardHead/>
                </header>


                <main className="flex flex-col ">

                    <div className={"w-full h-[10vh]"}>
                        <div className={"flex justify-center items-center mt-4 gap-5"}>
                            <h1 className={"b-font text-3xl font-bold"}>
                                About
                            </h1>
                            <h1 className={"b-font text-3xl font-bold"}>
                                Us
                            </h1>

                        </div>
                    </div>

                    <div className="flex flex-col w-full h-[45vh] ">

                        <div className="flex flex-row justify-center items-center">
                            <Image
                                src="/images/massage1.jpg"
                                width={700}
                                height={700}
                                alt="Company Location"
                                className="object-cover rounded-lg"
                            />
                            <div className="flex flex-col ml-8 max-w-lg gap-8">
                                <p className={'about-font text-base'}>
                                    Welcome to Health & Beauty Spa, where your well-being is our top priority. We
                                    specialize in a variety of therapeutic services designed to melt away the stress of
                                    your busy day. Whether you&apos;re seeking relief from shoulder and neck tension,
                                    lymphatic drainage, or body knot release, our skilled therapists are here to provide
                                    you with personalized care.
                                </p>

                                <p className={'about-font text-base'}>
                                    At Health & Beauty Spa, we believe that every guest deserves to feel valued and
                                    rejuvenated. Our commitment to exceptional service ensures that you leave our place
                                    feeling relaxed and refreshed. We aim to create a tranquil environment where you can
                                    escape the hustle and bustle of everyday life and find peace and serenity.
                                </p>

                                <p className={'about-font text-base'}>
                                    Visit us today and discover how our dedicated team can help you achieve the ultimate
                                    in relaxation and wellness. Your journey to a more balanced and stress-free life
                                    begins here.
                                </p>

                                <div className={"flex flex-row justify-end gap-2"}>
                                    <p>
                                        ———
                                    </p>
                                    <p className="b-font text-base text-right">
                                         Health & Beauty Spa
                                    </p>
                                </div>

                            </div>

                        </div>
                        <div className="w-full flex justify-center my-12">
                            <hr className="w-8/12 border-t-2 border-gray-100 opacity-500" />
                        </div>
                    </div>

                    <div className={"w-full h-[25vh]"}>

                        <div className="container mx-auto px-4">

                            <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0 md:space-x-8">

                                <div className="flex-1 max-w-xs text-center p-8 border rounded-lg shadow-lg bg-white h-48 w-72">
                                    <div className="flex flex-col justify-between h-full">
                                        <div>
                                            <h1 className="text-2xl font-bold mb-4">Spa Combo</h1>
                                            <p>Combine foot and body massages for a better deal</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1 max-w-xs text-center p-8 border rounded-lg shadow-lg bg-white h-48 w-72">
                                    <div className="flex flex-col justify-between h-full">
                                        <div>
                                            <h1 className="text-2xl font-bold mb-4">Spa Specials</h1>
                                            <p>Gift certificates are available to share with friends and family</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1 max-w-xs text-center p-8 border rounded-lg shadow-lg bg-white h-48 w-72">
                                    <div className="flex flex-col justify-between h-full">
                                        <div>
                                            <h1 className="text-2xl font-bold mb-4">Reward Program</h1>
                                            <p>Get a free 1-hour foot spa after 10 visits or with every purchase of 5 gift certificates</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </main>

                <footer className="p-4 bg-gray-800 text-white w-full h-[10vh]">
                    <DashboardFooter/>
                </footer>
            </div>
        </>
    );
}
