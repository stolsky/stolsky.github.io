import {
    component$,
    useStylesScoped$
} from "@builder.io/qwik"

import Portrait from "../../../media/portrait2.jpg?jsx";
import styles from "./about.css?inline"

export default component$(() => {
    useStylesScoped$(styles)
    return <div class="About">
        <Portrait class="Portrait" />
        <div>
            <h1 class="MainTitle">Hi, I am <span class="Name">stolsky</span></h1>
            <h2 class="SubTitle">Full Stack Web Developer from Germany</h2>
            <ul class="SocialMediaLinks">
                <li class="Icon icon-mail4"></li>
                <li class="Icon icon-github"></li>
                <li class="Icon icon-youtube"></li>
            </ul>
        </div>
    </div>
})