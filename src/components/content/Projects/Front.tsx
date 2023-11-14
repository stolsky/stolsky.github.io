import { For } from "solid-js"
import type { Tool } from "./types"

interface Props {
    name: string,
    image: string,
    type: string,
    tools: Tool[]
}

export default (props: Props) => {
    const { name, image, type, tools } = props
    return (
        <div class="Face Front">
            <div class="Background" style={`background-image: url(${image})`} />
            <div class="Title">
                <p class="Name">{name}</p>
                <p class="Type">{type}</p>
            </div>
            <div class="Tools">
                <For each={tools}>
                    {(tool) => <a href={tool.link}><img src={tool.icon} /></a>}
                </For>
            </div>
        </div>
    )
}