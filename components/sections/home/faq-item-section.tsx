import FAQItem from '@/components/faq-item/faq-item'
import { faqData } from '@/constants/faq-data'

export default function FAQSection() {
    return (
        <section className='container mx-auto py-12 px-4 sm:px-0 lg:px-0'>
            <h2 className='text-3xl font-semibold text-center text-customGray-700 mb-6'>
                Friendly Asked Questions
            </h2>
            <div className='max-w-screen-sm lg:max-w-screen-lg mx-auto'>
                {faqData.map((item, index) => (
                    <FAQItem key={index} {...item} />
                ))}
            </div>
        </section>
    )
}
