import CustomButton from '../ui/buttons/custom-button'
import Image from 'next/image'

export default function CategoryDropdown() {
    return (
        <CustomButton
            leftIcon={
                <Image
                    src='/images/icons/icon-category.svg'
                    alt='Search'
                    width={15}
                    height={15}
                />
            }
            rightIcon={
                <Image
                    src='/images/icons/icon-chevron.svg'
                    alt='Search'
                    width={10}
                    height={5}
                    className='ml-7'
                />
            }
        >
            Kategorien
        </CustomButton>
    )
}
