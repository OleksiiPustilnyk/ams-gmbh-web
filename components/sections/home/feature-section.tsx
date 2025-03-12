import CustomButton from '@/components/ui/buttons/custom-button'
import { CheckIcon } from '@/components/ui/icons/icon-check'
import Image from 'next/image'

export default function FeatureSection() {
    return (
        <section className='w-full bg-[#F2F4F7] pt-12'>
            <div className='w-full'>
                <h2 className='text-3xl font-semibold text-center text-primary mb-8'>
                    Moderne Aluminium-Terrassen mit Polycarbonat-Dach
                    <br />
                    Ihr perfekter Outdoor-Bereich!
                </h2>

                <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-8'>
                    <div className='px-4 lg:px-0 lg:ml-[110px] lg:mr-8'>
                        <p className='text-gray-700 text-base mb-8'>
                            Machen Sie Ihre Terrasse wetterfest und genießen Sie
                            maximalen Komfort mit unseren modernen
                            Aluminium-Terrassenüberdachungen. Wählen Sie
                            zwischen robustem Polycarbonat oder elegantem Glas,
                            um Ihren Außenbereich optimal zu gestalten.
                        </p>

                        <ul className='space-y-5 mb-6'>
                            <li>
                                <div className='flex items-start gap-3 mb-3'>
                                    <div className='w-6 h-6 bg-defaultYellow rounded-full flex items-center justify-center'>
                                        <CheckIcon />
                                    </div>
                                    <strong className='text-primary'>
                                        Langlebig & Wartungsfrei
                                    </strong>
                                </div>
                                <p className='text-gray-600 text-sm ml-9'>
                                    Rostfreies Aluminium garantiert Stabilität
                                    und eine lange Lebensdauer
                                </p>
                            </li>
                            <li>
                                <div className='flex items-start gap-3 mb-3'>
                                    <div className='w-6 h-6 bg-defaultYellow rounded-full flex items-center justify-center'>
                                        <CheckIcon />
                                    </div>
                                    <strong className='text-primary'>
                                        Wetter- & UV-Schutz
                                    </strong>
                                </div>
                                <p className='text-gray-600 text-sm ml-9'>
                                    Polycarbonat schützt vor Regen und Hitze,
                                    Glas sorgt für eine edle Optik mit maximalem
                                    Lichteinfall
                                </p>
                            </li>
                        </ul>

                        <CustomButton className='mb-8 lg:mb-0'>
                            Konstruieren Sie Terrassendach
                        </CustomButton>
                    </div>

                    <div className='relative px-4 lg:px-0 order-last lg:order-none'>
                        <Image
                            src='/images/img-feature-section-1.png'
                            alt='Terrassenüberdachung'
                            width={600}
                            height={400}
                            className='w-full h-auto object-cover'
                        />
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-12'>
                    <div className='relative px-4 lg:px-0 order-last lg:order-none'>
                        <Image
                            src='/images/img-feature-section-2.png'
                            alt='Moderne Terrassen'
                            width={600}
                            height={400}
                            className='w-full h-auto object-cover'
                        />
                    </div>

                    <div className='px-4 lg:px-0 lg:mr-28 lg:ml-8'>
                        <ul className='space-y-5 mb-6'>
                            <li>
                                <div className='flex items-start gap-3 mb-3'>
                                    <div className='w-6 h-6 bg-defaultYellow rounded-full flex items-center justify-center'>
                                        <CheckIcon />
                                    </div>
                                    <strong className='text-primary'>
                                        Modernes & Zeitloses Design
                                    </strong>
                                </div>
                                <p className='text-gray-600 text-sm ml-9'>
                                    Passt sich harmonisch an jede Architektur an
                                </p>
                            </li>
                            <li>
                                <div className='flex items-start gap-3 mb-3'>
                                    <div className='w-6 h-6 bg-defaultYellow rounded-full flex items-center justify-center'>
                                        <CheckIcon />
                                    </div>
                                    <strong className='text-primary'>
                                        Individuelle Anpassung
                                    </strong>
                                </div>
                                <p className='text-gray-600 text-sm ml-9'>
                                    Verschiedene Größen, Farben und Materialien
                                    nach Ihren Wünschen
                                </p>
                            </li>
                            <li>
                                <div className='flex items-start gap-3 mb-3'>
                                    <div className='w-6 h-6 bg-defaultYellow rounded-full flex items-center justify-center'>
                                        <CheckIcon />
                                    </div>
                                    <strong className='text-primary'>
                                        Einfache & Schnelle Montage
                                    </strong>
                                </div>
                                <p className='text-gray-600 text-sm ml-9'>
                                    Für sofortige Nutzung und mehr Wohnqualität
                                </p>
                            </li>
                        </ul>

                        <p className='text-gray-700 text-base mb-6'>
                            Erweitern Sie Ihren Wohnraum nach draußen –
                            stilvoll, wettergeschützt und komfortabel!
                        </p>

                        <CustomButton className='mb-8 lg:mb-0'>
                            Konstruieren Sie Terrassendach
                        </CustomButton>
                    </div>
                </div>
            </div>
        </section>
    )
}
