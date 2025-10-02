import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/rbc-logo.png" />
        {/* other head tags */}
      </head>
      <body>{children}</body>
    </html>
  );
}