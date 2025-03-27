'use client'

import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import CustomInput from '../ui/custom-input/custom-input'
import CustomButton from '../ui/buttons/custom-button'
import { CheckoutFormData } from '@/interfaces/checkout-form.interface'
import {
    emailValidation,
    handlePhoneInput,
    phoneValidation,
} from '@/helpers/validation'
import CustomRadioGroup from '../ui/custom-radio/custom-radio'
import CustomCheckbox from '../ui/custom-checkbox/custom-checkbox'
import { useCartStore } from '@/stores/use-cart-store'
import { toast, ToastContainer } from 'react-toastify'

export default function CheckoutForm() {
    const {
        register,
        handleSubmit,
        watch,
        control,
        reset,
        formState: { errors },
    } = useForm<CheckoutFormData>({
        defaultValues: {
            deliveryType: 'pickup',
            privacyPolicyAccepted: false,
        },
    })

    const deliveryType = watch('deliveryType')
    const cartItems = useCartStore((s) => s.items)

    const onSubmit: SubmitHandler<CheckoutFormData> = (formData) => {
        const payload = {
            ...formData,
            cart: cartItems.map((item) => ({
                title: item.product.title,
                quantity: item.quantity,
                price: item.product.price,
                total: parseFloat(item.product.price) * item.quantity,
            })),
            totalPrice: cartItems.reduce(
                (sum, item) =>
                    sum + parseFloat(item.product.price) * item.quantity,
                0,
            ),
        }

        console.log('Full payload:', payload)

        toast.success('Vielen Dank für Ihre Bestellung!')

        reset()
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
                <h2 className='text-xl text-customGray-700 font-semibold mb-4 '>
                    Personal information
                </h2>

                <div className=''>
                    <CustomInput
                        label='Name'
                        required
                        {...register('name', {
                            required: 'Vorname ist erforderlich',
                        })}
                        error={errors.name}
                    />
                    <CustomInput
                        label='Nachname'
                        required
                        {...register('lastname', {
                            required: 'Nachname ist erforderlich',
                        })}
                        error={errors.lastname}
                    />
                    <CustomInput
                        label='E-Mail'
                        type='email'
                        required
                        {...register('email', emailValidation)}
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
                </div>

                <p className='text-sm text-customGray-500 mt-2'>
                    Die mit einem * markierten Felder sind Pflichtfelder.
                </p>

                <h2 className='text-xl text-customGray-700 font-semibold mt-8 mb-4'>
                    Lieferung
                </h2>

                <div className='mb-4'>
                    <Controller
                        name='deliveryType'
                        control={control}
                        rules={{
                            required: 'Bitte wählen Sie eine Lieferoption',
                        }}
                        render={({ field, fieldState }) => (
                            <div>
                                <CustomRadioGroup
                                    options={[
                                        { value: 'pickup', label: 'Abholen' },
                                        { value: 'shipping', label: 'Liefern' },
                                    ]}
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                                {fieldState.error && (
                                    <p className='text-sm text-red-500 mt-1'>
                                        {fieldState.error.message}
                                    </p>
                                )}
                            </div>
                        )}
                    />
                </div>

                {deliveryType === 'shipping' && (
                    <>
                        <CustomInput
                            label='Postleitzahl'
                            required
                            {...register('zip', {
                                required:
                                    deliveryType === 'shipping'
                                        ? 'Postleitzahl ist erforderlich'
                                        : false,
                            })}
                            error={errors.zip}
                        />

                        <div className='mt-2 p-4 bg-customYellow-50 border border-customYellow-200 text-customGray-700 text-sm rounded-xl'>
                            Die Versandkosten werden individuell nach
                            Bestelleingang berechnet.
                        </div>
                    </>
                )}

                <div className='col-span-1 md:col-span-2 my-6'>
                    <Controller
                        name='privacyPolicyAccepted'
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <CustomCheckbox
                                label='Ich habe die Datenschutzbestimmungen zur Kenntnis genommen.'
                                checked={field.value}
                                onChange={field.onChange}
                            />
                        )}
                    />
                    {errors.privacyPolicyAccepted && (
                        <p className='text-red-500 text-xs mt-1'>Pflichtfeld</p>
                    )}
                </div>

                <CustomButton type='submit' className='w-auto'>
                    Zur Kasse
                </CustomButton>
            </form>
            <ToastContainer />
        </>
    )
}
