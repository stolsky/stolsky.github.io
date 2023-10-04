import "./about.css"
export default () => {
    return (
        <div class="About">
            <div class="Portrait" style="background-image: url(/images/portrait2.jpg" />
            <div>
                <h1 class="MainTitle">Hi, I am <span class="Name">stolsky</span></h1>
                <p>a<span class="Highlight"> Full Stack Web Developer </span>from Germany</p>
                <p>
                    I relish exploring
                    <span class="Highlight"> new languages, runtimes </span>
                    and<span class="Highlight"> frameworks</span>
                </p>
                <ul class="SocialMediaLinks">
                    <li class="Icon icon-mail4"></li>
                    <li class="Icon icon-github"></li>
                    <li class="Icon icon-youtube"></li>
                </ul>
            </div>
        </div>
    )
}
