import Head from "next/head";
import "@styles/index.css";
import { FooterPage, SectionImgFooter } from "@components/footercomponents/index";
import { montserrat } from "../fonts/fonts";
import { MobilNav } from "@components/navcomponents/MobilNav";
import { NavDesk } from "@components/navcomponents/NavDesk";
import { FloatButton } from "@components/FloatButton"; 

export const metadata = {
  title: "Forzar Agro | Innovación y Tecnología",
  description: "Implementos agrícolas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" type="image/png" sizes="30x30" href="/images/logoforzar.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,400,0,0"
        />
      </Head>

      <body className={`${montserrat.className} antialiased`}>
        <MobilNav /> 
        <NavDesk />
        {children}
        <SectionImgFooter />
        <FooterPage />
        <FloatButton /> 
      </body>
    </html>
  );
}
