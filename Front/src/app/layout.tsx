export const metadata = {
  title: "Sistema Contas Digitais",
  description: "Sistema para contas digitais",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
