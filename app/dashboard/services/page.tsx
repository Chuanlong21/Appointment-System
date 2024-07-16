import DashboardHead from "@/components/dashboard/Dashboard-head";

import DashboardFooter from "@/components/dashboard/Dashboard-footer";
import Image from "next/image";


export default function Services(){
    return (
        <>
            <div className="h-screen flex flex-col">
                <header className="flex justify-between items-center p-4  w-full h-[10vh]">
                    <DashboardHead />
                </header>

                <main className="flex flex-col flex-grow overflow-auto justify-between items-center">


                    <div className="flex flex-row gap-10">
                        <Image
                            src="/images/body-massage.jpg"
                            width={400}
                            height={400}
                            alt="Company Location"
                            className="object-cover rounded-lg mx-auto"
                        />
                        <div>
                            <p>Hello</p>
                        </div>
                    </div>

                    <div className="flex flex-row gap-10">
                        <div>
                            <p>Hello</p>
                        </div>
                        <Image
                            src="/images/foot-massage.jpg"
                            width={500}
                            height={500}
                            alt="Company Location"
                            className="object-cover rounded-lg mx-auto"
                        />
                    </div>
                    <div>
                        <p>Spa Combo</p>
                        <p>Welcome to Health & Beauty Spa, where your well-being is our top priority. We specialize in a variety of therapeutic services designed to melt away the stress of your busy day. Whether you're seeking relief from shoulder and neck tension, lymphatic drainage, or body knot release, our skilled therapists are here to provide you with personalized care.

                            At Health & Beauty Spa, we believe that every guest deserves to feel valued and rejuvenated. Our commitment to exceptional service ensures that you leave our place feeling relaxed and refreshed. We aim to create a tranquil environment where you can escape the hustle and bustle of everyday life and find peace and serenity.

                            Visit us today and discover how our dedicated team can help you achieve the ultimate in relaxation and wellness. Your journey to a more balanced and stress-free life begins here.</p>
                    </div>





                </main>

                <footer className="p-4 bg-gray-800 text-white w-full h-[10vh]">
                    <DashboardFooter />
                </footer>
            </div>
        </>
    );
}