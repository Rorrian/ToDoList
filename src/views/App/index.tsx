import React from 'react'
import { useToDoStore } from '../../data/stores/useToDoStore'

import styles from './index.module.scss'
import { InputPlus } from '../components/InputPlus'
import { InputTask } from '../components/InputTask'

export const App: React.FC = () => {

    const [
        tasks,
        createTask,
        updateTask,
        removeTask,
    ] = useToDoStore(state => [
        state.tasks,
        state.createTask,
        state.updateTask,
        state.removeTask,
    ])  

    return (
        <article className={styles.article}>
            <h1 className={styles.articleTitle}>To Do App</h1>

            <section className={styles.articleSection}>
                <InputPlus onAdd={(title) => title ? createTask(title) : undefined} />
            </section>

            <section className={styles.articleSection}>
                {!tasks.length ? (
                    <p className={styles.articleText}>There is no one task.</p>
                ) : (
                    tasks.map(task => (
                        <InputTask
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            onDone={removeTask}
                            onEdited={updateTask}
                            onRemoved={removeTask}
                        />
                    ))
                )}
            </section>
        </article>
    )
}