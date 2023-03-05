import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import * as style from './entry.module.scss';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BreadCrumbs from '../components/BreadCrumbs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { marked } from 'marked';

const Post = ({ data, location, }) => {
  const post = data.markdownRemark;
  const links: { [url: string]: string } = {
    '/': 'Home',
    '/projects': 'Projects',
  };
  const [readme, setReadme] = useState('');

  links[location.pathname] = post.frontmatter.title;

  const githubLink = post.frontmatter.ref ? `https://github.com/${post.frontmatter.ref}` : '';

  useEffect(() => {
    
    fetch(`https://api.github.com/repos/${post.frontmatter.ref}/readme?ref=${post.frontmatter.branch}`)
    .then(response => response.json())
    .then(data => {
        const decodedContent = data.content;
        setReadme(marked(atob(decodedContent)).replace(/src=["'](?!https?:\/\/)(\/|\.{0,2}\/.*?|.*?\/.*?)["']/g, `src="https://github.com/${post.frontmatter.ref}/raw/${post.frontmatter.branch}/$1"`));
    })
    .catch(err => console.error(err))

  }, []);

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
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className={style.entryIcon} icon={faGithub} />
            </a>
          </div>
          {
            post.frontmatter.coverImage
              ? <img src={post.frontmatter.coverImage.childImageSharp.fluid.src} />
              : <></>
          }
        </div>
        <hr />
        
        <div className={style.readme}>
            {
            readme
            ? <div dangerouslySetInnerHTML={{ __html: readme }} />
            : <div dangerouslySetInnerHTML={{ __html: post.html }} />
            }
        </div>
        
      </Header>
      <Footer />
    </>
  );
};

export default Post;

export const query = graphql`
    query ProjectQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                ref
                branch
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