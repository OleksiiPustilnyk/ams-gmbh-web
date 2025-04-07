'use client'

import { useState } from 'react'

import { AdminUserViewProps, UserPanelTabEnum } from './user.types'
import UpdateUserForm from '@/components/admin-panel/forms/update-user-form'
import ChangeUserPassForm from '@/components/admin-panel/forms/change-user-pass-form'
import SubMenuButton from '@/components/ui/admin/buttons/custom-sub-menu-button'
import AddUserForm from '@/components/admin-panel/forms/add-user-form'

export default function AdminUserView({ user }: AdminUserViewProps) {
    const [activeTab, setActiveTab] = useState(UserPanelTabEnum.PROFILE)

    return (
        <div className='w-full container mx-auto pt-6 pb-10 px-4 lg:px-0'>
            <div className='mb-6'>
                {/* <h1 className='text-2xl font-bold mb-6'>
                    User Settings | Hello {user.username}!
                </h1> */}
                <h1 className='text-2xl font-bold mb-6'>
                    User Settings | Hello{' '}
                    <span className='text-customYellow-600'>
                        {user.username}
                    </span>
                    !
                </h1>
            </div>
            <div className='flex mb-6 gap-4'>
                <SubMenuButton
                    isActive={activeTab === UserPanelTabEnum.PROFILE}
                    onClick={() => setActiveTab(UserPanelTabEnum.PROFILE)}
                >
                    Update Profile
                </SubMenuButton>
                <SubMenuButton
                    isActive={activeTab === UserPanelTabEnum.PASSWORD}
                    onClick={() => setActiveTab(UserPanelTabEnum.PASSWORD)}
                >
                    Change Password
                </SubMenuButton>
                <SubMenuButton
                    isActive={activeTab === UserPanelTabEnum.ADD_ADMIN}
                    onClick={() => setActiveTab(UserPanelTabEnum.ADD_ADMIN)}
                >
                    Create admin
                </SubMenuButton>
            </div>

            {activeTab === UserPanelTabEnum.PROFILE && (
                <UpdateUserForm user={user} />
            )}
            {activeTab === UserPanelTabEnum.PASSWORD && <ChangeUserPassForm />}
            {activeTab === UserPanelTabEnum.ADD_ADMIN && <AddUserForm />}
        </div>
    )
}
