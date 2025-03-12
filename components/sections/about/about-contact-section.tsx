import Image from 'next/image'
import CustomButton from '@/components/ui/buttons/custom-button'

export default function AboutContactSection() {
    return (
        <section className='relative w-full h-[250px] md:h-[320px] lg:h-[380px] overflow-hidden mb-12 lg:mb-14'>
            <div className='absolute inset-0'>
                <Image
                    src='/images/about-contact-section.png'
                    alt='Angebot'
                    fill
                    className='object-cover w-full h-full'
                />
                <div className='absolute inset-0 bg-gradient-to-r from-customYellow-500 to-transparent'></div>
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
                <div className='max-w-lg text-customGray-600'>
                    <p className='text-base font-normal'>Angebot</p>
                    <h2 className='text-customGray-700 text-xl lg:text-3xl lg:leading-10 font-semibold mt-1 mb-4'>
                        Fordern Sie ein Angebot an
                    </h2>
                    <CustomButton
                        bgColor='bg-customGray-800'
                        textColor='text-white'
                    >
                        Kontakt
                    </CustomButton>
                </div>
            </div>
        </section>
    )
}
