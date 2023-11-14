const ProjectType = {
    data_visualization: "Data Visualization",
    game_design: "Game Design",
    simulation: "Simulation",
    web_design: "Web Design"
} as const;

interface Tool {
    readonly name: string,
    readonly icon: string,
    readonly link: string
} 

const Tools: Record<string, Tool> = {
    astro: {
        name: "Astro",
        icon: "/images/icons/astro-original.svg", // TODO later use online link https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firefox/firefox-original.svg
        link: "https://astro.build/"
    },
    d3js: {
        name: "D3",
        icon: "/images/icons/d3js-original.svg",
        link: "https://d3js.org/"
    },
    javascript: {
        name: "JavaScript",
        icon: "/images/icons/javascript-original.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    solidjs: {
        name: "Solid",
        icon: "/images/icons/solidjs-original.svg",
        link: "https://www.solidjs.com/"
    },
    typescript: {
        name: "TypeScript",
        icon: "/images/icons/typescript-original.svg",
        link: "https://www.typescriptlang.org/"
    },
    vitejs: {
        name: "Vite",
        icon: "/images/icons/vitejs-original.svg",
        link: "https://vitejs.dev/"
    }
} as const

interface ProjectLink {
    phrase: string
    icon?: string
    url: string
}

interface Project {
    readonly name: string
    readonly image: string
    readonly info: string
    readonly type: string
    readonly tools: Tool[]
    readonly links: ProjectLink[]
}

export {
    type Project,
    type ProjectLink,
    type Tool,
    ProjectType,
    Tools
}