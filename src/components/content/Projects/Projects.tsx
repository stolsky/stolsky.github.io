import { For } from "solid-js";
import Front from "./Front";
import Back from "./Back";

import projects from "./projects";
import "./projects.css"

export default (props: { id: number }) => {
    return (
        <div class="Projects">
            <div class="Overview">
                <For each={projects}>
                    {({name, image, tools, type, info, links}) => 
                        <div class="Card">
                            <div class="Content">
                                <Front name={name} image={image} type={type} tools={tools} />
                                <Back info={info} links={links} />
                            </div>
                        </div>
                    }
                </For>
            </div>
        </div>
    )
}