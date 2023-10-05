import { For, createEffect, createSignal } from "solid-js"
import "./about.css"
import { use_active_page_context } from "../ActivePageContext"

export default (props: { id: number }) => {
    const carousel_items = [
        { id: 0, label: "libraries" },
        { id: 1, label: "frameworks" },
        { id: 2, label: "runtimes" }
    ]

    const [carousel_state, set_cariousel_state] = createSignal(0)
    const set_class_by_state = (state: number) => `Highlight ${carousel_state() === state ? "Active" : "Inactive"}`
    
    const { active_page } = use_active_page_context()
    let timer = 0
    createEffect(() => {
        console.log("create effect", timer)
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
            <div class="Portrait">
                <div class="Inner" style="background-image: url(./images/portrait2.jpg" />
            </div>
            <div>
                <h1 class="Title">Hi, I am <span class="Name">stolsky</span></h1>
                <h2 class="Header">a<span class="Highlight"> Full Stack Web Developer </span>from Germany</h2>
                <h2 class="Header">
                    I relish exploring
                    <span class="Highlight"> new languages </span>
                    and their<div class="Carousel">
                        <For each={carousel_items}>
                            {({ id, label}) => <div class={set_class_by_state(id)}>{label}</div>}
                        </For>
                    </div>
                </h2>
                <ul class="SocialMediaLinks">
                    <li class="Icon icon-mail4"></li>
                    <li class="Icon icon-github"></li>
                    <li class="Icon icon-youtube"></li>
                </ul>
            </div>
        </div>
    )
}
