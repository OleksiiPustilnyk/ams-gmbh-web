import CustomButton from '@/components/ui/buttons/custom-button'
import Image from 'next/image'

export default function NotFoundView() {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-white text-center p-6'>
            <Image
                src='/images/not-found.png'
                alt='Bauarbeiter'
                width={600}
                height={200}
                className='h-full w-auto object-contain'
            />
            <h1 className='text-3xl font-semibold text-customGray-700 mt-14'>
                The page you were looking for was not found.
            </h1>
            <p className='text-customGray-500 text-md mt-2'>
                Check the URL or use the menu to navigate.
            </p>
            <p className='text-customGray-500 text-md mt-2 mb-8'>
                Please try again.
            </p>

            <CustomButton href='/'>Home</CustomButton>
        </div>
    )
}
