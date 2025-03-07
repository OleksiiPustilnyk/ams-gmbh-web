import CustomLink from '@/components/ui/link/custom-link'
import Image from 'next/image'

const services = [
    {
        title: 'Aluminium Terrassenüberdachung',
        image: null,
        link: '#',
    },
    {
        title: '',
        image: '/images/image-about-services-1.png',
        link: '#',
    },
    {
        title: '',
        image: '/images/image-about-services-2.png',
        link: '#',
    },
    {
        title: 'Aluminium Terrassenüberdachungen aus Aluminium',
        image: null,
        link: '#',
    },
    {
        title: 'Aluminium Carport',
        image: null,
        link: '#',
    },
    {
        title: '',
        image: '/images/product-section/img-alum.png',
        link: '#',
        isLast: true,
    },
]

export default function AboutServicesSection() {
    return (
        <section className='w-full py-12 px-4 border border-[#E4E7EC] rounded-lg'>
            <div className='container mx-auto'>
                <div className='text-center mb-8'>
                    <h2 className='text-[20px] md:text-[30px] leading-[24px] lg:leading-[45px] font-semibold text-primary mb-4'>
                        Unsere Leistungen
                    </h2>
                    <p className='text-deepGray text-[16px] leading-[24px]'>
                        Auf unserer Webseite finden Sie alle Informationen zu
                        unseren Produkten und Leistungen
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-0'>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`relative flex items-center justify-center 
                                h-[200px] md:h-[230px] lg:h-[400px] ${
                                    service.isLast ? 'bg-white' : 'bg-lightGray'
                                } border border-[#E4E7EC]`}
                        >
                            {service.image ? (
                                <Image
                                    src={service.image}
                                    alt='Service'
                                    width={400}
                                    height={300}
                                    className='w-full h-[180px] md:h-full object-cover'
                                />
                            ) : (
                                <div className='w-full px-6 md:px-12'>
                                    <h3 className='text-[16px] font-semibold text-primary mb-2'>
                                        {service.title}
                                    </h3>
                                    <CustomLink href={service.link}>
                                        Mehr
                                    </CustomLink>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
