"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import LinearProgress from "@mui/material/LinearProgress";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useTransition } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setLoading(true);
    startTransition(() => {
      const timer = setTimeout(() => setLoading(false), 800); // Simulate loading delay
      return () => clearTimeout(timer);
    });
  }, [pathname]);

  return (
    <>
      {/* Linear Progress Bar at the Top */}
      {(loading || isPending) && (
        <div className="fixed top-0 left-0 w-full z-[9999]">
          <LinearProgress color="primary" className="h-[3px]" />
        </div>
      )}

      {/* Backdrop with Circular Loader */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading || isPending}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}
