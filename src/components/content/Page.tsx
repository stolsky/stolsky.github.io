import type { JSXElement } from 'solid-js'
import { type Zone } from './structure'
import { useActivePageContext } from './ActivePage'

interface PageProps {
    children: JSXElement

    zone: Zone
    label: string
    color: {
        light: string,
        dark: string
    }
}

export default (props: PageProps) => {
    const { activePage, setActivePage } = useActivePageContext()
    return (
        <>
            <p
                class={`Title ${props.zone.class}${activePage() === props.zone.index ? " Active" : ""}`}
                style={`color:${props.color.light};`}
                onPointerUp={() => { setActivePage(props.zone.index); console.log(activePage() === props.zone.index, activePage, props.zone.index) }}
            >
                <span class="Icon icon-ctrl" />
                <span class="Label">{props.label}</span>
            </p>
            <div
                class={`Page ${props.zone.class}${activePage() === props.zone.index ? " Active" : ""}`}
                style={`color:${props.color.dark}; background-color:${props.color.light}; outline-color:${props.color.light}`}
            >
                {props.children}
            </div>
        </>
    )
}

