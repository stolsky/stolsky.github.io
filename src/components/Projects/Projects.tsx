import { For } from "solid-js";
import Project from "./Project";

import projects from "../../data/projects";
import "./projects.css"

export default (props: { }) => {
    return (
        <div class="Projects">
            <For each={projects}>
                {(data) => <Project data={data} />}
            </For>
        </div>
    )
}