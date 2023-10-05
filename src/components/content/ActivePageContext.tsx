import {
    createSignal,
    createContext,
    useContext,
    type JSXElement,
    type Accessor,
    type Setter
} from "solid-js"

type ContextProps = {
    active_page: Accessor<number>,
    set_active_page: Setter<number>
}

const ActivePageContext = createContext<ContextProps>()

export const ActivePageProvider = (props: { children: JSXElement, init_page: number }) => {
    const [active_page, set_active_page] = createSignal(props.init_page || 0)
    return (
        <ActivePageContext.Provider value={{ active_page, set_active_page }}>
            {props.children}
        </ActivePageContext.Provider>
    )
}

export const use_active_page_context = () => useContext(ActivePageContext)!
