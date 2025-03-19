export default function ProfileView() {
    return (
        <div className='w-full container mx-auto pt-6 pb-10 px-4 lg:px-0'>
            <Breadcrumbs />
            <div className='w-full container mx-auto py-12 flex flex-col lg:flex-row items-start gap-8'>
                <div className='w-full lg:w-1/2'>
                    <CommercialRequestSection />
                </div>

                <div className='w-full lg:w-1/2 flex justify-center'>
                    <ProfileForm />
                </div>
            </div>
        </div>
    )
}
