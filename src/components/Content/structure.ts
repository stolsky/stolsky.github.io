interface Zone {
    index: number,
    class: string,
}

const ZoneCollection = {
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
    readonly zone: Zone
}

const structure: readonly StructureItem[] = [

    {
        id: 0,
        label: "about",
        color: {
            light: "#fdffb6",
            dark: "#767848"
        },
        zone: ZoneCollection.Top
    },

    {
        id: 1,
        label: "skills",
        color: {
            light: "#caffbf",
            dark: "#567a4f"
        },
        zone: ZoneCollection.Right
    },
    
    {
        id: 2,
        label: "contact",
        color: {
            light: "#9bf6ff",
            dark: "#3d757b"
        },
        zone: ZoneCollection.Bottom
    },

    {
        id: 3,
        label: "projects",
        color: {
            light: "#FFADAD",
            dark: "#824e4f"
        },
        zone: ZoneCollection.Left
    }
    
 ] as const

export default structure
export {
    type StructureItem,
    type Zone
}