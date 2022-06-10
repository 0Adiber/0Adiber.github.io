import React from 'react';
import BreadCrumbs from '../components/BreadCrumbs';
import Footer from '../components/Footer';
import MainHeader from '../components/MainHeader';
import { graphql, Link } from 'gatsby';
import style from './projects.module.scss';

const Projects = ({ data, }) => {
    const posts = data.allMarkdownRemark.nodes;

    return (
        <>
            <MainHeader hideHeader>
                <BreadCrumbs links={{
                    '/': 'Home',
                    '/projects': 'Projects',
                }} />
                <h1>Projects</h1>
                <div className={style.entry}>
                    {posts.map(p => 
                        <Link to={p.fields.slug} className={style.entry}>
                            <h3>
                                {p.frontmatter.title}
                            </h3>
                            <p>{p.frontmatter.desc}</p>
                        </Link>)}
                </div>
            </MainHeader>
            <Footer />
        </>
    );
}

export default Projects;

export const query = graphql`
    {
        allMarkdownRemark {
            nodes {
                frontmatter {
                    title
                    desc
                }
                fields {
                    slug
                }
            }
        }
    }
`;