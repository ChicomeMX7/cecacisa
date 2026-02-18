import { useState } from 'react'
import { RowMenuSection } from './DataTable.styles'
import { Button } from 'components/Button'
import { colors } from 'styles/colors'

type RowMenuProps = {
    edit: () => void
    onDelete: () => void
}

export const RowMenu = ({ edit, onDelete }: RowMenuProps) => {
    const [show, setShow] = useState(false)
    const [activeEdit, setActiveEdit] = useState(false)
    const displayMenu = () => {
        setShow(!show)
    }
    const handleEdit = () => {
        displayMenu()
        setActiveEdit(true)
        edit()
    }
    const finishEdit = () => {
        setShow(false)
        setActiveEdit(false)
        edit()
    }
    const handleOnDelete = () => {
        setShow(false)
        onDelete()
    }

    return (
        <RowMenuSection>
            {!show ? (
                activeEdit ? (
                    <Button.ClearIcon
                        action={finishEdit}
                        icon={'close'}
                        color={colors.DANGER[100]}
                        size={'small'}
                    />
                ) : (
                    <Button.ClearIcon
                        action={displayMenu}
                        icon={'more'}
                        color={colors.TEXT}
                        size={'small'}
                    />
                )
            ) : (
                <>
                    <Button.ClearIcon
                        action={displayMenu}
                        icon={'close'}
                        color={colors.TEXT}
                        size={'small'}
                    />
                    <Button.ClearIcon
                        action={handleEdit}
                        icon={'edit'}
                        color={colors.TEXT}
                        size={'small'}
                    />
                    <Button.ClearIcon
                        action={handleOnDelete}
                        icon={'delete'}
                        color={colors.TEXT}
                        size={'small'}
                    />
                </>
            )}
        </RowMenuSection>
    )
}
