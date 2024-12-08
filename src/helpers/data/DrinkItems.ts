export interface DrinkItem {
  id: number,
  image: string,
  label: string,
  description?: string,
  price: number,
}

export const Drinks: DrinkItem[] = [
    { id: 1, label: 'Vampiro'              , price: 150.00, image: "/img/drink_menu.png" },
    { id: 2, label: 'Paloma'               , price: 150.00, image: "" },
    { id: 3, label: 'Clamato'              , price: 150.00, image: "" },
    { id: 4, label: 'Michelada'            , price: 150.00, image: "" },
    { id: 4, label: 'Whisky'               , price: 200.00, image: "" },
    { id: 4, label: 'Mojito Tradicional'   , price: 150.00, image: "" },
    { id: 4, label: 'Mojito Fresa'         , price: 150.00, image: "" },
    { id: 4, label: 'Piña Colada'          , price: 150.00, image: "" },
    { id: 4, label: 'Cerveza'              , price: 35.00, image: "" },
    { id: 4, label: 'Margarita Mango'      , price: 150.00, image: "" },
    { id: 4, label: 'Margarita Fresa'      , price: 150.00, image: "" },
    { id: 4, label: 'Margarita Fresa ch'   , price: 65.00, image: "" },
    { id: 4, label: 'Fucker'               , price: 200.00, image: "" },
    { id: 4, label: 'Perla Negra'          , price: 200.00, image: "" },
]; 