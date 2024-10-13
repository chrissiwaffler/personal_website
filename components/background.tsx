"use client";

import { usePathname } from "next/navigation";
import Meteors from "./ui/meteors";

export function Background() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
      {isHomePage && (
        <div className="fixed inset-0 z-[-1]">
          <Meteors number={10} />
        </div>
      )}
    </>
  );
}
