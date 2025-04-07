'use client'

import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { ContactFormData } from '@/interfaces/contact-form.interface'
import CustomInput from '../ui/custom-input/custom-input'
import CustomSelect from '../ui/custom-select/custom-select'
import CustomButton from '../ui/buttons/custom-button'
import CustomTextarea from '../ui/custom-textarea/custom-textarea'
import { emailValidation } from '@/helpers/validation'
import CustomCheckbox from '../ui/custom-checkbox/custom-checkbox'

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        control,
        formState: { errors },
    } = useForm<ContactFormData>({
        defaultValues: {
            roofCovering: '',
            privacyPolicyAccepted: false,
        },
    })

    const onSubmit: SubmitHandler<ContactFormData> = (data) => {
        console.log(data)
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            // className='bg-white p-6 rounded-lg shadow-lg w-full'
        >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <CustomInput
                    label='Name'
                    required
                    {...register('name', {
                        required: 'Vorname ist erforderlich',
                    })}
                    error={errors.name}
                />
                <CustomInput
                    label='E-Mail'
                    required
                    {...register('email', emailValidation)}
                    error={errors.email}
                />
            </div>

            <CustomInput
                label='Thema'
                required
                {...register('themeMessage', {
                    required: 'Adresse ist erforderlich',
                })}
                className='col-span-2 mb-4'
                error={errors.themeMessage}
            />

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
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

            <p className='text-sm text-customGray-500 mb-4'>
                Die mit einem * markierten Felder sind Pflichtfelder.
            </p>

            <Controller
                name='privacyPolicyAccepted'
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <div className='col-span-1 md:col-span-2 mb-4'>
                        <div className='flex items-start gap-2'>
                            <CustomCheckbox
                                label='Ich habe die Datenschutzbestimmungen zur Kenntnis genommen.'
                                checked={field.value}
                                onChange={field.onChange}
                            />
                        </div>
                        {errors.privacyPolicyAccepted && (
                            <p className='text-red-500 text-xs mt-1'>
                                Pflichtfeld
                            </p>
                        )}
                    </div>
                )}
            />

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
