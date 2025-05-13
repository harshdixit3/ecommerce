"use client";
import Container from "@/components/custom/Container";
import { useUser } from "@clerk/nextjs";
import { Mail, MapPin, MoveRight, PhoneCall } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { toast } from "sonner";
import axios from "axios";

const Footer = () => {
  const { isSignedIn } = useUser();

  const [email, setEmail] = useState("");

  const handelSave = async (e: React.MouseEvent<HTMLButtonElement>) => {
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
        subject: "Subscribe to newsletter",
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
      <footer className="bg-black pb-10">
        <Container>
          <div className="grid grid-cols-1 text-slate-500">
            <ul className="flex flex-col gap-4">
              <li className="my-10">
                <h4 className="text-white hover:text-primary-500">Ecommer</h4>
              </li>
              <li className="flex gap-4">
                <PhoneCall /> (+91) 8770370273
              </li>
              <li className="flex gap-4">
                <Mail /> ecommer.3@ecommer.store
              </li>
              <li className="flex gap-4">
                <MapPin /> 482002 Jabalpur(M.P.)
              </li>
            </ul>
            <ul className="flex flex-col gap-4">
              <li className="my-10">
                <h6 className="text-white hover:text-primary-500">
                  Informations
                </h6>
              </li>
              <li className="flex gap-4">
                <Link
                  href="/account/dasboard"
                  className="hover:text-secondary-500"
                >
                  My Account
                </Link>
              </li>
              <li className="flex gap-4">
                <Link
                  href={isSignedIn ? "/account/dashboard" : "/sign-in"}
                  className="hover:text-secondary-500"
                >
                  {isSignedIn ? "Dashboard" : "Login"}
                </Link>
              </li>
              <li className="flex gap-4">
                <Link href="/cart" className="hover:text-secondary-500">
                  My Cart
                </Link>
              </li>

              <li className="flex gap-4">
                <Link href="/checkout" className="hover:text-secondary-500">
                  Checkout
                </Link>
              </li>

              <li className="my-10">
                <h6 className="hover:text-primary-500 text-white">Services</h6>
              </li>

              <li className="flex gap-4">
                <Link href={"/"} className="hover:text-secondary-500">
                  About Us{" "}
                </Link>
              </li>

              <li className="flex gap-4">
                <Link href={"/"} className="hover:text-secondary-500">
                  Careers
                </Link>
              </li>

              <li className="flex gap-4">
                <Link href={"/"} className="hover:text-secondary-500 ">
                  Delivery Information
                </Link>
              </li>

              <li className="flex gap-4">
                <Link href={"/"} className="hover:text-secondary-500 ">
                  Privicy Policy
                </Link>
              </li>

              <ul>
                <li className="my-10">
                  <h6 className="text-white hover:text-primary-500">
                    Subscribe
                  </h6>
                </li>
                <li className="my-2 flex gap-4 text-pretty">
                  <Link href="#" className="hover:text-secondary-500">
                    Enter Your Email to get Apps,Products And Latest Updates
                  </Link>
                </li>
                <li className="flex gap-4 text-pretty mt-4">
                  <form className="flex w-full bg-transparent border border-gray-700 rounded-xl gap-4 items-center p-3">
                    <Mail size={40} />
                    <Input
                      name="email"
                      value={email}
                      onChange={() => setEmail(e.currentTarget.value)}
                      max={400}
                      placeholder="Enter Your Email Here.!"
                      className="rounded-xl py-4 bg-transparent"
                    />
                    <Button
                      variant="outline"
                      onClick={handelSave}
                      disabled={loading}
                      type="submit"
                      size={"icon"}
                    >
                      <MoveRight
                        className={cn(
                          "hidden",
                          loading && "block-animate-spin"
                        )}
                      />
                    </Button>
                  </form>
                </li>
              </ul>
            </ul>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
