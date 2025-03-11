import Link from 'next/link'

export default function ContactTextSection() {
    return (
        <section className='w-full flex items-center bg-white'>
            <div className='container mx-auto'>
                <h2 className='text-[24px] lg:text-[48px] font-semibold text-primary mb-4'>
                    Kontakt
                </h2>
                <p className='text-deepGray text-[20px] leading-[24px] mb-6'>
                    Sie haben Interesse an einer Aluminium Produkt? Füllen Sie
                    einfach das Anfrageformular vollständig aus. Innerhalb von
                    zwei Werktagen erhalten Sie einen Katalog mit einem
                    unverbindlichen Preisangebot von uns (Per E-mail und auf dem
                    Postweg).
                </p>
                <div className='w-full bg-[#FFF9E9] border border-[#FFECB9] rounded-xl p-6 text-center'>
                    <p className='text-primary text-[16px]'>
                        Wenn Sie ein Angebot anfordern möchten, nutzen Sie dann
                        bitte das{' '}
                        <Link
                            href='/preisanfrage-formular'
                            className='text-[#175CD3] font-semibold hover:underline'
                        >
                            Preisanfrage-Formular
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}
