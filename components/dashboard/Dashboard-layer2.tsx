"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DashboardLayer2() {
  return (
    <>
      <div className="h-full bg-leaf bg-cover bg-center w-full">
        <div className="bg-opacity-75 bg-white w-full pb-5">
          <h1 className="text-4xl font-bold text-center pt-4">
            Beauty & Relaxation
          </h1>
          <p className="text-center mt-4">
            Your spa description goes here.
            Please Call <a href="tel:860-633-3989" className="text-blue-400">860-633-3989</a> to make appointment now !!
          </p>
        {/*  <div className="flex justify-center mt-4">*/}
        {/*  <Button asChild>*/}
        {/*    <Link href="dashboard/book">Make Appointment</Link>*/}
        {/*  </Button>*/}
        {/*</div>*/}
        </div>
      </div>
    </>
  );
}
