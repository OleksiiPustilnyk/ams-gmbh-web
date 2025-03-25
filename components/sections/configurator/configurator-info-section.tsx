'use client'

import { CheckIcon } from '@/components/ui/icons/icon-check'

export default function InfoSection() {
    return (
        <div className='p-6 md:p-6 bg-customYellow-50 border border-customYellow-200 rounded-xl text-customGray-700'>
            <p className='font-medium text-sm'>
                Beide Varianten sind leicht, stabil, witterungsbeständig und
                schlagfest. Ihre Wahl hängt von Ihren Licht- und
                Komfortvorlieben ab
            </p>

            <ul className='mt-2 space-y-2'>
                <li className='flex items-start gap-3'>
                    <span className='flex items-center justify-center w-6 h-6 bg-customYellow-500 rounded-full shrink-0 leading-none'>
                        <CheckIcon className='w-3 h-3 text-customGray-700' />
                    </span>
                    <span className='font-normal text-sm'>
                        Lichtdurchlässigkeit: bis zu 76% – maximaler
                        Lichteinfall für eine helle Atmosphäre
                    </span>
                </li>
                <li className='flex items-start gap-3'>
                    <span className='flex items-center justify-center w-6 h-6 bg-customYellow-500 rounded-full shrink-0 leading-none'>
                        <CheckIcon className='w-3 h-3 text-customGray-700' />
                    </span>
                    <span className='font-normal text-sm'>
                        Schutz: UV-Beschichtung verhindert Vergilbung und
                        verlängert die Lebensdauer
                    </span>
                </li>
            </ul>

            <p className='mt-2 font-medium text-sm'>
                Zusätzlich: VSG Glas 10 mm (Klar oder Milchglas ) auf Anfrage.
            </p>
            <p className='mt-1 font-medium text-sm'>
                Die Wahl zwischen 8 mm und 10 mm hängt von Ihren Anforderungen
            </p>
        </div>
    )
}
