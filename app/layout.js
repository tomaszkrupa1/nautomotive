import "./globals.css";

export const metadata = {
  title: "nautomotive",
  description: "Empty website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
