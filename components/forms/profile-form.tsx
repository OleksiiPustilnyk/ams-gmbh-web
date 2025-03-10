'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import { FormData } from '@/interfaces/form.interface'
import CustomInput from '../ui/custom-input/custom-input'
import CustomSelect from '../ui/custom-select/custom-select'
import { useState } from 'react'
import CustomButton from '../ui/buttons/custom-button'
// import CustomCheckbox from '../ui/custom-checkbox/custom-checkbox'

export default function ProfileForm() {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: {
            salutation: '',
            privacyPolicyAccepted: false,
        },
    })

    const [selectedValue, setSelectedValue] = useState('')

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data)
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='bg-white p-6 rounded-lg shadow-lg w-full md:max-w-full lg:max-w-lg'
        >
            <h2 className='text-[16px] font-semibold mb-2'>
                Ihre Kontaktdaten
            </h2>
            <p className='text-[14px] text-gray-500 mb-4'>
                Die mit einem <span className='text-red-500'>*</span> markierten
                Felder sind Pflichtfelder.
            </p>

            <CustomInput
                label='Firma'
                {...register('company')}
                className='mb-4'
            />

            <div className='mb-4'>
                <CustomSelect
                    label='Anrede *'
                    options={[
                        { value: 'Herr', label: 'Herr' },
                        { value: 'Frau', label: 'Frau' },
                    ]}
                    value={watch('salutation')}
                    onChange={(value) => setValue('salutation', value)}
                    error={errors.salutation}
                />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <CustomInput
                    label='Vorname'
                    required
                    {...register('firstName', {
                        required: 'Vorname ist erforderlich',
                    })}
                    error={errors.firstName}
                />
                <CustomInput
                    label='Nachname'
                    required
                    {...register('lastName', {
                        required: 'Nachname ist erforderlich',
                    })}
                    error={errors.lastName}
                />
            </div>

            <CustomInput
                label='Adresse'
                required
                {...register('address', {
                    required: 'Adresse ist erforderlich',
                })}
                className='col-span-2 mb-4'
                error={errors.address}
            />

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <CustomInput
                    label='Postleitzahl'
                    required
                    {...register('postalCode', {
                        required: 'Postleitzahl ist erforderlich',
                    })}
                    error={errors.postalCode}
                />
                <CustomInput
                    label='Stadt'
                    required
                    {...register('city', {
                        required: 'Stadt ist erforderlich',
                    })}
                    error={errors.city}
                />
            </div>

            <CustomInput
                label='Land'
                required
                {...register('country', {
                    required: 'Land ist erforderlich',
                })}
                className='mb-4'
                error={errors.country}
            />

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <CustomInput
                    label='E-Mail'
                    type='email'
                    required
                    {...register('email', {
                        required: 'E-Mail ist erforderlich',
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: 'Ungültige E-Mail-Adresse',
                        },
                    })}
                    error={errors.email}
                />

                <CustomInput
                    label='Tel'
                    type='tel'
                    placeholder='+1 (555) 000-0000'
                    {...register('phone', {
                        required: 'Telefonnummer ist erforderlich',
                        pattern: {
                            value: /^\+?\d{1,4}[\s-]?\(?\d{1,5}\)?[\s-]?\d{1,5}[\s-]?\d{1,9}$/,
                            message: 'Ungültige Telefonnummer',
                        },
                    })}
                    error={errors.phone}
                />

                <CustomInput label='Breite' {...register('width')} />
                <CustomInput label='Tiefe' {...register('depth')} />
                <CustomInput
                    label='Höhe unter der Regenrinne'
                    {...register('height')}
                />

                <CustomSelect
                    label='Dacheindeckung'
                    options={[
                        { value: '', label: 'Bitte auswählen' },
                        { value: 'polycarbonat', label: 'Polycarbonat' },
                        { value: 'glas', label: 'Glas' },
                    ]}
                    value={selectedValue}
                    onChange={setSelectedValue}
                />
            </div>

            <div className='col-span-1 md:col-span-2'></div>

            <div className='col-span-1 md:col-span-2 mb-4'>
                <label className='text-[14px] text-gray-700 font-medium mb-1 block'>
                    Nachricht
                </label>
                <textarea
                    {...register('message')}
                    className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary'
                    rows={4}
                ></textarea>
            </div>

            {/* <div className='col-span-1 md:col-span-2 flex items-center'>
                <CustomCheckbox
                    label='Ich habe die Datenschutzbestimmungen zur Kenntnis genommen.'
                    register={register('privacyPolicyAccepted', {
                        required: 'Pflichtfeld',
                    })}
                    error={errors.privacyPolicyAccepted?.message}
                />
            </div> */}

            <div className='col-span-1 md:col-span-2 flex items-center mb-4'>
                <input
                    type='checkbox'
                    {...register('privacyPolicyAccepted', {
                        required: true,
                    })}
                    className='mr-2'
                />
                <label className='text-[14px] text-gray-700'>
                    Ich habe die Datenschutzbestimmungen zur Kenntnis genommen.
                </label>
                {errors.privacyPolicyAccepted && (
                    <p className='text-red-500 text-[12px] ml-2'>Pflichtfeld</p>
                )}
            </div>

            <CustomButton
                type='submit'
                centerText
                className='col-span-1 md:col-span-2 bg-primary text-white py-3 rounded-lg w-full text-center font-medium hover:bg-primary/90 transition'
            >
                Senden
            </CustomButton>
        </form>
    )
}
