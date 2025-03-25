'use client'

import * as Tooltip from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'

interface TooltipProps {
    children: ReactNode
    content: string
}

export default function CustomTooltip({ children, content }: TooltipProps) {
    return (
        <Tooltip.Provider>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content
                        side='top'
                        className='bg-customGray-900 text-white text-xs px-3 py-2 rounded-lg'
                    >
                        {content}
                        <Tooltip.Arrow className='fill-customGray-900' />
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    )
}
