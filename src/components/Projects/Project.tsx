import { For, Show, createSignal } from "solid-js"

import type { Project } from "../../data/types"

export default (props: { data: Project }) => {
    const { name, image, video, type, tools, info, links } = props.data

    const [information_visible, set_information_visible] = createSignal(false)

    return (
        <div class="Project" onPointerUp={() => set_information_visible(!information_visible())}>
            <header>
                <h2 class="Title">{name}</h2>
                <h3 class="Subtitle">{type}</h3>
            </header>

            <div class="Button-3D">
                <div class="Front">
                    <p class="icon-info"/>
                </div>
                <div class="Back">
                    <p class="icon-cancel-circle"/>
                </div>
            </div>
            
            <div class="Content">
                <video
                    class="Preview"
                    poster={image}
                    preload="auto"
                    playsinline={true}
                    loop={true}
                >
                    <source
                        src={video}
                        type="video/webm"
                    />
                </video>

                <div class={`Information${information_visible() ? " Visible" : ""}`}>
                    <p class="Description">
                        {info}
                    </p>
                    <div class="Links">
                        <For each={links}>
                            {(link) => <a class="Link" href={link.url} target="Link">
                                <Show when={typeof link.icon === "string"}>
                                    <span class={`Icon icon-${link.icon}`} />
                                </Show>
                                <span class="Text">{link.text}</span>
                            </a>}
                        </For>
                    </div>
                </div>

            </div>

            <div class="Tools">
                <For each={tools}>
                    {(tool) => <p class="Tool">
                        <img class="Icon" src={tool.icon} alt="Icon" />
                        <span class="Text">{tool.name}</span>
                    </p>}
                </For>
            </div>

        </div>
    )
}