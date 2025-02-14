import "../styles/globals.css";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
