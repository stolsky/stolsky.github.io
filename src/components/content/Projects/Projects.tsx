import { For } from "solid-js";
import Project from "./Project";

import projects from "./projects";
import "./projects.css"

// TODO add filterering by tools -> icon + name + number of available "items"
export default (props: { id: number }) => {
    return (
        <div class="Projects">
            <div class="Overview">
                <For each={projects}>
                    {(data) => <Project data={data} />}
                </For>
            </div>
        </div>
    )
}