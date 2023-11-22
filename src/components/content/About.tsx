import { For, createEffect, createSignal } from "solid-js"

import { Zone } from "../layout/structure"
import { use_active_page_context } from "../layout/ActivePageContext"

import "./about.css"

export default (props: { id: number }) => {
    const carousel_items = [
        { id: 0, label: "libraries" },
        { id: 1, label: "frameworks" },
        { id: 2, label: "runtimes" }
    ]

    const [carousel_state, set_cariousel_state] = createSignal(0)
    const set_class_by_state = (state: number) => `Highlight ${carousel_state() === state ? "Active" : "Inactive"}`
    
    const { active_page, set_active_page } = use_active_page_context()
    let timer = 0
    createEffect(() => {
        if (active_page() === props.id) {
            timer = setInterval(
                () => set_cariousel_state((carousel_state() + 1) % carousel_items.length),
                5000
            )
        } else if (timer !== 0) {
            clearInterval(timer)
        }
    })
    
    return (
        <div class="About">
            <div>
                <div class="Portrait">
                    <div class="Inner" style="background-image: url(./images/portrait2.jpg" />
                </div>
                <div class="SocialMediaLinks">
                    <a href=""><span class="Icon icon-mail4" /></a>
                    <a href=""><span class="Icon icon-github" /></a>
                    <a href=""><span class="Icon icon-youtube" /></a>
                </div>
            </div>
            <div>
                <h1 class="Title">Hi, I am <span class="Name">stolsky</span></h1>
                <h2 class="Header">a<span class="Highlight"> Full <span class="Icon icon-stack" style={{ "font-size": "3rem", "vertical-align": "text-bottom" }} /> Developer </span>from Germany</h2>
                <h2 class="Header">
                    I relish exploring<span class="Highlight"> new languages </span>and their<p class="Carousel">
                        <For each={carousel_items}>
                            {({ id, label}) => <span class={set_class_by_state(id)}>{label}</span>}
                        </For>
                    </p>
                </h2>
                <button class="CallToAction" onPointerUp={() => set_active_page(Zone.Left.index) }>Explore</button>
            </div>
        </div>
    )
}
