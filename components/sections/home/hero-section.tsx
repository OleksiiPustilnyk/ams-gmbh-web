import CustomButton from '@/components/ui/buttons/custom-button'

export default function HeroSection() {
    return (
        <section
            className='relative w-full h-[810px] bg-cover bg-center -mt-px z-0 
            grid grid-cols-2 grid-rows-4 sm:grid-cols-2 sm:grid-rows-4 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-3'
            style={{
                backgroundImage: "url('/images/bg-hero.png')",
                objectFit: 'cover',
                objectPosition: 'center',
            }}
        >
            <div className='absolute inset-0 bg-[#FFAA0C] bg-opacity-50 z-0'></div>

            {Array.from({ length: 12 }).map((_, index) => (
                <div
                    key={index}
                    className={`border border-[#F2F4F7] border-opacity-30 ${
                        index === 3
                            ? 'bg-white shadow-lg p-8 flex flex-col justify-center col-span-2 row-span-1 md:col-span-2 md:row-span-1 md:justify-start lg:col-span-2 lg:row-span-1 z-10'
                            : ''
                    }`}
                >
                    {index === 3 && (
                        <div className='lg:pl-[110px] md:pl-10 sm:pl-4'>
                            <h1
                                className='text-[24px] leading-[36px] font-semibold tracking-normal text-primary mb-6 
                            sm:text-[48px] sm:leading-[62.4px] sm:mb-8'
                            >
                                Konstruieren Sie Terrassendach
                            </h1>

                            <CustomButton>
                                Konstruieren Sie Terrassendach
                            </CustomButton>
                        </div>
                    )}
                </div>
            ))}
        </section>
    )
}
