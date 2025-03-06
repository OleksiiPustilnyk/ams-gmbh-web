import Image from 'next/image'

export default function AboutUsSection() {
    return (
        <section className='w-full container mx-auto py-12 px-4 md:px-6 lg:px-0 flex flex-col lg:flex-row items-center gap-8'>
            <div className='w-full lg:w-1/2'>
                <p className='text-deepGray text-[20px] leading-[30px] mb-3'>
                    Aluminium Großhandel - Wir sind Ihr Lieferant!
                </p>
                <h2 className='text-[20px] md:text-[30px] leading-[30px] md:leading-[45px] font-semibold text-primary mb-3'>
                    AMS Alliance Management Solutions GmbH
                </h2>
                <p className='text-secondary text-[16px] leading-[24px]'>
                    Wir sind Ihr kompetenter Ansprechpartner für Aluminium
                    Großhandel. Wir beraten Sie gerne zu Ihren individuellen
                    Wünschen und Vorgaben, um Sie besser zu verstehen. Unsere
                    Experten helfen Ihnen gern bei der Planung und Ausführung
                    von Aluminium Einzelprodukten!
                </p>
            </div>
            <div className='w-full lg:w-1/2 flex justify-center'>
                <Image
                    src='/images/image-about-section.png'
                    alt='Team meeting'
                    width={600}
                    height={400}
                    className='w-full h-auto object-cover'
                />
            </div>
        </section>
    )
}
