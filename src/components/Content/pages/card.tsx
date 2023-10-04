import { component$ } from "@builder.io/qwik"
import { type Project } from "./projects"

interface CardProps {
    card: Project
}

export default component$<CardProps>((props) => {
    const { title, image, demo, link, tech, descr } = props.card
    return <div class="Card" >
        <h3>{title}</h3>
        <img src={`projects/${image}`} alt="Screenshot" />
        <p></p>
    </div>
})

export {
    type CardProps
}
