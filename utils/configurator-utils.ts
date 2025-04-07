import { ConfiguratorOption } from '@/interfaces/configurator-form.interface'

export const getOptionLabel = (
    value: string,
    options: ConfiguratorOption[],
    key: keyof Pick<ConfiguratorOption, 'label'> = 'label',
): string => {
    return options.find((opt) => opt.value === value)?.[key] || ''
}
