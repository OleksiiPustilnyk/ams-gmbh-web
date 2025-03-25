import { ConfiguratorOption } from '@/interfaces/configurator-form.interface'

export const montageOptions: ConfiguratorOption[] = [
    {
        value: 'wandmontage',
        label: 'Wandmontage',
        image: '/images/configurator/btn-img-wandmontage.svg',
    },
    {
        value: 'freistehend',
        label: 'Freistehend',
        image: '/images/configurator/btn-img-freistehend.svg',
    },
]

export const roofOptions: ConfiguratorOption[] = [
    {
        label: 'Polycarbonat Klar',
        subtitle: '16 mm',
        image: '/images/configurator/img-polycarbonat.svg',
        value: 'polycarbonat-klar',
        price: 100,
    },
    {
        label: 'Polycarbonat Opal',
        subtitle: '16 mm',
        image: '/images/configurator/img-polycarbonat.svg',
        value: 'polycarbonat-opal',
        price: 200,
    },
    {
        label: 'VSG Glas 8 mm',
        subtitle: 'Verbundsicherheitsglas',
        image: '/images/configurator/img-glas.svg',
        value: 'vsg-glas',
        price: 300,
    },
    {
        label: 'Milchglas 8 mm',
        subtitle: 'satiniertes VSG Glas',
        image: '/images/configurator/img-glas.svg',
        value: 'milchglas',
        price: 400,
    },
]

export const lightingOptions: ConfiguratorOption[] = [
    { value: 'kein-set-1', label: 'Kein Set 1', price: 25 },
    { value: 'kein-set-2', label: 'Kein Set 2', price: 50 },
    { value: 'kein-set-3', label: 'Kein Set 3', price: 100 },
]

export const glassHeightOptions: ConfiguratorOption[] = [
    { value: '200cm', label: '200 cm', price: 25 },
    { value: '250cm', label: '250 cm', price: 50 },
    { value: '300cm', label: '300 cm', price: 100 },
]

export const glassSideOptions: ConfiguratorOption[] = [
    { value: 'vorderseite', label: 'Vorderseite', price: 50 },
    { value: 'rechte-seite', label: 'Rechte Seite mit Keil', price: 50 },
    { value: 'linke-seite', label: 'Linke Seite mit Keil', price: 50 },
]

export const instructionOptions: ConfiguratorOption[] = [
    { value: 'anleitung-1', label: 'Anleitung 1', price: 25 },
    { value: 'anleitung-2', label: 'Anleitung 2', price: 30 },
    { value: 'anleitung-3', label: 'Anleitung 3', price: 35 },
    { value: 'anleitung-4', label: 'Anleitung 4', price: 40 },
]

export const groundOptions: ConfiguratorOption[] = [
    {
        value: 'weich',
        label: 'Weich',
        image: '/images/configurator/img-ground-type.png',
        price: 100,
    },
    {
        value: 'solide',
        label: 'Solide',
        image: '/images/configurator/img-ground-type.png',
        price: 50,
    },
]
