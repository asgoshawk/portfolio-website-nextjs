import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote';
import Prism from 'prismjs';
import Link from 'next/link';
import Head from 'next/head';
import { useEffect, useState } from 'react';

require('prismjs/components/prism-javascript')
require('prismjs/components/prism-css')
require('prismjs/components/prism-bash')
require('prismjs/components/prism-python')

const ProjectPage = ({ frontmatter: { cover_image, title, tags, excerpt }, slug, content }) => {

    const modifyLink = () => {
        const markdownDiv = document.getElementById('markdown')
        const links = markdownDiv.querySelectorAll('a')
        links.forEach((item) => {
            item.setAttribute('target', '_blank')
            item.setAttribute('rel', 'noopener noreferrer')
        })
    }

    useEffect(() => {
        Prism.highlightAll()
        modifyLink()
    }, [])

  return (
    <>
      <Head>
        <title>AsGoshawk | Projects</title>
      </Head>
      <div className='w-full min-h-screen flex flex-col items-center justify-start pt-12 pb-16'>
        <div className='relative w-full my-8 px-4 md:px-0 md:w-5/6 lg:w-4/5 md:max-w-3xl'>
          <Link href='/projects'>
            <a
              className='inline-block text-secondary dark:text-primary text-md px-5 py-2 5 mt-4 rounded-lg border-secondary dark:border-primary border-2 hover:text-surface dark:hover:text-background
             hover:bg-secondary dark:hover:bg-primary transition-all ease-in-out duration-800'
            >
              Go Back
            </a>
          </Link>
          {/* <img className='my-6 rounded-lg shadow-lg' src={cover_image} alt={slug + '-cover'} /> */}
          <h3 className='block mt-6 mb-4 text-4xl md:text-5xl font-thin text-slate-800 dark:text-gray-300'>
            {title}
          </h3>
          <div className='flex items-center flex-wrap mt-2 mb-8'>
            {tags.map((tag, index) => (
              <span
                key={index}
                className='mr-2 my-1 px-2.5 py-0.5 text-xs md:text-sm text-secondary dark:text-primary rounded
                                        bg-gray-300 dark:bg-slate-600 shadow-md'
              >
                {tag}
              </span>
            ))}
          </div>

            <article id="markdown" className='w-full prose dark:prose-invert text-slate-800 dark:text-gray-300 font-montserrat'>
                <MDXRemote {...content} />
            </article>
        </div>
      </div>
    </>    
  );
};  

export default ProjectPage;

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('projects'));

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(path.join('projects', slug + '.md'), 'utf-8');
  const { data: frontmatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);
//   console.log(mdxSource);
  return {
    props: {
      frontmatter,
      slug,
      content: mdxSource,
    },
  };
};

// export const getServerSideProps = async ({ params: { slug } }) => {
//     const markdownWithMeta = fs.readFileSync(path.join('projects', slug + '.md'), 'utf-8');    

//     const { data: frontmatter, content } = matter(markdownWithMeta);
//     return {
//       props: {
//         frontmatter,    
//         slug,
//         content,
//       },
//     };
// }
