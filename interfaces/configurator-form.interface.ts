// export interface ConfiguratorForm {
//     montageType: 'wandmontage' | 'freistehend'
//     breite: string
//     tiefe: string
//     roofType: string
//     roofPrice: number
//     lighting: string
//     lightingPrice: number
//     glassHeight: string
//     glassSides: string[]
//     instructions: string
//     instructionsPrice?: number
//     groundType: string
//     groundTypePrice: number
// }

export interface ConfiguratorOption {
    value: string
    label: string
    price?: number
    subtitle?: string
    image?: string
}
