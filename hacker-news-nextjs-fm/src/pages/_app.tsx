import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import Layout from "@/components/Lyout";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pageKey = router.asPath;

  const onExitComplete = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    //nitial={false} so framer-motion doen't animate the page on first load, resulting in flickering
    //Component has a unique key prop
    //Without this key property, framer-motion can't distinguish two separate pages that use the same component,
    // for example if /post-1 and /post-2 were both rendered by pages/[slug].tsx.
    <AnimatePresence
      mode="wait"
      onExitComplete={onExitComplete}
      initial={false} /*mode="popLayout"*/
    >
      <Layout>
        {" "}
        <Component {...pageProps} key={pageKey} />
      </Layout>
    </AnimatePresence>
  );
}
