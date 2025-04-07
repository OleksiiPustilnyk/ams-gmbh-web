'use client'

interface PriceCalculationProps {
    data: {
        label: string
        value: string
        price: number
    }[]
    total: number
    selectedType: string
}

export default function PriceCalculation({
    data,
    total,
    selectedType,
}: PriceCalculationProps) {
    return (
        <div className='bg-customGray-100 py-6 px-3 lg:p-6 rounded-xl shadow-sm'>
            <div className='flex justify-between items-center mb-4'>
                <h3 className='lg:text-lg font-semibold text-customGray-700'>
                    Preisberechnung
                </h3>
                <span className='text-sm font-normal text-customGray-700'>
                    {selectedType}
                </span>
            </div>

            <div className='overflow-hidden'>
                {data.map((item, index) => (
                    <div
                        key={index}
                        className='grid grid-cols-3 items-center p-3 border-b text-sm text-customGray-700'
                    >
                        <span className='text-left'>{item.label}</span>
                        <span className='text-center'>{item.value}</span>
                        <span className='text-right'>
                            {item.price.toFixed(2).replace('.', ',')} €
                        </span>
                    </div>
                ))}
            </div>

            <div className='mt-4 flex justify-between items-end text-customGray-700'>
                <span className='text-base font-normal'>Ihr Preis:</span>
                <div className='text-right'>
                    <div className='text-lg font-semibold'>
                        {total.toFixed(2).replace('.', ',')} €
                    </div>
                    <span className='text-sm font-normal'>inkl. MwSt</span>
                </div>
            </div>
        </div>
    )
}
