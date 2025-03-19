export default function AboutInfoSection() {
    return (
        <section className='w-full bg-customYellow-100 py-10 px-4 lg:mt-14'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center'>
                <div>
                    <h3 className='text-base font-semibold text-customGray-700 mb-2'>
                        Aluminium Großhandel
                    </h3>
                    <p className='text-sm text-customGray-800'>
                        Ihr Lieferant für Aluminium für den Bau
                    </p>
                </div>

                <div>
                    <h3 className='text-base font-semibold text-customGray-700 mb-2'>
                        Aluminium Terrassenüberdachung
                    </h3>
                    <p className='text-sm text-customGray-800'>
                        Produkte für den Kauf und Terrassenüberdachung Bau von
                        Schuppen
                    </p>
                </div>

                <div>
                    <h3 className='text-base font-semibold text-customGray-700 mb-2'>
                        Aluminium Zubehör
                    </h3>
                    <p className='text-sm text-customGray-800'>
                        Zubehör, das für den Bau von Terrassenüberdachungen
                        notwendig ist
                    </p>
                </div>
            </div>
        </section>
    )
}
