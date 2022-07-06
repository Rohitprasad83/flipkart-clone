import { v4 as uuidv4 } from 'uuid'
import kidKurta from 'assets/kidKurta.webp'
import menVest from 'assets/menVest.webp'
import menJeans from 'assets/menjeans.webp'
import women from 'assets/women.webp'
import socks from 'assets/socks.webp'
import raincoat from 'assets/raincoat.png'

export const data = {
    products: [{
            id: uuidv4(),
            title: 'Solid Men Raincoat',
            brand: 'RedTape',
            size: ['S', 'M', 'L'],
            img: raincoat,
            ideal: 'Men',
            price: 899,
            oldPrice: 999,
            discount: 10,
        },
        {
            id: uuidv4(),
            title: 'Regular Men Grey Jeans',
            brand: 'Highlander',
            img: menJeans,
            size: ['L', 'XL'],
            ideal: 'Men',
            price: 804,
            oldPrice: 1749,
            discount: 54,
        },
        {
            id: uuidv4(),
            title: 'TRIPR MEN VEST',
            brand: 'Jockey',
            img: menVest,
            size: ['M', 'L'],
            ideal: 'Men',
            price: 319,
            oldPrice: 1499,
            discount: 78,
        },
        {
            id: uuidv4(),
            title: 'Men & Women Ankle Length',
            brand: 'Fila',
            img: socks,
            size: ['S', 'M', 'L', 'XL'],
            ideal: 'Women',
            price: 160,
            oldPrice: 499,
            discount: 67,
        },
        {
            id: uuidv4(),
            title: 'Party Kurta and Pyjama Set',
            brand: 'Fila',
            img: kidKurta,
            size: ['XL'],
            ideal: 'kids',
            price: 166,
            oldPrice: 699,
            discount: 76,
        },
        {
            id: uuidv4(),
            title: 'Women Skater Black Dress',
            brand: 'RedTape',
            img: women,
            size: ['S', 'M'],
            ideal: 'Women',
            price: 475,
            oldPrice: 750,
            discount: 36,
        },
    ],
}