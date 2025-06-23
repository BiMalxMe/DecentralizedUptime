"use client"
import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
  } from '@clerk/nextjs'

export const Appbar = () => {
    return (
        <div className='flex justify-around items-center p-4'>
            <div>Dec Uptime</div>
            <div>
                <SignedOut >
                    <SignInButton />
                    <SignUpButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    )
}