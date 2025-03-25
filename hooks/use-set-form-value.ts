import { UseFormSetValue, Path, PathValue, FieldValues } from 'react-hook-form'

export function useSetFormValue<TFieldValues extends FieldValues>(
    setValue: UseFormSetValue<TFieldValues>,
) {
    return function <TKey extends Path<TFieldValues>>(
        name: TKey,
        value: PathValue<TFieldValues, TKey>,
    ) {
        setValue(name, value, {
            shouldDirty: true,
            shouldValidate: true,
        })
    }
}
