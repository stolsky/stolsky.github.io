type Tool = {
    readonly name: string,
    readonly icon: string,
    readonly link: string
}

type ProjectLink = {
    text: string
    icon?: string
    url: string
}

type Project = {
    readonly name: string
    readonly image: string
    readonly video?: string
    readonly info: string
    readonly type: string
    readonly tools: Tool[]
    readonly links: ProjectLink[]
}

// TODO later use icon link via: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firefox/firefox-original.svg
const Available_Tools: Record<string, Tool> = {
    astro: {
        name: "Astro",
        icon: "/images/icons/astro-original.svg",
        link: "https://astro.build/"
    },
    d3js: {
        name: "D3",
        icon: "/images/icons/d3js-original.svg",
        link: "https://d3js.org/"
    },
    deno: {
        name: "Deno",
        icon: "/images/icons/denojs-original.svg",
        link: "https://deno.com/"
    },
    fresh: {
        name: "Fresh",
        icon: "/images/icons/fresh-original.svg",
        link: "https://fresh.deno.dev/"
    },
    javascript: {
        name: "JavaScript",
        icon: "/images/icons/javascript-original.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    nodejs: {
        name: "Node.js",
        icon: "images/icons/nodejs-original.svg",
        link: "https://nodejs.org/en"
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

const ProjectType = {
    data_visualization: "Data Visualization",
    game_design: "Game Design",
    simulation: "Simulation",
    web_design: "Web Design"
} as const;

export {
    type Project,
    type ProjectLink,
    type Tool,
    ProjectType,
    Available_Tools as Tools
}