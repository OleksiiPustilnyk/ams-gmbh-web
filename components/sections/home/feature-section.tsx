import CustomButton from '@/components/ui/buttons/custom-button'
import Image from 'next/image'

export default function FeatureSection() {
    return (
        <section className='w-full bg-[#F2F4F7] pt-12'>
            <div className='w-full'>
                <h2 className='text-[30px] font-semibold leading-[38px] text-center text-primary mb-8'>
                    Moderne Aluminium-Terrassen mit Polycarbonat-Dach
                    <br />
                    Ihr perfekter Outdoor-Bereich!
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
                    <div className='px-4 md:px-0 md:ml-[110px] md:mr-8'>
                        <p className='text-gray-700 text-[16px] leading-[24px] mb-8'>
                            Machen Sie Ihre Terrasse wetterfest und genießen Sie
                            maximalen Komfort mit unseren modernen
                            Aluminium-Terrassenüberdachungen. Wählen Sie
                            zwischen robustem Polycarbonat oder elegantem Glas,
                            um Ihren Außenbereich optimal zu gestalten.
                        </p>

                        <ul className='space-y-5 mb-6'>
                            <li>
                                <div className='flex items-start gap-3 mb-3'>
                                    <Image
                                        src='/images/icons/icon-check.svg'
                                        alt='Arrow'
                                        width={24}
                                        height={24}
                                    />
                                    <strong className='text-primary'>
                                        Langlebig & Wartungsfrei
                                    </strong>
                                </div>
                                <p className='text-gray-600 text-[14px] leading-[20px] ml-[36px]'>
                                    Rostfreies Aluminium garantiert Stabilität
                                    und eine lange Lebensdauer
                                </p>
                            </li>
                            <li>
                                <div className='flex items-start gap-3 mb-3'>
                                    <Image
                                        src='/images/icons/icon-check.svg'
                                        alt='Arrow'
                                        width={24}
                                        height={24}
                                    />
                                    <strong className='text-primary'>
                                        Wetter- & UV-Schutz
                                    </strong>
                                </div>
                                <p className='text-gray-600 text-[14px] leading-[20px] ml-[36px]'>
                                    Polycarbonat schützt vor Regen und Hitze,
                                    Glas sorgt für eine edle Optik mit maximalem
                                    Lichteinfall
                                </p>
                            </li>
                        </ul>

                        <CustomButton className='mb-8 md:mb-0'>
                            Konstruieren Sie Terrassendach
                        </CustomButton>
                    </div>

                    <div className='relative px-4 md:px-0'>
                        <Image
                            src='/images/img-feature-section-1.png'
                            alt='Terrassenüberdachung'
                            width={600}
                            height={400}
                            className='w-full h-auto object-cover'
                        />
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12'>
                    <div className='relative px-4 md:px-0'>
                        <Image
                            src='/images/img-feature-section-2.png'
                            alt='Moderne Terrassen'
                            width={600}
                            height={400}
                            className='w-full h-auto object-cover'
                        />
                    </div>

                    <div className='px-4 md:px-0 md:mr-[110px] md:ml-8'>
                        <ul className='space-y-5 mb-6'>
                            <li>
                                <div className='flex items-start gap-3 mb-3'>
                                    <Image
                                        src='/images/icons/icon-check.svg'
                                        alt='Arrow'
                                        width={24}
                                        height={24}
                                    />
                                    <strong className='text-primary'>
                                        Modernes & Zeitloses Design
                                    </strong>
                                </div>
                                <p className='text-gray-600 text-[14px] leading-[20px] ml-[36px]'>
                                    Passt sich harmonisch an jede Architektur an
                                </p>
                            </li>
                            <li>
                                <div className='flex items-start gap-3 mb-3'>
                                    <Image
                                        src='/images/icons/icon-check.svg'
                                        alt='Arrow'
                                        width={24}
                                        height={24}
                                    />
                                    <strong className='text-primary'>
                                        Individuelle Anpassung
                                    </strong>
                                </div>
                                <p className='text-gray-600 text-[14px] leading-[20px] ml-[36px]'>
                                    Verschiedene Größen, Farben und Materialien
                                    nach Ihren Wünschen
                                </p>
                            </li>
                            <li>
                                <div className='flex items-start gap-3 mb-3'>
                                    <Image
                                        src='/images/icons/icon-check.svg'
                                        alt='Arrow'
                                        width={24}
                                        height={24}
                                    />
                                    <strong className='text-primary'>
                                        Einfache & Schnelle Montage
                                    </strong>
                                </div>
                                <p className='text-gray-600 text-[14px] leading-[20px] ml-[36px]'>
                                    Für sofortige Nutzung und mehr Wohnqualität
                                </p>
                            </li>
                        </ul>

                        <p className='text-gray-700 text-[16px] leading-[24px] mb-6'>
                            Erweitern Sie Ihren Wohnraum nach draußen –
                            stilvoll, wettergeschützt und komfortabel!
                        </p>

                        <CustomButton className='mb-8 md:mb-0'>
                            Konstruieren Sie Terrassendach
                        </CustomButton>
                    </div>
                </div>
            </div>
        </section>
    )
}
