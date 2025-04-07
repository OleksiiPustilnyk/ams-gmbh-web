import {
    MeasurementUnitEnum,
    Product,
} from '@/view/admin-panel/products/products.types'

// my to delete
export const testProducts: Product[] = [
    {
        id: '1',
        name: 'Product 1',
        articleNumber: 'ART001',
        price: 100,
        measurementUnit: MeasurementUnitEnum.PIECE,
        categoryIds: ['1', '2', '5'],
        relatedProducts: ['2', '3'],
        imageIds: ['image_id_1', 'image_id_2'],
    },
    {
        id: '2',
        name: 'Product 2',
        articleNumber: 'ART002',
        price: 200,
        measurementUnit: MeasurementUnitEnum.LINEAR_METER,
        categoryIds: ['2'],
        imageIds: ['image_id_3'],
    },
    {
        id: '3',
        name: 'Product 3',
        articleNumber: 'ART003',
        price: 150,
        measurementUnit: MeasurementUnitEnum.SET,
        categoryIds: ['1'],
        imageIds: ['image_id_4'],
    },
    {
        id: '4',
        name: 'Product 4',
        articleNumber: 'ART004',
        price: 250,
        measurementUnit: MeasurementUnitEnum.SQUARE_METER,
        categoryIds: ['3'],
        imageIds: ['image_id_5', 'image_id_6'],
    },
    {
        id: '5',
        name: 'Product 5',
        articleNumber: 'ART005',
        price: 300,
        measurementUnit: MeasurementUnitEnum.TWELVE_SET,
        categoryIds: ['1', '3'],
        imageIds: ['image_id_7'],
    },
]
