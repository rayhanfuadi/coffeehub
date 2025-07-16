
interface ProductType {
    img: string
    tittle: string
    desc: string
    price: string
}

interface BestProductType {
    img: string
    tittle: string
    desc: string
    price: string
    scale?: string
}

export const product: ProductType[] = [
    {
        img: '/assets/product1.png',
        tittle: 'V60 – Slow Clarity',
        desc: 'Ready-to-drink, Bright acidity, crisp finish.',
        price: '27K'
    },
    {
        img: '/assets/product2.png',
        tittle: 'Americano – Pure Focus',
        desc: 'Ready-to-drink, Bold and clean, no distractions.',
        price: '24K'
    },
    {
        img: '/assets/product3.png',
        tittle: 'Japanese V60 – Chill & Bright',
        desc: 'Ready-to-drink, Cold-dripped, fruity, and refreshing.',
        price: '29K'
    },
    {
        img: '/assets/product4.png',
        tittle: 'Espresso Shot – Double Dose',
        desc: 'Ready-to-drink, Intense, strong, short punch.',
        price: '19K'
    },
    {
        img: '/assets/product5.png',
        tittle: 'Cold Brew – Creamy Vanilla',
        desc: 'Ready-to-drink, Sweet vanilla hint, mellow body.',
        price: '25K'
    },
    {
        img: '/assets/product6.png',
        tittle: 'Cold Brew – Mocha Blend',
        desc: 'Ready-to-drink, Chocolatey notes, bold and rich.',
        price: '23K'
    },
    {
        img: '/assets/product7.png',
        tittle: 'Cold Brew – Black Series',
        desc: 'Ready-to-drink,Low acidity, smooth finish.',
        price: '23K'
    },
    {
        img: '/assets/product8.png',
        tittle: 'Iced Latte – Classic Cream',
        desc: 'Ready-to-drink, Mild roast, smooth milk balance.',
        price: '29K'
    },
]

export const bestProduct: BestProductType[] = [
    {
        img: '/assets/product1.png',
        tittle: 'V60 – Slow Clarity',
        desc: 'Ready-to-drink, Bright acidity, crisp finish.',
        price: '27K'
    },
    {
        img: '/assets/product3.png',
        tittle: 'Japanese V60 – Chill & Bright',
        desc: 'Ready-to-drink, Cold-dripped, fruity, and refreshing.',
        price: '29K',
        scale: 'scale-105 bg-p50'
    },
    {
        img: '/assets/product8.png',
        tittle: 'Iced Latte – Classic Cream',
        desc: 'Ready-to-drink, Mild roast, smooth milk balance.',
        price: '29K'
    },
]