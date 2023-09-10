import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Footer from "./(client)/Components/Footer/Footer";
import Providers from "@/app/Providers";
import QueryProviders from "@/components/QueryProviders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReduxProvider from "@/utils/ReduxProvider";
import { Metadata } from "next";
import ClientNavbar from "@/app/(client)/Components/Navbar/Navbar";
import Options from "./lib/Options";
import AdminNavbar from "./(admin)/components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Hiraya",
  description: "Generated by create next app",
  icons: {
    icon: {
      url: "/favicon.ico",
      type: "image/ico",
    },
    shortcut: { url: "/favicon.ico", type: "image/ico" },
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      {/* <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <body className={inter.className}>
        <Providers session={session}>
          <ReduxProvider>
            <QueryProviders>
              <Options
                authComponent={<AdminNavbar />}
                noneAuthComponent={<ClientNavbar />}
              />
              {children}
              <Options noneAuthComponent={<Footer />} />
            </QueryProviders>
          </ReduxProvider>
        </Providers>
        <ToastContainer />
      </body>
    </html>
  );
}
