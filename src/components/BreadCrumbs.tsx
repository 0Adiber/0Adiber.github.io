import { Link } from 'gatsby';
import React from 'react';
import path from 'path';
import * as style from './BreadCrumbs.module.scss';

interface BreadCrumbsProps {
    links: { [name: string]: string, };
};

const BreadCrumbs = ({ links }: BreadCrumbsProps) => {

    return (
        <div className={style.root}>
            {Object.keys(links).map(l => <div>/<Link to={l}>{links[l]}</Link></div>)}
        </div>
    );
};

export default BreadCrumbs;