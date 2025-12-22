"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import FullScreenLoader from "../components/FullScreenLoader";

export default function PageLoader({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 300)
    }

    if (document.readyState === "complete") {
      handleLoad()
    } else {
      window.addEventListener("load", handleLoad)
      return () => window.removeEventListener("load", handleLoad)
    }
  }, [])

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false)
    }, 500)

    return () => clearTimeout(timeout);
  }, [pathname])

  return (
    <>
      {loading && <FullScreenLoader />}
      <div
        className={`transition-opacity duration-300 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </>
  )
}
