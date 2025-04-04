import AdminProductsView from '@/view/admin-panel/products'
import {
    MeasurementUnitEnum,
    Product,
    UpdateProductInput,
} from '@/view/admin-panel/products/products.types'
import AdminTerraceConfigView from '@/view/admin-panel/terrace-config'
import { TerraceConfig } from '@/view/admin-panel/terrace-config/terrace-config.types'

// my to delete
export const testTerraceConfig: TerraceConfig[] = [
    {
        id: '1',
        name: 'Product for terrace 1',
        articleNumber: 'ART001',
        price: 100,
        measurementUnit: MeasurementUnitEnum.PIECE,
    },
    {
        id: '2',
        name: 'Product for terrace 2',
        articleNumber: 'ART002',
        price: 200,
        measurementUnit: MeasurementUnitEnum.LINEAR_METER,
    },
    {
        id: '3',
        name: 'Product for terrace 3',
        articleNumber: 'ART003',
        price: 150,
        measurementUnit: MeasurementUnitEnum.SET,
    },
    {
        id: '4',
        name: 'Product for terrace 4',
        articleNumber: 'ART004',
        price: 250,
        measurementUnit: MeasurementUnitEnum.SQUARE_METER,
    },
    {
        id: '5',
        name: 'Product for terrace 5',
        articleNumber: 'ART005',
        price: 300,
        measurementUnit: MeasurementUnitEnum.TWELVE_SET,
    },
]

export default async function AdminTerraceConfigPage() {
    // to do fetch
    return <AdminTerraceConfigView terraceConfig={testTerraceConfig} />
}
