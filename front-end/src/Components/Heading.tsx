import { useState } from "react"

export function Heading() {
    const [stores, _setStore] = useState<string[]>([
        "Todas",
        "Mercado Livre",
        "Buscapé",
    ])
    const [categories, _setCategories] = useState<string[]>([
        "Todas",
        "Geladeira",
        "Celular",
        "TV"
    ])

    return (
        <>
            <select>
                {stores.map(store => (
                    <option>{store}</option>
                ))}
            </select>
            <select>
                {categories.map(categorie => (
                    <option>{categorie}</option>
                ))}
            </select>
            <input type="text" placeholder="Search" />
            <button type="button">Search</button>
        </>
    )
}