"use client";

import { theme } from "@/components";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const client = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			staleTime: Infinity,
			retry: false,
		},
	},
});

export function AppProviders({ children }: { children: React.ReactNode }) {
	return (
		<QueryClientProvider client={client}>
			<CacheProvider>
				<ChakraProvider theme={theme}>{children}</ChakraProvider>
			</CacheProvider>
		</QueryClientProvider>
	);
}
