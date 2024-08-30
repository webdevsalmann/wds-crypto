"use client"
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Section from "@/components/ui/section";

const pages = [
    {
        label: "Market",
        href: "/"
    },
    {
        label: "Listings",
        href: "/"
    },
    {
        label: "On Chain",
        href: "/"
    },
    {
        label: "About",
        href: "/"
    },
    {
        label: "Pricing",
        href: "/pricing"
    },
]

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <Section>
                <div className="grid gap-block md:grid-cols-2">
                    {/* Left */}
                    <div>
                        <Link className="w-fit block" href="/">
                            <div className="font-bold text-2xl">LOGO</div>
                            <span className="sr-only">Brand Logo</span>
                        </Link>

                        <p className="my-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea et itaque in, dolores minus eius officia explicabo reprehenderit maiores libero est, natus asperiores molestiae ut nostrum rerum! Amet, accusantium veniam.
                        </p>

                        <div className="my-base flex gap-base items-center">
                            <Link className={cn(buttonVariants({ variant: 'outline' }), "aspect-square p-1")} href="/">
                                <Instagram className="size-6 shrink-0" />
                                <span className="sr-only">Instagram Link</span>
                            </Link>
                            <Link className={cn(buttonVariants({ variant: 'outline' }), "aspect-square p-1")} href="/">
                                <Facebook className="size-6 shrink-0" />
                                <span className="sr-only">Facebook Link</span>
                            </Link>
                            <Link className={cn(buttonVariants({ variant: 'outline' }), "aspect-square p-1")} href="/">
                                <Linkedin className="size-6 shrink-0" />
                                <span className="sr-only">Linkedin Link</span>
                            </Link>
                            <Link className={cn(buttonVariants({ variant: 'outline' }), "aspect-square p-1")} href="/">
                                <Twitter className="size-6 shrink-0" />
                                <span className="sr-only">Twitter Link</span>
                            </Link>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="grid gap-block md:grid-cols-2 md:place-items-center md:place-content-start">
                        <div className="md:self-start">
                            <div className="font-bold">Other Pages</div>
                            <ul className="mt-base space-y-2">
                                {pages.map(item => (
                                    <li key={item.label + "FooterPages"}>
                                        <Link className="text-muted-foreground hover:underline hover:text-primary cursor-pointer" href={item.href}>
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="md:self-start">
                            <div className="font-bold">Quick Links</div>
                            <ul className="mt-base space-y-2">
                                {pages.map(item => (
                                    <li key={item.label + "FooterPages"}>
                                        <Link className="text-muted-foreground hover:underline hover:text-primary cursor-pointer" href={item.href}>
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </Section>

            <div className="py-xl border-t text-center">
                <p className="">© {currentYear} company All Rights Reserved. Terms and Conditions of use | Privacy Policy</p>
            </div>
        </footer>
    )
}
