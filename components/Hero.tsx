"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Fraunces, Instrument_Serif } from "next/font/google";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { useContentLoaded } from "@/hooks/useContentLoaded";
import './Hero.css';

const fraunces = Fraunces({ 
  subsets: ['latin'], 
  weight: ['900'],
  style: ['normal']
})

const instrumentSerif = Instrument_Serif({
    weight: "400",
    subsets: ["latin"],
});

gsap.registerPlugin(CustomEase);

const MIN_DISPLAY_TIME = 4.5;

export default function Hero() {
    const counterRef = useRef<HTMLSpanElement>(null);
    const mountTime = useRef<number>(0);
    const [isFirstVisit, setIsFirstVisit] = useState(false);

    const isLoaded = useContentLoaded({ videoTimeout: 8000 });

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.localStorage.setItem("hasVisitedHero", "true");
        }

        if (sessionStorage.getItem("hasAnimationPlayed")) {
            // Animation has played before in this session, skip it.
            gsap.set(".hero", { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" });
            gsap.set(".progress-bar", { display: "none" });
            gsap.set(".header span", { y: "-8%" });
            return;
        }
        // This is the first visit, allow the animation to play.
        setIsFirstVisit(true);
    }, []);

    useEffect(() => {
        if (!isFirstVisit) return;

        CustomEase.create("custom", ".87,0,.13,1");

        mountTime.current = performance.now();
        const tl = gsap.timeline();

        tl.to(".hero", {
            clipPath: "polygon(0% 45%, 25% 45%, 25% 55%, 0% 55%)",
            duration: 1.5,
            ease: "custom",
            delay: 1,
        }).to(".hero", {
            clipPath: "polygon(0% 45%, 100% 45%, 100% 55%, 0% 55%)",
            duration: 2,
            ease: "custom",
        }, "-=0.4").to(".progress-bar", {
            width: "100vw",
            duration: 2,
            ease: "custom",
        }, "<");

        if (counterRef.current) {
            tl.to(counterRef.current, {
                innerHTML: 90,
                duration: 2,
                ease: "custom",
                snap: { innerHTML: 1 },
            }, "<");
        }
    }, [isFirstVisit]);

    const triggerReveal = useCallback(() => {
        gsap.to(".hero", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1,
            ease: "custom",
            onStart: () => gsap.to(".progress-bar", { opacity: 0, duration: 0.3 }),
        });
        gsap.to(".header span", {
            y: "-8%",
            duration: 1,
            stagger: 0.125,
            ease: "power3.out",
            delay: 0.75,
        });
        sessionStorage.setItem("hasAnimationPlayed", "true");
    }, []);

    useEffect(() => {
        if (!isLoaded || !isFirstVisit) return;

        const elapsedS = (performance.now() - mountTime.current) / 1000;
        const remainingS = Math.max(0, MIN_DISPLAY_TIME - elapsedS);

        const completeAnimation = () => {
            if (counterRef.current) {
                gsap.to(counterRef.current, {
                    innerHTML: 100,
                    duration: 0.6,
                    ease: "custom",
                    snap: { innerHTML: 1 },
                    onComplete: triggerReveal,
                });
            }
        };

        const delayedCall = gsap.delayedCall(remainingS, completeAnimation);

        return () => {
            delayedCall.kill();
        };
    }, [isLoaded, isFirstVisit, triggerReveal]);

    return (
        <div className="hero">
            <div className="progress-bar uppercase">
                <p>loading</p>
                <p>
                    /<span ref={counterRef}>0</span>
                </p>
            </div>

            <nav>
                <div>
                    <span className={`${fraunces.className} text-[#3A4A16] text-2xl`}>Shaurya Singh</span>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <Link href="/" className="flex gap-1 text-[#3A4A16] font-medium"><span>•</span><span>Home</span></Link>
                    <Link href="/work">Works</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            </nav>

            <div className={`header text-[#3A4A16] ${instrumentSerif.className}`}>
                <h1>
                    <span>I build responsive web applications, solve</span>
                </h1>
                <h1>
                    <span>algorithmic challenges, and</span>
                </h1>
                <h1>
                    <span>continuously explore new technologies.</span>
                </h1>
            </div>

            <div className="badge-container w-full flex justify-center items-center">
                <div className="badge rounded-full border border-[#3A4A16] text-center text-[#3A4A16] p-6">
                    Web Developer
                </div>
            </div>
        </div>
    );
}
