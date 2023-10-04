import {
    createSignal,
    createContext,
    useContext,
    type JSXElement,
    type Accessor,
    type Setter
} from "solid-js"

type ContextProps = {
    activePage: Accessor<number>,
    setActivePage: Setter<number>
}

const ActivePageContext = createContext<ContextProps>()

export const ActivePageProvider = (props: { children: JSXElement, init_page: number }) => {
    const [activePage, setActivePage] = createSignal(props.init_page || 0)
    return (
        <ActivePageContext.Provider value={{ activePage, setActivePage }}>
            {props.children}
        </ActivePageContext.Provider>
    )
}

export const useActivePageContext = () => useContext(ActivePageContext)!
