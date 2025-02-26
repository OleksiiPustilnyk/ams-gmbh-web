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
    // link,
}: ProductCardProps) {
    return (
        <div className='bg-white overflow-hidden'>
            <div className='w-full'>
                <Image
                    src={imageUrl}
                    alt={altText}
                    width={300}
                    height={250}
                    className='object-cover w-full h-auto'
                />
            </div>

            <div className='mt-4 flex flex-col justify-between h-[110px]'>
                <h3 className='font-noto text-[16px] font-semibold leading-[20.8px] tracking-normal text-primary'>
                    {title}
                </h3>
                <div className='flex justify-between items-end'>
                    <div className='flex flex-col'>
                        {oldPrice && (
                            <span className='text-primary line-through text-[12px] font-normal leading-[12px] tracking-normal'>
                                {oldPrice}
                            </span>
                        )}
                        <div className='flex items-center'>
                            <span
                                className={`text-[20px] font-semibold leading-[30px] tracking-normal ${oldPrice ? 'text-[#D92D20]' : 'text-primary'}`}
                            >
                                {price}
                            </span>
                            <span className='text-primary text-[12px] font-normal leading-[18px] tracking-normal ml-[6px]'>
                                per meter
                            </span>
                        </div>
                    </div>

                    <CustomButton>Add to cart</CustomButton>
                </div>
            </div>
        </div>
    )
}
