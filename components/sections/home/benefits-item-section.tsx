import BenefitItem from '@/components/benefit-item/benefit-item'
import { benefits } from '@/constants/benefits-data'

export default function BenefitsSection() {
    return (
        <section className='w-full bg-customGray-100 py-12 px-4'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center'>
                {benefits.map((benefit, index) => (
                    <BenefitItem key={index} {...benefit} />
                ))}
            </div>
        </section>
    )
}
