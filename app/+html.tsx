import { ScrollViewStyleReset } from "expo-router/html";
import { type PropsWithChildren } from "react";

const APP_NAME = "Occultum";
const THEME_COLOR = "#3e4e63";

export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="de">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>{APP_NAME}</title>
        <meta
          name="description"
          content="Sprachen kodieren, dekodieren und eigene Alphabete verwalten."
        />
        <meta name="application-name" content={APP_NAME} />
        <meta name="theme-color" content={THEME_COLOR} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="default"
        />
        <meta name="apple-mobile-web-app-title" content={APP_NAME} />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        {/* iOS Safari zooms focused inputs when font-size is below 16px */}
        <style
          dangerouslySetInnerHTML={{
            __html: "input,textarea,select{font-size:16px!important}",
          }}
        />
        <ScrollViewStyleReset />
      </head>
      <body>{children}</body>
    </html>
  );
}
