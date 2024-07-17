'use client';
import DashboardHead from "@/components/dashboard/Dashboard-head";

import DashboardFooter from "@/components/dashboard/Dashboard-footer";
import Image from "next/image";
import {createGlobalStyle} from "styled-components";
const GlobalStyle = createGlobalStyle`
 
 
    

`;

export default function Services(){
    return (
        <>
            <GlobalStyle />
            <div className=" min-h-screen flex flex-col">
                <header className="flex justify-between items-center px-4 py-3 h-[10vh]">
                    <DashboardHead/>
                </header>

                <main className="flex-grow overflow-auto p-4">

                    <div className={"container flex flex-col justify-center "}>

                        <div className="flex flex-col md:flex-row gap-10 mb-10 justify-between">
                            <div className="w-96 h-96">
                                <Image
                                    src="/images/body-massage.jpg"
                                    width={500}
                                    height={500}
                                    alt="Body Massage"
                                    className="object-cover w-full h-full rounded-lg"
                                />
                            </div>

                            <div className="flex flex-col justify-center">
                                <h1 className="text-2xl font-bold mb-2">Body Massage</h1>
                                <p className="mb-4">Starting at $60</p>
                                <ul className="list-disc pl-5">
                                    <li>30 minutes - $60</li>
                                    <li>60 minutes - $100</li>
                                    <li>90 minutes - $140</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row-reverse gap-10 mb-10 justify-between">
                            <div className="w-96 h-96">
                                <Image
                                    src="/images/foot-massage.jpg"
                                    width={500}
                                    height={500}
                                    alt="Foot Massage"
                                    className="object-cover w-full h-full rounded-lg"
                                />
                            </div>

                            <div className="flex flex-col justify-center">
                                <h1 className="text-2xl font-bold mb-2">Foot Massage</h1>
                                <p className="mb-4">Starting at $45</p>
                                <ul className="list-disc pl-5">
                                    <li>30 minutes - $45</li>
                                    <li>60 minutes - $85</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div>
                        <h1 className="text-2xl font-bold mb-2">Spa Combo</h1>
                        <p>Welcome to Health & Beauty Spa, where your well-being is our top priority. We specialize in a variety of therapeutic services designed to melt away the stress of your busy day. Your journey to a more balanced and stress-free life begins here.</p>
                    </div>
                </main>

                <footer className="p-4 bg-gray-800 text-white w-full">
                    <DashboardFooter />
                </footer>
            </div>
        </>
    );
}