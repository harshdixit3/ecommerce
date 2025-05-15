"use client";
import Container from "@/components/custom/Container";
import { useUser } from "@clerk/nextjs";
import {
  Facebook,
  Instagram,
  Loader2Icon,
  Mail,
  MapPin,
  MoveRight,
  PhoneCall,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { toast } from "sonner";
import axios from "axios";
import { m } from "framer-motion";
import Loading from "@/components/custom/Loading";
import Image from "next/image";
import { Separator } from "@radix-ui/react-menu";

const Footer = () => {
  const { isSignedIn } = useUser();

  const [email, setEmail] = useState("");

  const handleSave = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (loading) {
      return;
    }
    setLoading(true);

    const Email = z.object({
      email: z.string().email().min(5).max(100),
    });

    const validatedFields = Email.safeParse({
      email: email,
    });

    if (!validatedFields.success) {
      toast.error("Email is invalid. Try again");

      setLoading(false);
      return;
    }

    const sendEmail = async () => {
      const values = {
        subject: "Email Subscription to Ecommer Store",
        email: email,
        message: "I just subscribed to your newsletter",
      };

      await axios
        .post("https://fractal-api-zeta.vercel.app/api/sendemail", values)
        .then((response) => {
          const data = response.data;
          toast.success(data.message);
        })
        .catch((err) => {
          toast.error(err.message);
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    await sendEmail();
  };

  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && <Loading isLoading={true} />}
      <m.footer
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-neutral-200 text-pretty text-gray-500"
      >
        <Container>
          <div className="flex-col gap-12">
            <div className="grid grid-cols-1 lg:grid-cols-4 text-slate-400 text-xl">
              <ul className="flex flex-col gap-4">
                <li className="my-10">
                  <h1 className="text-3xl font-bold hover:text-primary-300 text-white tracking-wider">
                    Ecommmer
                  </h1>
                </li>
                <li className="flex gap-4">
                  <PhoneCall /> (+91)8770370273
                </li>
                <li className="flex gap-4">
                  <Mail /> ecommer@ecommer.store
                </li>
                <li className="flex gap-4">
                  <MapPin /> 482002 Jabalpur(M.P.)
                </li>
              </ul>
              <ul className="flex flex-col gap-4">
                <li className="my-10">
                  <h1 className="text-2xl font-bold hover:text-primary-300 text-white tracking-wider">
                    Informations
                  </h1>
                </li>
                <li className="flex gap-4">
                  <Link
                    className="flex gap-4 hover:text-secondary-500"
                    href="/account/dashboard"
                  >
                    My account
                  </Link>
                </li>
                <li className="flex gap-4">
                  <Link
                    className="flex gap-4 hover:text-secondary-500"
                    href={isSignedIn ? "/account/dashboard" : "/sign-in"}
                  >
                    {isSignedIn ? "Dashboard" : "Login"}
                  </Link>
                </li>
                <li className="flex gap-4 hover:text-secondary-500">
                  <Link className="flex gap-4" href="/cart">
                    My cart
                  </Link>
                </li>
                <li className="flex gap-4 hover:text-secondary-500">
                  <Link className="flex gap-4" href="/checkout">
                    Checkout
                  </Link>
                </li>
              </ul>
              <ul className="flex flex-col gap-4">
                <li className="my-10">
                  <h1 className="text-2xl font-bold hover:text-primary-300 text-white tracking-wider">
                    Services
                  </h1>
                </li>
                <li className="flex gap-4">
                  <Link href="#" className="flex gap-4 hover:text-secondary-500">
                    About Us
                  </Link>
                </li>
                <li className="flex gap-4">
                  <Link href="#" className="flex gap-4 hover:text-secondary-500">
                    Careers
                  </Link>
                </li>
                <li className="flex gap-4">
                  <Link href="#" className="flex gap-4 hover:text-secondary-500">
                    Delivery Information
                  </Link>
                </li>
                <li className="flex gap-4">
                  <Link href="#" className="flex gap-4 hover:text-secondary-500">
                    Privacy Policy
                  </Link>
                </li>
              </ul>

              <ul className="flex flex-col gap-4">
                <li className="my-10">
                  <h1 className="text-2xl font-bold hover:text-primary-300 text-white tracking-wider">
                    Subscribe
                  </h1>
                </li>
                <li className="flex gap-4 hover:text-secondary-500">
                  <h6>
                    Enter your email to get apps, product and latest updates.
                  </h6>
                </li>
                <li className="flex gap-4">
                  <form className="flex w-full bg-transparent border hover:text-secondary-500 border-white rounded-xl gap-4 items-center p-3">
                    <Mail size="40" />
                    <Input
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.currentTarget.value)}
                      max={400}
                      placeholder="Enter Your Email Here.!"
                      className="rounded-xl py-4  bg-transparent"
                    />
                    <Button
                      variant="outline"
                      onClick={(e) => handleSave(e)}
                      disabled={loading}
                      type="submit"
                      size={"icon"}
                      className="rounded-lg"
                    >
                      <MoveRight className={cn("block", loading && "hidden")} />
                      <Loader2Icon
                        className={cn(
                          "hidden",
                          loading && "block animate-spin"
                        )}
                      />
                    </Button>
                  </form>
                </li>
              </ul>
            </div>

            <Separator className="my-10" />

            <div className="flex my-10 flex-wrap lg:flex-nowrap gap-8 justify-between">
              <div className="inline-flex gap-4">
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/10101/10101223.png"
                  width="70"
                  height="70"
                  alt="visa"
                />
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/13583/13583661.png"
                  width="70"
                  height="70"
                  alt="visa"
                />
              </div>
              <div className="inline-flex gap-4 hover:text-primary-300 items-center text-slate-700 text-sm">
                @2025 Ecommer All rights reserved
              </div>
              <div className="inline-flex gap-4">
                <Button
                  className="hover:bg-primary-500 hover:text-white"
                  variant="outline"
                  size="icon"
                >
                  <Facebook />
                </Button>
                <Button
                  className="hover:bg-primary-500 hover:text-white"
                  variant="outline"
                  size="icon"
                >
                  <Instagram />
                </Button>
                <Button
                  className="hover:bg-primary-500 hover:text-white"
                  variant="outline"
                  size="icon"
                >
                  <Twitter />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </m.footer>
    </>
  );
};

export default Footer;
