// to do: rewrite TerraceConfig

import { MeasurementUnitEnum } from '../products/products.types'

export interface TerraceConfig {
    id: string
    name: string
    articleNumber: string
    price: number
    measurementUnit: MeasurementUnitEnum
}

export type AddTerraceConfigInput = Omit<TerraceConfig, 'id'>

export type UpdateTerraceConfigInput = TerraceConfig

export interface AdminTerraceConfigViewProps {
    terraceConfig: TerraceConfig[]
}
