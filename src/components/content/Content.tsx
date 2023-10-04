import { type StructureItem } from './structure'
import { ActivePageProvider } from './ActivePage'
import Page from "./Page"
import About from './pages/About'

import "./content.css"
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { For, Match, Switch } from 'solid-js'

export default (props: { items: StructureItem[] }) => {
    const { items } = props
    return (
        <main>
            <ActivePageProvider init_page={0}>
                <For each={items}>{
                    ({zone, label, color}) => <Page zone={zone} label={label} color={color}>
                        <Switch>
                            <Match when={zone.index === 0}><About /></Match>
                            <Match when={zone.index === 1}><Skills /></Match>
                            <Match when={zone.index === 2}><Projects /></Match>
                            <Match when={zone.index === 3}><Contact /></Match>
                        </Switch>
                    </Page>
                }</For>
            </ActivePageProvider>
        </main>
    )
}