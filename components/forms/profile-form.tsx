'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import { ProfileFormData } from '@/interfaces/profile-form.interface'
import CustomInput from '../ui/custom-input/custom-input'
import CustomSelect from '../ui/custom-select/custom-select'
import CustomButton from '../ui/buttons/custom-button'
import { handlePhoneInput, phoneValidation } from '@/helpers/validation'
import CustomTextarea from '../ui/custom-textarea/custom-textarea'
// import CustomCheckbox from '../ui/custom-checkbox/custom-checkbox'

export default function ProfileForm() {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<ProfileFormData>({
        defaultValues: {
            salutation: '',
            roofCovering: '',
            privacyPolicyAccepted: false,
        },
    })

    const onSubmit: SubmitHandler<ProfileFormData> = (data) => {
        console.log(data)
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='bg-white p-6 rounded-lg shadow-lg w-full'
        >
            <h2 className='text-base text-customGray-700 font-semibold mb-2'>
                Ihre Kontaktdaten
            </h2>
            <p className='text-sm text-customGray-500 mb-4'>
                Die mit einem * markierten Felder sind Pflichtfelder.
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
                    type='phone'
                    placeholder='+1 (555) 000-0000'
                    {...register('phone', phoneValidation)}
                    error={errors.phone}
                    onInput={handlePhoneInput}
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
                    value={watch('roofCovering') || ''}
                    onChange={(value) => setValue('roofCovering', value)}
                    error={errors.roofCovering}
                />
            </div>

            <div className='col-span-1 md:col-span-2'></div>

            <div className='col-span-1 md:col-span-2 mb-4'>
                <CustomTextarea
                    label='Nachricht'
                    {...register('message', {
                        required: 'Nachricht ist erforderlich',
                        minLength: {
                            value: 10,
                            message:
                                'Die Nachricht muss mindestens 10 Zeichen enthalten',
                        },
                    })}
                    error={errors.message}
                />
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
                <label className='text-sm text-gray-700'>
                    Ich habe die Datenschutzbestimmungen zur Kenntnis genommen.
                </label>
                {errors.privacyPolicyAccepted && (
                    <p className='text-red-500 text-xs ml-2'>Pflichtfeld</p>
                )}
            </div>

            <CustomButton
                type='submit'
                centerText
                className='col-span-1 md:col-span-2 bg-customGray-700 text-white py-3 rounded-lg w-full text-center font-medium hover:bg-customGray-700/90 transition'
            >
                Senden
            </CustomButton>
        </form>
    )
}
