import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  useMatches,
  useNavigation
} from "@remix-run/react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Spinner from "../ui/Spinner";

export function Document({ children }) {
  const matches = useMatches();

  const disableJS = matches.some((match) => match.handle?.disableJS);

  const navigation = useNavigation();
  const isLoading = navigation.state !== 'idle';

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {isLoading && <Spinner />}
        {children}
        <Footer />
        <ScrollRestoration />
        {!disableJS && (
          <>
            <Scripts />
            <script
              src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js"
              integrity="sha256-gOQJIa9+K/XdfAuBkg2ONAdw5EnQbokw/s2b8BqsRFg="
              crossOrigin="anonymous"
            ></script>
          </>
        )}
        <LiveReload />
      </body>
    </html>
  );
}
