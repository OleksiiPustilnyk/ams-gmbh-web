import Image from 'next/image'
import CustomButton from '@/components/ui/buttons/custom-button'

export default function CatalogProductSection() {
    return (
        <section className='w-full mt-10 lg:mt-14 bg-customGray-800 p-6 md:p-8 lg:py-20 lg:pl-12 lg:pr-20 rounded-2xl md:flex items-center justify-between'>
            <div className='max-w-xl text-white'>
                <h2 className='text-xl lg:text-3xl font-semibold mb-3'>
                    Produktkatalog
                </h2>
                <p className='text-customGray-50 text-xl md:text-base mb-8'>
                    Unser Katalog bietet detaillierte Informationen zu jedem
                    Produkt, um Ihnen bei Ihrer Entscheidung zu helfen. Viel
                    Spaß beim Durchstöbern!
                </p>
                <CustomButton
                    bgColor='bg-customYellow-500'
                    textColor='text-black'
                >
                    Sicht
                </CustomButton>
            </div>
            <div className='mt-6 md:mt-0 md:ml-10 md:w-[450px] lg:w-[375px] max-w-full'>
                <Image
                    src='/images/image-catalog.png'
                    alt='Produktkatalog'
                    width={375}
                    height={350}
                    // className='w-auto h-auto'
                />
            </div>
        </section>
    )
}
