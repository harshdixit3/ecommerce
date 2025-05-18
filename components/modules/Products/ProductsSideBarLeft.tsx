"use client";
import { cn } from "@/lib/utils";
import React from "react";
export default function ProductsSidebarLeft({
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  loading,
  setLoading,
  className,
}: {
  minPrice: number;
  maxPrice: number;
  setMinPrice: (value: number) => void;
  setMaxPrice: (value: number) => void;
  loading: boolean;
  setLoading: (e: boolean) => void;
  className?: string;
}) {
  return <div className={cn("", className)}>ProductsMainContent</div>;
}
