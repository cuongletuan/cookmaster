"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useMemo} from "react";
import { Suspense } from "react";

export default function TanStackClient({ children }: { children: React.ReactNode }) {
  const queryClient = useMemo(() => new QueryClient(),[]);

  return <Suspense fallback={<p className="text-center text-primary">Loading...</p>}><QueryClientProvider client={queryClient}>{children}</QueryClientProvider></Suspense>;
}