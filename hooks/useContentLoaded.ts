"use client";

import { useEffect, useState } from "react";

interface UseContentLoadedOptions {
    videoTimeout?: number;
}

export function useContentLoaded({
    videoTimeout = 8000,
}: UseContentLoadedOptions = {}): boolean {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        let cancelled = false;

        async function waitForEverything(): Promise<void> {
            const domReady = new Promise<void>((resolve) => {
                if (document.readyState === "complete") {
                    resolve();
                } else {
                    window.addEventListener("load", () => resolve(), {
                        once: true,
                    });
                }
            });

            const fontsReady: Promise<void> = document.fonts.ready.then(
                () => undefined
            );

            const videoPromises: Promise<void>[] = Array.from(
                document.querySelectorAll<HTMLVideoElement>("video")
            ).map(
                (video): Promise<void> =>
                    new Promise<void>((resolve) => {
                        if (video.readyState >= 3) {
                            resolve();
                            return;
                        }

                        const onReady = (): void => {
                            clearTimeout(fallbackTimer);
                            resolve();
                        };

                        video.addEventListener("canplaythrough", onReady, {
                            once: true,
                        });

                        const fallbackTimer = setTimeout(() => {
                            video.removeEventListener(
                                "canplaythrough",
                                onReady
                            );
                            resolve();
                        }, videoTimeout);
                    })
            );

            await Promise.all([domReady, fontsReady, ...videoPromises]);

            if (!cancelled) setIsLoaded(true);
        }

        waitForEverything();

        return () => {
            cancelled = true;
        };
    }, [videoTimeout]);

    return isLoaded;
}