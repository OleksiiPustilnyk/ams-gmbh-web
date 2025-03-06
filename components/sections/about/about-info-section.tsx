export default function AboutInfoSection() {
    return (
        <section className='w-full bg-[#FFF3D3] py-10 px-4 lg:mt-14'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center'>
                <div>
                    <h3 className='text-[16px] leading-[24px] font-semibold text-primary mb-2'>
                        Aluminium Großhandel
                    </h3>
                    <p className='text-[14px] leading-[21px] text-secondary'>
                        Ihr Lieferant für Aluminium für den Bau
                    </p>
                </div>

                <div>
                    <h3 className='text-[16px] leading-[24px] font-semibold text-primary mb-2'>
                        Aluminium Terrassenüberdachung
                    </h3>
                    <p className='text-[14px] leading-[21px] text-secondary'>
                        Produkte für den Kauf und Terrassenüberdachung Bau von
                        Schuppen
                    </p>
                </div>

                <div>
                    <h3 className='text-[16px] leading-[24px] font-semibold text-primary mb-2'>
                        Aluminium Zubehör
                    </h3>
                    <p className='text-[14px] leading-[21px] text-secondary'>
                        Zubehör, das für den Bau von Terrassenüberdachungen
                        notwendig ist
                    </p>
                </div>
            </div>
        </section>
    )
}
