import { For } from "solid-js"
import type { ProjectLink } from "./types"

interface Props {
    info: string
    links: ProjectLink[]
}

export default (props: Props) => {
    const { info, links } = props
    return (
        <div class="Face Back">
            <p class="Info">{info}</p>
            <div class="Links">
                <For each={links}>
                    {(link) => <a href={link.url} target="Link"><span class={`Icon icon-${link.icon}`} /><span>{link.text}</span></a>}
                </For>
            </div>

        </div>
    )
}