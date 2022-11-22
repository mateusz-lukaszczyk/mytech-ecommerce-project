import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "../assets/styles/globals.css";
import Layout from "../components/layout/Layout";
import Loader from "../components/loader/Loader";

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", (url) => {
      setIsLoading(true);
    });
    router.events.on("routeChangeComplete", (url) => {
      setIsLoading(false);
    });
    router.events.on("routeChangeError", (url) => {
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
