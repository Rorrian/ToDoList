import React, { useCallback, useState } from 'react'

import styles from './index.module.scss'

interface InputPlusProps {
    onAdd: (title: string) => void
}

export const InputPlus: React.FC<InputPlusProps> = ({
    onAdd, 
}) => {

    const [inputValue, setInputValue] = useState('')

    const addTaskHandler = useCallback(() => {
        onAdd(inputValue)
        setInputValue('')
    }, [inputValue])

    return(
        <div className={styles.inputPlus}>
            <input
                type="text"
                className={styles.inputPlusValue}
                value={inputValue}
                placeholder='Type here...'
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                    if(e.key === 'Enter'){
                        addTaskHandler()
                    }
                }}
            />
            <button
                type="button"
                onClick={addTaskHandler}
                aria-label='Add'
                className={styles.inputPlusButton}
            />
        </div>
    )
}