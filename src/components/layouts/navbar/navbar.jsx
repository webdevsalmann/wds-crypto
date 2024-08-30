"use client"
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { AlignRight, X } from 'lucide-react';
import Link from 'next/link';
import { ModeToggle } from '@/components/ui/mode-toggle';

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <>
            <nav className='hidden  md:grid px-base md:px-block h-16 md:h-20 grid-cols-3 items-center gap-base'>
                <div className="font-black text-2xl w-fit">
                    <Link href="/">Logo</Link>
                </div>

                <div className="flex items-center gap-base">
                    <Button variant="ghost">Market</Button>
                    <Button variant="ghost">Listings</Button>
                    <Button variant="ghost">On Chain</Button>
                    <Button variant="ghost">About</Button>
                </div>

                <div className="font-black text-2xl flex gap-base items-center">
                    <div className="flex-1" />
                    <Button variant="outline">Login</Button>
                    <Button>signup</Button>
                    <ModeToggle />
                </div>
            </nav>

            <nav className='p-base block md:hidden'>
                <div className="flex-between">
                    <div className="font-black text-2xl">
                        <Link href="/">Logo</Link>
                    </div>
                    <Button className="p-2 aspect-square" variant="outline" onClick={() => (setNavbarOpen(!navbarOpen))}>
                        {navbarOpen
                            ? <X />
                            : <AlignRight />
                        }
                    </Button>
                </div>
                {navbarOpen && (
                    <div className="py-base border-b">

                        <div className="grid grid-cols-2 place-items-center gap-sm">
                            <Button variant="outline">Login</Button>
                            <Button>signup</Button>
                        </div>

                        <div className="mt-xl flex-center">
                            <div className="flex flex-col gap-sm w-fit">
                                <Button variant="secondary">Market</Button>
                                <Button variant="secondary">Listings</Button>
                                <Button variant="secondary">On Chain</Button>
                                <Button variant="secondary">About</Button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}
