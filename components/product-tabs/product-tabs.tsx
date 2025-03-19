'use client'

import { useState } from 'react'

interface ProductTabsProps {
    description: React.ReactNode
    specification: React.ReactNode
    additionalInfo: React.ReactNode
}

export default function ProductTabs({
    description,
    specification,
    additionalInfo,
}: ProductTabsProps) {
    const [activeTab, setActiveTab] = useState<
        'description' | 'specification' | 'additionalInfo'
    >('description')

    return (
        <div>
            <div className='flex border-b'>
                {['description', 'specification', 'additionalInfo'].map(
                    (tab) => (
                        <button
                            key={tab}
                            className={`py-2 px-4 text-customGray-700 ${
                                activeTab === tab
                                    ? 'border-b-2 border-customYellow-600 font-semibold'
                                    : 'font-normal'
                            }`}
                            onClick={() =>
                                setActiveTab(
                                    tab as
                                        | 'description'
                                        | 'specification'
                                        | 'additionalInfo',
                                )
                            }
                        >
                            {tab === 'description'
                                ? 'Description'
                                : tab === 'specification'
                                  ? 'Specification'
                                  : 'Additional information'}
                        </button>
                    ),
                )}
            </div>

            <div className='mt-6'>
                {activeTab === 'description' && description}
                {activeTab === 'specification' && specification}
                {activeTab === 'additionalInfo' && additionalInfo}
            </div>
        </div>
    )
}
