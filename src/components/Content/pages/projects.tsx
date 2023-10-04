import {
    component$,
    useStylesScoped$
} from "@builder.io/qwik"
import Card from "./card"

import styles from "./projects.css?inline"

interface Project {
    readonly id: number
    readonly title: string
    readonly image: string
    readonly demo: string
    readonly link: string
    readonly tech: string
    readonly descr: string
}

const projects: readonly Project[] = [
    {
        id: 1,
        title: "Popular Baby Names",
        image: "screenshot-aloaa.png",
        demo: "",
        link: "",
        tech: "",
        descr: ""
    },
    {
        id: 2,
        title: "Generate and Solve Mazes",
        image: "screenshot-aloaa.png",
        demo: "",
        link: "",
        tech: "",
        descr: ""
    },
    {
        id: 3,
        title: "Election Results Map",
        image: "screenshot-aloaa.png",
        demo: "",
        link: "",
        tech: "",
        descr: ""
    },
    {
        id: 4,
        title: "Broken Sword 2",
        image: "screenshot-aloaa.png",
        demo: "",
        link: "",
        tech: "",
        descr: ""
    },
    {
        id: 5,
        title: "ALoAA",
        image: "screenshot-aloaa.png",
        demo: "",
        link: "",
        tech: "",
        descr: ""
    },
    {
        id: 6,
        title: "ALoAA",
        image: "screenshot-aloaa.png",
        demo: "",
        link: "",
        tech: "",
        descr: ""
    },
    {
        id: 7,
        title: "ALoAA",
        image: "screenshot-aloaa.png",
        demo: "",
        link: "",
        tech: "",
        descr: ""
    },
    {
        id: 8,
        title: "ALoAA",
        image: "screenshot-aloaa.png",
        demo: "",
        link: "",
        tech: "",
        descr: ""
    },
    {
        id: 9,
        title: "ALoAA",
        image: "screenshot-aloaa.png",
        demo: "",
        link: "",
        tech: "",
        descr: ""
    },
    {
        id: 10,
        title: "ALoAA",
        image: "screenshot-aloaa.png",
        demo: "",
        link: "",
        tech: "",
        descr: ""
    }
]

// http://findmatthew.com/
export default component$(() => {
    useStylesScoped$(styles)
    return <div class="Projects">Projects
        {/* {projects.map((card) => {
            return <Card key={`Project${card.id}`} card={card} />
        })} */}
    </div>
})

export {
    type Project
}