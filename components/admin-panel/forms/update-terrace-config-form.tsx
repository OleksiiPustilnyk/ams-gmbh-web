'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import CustomInput from '@/components/ui/custom-input/custom-input'
import CustomSelect from '@/components/ui/custom-select/custom-select'
import CustomButton from '@/components/ui/buttons/custom-button'
import {
    MeasurementUnitEnum,
} from '@/view/admin-panel/products/products.types'
import { UpdateTerraceConfigInput } from '@/view/admin-panel/terrace-config/terrace-config.types'

interface UpdateTerraceConfigFormProps {
    terraceConfig: UpdateTerraceConfigInput
}

export default function UpdateTerraceConfigForm({
    terraceConfig,
}: UpdateTerraceConfigFormProps) {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        trigger,
        formState: { errors },
    } = useForm<UpdateTerraceConfigInput>({
        defaultValues: {
            ...terraceConfig,
        },
    })

    const onSubmit: SubmitHandler<UpdateTerraceConfigInput> = async (data) => {
        try {
            console.log('terraceConfig updated successfully!', data)
        } catch (error) {
            console.error('Error updating terraceConfig:', error)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CustomInput
                label='Name'
                required
                {...register('name', {
                    required: 'Name is required',
                })}
                error={errors.name}
                overrideRequiredMessage={true}
            />
            <CustomInput
                label='Article number'
                required
                {...register('articleNumber', {
                    required: 'Article number is required',
                })}
                error={errors.articleNumber}
                overrideRequiredMessage={true}
            />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <CustomInput
                    label='Price'
                    required
                    onlyNumbers
                    {...register('price', {
                        required: 'Price is required',
                    })}
                    error={errors.price}
                    overrideRequiredMessage={true}
                />
                <CustomSelect
                    label='Measurement unit *'
                    options={[
                        { value: '', label: 'Please select' },
                        {
                            value: MeasurementUnitEnum.LINEAR_METER,
                            label: 'Linear Meter',
                        },
                        { value: MeasurementUnitEnum.PIECE, label: 'Piece' },
                        { value: MeasurementUnitEnum.SET, label: 'Set' },
                        {
                            value: MeasurementUnitEnum.SIX_SET,
                            label: 'Six set (6x set)',
                        },
                        {
                            value: MeasurementUnitEnum.TWELVE_SET,
                            label: 'Twelve set (12x set)',
                        },
                        {
                            value: MeasurementUnitEnum.SQUARE_METER,
                            label: 'Square Meter (m²)',
                        },
                    ]}
                    {...register('measurementUnit', {
                        required: 'Measurement unit is required',
                    })}
                    value={watch('measurementUnit') || ''}
                    onChange={(value) => {
                        setValue(
                            'measurementUnit',
                            value as MeasurementUnitEnum,
                        )
                        trigger('measurementUnit')
                    }}
                    error={errors.measurementUnit}
                />
            </div>
            <p className='text-sm text-gray-500 mt-1 mb-1'>* Required fields</p>
            <CustomButton
                type='submit'
                centerText
                className='col-span-1 md:col-span-2 bg-customGray-700 text-white py-3 rounded-lg w-full text-center font-medium hover:bg-customGray-700/90 transition mt-1'
            >
                Update item
            </CustomButton>
        </form>
    )
}
