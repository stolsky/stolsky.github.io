interface ZoneType {
    index: number,
    class: string,
}

const Zone = {
    Top: {
        index: 0,
        class: "Top",
    },
    Right: {
        index: 1,
        class: "Right"
    },
    Bottom: {
        index: 2,
        class: "Bottom"
    },
    Left: {
        index: 3,
        class: "Left"
    }
} as const
// type Zones = (typeof ZoneCollection)[keyof typeof ZoneCollection]

interface StructureItem {
    readonly id: number
    readonly label: string
    readonly color: {
        light: string,
        dark: string
    },
    readonly zone: ZoneType
}

const structure: readonly StructureItem[] = [
    {
        id: 0,
        label: "about",
        color: {
            light: "hsl(62, 100%, 86%)",
            dark: "hsl(62, 25%, 38%)"
        },
        zone: Zone.Top
    },
    {
        id: 1,
        label: "skills",
        color: {
            light: "hsl(110, 100%, 87%)",
            dark: "hsl(110, 21%, 39%)"
        },
        zone: Zone.Right
    },
    {
        id: 2,
        label: "contact",
        color: {
            light: "hsl(185, 100%, 80%)",
            dark: "hsl(186, 34%, 36%)"
        },
        zone: Zone.Bottom
    },
    {
        id: 3,
        label: "projects",
        color: {
            light: "hsl(0, 100%, 84%)",
            dark: "hsl(359, 25%, 41%)"
        },
        zone: Zone.Left
    }
 ] as const

export default structure
export {
    Zone,
    type StructureItem,
    type ZoneType
}