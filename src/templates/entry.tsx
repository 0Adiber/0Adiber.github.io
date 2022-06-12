import React from 'react';
import { graphql } from 'gatsby';
import * as style from './entry.module.scss';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BreadCrumbs from '../components/BreadCrumbs';

const Post = ({ data, location, }) => {
    const post = data.markdownRemark;

    const links: { [url: string]: string } = {
        '/': 'Home',
        '/projects': 'Projects',
    };
    links[location.pathname] = post.frontmatter.title;

    return (
        <>
            <Helmet>
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@Adiber" />
                <meta name="twitter:title" content={post.frontmatter.title} />
                <meta name="twitter:description" content={post.frontmatter.desc} />
                {
                    post.frontmatter.coverImage
                    ? <meta name="twitter:image" content={post.frontmatter.coverImage.childImageSharp.fluid.src} />
                    : <></>
                }
            </Helmet>
            <Header hideHeader>
                <BreadCrumbs links={links} />
                <div className={style.heading}>
                    <div>
                        <h1>{post.frontmatter.title}</h1>
                        <h6>{post.frontmatter.desc}</h6>
                    </div>
                    {
                        post.frontmatter.coverImage
                        ? <img src={post.frontmatter.coverImage.childImageSharp.fluid.src} />
                        : <></>
                    }
                </div>
                <hr />
                <div dangerouslySetInnerHTML={{ __html: post.html, }}></div>
            </Header>
            <Footer />
        </>
    );
};

export default Post;

export const query = graphql`
    query ProjectQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                ref
                desc
                coverImage {
                    childImageSharp {
                        fluid {
                            src
                        }
                    }
                }
            }
        }
    }
`;