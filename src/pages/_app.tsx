import { AnimatePresence } from 'framer-motion';
import type { AppPropsWithLayout } from 'next/app';
import 'styles/style.scss';

const MyApp = ({ Component, pageProps, router }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <AnimatePresence exitBeforeEnter>
      <Component key={router.asPath} {...pageProps} />
    </AnimatePresence>,
  );
};

export default MyApp;
