"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ContactLayer() {
  return (
    <>
      <div className="h-full bg-map w-full flex items-center justify-center">
        <div className="flex space-x-8">
          <Card className="w-[350px] h-[280px]">
            <CardHeader>
              <CardTitle className="">Let&apos;s Talk</CardTitle>
              <CardDescription>
                We&apos;re Here waiting for You!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-2">Phone: <a href="tel:860-633-3989" className="text-blue-500">860-633-3989</a></div>

              <div>Address: 2840 Main St, Glastonbury, CT 06033</div>
            </CardContent>
          </Card>
          {/* <div>
            <Image
              src="/images/map.png"
              width={800}
              height={800}
              alt="Company Location"
              className="object-cover rounded-lg"
            />
          </div> */}
        </div>
      </div>
    </>
  );
}
