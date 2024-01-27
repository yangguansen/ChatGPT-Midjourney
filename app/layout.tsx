/* eslint-disable @next/next/no-page-custom-font */
import "./styles/globals.scss";
import "./styles/markdown.scss";
import "./styles/highlight.scss";
import { getClientConfig } from "./config/client";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "ChatGPT-Midjourney",
  description: "Your personal ChatGPT+Midjourney Chat Bot.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#151515" },
  ],
  appleWebApp: {
    title: "ChatGPT-Midjourney",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Google Tag Manager --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GTM-PQFRBKQD"></script>
        <script dangerouslySetInnerHTML={{
          __html:`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                      
                        gtag('config', 'GTM-PQFRBKQD');
                        `,
        }} />
        {/* <!-- End Google Tag Manager -->  */}
        <meta name="config" content={JSON.stringify(getClientConfig())} />
        <link rel="manifest" href="/site.webmanifest"></link>
        <script src="/serviceWorkerRegister.js" defer></script>
      </head>
      <body>
      {/* <!-- Google Tag Manager (noscript) --> */}
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PQFRBKQD"
                        height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
      {/* <!-- End Google Tag Manager (noscript) --> */}
      {children}
      </body>
    </html>
  );
}
