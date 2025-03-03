import FAQItem from '@/components/faq-item/faq-item'

const faqData = [
    {
        question: 'Do you have Certifications and quality?',
        answer: 'Yes, Certifications and quality: Evidence of our commitment to excellence in the German aluminium trade.',
    },
    {
        question: 'What materials do you use?',
        answer: 'We use high-quality aluminium to ensure durability and strength.',
    },
    {
        question: 'Do you provide custom sizes?',
        answer: 'Yes, we offer custom sizing options for your specific needs.',
    },
    {
        question: 'How long does shipping take?',
        answer: 'Shipping usually takes between 3 to 7 business days, depending on your location.',
    },
]

export default function FAQSection() {
    return (
        <section className='container mx-auto py-12 px-4 sm:px-0'>
            <h2 className='text-[30px] font-semibold leading-[38px] text-center text-primary mb-8'>
                Friendly Asked Questions
            </h2>
            <div className='max-w-2xl mx-auto'>
                {faqData.map((item, index) => (
                    <FAQItem key={index} {...item} />
                ))}
            </div>
        </section>
    )
}
