import Head from 'next/head';
import Nav from '../nav';
import styles from './index.module.css';

const Layout = function({ children }) {

    return (
        <>
        <Head>
            <title>Phoenix Mee | Developer</title>
            <meta name="description" content="Phoenix Mee | Developer" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.container}>

            <header className={styles.header}>
                Header
            </header>

            <Nav/>

            <aside className={styles.asideLeft}>
                <div>
                    <h2>An aside</h2>
                </div>
            </aside>

            <main className={styles.main}>
                {children}
            </main>

            <aside className={styles.asideRight}>
                <div>
                    <h2>An aside</h2>
                </div>
            </aside>

        </div>
        </>
    );
};

export default Layout;