import Layout from '../components/layout/index.js';
import '../styles/globals.css';

const MyApp = function ({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
