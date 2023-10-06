import { type StructureItem } from './structure'
import { ActivePageProvider } from './ActivePageContext'
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
                    ({id, zone, label, color}) => <Page zone={zone} label={label} color={color}>
                        <Switch>
                            <Match when={zone.index === 0}><About id={id} /></Match>
                            <Match when={zone.index === 1}><Skills id={id} /></Match>
                            <Match when={zone.index === 2}><Contact id={id} /></Match>
                            <Match when={zone.index === 3}><Projects id={id} /></Match>
                        </Switch>
                    </Page>
                }</For>
            </ActivePageProvider>
        </main>
    )
}