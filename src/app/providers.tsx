"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
const queryClient = new QueryClient();

const PreLoadQueries = () => {
  return <></>;
};

export function Providers({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <PreLoadQueries />
      {children}
    </QueryClientProvider>
  );
}
