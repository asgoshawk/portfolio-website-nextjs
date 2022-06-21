export const sortByDateDesc = (a, b) => {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
}

export const sortByPriorityDesc = (a, b) => {
    return b.frontmatter.priority - a.frontmatter.priority
}