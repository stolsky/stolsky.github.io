import { createSignal } from "solid-js";

import Front from "./Front";
import Back from "./Back";
import type { Project } from "./types";

export default (props: { data: Project }) => {

    const { name, image, video, type, tools, info, links } = props.data

    const [isRotated, setIsRotated] = createSignal(false)

    // TODO ADD FILTER BAR to the right side
    // NECESSARY ?? UI/UX what should clicks on tools do -> filter only those tool -> highlight tool in filter bar
    // NECESSARY ?? UI/UX click on title -> filter by sub title -> highlight type in filter bar

    // TODO add flip button with tooltip show "more information"
    // TODO hover small animation on flip button (zoom-in-out / wiggle / etc..)
    // TODO animation/hover effect on links front & backside
    return (
        <div class={`Card${isRotated() ? " Rotated" : ""}`} onPointerUp={(event) => { console.log(event); setIsRotated(!isRotated()); }}>
            <div class="Content">
                <Front name={name} image={image} video={video} type={type} tools={tools} />
                <Back info={info} links={links} />
            </div>
        </div>
    )
}