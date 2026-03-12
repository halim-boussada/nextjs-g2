import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Im the special login",
  description: "this is the special descreption",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
