/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState, useEffect } from 'react'
import { Range } from 'react-range'
import CustomInput from '../custom-input/custom-input'

interface CustomRangeSliderProps {
    min: number
    max: number
    value: [number, number]
    onChange: (value: [number, number]) => void
    // allPrices: number[]
}

export default function CustomRangeSlider({
    min,
    max,
    value,
    onChange,
}: CustomRangeSliderProps) {
    const [range, setRange] = useState<[number, number]>(value)
    const [inputValues, setInputValues] = useState<[string, string]>([
        String(value[0]),
        String(value[1]),
    ])

    useEffect(() => {
        setRange(value)
        setInputValues([String(value[0]), String(value[1])])
    }, [value])

    const handleSliderChange = (values: number[]) => {
        setRange([values[0], values[1]])
        setInputValues([String(values[0]), String(values[1])])
        onChange([values[0], values[1]])
    }

    const handleInputChange = (index: number, newValue: string) => {
        const updatedValues = [...inputValues] as [string, string]
        updatedValues[index] = newValue

        setInputValues(updatedValues)

        const numValue = Number(newValue)

        if (!isNaN(numValue)) {
            const newRange = [...range] as [number, number]

            if (index === 0) {
                newRange[0] = Math.max(min, Math.min(numValue, newRange[1]))
            } else {
                newRange[1] = Math.min(max, Math.max(numValue, newRange[0]))
            }

            setRange(newRange)
            onChange(newRange)
        }
    }

    return (
        <div className='w-full'>
            <Range
                step={1}
                min={min}
                max={max}
                values={range}
                onChange={handleSliderChange}
                renderTrack={({ props, children }) => {
                    const { ...restProps } = props
                    return (
                        <div
                            {...restProps}
                            className='w-full h-1 bg-customGray-300 rounded-md relative'
                        >
                            <div
                                className='absolute h-1 bg-customYellow-500 rounded-md'
                                style={{
                                    left: `${((range[0] - min) / (max - min)) * 100}%`,
                                    right: `${100 - ((range[1] - min) / (max - min)) * 100}%`,
                                }}
                            />
                            {children}
                        </div>
                    )
                }}
                renderThumb={({ props, index }) => {
                    const { key, ...restProps } = props
                    return (
                        <div
                            {...restProps}
                            key={`thumb-${index}`}
                            className='w-5 h-5 bg-white border border-customYellow-500 rounded-full cursor-pointer relative'
                        />
                    )
                }}
            />

            <div className='flex justify-between mt-2 text-customGray-700 font-semibold'>
                <span>{range[0]} €</span>
                <span>{range[1]} €</span>
            </div>

            <div className='flex justify-between items-center mt-3 gap-2'>
                <CustomInput
                    label='From'
                    type='text'
                    value={inputValues[0]}
                    onChange={(e) => handleInputChange(0, e.target.value)}
                    onlyNumbers
                />
                <CustomInput
                    label='To'
                    type='text'
                    value={inputValues[1]}
                    onChange={(e) => handleInputChange(1, e.target.value)}
                    onlyNumbers
                />
            </div>
        </div>
    )
}
