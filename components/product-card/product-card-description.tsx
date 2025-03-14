'use client'

interface ProductDescriptionProps {
    isHovered: boolean
    oldPrice?: string
    description?: string
}

export default function ProductCardDescription({
    isHovered,
    oldPrice,
}: ProductDescriptionProps) {
    // Описание товара (контент без обертки)
    const descriptionContent = (
        <>
            <p className='text-customGray-600 text-sm leading-7'>
                Length - 400cm, 500cm, 700cm
                <br />
                Color - Anthracite Structure
                <br />
                SET (190 mx 200 m) - 556.90 net
                <br />
                174.39 € / m² incl. VAT
                <br />
                174.39 € / m² incl. VAT
            </p>
            <p className='bg-iceBlue border border-skyBlue rounded text-deepBlue text-xs font-normal p-2 text-center'>
                excl. VAT
            </p>
            {oldPrice && (
                <p className='bg-customRed-50 border border-customRed-200 text-customGray-600 rounded text-xs font-normal p-2 text-center leading-5'>
                    <span className='text-customRed-600'>10% discount</span>
                    <br />
                    ON ALUMINUM FENCE
                    <br />
                    From 10 m²
                </p>
            )}
        </>
    )

    return (
        <>
            {/* Всегда видно на мобилках и планшетах */}
            <div className='w-full bg-white border-t border-t-customGray-200 py-4 space-y-3 lg:hidden'>
                {descriptionContent}
            </div>

            {/* Появляется при ховере только на десктопе */}
            {isHovered && (
                <div className='absolute left-0 top-full w-full bg-white border-t border-t-customGray-200 py-4 space-y-3 z-50 hidden lg:block'>
                    {descriptionContent}
                </div>
            )}
        </>
    )
}
