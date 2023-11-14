import { type Project, ProjectType, Tools } from "./types";

const projects: Project[] = [
    {
        name: "Generate and Solve Mazes",
        image: "",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie consectetur efficitur. Pellentesque vel ipsum lorem. Aliquam at pulvinar arcu. Mauris vestibulum vulputate tempus. Curabitur augue odio, placerat at pretium eu, maximus sed arcu.",
        type: ProjectType.simulation,
        tools: [Tools.typescript, Tools.vitejs],
        links: [
            { phrase: "view source code", icon: "github", url: "https://github.com/stolsky/generate-and-solve-mazes" }
        ]
    },
    {
        name: "Popular Baby Names",
        image: "/images/screenshots/popular-baby-names.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie consectetur efficitur. Pellentesque vel ipsum lorem. Aliquam at pulvinar arcu. Mauris vestibulum vulputate tempus. Curabitur augue odio, placerat at pretium eu, maximus sed arcu.",
        type: ProjectType.data_visualization,
        tools: [Tools.typescript, Tools.vitejs, Tools.d3js],
        links: [
            { phrase: "view source code", icon: "github", url: "https://github.com/stolsky/popular-baby-names" }
        ]
    },
    {
        name: "Portfolio",
        image: "",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie consectetur efficitur. Pellentesque vel ipsum lorem. Aliquam at pulvinar arcu. Mauris vestibulum vulputate tempus. Curabitur augue odio, placerat at pretium eu, maximus sed arcu.",
        type: ProjectType.web_design,
        tools: [Tools.typescript, Tools.astro, Tools.solidjs],
        links: [
            { phrase: "view source code", icon: "github", url: "https://github.com/stolsky/stolsky.github.io" }
        ]
    },
    {
        name: "ALoAA",
        image: "",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie consectetur efficitur. Pellentesque vel ipsum lorem. Aliquam at pulvinar arcu. Mauris vestibulum vulputate tempus. Curabitur augue odio, placerat at pretium eu, maximus sed arcu.",
        type: ProjectType.simulation,
        tools: [Tools.javascript],
        links: [
            { phrase: "view source code", icon: "github", url: "https://github.com/stolsky/ALoAA" }
        ]
    },
    {
        name: "Election Results Map",
        image: "",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie consectetur efficitur. Pellentesque vel ipsum lorem. Aliquam at pulvinar arcu. Mauris vestibulum vulputate tempus. Curabitur augue odio, placerat at pretium eu, maximus sed arcu.",
        type: ProjectType.data_visualization,
        tools: [Tools.javascript, Tools.d3js],
        links: [
            { phrase: "view source code", icon: "github", url: "https://github.com/stolsky/election-results-map" }
        ]
    },
    {
        name: "The Smoking Mirror",
        image: "",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie consectetur efficitur. Pellentesque vel ipsum lorem. Aliquam at pulvinar arcu. Mauris vestibulum vulputate tempus. Curabitur augue odio, placerat at pretium eu, maximus sed arcu.",
        type: ProjectType.game_design,
        tools: [Tools.javascript],
        links: [
            { phrase: "view source code", icon: "github", url: "https://github.com/stolsky/the-smoking-mirror" }
        ]
    }
]

export default projects