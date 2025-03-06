export default function CatalogIntroSection() {
    return (
        <section className='w-full bg-white'>
            <h1 className='mt-8 mb-6 text-2xl lg:text-5xl font-semibold text-primary'>
                Produktkatalog für Privatkunden
            </h1>
            <div className='container mx-auto md:text-left'>
                <h2 className='text-[16px] md:text-[20px] font-normal text-deepGray mb-6'>
                    Willkommen im Produktkatalog für Privatkunden! Hier finden
                    Sie eine breite Palette von hochwertigen Terrassen, Carports
                    und Zäunen, die speziell auf die Bedürfnisse und
                    Anforderungen unserer privaten Kunden zugeschnitten sind.
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-primary'>
                    <div>
                        <h3 className='text-[16px] font-semibold text-primary mb-2'>
                            Terrassen
                        </h3>
                        <p className='text-[14px] font-normal leading-[20px]'>
                            Gestalten Sie Ihren Außenbereich mit unseren
                            erstklassigen Terrassenlösungen. Von Holzterrassen
                            bis hin zu WPC-Decks bieten wir Ihnen die perfekte
                            Grundlage, um Ihren Garten in eine einladende und
                            gemütliche Oase zu verwandeln.
                        </p>
                    </div>

                    <div>
                        <h3 className='text-[16px] font-semibold text-primary mb-2'>
                            Carports
                        </h3>
                        <p className='text-[14px] font-normal leading-[20px]'>
                            Schützen Sie Ihr Fahrzeug vor den Elementen mit
                            unseren robusten Carports. Unsere Carports bieten
                            nicht nur Schutz vor Witterungseinflüssen, sondern
                            sind auch eine stilvolle Ergänzung zu Ihrem Zuhause.
                        </p>
                    </div>

                    <div>
                        <h3 className='text-[16px] font-semibold text-primary mb-2'>
                            Zäune
                        </h3>
                        <p className='text-[14px] font-normal leading-[20px]'>
                            Sichern Sie Ihr Grundstück und schaffen Sie
                            Privatsphäre mit unseren hochwertigen Zäunen.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
