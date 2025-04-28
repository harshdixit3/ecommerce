"use client";
import React from "react";
import { MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <div className="h-screen">
      <div className="absolute top-10  left-10 flex items-center gap-4 group">
        <Button
          onClick={() => router.back()}
          variant="nostyle"
          className="text-h4 group-hover:text-primary-600 gap-8 items-center"
        >
          <MoveLeft
            size={40}
            className="group-hover:text-primary-900 duration-100 ease-linear group-hover:translate-x-2"
          />
          Go Back
        </Button>
      </div>
      {children}
    </div>
  );
}
