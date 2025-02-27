import BenefitItem from '@/components/benefit-item/benefit-item'

const benefits = [
    {
        icon: '/images/icons/icon-delivery.svg',
        title: 'Lieferung',
        description: 'Versand für alle Bestellungen',
    },
    {
        icon: '/images/icons/icon-.svg',
        title: 'Online-Hilfe',
        description: 'Online-Support während der Arbeitszeit',
    },
    {
        icon: '/images/icons/icon-payment.svg',
        title: 'Bequeme Zahlung',
        description: 'Waren unverzüglich bezahlen',
    },
    {
        icon: '/images/icons/icon-discount.svg',
        title: 'Mitgliederrabatt',
        description: 'Wir haben von Zeit zu Zeit Rabatte',
    },
]

export default function BenefitsSection() {
    return (
        <section className='w-full bg-[#F2F4F7] py-12'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6'>
                {benefits.map((benefit, index) => (
                    <BenefitItem key={index} {...benefit} />
                ))}
            </div>
        </section>
    )
}
