import Link from 'next/link'
import Logo from '../logo/logo'

const footerLinks = [
    {
        title: 'Seiten',
        links: ['Startseite', 'Kategorien', 'Preisanfrage', 'Über uns', 'Blog'],
    },
    {
        title: 'Produkte',
        links: [
            'Terrassenüberdachung 700×400 für Polycarbonat',
            'Alu Flacher Carport Anthrazit 700 × 400',
            'Wandprofilblende, Abschlussprofil Wand',
        ],
    },
    {
        title: 'Produktkategorien',
        links: [
            'Aluminium Profile (12)',
            'Vierkantrohr Rechteckrohr Quadrat (12)',
            'Carport (0)',
            'LED spots für Terrassenüberdachung (2)',
            'Überdachungen (16)',
            'Alu Zaun (1)',
            'Carports (0)',
            'Zubehör (7)',
            'Zaunprofile (4)',
            'Doppelcarport (0)',
            'Dichtungen (3)',
            'Terrassenüberdachung Bausatz (16)',
        ],
    },
    {
        title: 'Informationen',
        links: [
            'Impressum',
            'AGB',
            'Datenschutz',
            'Zahlarten',
            'Versand',
            'Widerrufsbelehrung',
            'Widerrufsformular',
        ],
    },
]

export default function Footer() {
    return (
        <footer className='bg-gray-100 py-10 mt-12 px-4'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_2fr_1.5fr_1fr] gap-6 border-b border-gray-300 pb-8'>
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <h4 className='text-customGray-500 font-semibold text-sm mb-4'>
                                {section.title}
                            </h4>
                            <ul className='space-y-2'>
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <Link
                                            href='/'
                                            className='text-customGray-500 text-md hover:underline'
                                        >
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className='flex flex-col lg:flex-row lg:justify-between items-center mt-6 text-gray-600 text-sm'>
                    <Logo />
                    <p className='text-center lg:text-left mt-4 lg:mt-0'>
                        * All prices excl. VAT plus shipping costs and cash on
                        delivery fees, if not otherwise stated
                    </p>
                    <p className='mt-4 lg:mt-0'>© 2025 All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
