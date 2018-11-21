import React from 'react';
import Link from 'next/link';


const CopyrightFoot = () => (
    <div className="copyright-footer">
        <span>
            © 2018 Copyright:
        </span>
        <Link href="/">
            <a>unmapped.io</a>
        </Link>
    </div>
);

export default CopyrightFoot;