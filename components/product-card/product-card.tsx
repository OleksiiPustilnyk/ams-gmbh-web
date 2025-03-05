import Image from 'next/image'
import CustomButton from '../ui/buttons/custom-button'

interface ProductCardProps {
    title: string
    imageUrl: string
    altText: string
    price: string
    oldPrice?: string
    link: string
}

export default function ProductCard({
    title,
    imageUrl,
    altText,
    price,
    oldPrice,
}: ProductCardProps) {
    return (
        <div className='bg-white p-4 flex flex-col items-start h-full'>
            <div className='w-full'>
                <Image
                    src={imageUrl}
                    alt={altText}
                    width={300}
                    height={250}
                    className='object-cover w-full h-auto rounded-md'
                />
            </div>
            <h3 className='mt-4 text-[16px] font-semibold leading-[20px] text-primary text-start'>
                {title}
            </h3>
            <div className='flex flex-col flex-grow justify-end w-full'>
                <div className='flex flex-col sm:flex-row sm:justify-between items-start sm:items-center w-full'>
                    <div className='flex flex-col items-start'>
                        {oldPrice ? (
                            <span className='text-primary line-through text-[12px] font-normal leading-[12px]'>
                                {oldPrice}
                            </span>
                        ) : (
                            <span className='invisible text-[12px] leading-[12px]'>
                                ----
                            </span>
                        )}
                        <div className='flex items-center'>
                            <span
                                className={`text-[20px] font-semibold leading-[30px] ${
                                    oldPrice ? 'text-[#D92D20]' : 'text-primary'
                                }`}
                            >
                                {price}
                            </span>
                            <span className='text-primary text-[12px] font-normal leading-[18px] ml-2 self-center'>
                                per meter
                            </span>
                        </div>
                    </div>
                    <CustomButton className='sm:mt-0 sm:ml-4 w-full sm:w-auto'>
                        Add to cart
                    </CustomButton>
                </div>
            </div>
        </div>
    )
}
