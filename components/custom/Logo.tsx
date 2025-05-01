import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link className="" href={"/"}>
      <Image
        alt="logo"
        src="/assets/images/logo.png"
        width={120}
        height={120}
        priority
      />
    </Link>
  );
};

export default Logo;
