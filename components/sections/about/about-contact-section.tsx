import Image from 'next/image'
import CustomButton from '@/components/ui/buttons/custom-button'

export default function AboutContactSection() {
    return (
        <section className='relative w-full h-[250px] md:h-[320px] lg:h-[380px] overflow-hidden mb-12 lg:mb-14'>
            <div className='absolute inset-0'>
                <Image
                    src='/images/about-contact-section.png'
                    alt='Angebot'
                    layout='fill'
                    objectFit='cover'
                    className='w-full h-full'
                />
                <div className='absolute inset-0 bg-gradient-to-r from-defaultYellow to-transparent'></div>
            </div>
            <div className='absolute bottom-0 right-0 w-auto h-[200px] md:h-[280px] lg:h-[320px] lg:right-[65px]'>
                <Image
                    src='/images/image-mens.svg'
                    alt='Bauarbeiter'
                    width={300}
                    height={300}
                    className='h-full w-auto object-contain'
                />
            </div>
            <div className='relative z-10 h-full flex items-center px-6 md:px-12 lg:px-16 lg:mx-5'>
                <div className='max-w-lg text-deepGray'>
                    <p className='text-[16px] lg:text-[20px] font-normal'>
                        Angebot
                    </p>
                    <h2 className='text-primary text-[20px] leading-[30px] lg:text-[30px] lg:leading-[45px] font-semibold mt-1 mb-4'>
                        Fordern Sie ein Angebot an
                    </h2>
                    <CustomButton bgColor='bg-secondary' textColor='text-white'>
                        Kontakt
                    </CustomButton>
                </div>
            </div>
        </section>
    )
}
