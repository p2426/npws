import Link from 'next/link';
import React from 'react';
import Config from '../../configs/nav';
import styles from './index.module.css';

const Nav = function() {
    return (
        <nav className={styles.nav}>
            {Config.links.map((link, i) => {
            return (
                <React.Fragment key={i}>
                    <Link href={link.href}>
                        <a className={styles.link}>{link.text}</a>
                    </Link>
                    {i !== Config.links.length - 1 && <span className={styles.separator}>/</span>}
                </React.Fragment>
            )}
        )}
        </nav>
    );
}

export default Nav;