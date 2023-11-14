import type { JSXElement } from 'solid-js'
import { type ZoneType } from './structure'
import { use_active_page_context } from './ActivePageContext'

interface Props {
    children: JSXElement

    zone: ZoneType
    label: string
    color: {
        light: string,
        dark: string
    }
}

export default (props: Props) => {
    const { active_page, set_active_page } = use_active_page_context()
    return (
        <>
            <p
                class={`Link ${props.zone.class}${active_page() === props.zone.index ? " Active" : ""}`}
                style={`color:${props.color.light};`}
                onPointerUp={() => set_active_page(props.zone.index)}
            >
                <span class="Icon icon-ctrl" />
                <span class="Label">{props.label}</span>
            </p>
            <div
                class={`Page ${props.zone.class}${active_page() === props.zone.index ? " Active" : ""}`}
                style={`--dark-color:${props.color.dark}; --light-color:${props.color.light};`}
            >
                {props.children}
            </div>
        </>
    )
}

