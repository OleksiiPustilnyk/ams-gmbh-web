import ProductCardWithButton from '@/components/product-card/product-card-with-btn'

const ledProducts = [
    {
        id: 1,
        imageUrl: '/images/product-section/img-led-6.png',
        title: 'Roof side profile gutter cover made of aluminum',
        subtitle: '',
        setInfo: '6er Set',
        price: '80,00€',
        link: '/product/led-6er',
    },
    {
        id: 2,
        imageUrl: '/images/product-section/img-led-12.png',
        title: 'Upper profile aluminum',
        subtitle: '',
        setInfo: '12er Set',
        price: '150,00€',
        link: '/product/led-12er',
    },
]

export default function LEDSection() {
    return (
        <ProductCardWithButton
            sectionTitle='LED'
            viewAllLink='/led-products'
            products={ledProducts}
        />
    )
}
