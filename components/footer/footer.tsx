import Link from 'next/link'
import Logo from '../logo/logo'

const footerLinks = [
    {
        title: 'Seiten',
        links: [
            { name: 'Startseite', href: '/' },
            { name: 'Kategorien', href: '/categories' },
            { name: 'Preisanfrage', href: '/profile' },
            { name: 'Über uns', href: '/about' },
            { name: 'Blog', href: '/blog' },
        ],
    },
    {
        title: 'Produkte',
        links: [
            {
                name: 'Terrassenüberdachung 700×400 für Polycarbonat',
                href: '/',
            },
            { name: 'Alu Flacher Carport Anthrazit 700 × 400', href: '/' },
            { name: 'Wandprofilblende, Abschlussprofil Wand', href: '/' },
        ],
    },
    {
        title: 'Produktkategorien',
        links: [
            {
                name: 'Aluminium Profile (12)',
                href: '/categories/aluminium-profile',
            },
            { name: 'Vierkantrohr Rechteckrohr Quadrat (12)', href: '/' },
            { name: 'Carport (0)', href: '/categories/alu-carport' },
            { name: 'LED spots für Terrassenüberdachung (2)', href: '/' },
            { name: 'Überdachungen (16)', href: '/' },
            { name: 'Alu Zaun (1)', href: '/categories/alu-zaun' },
            { name: 'Carports (0)', href: '/' },
            { name: 'Zubehör (7)', href: '/categories/zubehor' },
            { name: 'Zaunprofile (4)', href: '/categories/zaunprofile' },
            { name: 'Doppelcarport (0)', href: '/' },
            { name: 'Dichtungen (3)', href: '/categories/dichtungen' },
            { name: 'Terrassenüberdachung Bausatz (16)', href: '/' },
        ],
    },
    {
        title: 'Informationen',
        links: [
            { name: 'Impressum', href: '/' },
            { name: 'AGB', href: '/' },
            { name: 'Datenschutz', href: '/' },
            { name: 'Datenschutz', href: '/' },
            { name: 'Zahlarten', href: '/' },
            { name: 'Versand', href: '/' },
            { name: 'Widerrufsbelehrung', href: '/' },
            { name: 'Widerrufsformular', href: '/' },
        ],
    },
]

export default function Footer() {
    return (
        <footer className='bg-customGray-100 py-10 mt-12 px-4'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_2fr_1.5fr_1fr] gap-6 border-b border-customGray-200 pb-8'>
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <h4 className='text-customGray-500 font-semibold text-sm mb-4'>
                                {section.title}
                            </h4>
                            <ul className='space-y-2'>
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <Link
                                            href={link.href}
                                            className='text-customGray-500 text-sm hover:underline transition'
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className='flex flex-col lg:flex-row lg:justify-between items-center mt-6 text-customGray-600 text-sm'>
                    <Logo />
                    <p className='text-center lg:text-left mt-4 lg:mt-0'>
                        * Alle Preise zzgl. MwSt. und Versandkosten, sofern
                        nicht anders angegeben.
                    </p>
                    <p className='mt-4 lg:mt-0'>
                        © 2025 Alle Rechte vorbehalten.
                    </p>
                </div>
            </div>
        </footer>
    )
}
