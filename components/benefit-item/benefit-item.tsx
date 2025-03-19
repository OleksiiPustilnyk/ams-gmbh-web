import Image from 'next/image'

interface BenefitItemProps {
    icon: string
    title: string
    description: string
}

export default function BenefitItem({
    icon,
    title,
    description,
}: BenefitItemProps) {
    return (
        <div className='flex items-center gap-4'>
            <div className='w-16 h-16 flex items-center justify-center bg-yellow-400 rounded-full shrink-0'>
                <Image
                    src={icon}
                    alt={title}
                    width={32}
                    height={32}
                    className='w-auto h-auto'
                />
            </div>

            <div className='flex flex-col'>
                <h3 className='text-customGray-700 font-semibold text-lg mb-1'>
                    {title}
                </h3>
                <p className='text-gray-600 text-sm'>{description}</p>
            </div>
        </div>
    )
}
