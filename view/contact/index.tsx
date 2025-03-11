import ContactForm from '@/components/forms/contact-form'
import ContactTextSection from '@/components/sections/contact/contact-text-section'
import Breadcrumbs from '@/components/ui/bread-crumbs/bread-crumbs'

export default function ContactView() {
    return (
        <div className='w-full container mx-auto pt-6 pb-10 px-4 lg:px-0'>
            <Breadcrumbs />
            <div className='w-full container mx-auto py-12 flex flex-col lg:flex-row items-start gap-8'>
                <div className='w-full lg:w-1/2'>
                    <ContactTextSection />
                </div>

                <div className='w-full lg:w-1/2 flex justify-center'>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}
