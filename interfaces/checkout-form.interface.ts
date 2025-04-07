export interface CheckoutFormData {
    name: string
    lastname: string
    email: string
    phone?: string
    deliveryType: 'pickup' | 'shipping'
    zip?: string
    privacyPolicyAccepted: boolean
}
