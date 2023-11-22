import { For } from "solid-js"
import type { ProjectTools, Tool } from "./types"

interface Props {
    name: string,
    image: string,
    video: string | undefined,
    type: string,
    tools: ProjectTools
}

const flatten_tools = (project_tools: ProjectTools): Tool[] => {
    const flattened_tools = [] as Tool[]

    if (project_tools.runtime !== undefined) {
        flattened_tools.push(project_tools.runtime)
    }

    if (project_tools.language !== undefined) {
        flattened_tools.push(project_tools.language)
    }

    if (project_tools.frameworks !== undefined) {
        project_tools.frameworks.forEach((framework) => flattened_tools.push(framework))
    }

    if (project_tools.libraries !== undefined) {
        project_tools.libraries.forEach((library) => flattened_tools.push(library))
    }

    return flattened_tools
}

export default (props: Props) => {

    const { name, image, video, type, tools } = props
    const flattened_tools = flatten_tools(tools)

    return (
        <div class="Face Front">
            <video src={video} poster={image} autoplay={true} loop={true} controls={false} />
            <div class="Title">
                <p class="Name">{name}</p>
                <p class="Type">{type}</p>
            </div>
            <div class="Tools">
                <For each={flattened_tools}>
                    {(tool) => <p><img src={tool.icon} /></p>}
                </For>
            </div>
            
        </div>
    )
}