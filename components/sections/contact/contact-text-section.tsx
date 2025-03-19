import Link from 'next/link'

export default function ContactTextSection() {
    return (
        <section className='w-full flex items-center bg-white'>
            <div className='container mx-auto'>
                <h2 className='text-2xl lg:text-5xl font-semibold text-customGray-700 mb-4'>
                    Kontakt
                </h2>
                <p className='text-customGray-600 text-xl mb-6'>
                    Sie haben Interesse an einer Aluminium Produkt? Füllen Sie
                    einfach das Anfrageformular vollständig aus. Innerhalb von
                    zwei Werktagen erhalten Sie einen Katalog mit einem
                    unverbindlichen Preisangebot von uns (Per E-mail und auf dem
                    Postweg).
                </p>
                <div className='w-full bg-customYellow-50 border border-customYellow-200 rounded-xl p-6 text-center'>
                    <p className='text-customGray-700 text-base'>
                        Wenn Sie ein Angebot anfordern möchten, nutzen Sie dann
                        bitte das{' '}
                        <Link
                            href='/preisanfrage-formular'
                            className='text-deepBlue font-semibold hover:underline'
                        >
                            Preisanfrage-Formular
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}
