export const phoneValidation = {
    required: 'Telefonnummer ist erforderlich',
    pattern: {
        value: /^\d{10,12}$/,
        message: 'Ungültige Telefonnummer. Nur Ziffern sind erlaubt.',
    },
}

export const handlePhoneInput = (
    event: React.ChangeEvent<HTMLInputElement>,
) => {
    let value = event.target.value.replace(/\D/g, '')
    if (value.length > 12) {
        value = value.slice(0, 12)
    }
    event.target.value = value
}
