'use client'

import { useForm } from 'react-hook-form'
import Image from 'next/image'

import DimensionSelector from './configurator-dimension-section'
import RoofSelection from './configurator-roof-section'
import InfoSection from './configurator-info-section'
import ColorSelector from './configurator-color-selection-section'
import LightingSelector from './configurator-lighting-selector-section'
import GlassSliderSelector from './configurator-glass-selector-section'
import InstructionsSelector from './configurator-instructions-section'
import GroundTypeSelector from './configurator-ground-type-section'
import StandardStaticsSection from './configurator-standart-statics-section'
import PriceCalculation from './configurator-price-calculation-section'
import MontageTypeSelector from './configurator-montage-type'
import CustomButton from '@/components/ui/buttons/custom-button'
import { getOptionLabel } from '@/utils/configurator-utils'
import {
    groundOptions,
    instructionOptions,
    lightingOptions,
    roofOptions,
    montageOptions,
    glassHeightOptions,
    glassSideOptions,
} from '@/constants/configurator-data'

type FormValues = {
    montageType: string
    breite: string
    tiefe: string
    roofType: string
    lighting: string
    instructions: string
    groundType: string
    glassHeight: string
    glassSides: string[]
}

export default function ConfiguratorSection() {
    const { register, handleSubmit, watch, setValue } = useForm<FormValues>({
        defaultValues: {
            montageType: 'wandmontage',
            breite: '',
            tiefe: '',
            roofType: '',
            lighting: '',
            instructions: '',
            groundType: '',
            glassHeight: '',
        },
    })

    const breite = watch('breite', '0')
    const tiefe = watch('tiefe', '0')
    const selectedType = watch('montageType')
    const selectedRoof = watch('roofType')
    const selectedLighting = watch('lighting')
    const selectedGlass = watch('glassHeight')
    const selectedGlassSides = watch('glassSides') || []
    const selectedInstruction = watch('instructions')
    const selectedGround = watch('groundType')

    const selectedSideLabels = selectedGlassSides
        .map(
            (side) => glassSideOptions.find((opt) => opt.value === side)?.label,
        )
        .filter(Boolean)

    const glassDisplayLabel =
        selectedSideLabels.length === 1
            ? `${getOptionLabel(selectedGlass, glassHeightOptions)} ${selectedSideLabels[0]}`
            : getOptionLabel(selectedGlass, glassHeightOptions)

    const calculatePrice = (value: string, factor: number) =>
        +((Number(value || 0) / 100) * factor).toFixed(2)

    const breitePrice = calculatePrice(breite, 50)
    const tiefePrice = calculatePrice(tiefe, 100)

    const roofPrice =
        roofOptions.find((opt) => opt.value === selectedRoof)?.price || 0
    const lightingPrice =
        lightingOptions.find((opt) => opt.value === selectedLighting)?.price ||
        0
    const instructionsPrice =
        instructionOptions.find((opt) => opt.value === selectedInstruction)
            ?.price || 0
    const groundTypePrice =
        groundOptions.find((opt) => opt.value === selectedGround)?.price || 0
    const glassBasePrice =
        glassHeightOptions.find((opt) => opt.value === selectedGlass)?.price ||
        0
    const sidesPrice = selectedGlassSides.reduce((sum, side) => {
        const found = glassSideOptions.find((opt) => opt.value === side)
        return sum + (found?.price || 0)
    }, 0)
    const glassPrice = glassBasePrice + sidesPrice

    const total =
        breitePrice +
        tiefePrice +
        roofPrice +
        lightingPrice +
        instructionsPrice +
        groundTypePrice +
        glassPrice

    const onSubmit = (data: FormValues) => {
        console.log('Form Data:', data)
    }

    const priceData = [
        { label: 'Breite', value: `${breite || '0'} cm`, price: breitePrice },
        { label: 'Tiefe', value: `${tiefe || '0'} cm`, price: tiefePrice },
        {
            label: 'Dacheindeckung',
            value: getOptionLabel(selectedRoof, roofOptions),
            price: roofPrice,
        },
        { label: 'Farbe', value: 'Anthrazit (Ral 7016)', price: 0 },
        {
            label: 'Beleuchtung',
            value: getOptionLabel(selectedLighting, lightingOptions),
            price: lightingPrice,
        },
        {
            label: 'Glasschiebelemete',
            value: glassDisplayLabel,
            price: glassPrice,
        },
        {
            label: 'Anleitung',
            value: getOptionLabel(selectedInstruction, instructionOptions),
            price: instructionsPrice,
        },
        {
            label: 'Bodenart',
            value: getOptionLabel(selectedGround, groundOptions),
            price: groundTypePrice,
        },
    ]

    return (
        <section className='container mx-auto mt-10 lg:px-0'>
            <h1 className='text-2xl md:text-3xl lg:text-5xl font-semibold text-customGray-700'>
                Konstruieren Sie Ihr Terrassendach ganz nach Ihren Wünschen in
                nur wenigen Klicken
            </h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col md:flex-row gap-8 mt-10'>
                    <div className='lg:basis-2/5 flex flex-col items-center md:items-start'>
                        <div className='lg:w-[488px] lg:h-[488px] max-w-full'>
                            <Image
                                src={`/images/configurator/${selectedType === 'freistehend' ? 'img-freistehend' : 'img-wandmontage'}.png`}
                                alt={selectedType}
                                width={488}
                                height={488}
                                className='object-contain w-full h-full'
                            />
                        </div>

                        <div className='w-full mt-6 md:mt-8 hidden md:block'>
                            <PriceCalculation
                                selectedType={
                                    selectedType === 'freistehend'
                                        ? 'Freistehend'
                                        : 'Wandmontage'
                                }
                                total={total}
                                data={priceData}
                            />
                        </div>
                    </div>

                    <div className='md:basis-3/5 flex flex-col'>
                        <MontageTypeSelector
                            selectedValue={selectedType}
                            register={register}
                            name='montageType'
                            options={montageOptions}
                        />

                        <div className='mt-10'>
                            <DimensionSelector
                                title='Breite'
                                imageSrc='/images/configurator/img-width-roof.svg'
                                name='breite'
                                register={register}
                                value={breite}
                            />
                            <DimensionSelector
                                title='Tiefe'
                                imageSrc='/images/configurator/img-height-roof.svg'
                                name='tiefe'
                                register={register}
                                value={tiefe}
                            />
                        </div>

                        <RoofSelection
                            name='roofType'
                            watch={watch}
                            setValue={setValue}
                        />
                        <InfoSection />
                        <ColorSelector />
                        <LightingSelector
                            name='lighting'
                            watch={watch}
                            setValue={setValue}
                        />
                        <GlassSliderSelector
                            watch={watch}
                            setValue={setValue}
                        />
                        <InstructionsSelector
                            name='instructions'
                            watch={watch}
                            setValue={setValue}
                        />
                        <GroundTypeSelector
                            name='groundType'
                            watch={watch}
                            setValue={setValue}
                        />
                        <StandardStaticsSection />

                        <div className='flex items-center justify-between w-full p-4'>
                            <div className='text-lg font-medium text-customGray-600'>
                                <span>Total </span>
                                <span className='text-xl lg:text-2xl font-semibold text-customGray-800'>
                                    {total} €
                                </span>
                            </div>

                            <CustomButton
                                className='px-6 py-3'
                                bgColor='bg-customGray-800'
                            >
                                Zur Kasse
                            </CustomButton>
                        </div>
                    </div>
                </div>

                <div className='block md:hidden mt-8'>
                    <PriceCalculation
                        selectedType={
                            selectedType === 'freistehend'
                                ? 'Freistehend'
                                : 'Wandmontage'
                        }
                        total={total}
                        data={priceData}
                    />
                </div>
            </form>
        </section>
    )
}
