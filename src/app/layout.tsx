import React from "react";
import { AppProviders } from "./_providers";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" style={{ scrollBehavior: "smooth" }}>
			<head>
				{/* eslint-disable-next-line @next/next/no-css-tags */}
				<link rel="stylesheet" href="/css/font-awesome.min.css" />
			</head>
			<body>
				<AppProviders>{children}</AppProviders>
			</body>
		</html>
	);
}
