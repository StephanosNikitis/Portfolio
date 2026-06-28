"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const HERO_PATHNAME = "/";

export default function FirstVisitRedirectProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const hasVisitedHero = window.localStorage.getItem("hasVisitedHero") === "true";

    if (!hasVisitedHero && pathname !== HERO_PATHNAME) {
      router.replace(HERO_PATHNAME);
      return;
    }

    setChecked(true);
  }, [pathname, router]);

  return <>{checked ? children : null}</>;
}
