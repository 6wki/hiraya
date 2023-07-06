import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Footer from "./(client)/Components/Footer/Footer";
import ClientNavbar from "@/app/(client)/Components/Navbar/Navbar";
import AdminNavbar from "@/app/(admin)/components/Navbar/Navbar";
import Providers from "@/app/Providers";
import Options from "@/app/lib/Options";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers session={session}>
          <Options
            noneAuthComponent={<ClientNavbar />}
            authComponent={<AdminNavbar />}
          />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
