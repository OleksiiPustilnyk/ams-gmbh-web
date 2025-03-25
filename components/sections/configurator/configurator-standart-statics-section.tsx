'use client'

import CustomTooltip from '@/components/ui/custom-tooltip/custom-tooltip'
import { InfoIcon } from '@/components/ui/icons/icon-info'

export default function StandardStaticsSection() {
    return (
        <div className='p-4 bg-white'>
            <div className='flex items-center gap-2'>
                <h3 className='text-sm lg:text-base font-semibold text-customGray-700'>
                    Regelstatik
                </h3>
                <CustomTooltip content='Informationen zur Traglast'>
                    <button className='text-gray-500 hover:text-gray-700'>
                        <InfoIcon className='w-4 h-4' />
                    </button>
                </CustomTooltip>
            </div>

            <div className='mt-4 p-4 bg-customYellow-50 border border-customYellow-100 rounded-md text-sm text-customGray-700'>
                Nach unserer Regelstatik bei einer Überdachung mit VSG mm. bis 7
                m x 4 mm ist eine Traglast bis 1,06 kN/m² = 108 kg/m²
                zugelassen. Schneelastzone 2A.
            </div>
        </div>
    )
}
