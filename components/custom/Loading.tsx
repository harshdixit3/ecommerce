import React from "react";
import { ClipLoader } from "react-spinners";

export default function Loading({
  isLoading,
  size = 30,
  color = "#115e59",
}: {
  isLoading: boolean;
  size?: number;
  color?: string;
}) {
  return (
    <div className="!z-50">
      {isLoading && (
        <ClipLoader
          className="absolute inset-0 m-auto z-50 !border-8"
          size={size}
          color={color}
        />
      )}
    </div>
  );
}
