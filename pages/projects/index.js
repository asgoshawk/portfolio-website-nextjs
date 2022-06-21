import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import matter from 'gray-matter'
import Head from "next/head"
import { sortByPriorityDesc } from '../../utils'

const projects = ({ projects }) => {
    // console.log(projects);
    return (
        <>
            <Head>
                <title>AsGoshawk | Projects</title>
            </Head>
            <div className="w-full min-h-screen flex flex-col items-center justify-start pt-12 pb-4">
                <div className="relative w-full my-8 px-4 md:px-0 md:w-5/6 lg:w-4/5 md:max-w-3xl">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

const ProjectCard = ({ project }) => {
    const { cover_image, title, tags, excerpt } = project.frontmatter
    return (
        <Link href={`/projects/${project.slug}`}>

            <a className="relative top-0 left-0 flex flex-col items-start rounded-xl my-8 bg-surface dark:bg-slate-700 shadow-md grayscale-[30%]
                      hover:shadow-lg hover:grayscale-0 hover:top-0.5 hover:left-0.5 transition-all duration-100 ease"
            >
                <img src={cover_image} alt={title} className="object-cover w-full h-56 md:h-80 rounded-t-xl" />
                <div className="flex flex-col justify-between p-4 md:p-8">
                    <h3 className="text-xl md:text-3xl text-slate-800 dark:text-gray-300">{title}</h3>
                    <div className="flex items-center flex-wrap my-2">
                        {tags && tags.map((tag, index) => (
                            <span
                                key={index}
                                className="mr-1 my-1 px-2.5 py-0.5 text-xs md:text-sm text-secondary dark:text-primary rounded
                             bg-gray-300  dark:bg-slate-600"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <p className="font-roboto text-sm md:text-base text-slate-700 dark:text-gray-400">
                        {excerpt}
                    </p>
                </div>
            </a>
        </Link>
    )
}

export default projects

export const getStaticProps = async () => {
    // Get files from the projects dir
    const files = fs.readdirSync(path.join('projects'))

    // Get slug and formatter from projects
    const projects = files.map(fileName => {
        // Create slug
        const slug = fileName.replace('.md', '')

        // Get fronmatter 
        const markdownWithMeta = fs.readFileSync(path.join('projects', fileName), 'utf-8')


        const { data: frontmatter } = matter(markdownWithMeta);
        return {
            slug,
            frontmatter
        }
    })
    // console.log(projects);

    return {
        props: {
            projects: projects.sort(sortByPriorityDesc)
        },
    }
} 