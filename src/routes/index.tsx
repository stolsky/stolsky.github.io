import { component$ } from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"
import Content from "~/components/Content/content"

// import Menu from "~/components/Menu/menu"
import structure from "~/components/Content/structure"

export default component$(() => {
    const structure_items = Object.values(structure)
    return <Content items={structure_items} />
})

export const head: DocumentHead = {
  title: "Stolsky - Portfolio",
  meta: [
    {
      name: "description",
      content: ""
    }
  ]
}
