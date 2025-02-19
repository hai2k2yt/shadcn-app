import {Column, Task} from "@/types/kanban";
import {v4 as uuid} from "uuid";
import {UniqueIdentifier} from "@dnd-kit/core";
import {persist} from "zustand/middleware";
import {create} from "zustand/react";

const initialTasks: Task[] = [
  {
    id: 'task1',
    status: 'TODO',
    title: 'Project init'
  },
  {
    id: 'task2',
    status: 'TODO',
    title: 'Project update'
  }
]

const defaultCols = [
  {
    id: 'TODO' as const,
    title: 'Todo'
  }
]

type State = {
  tasks: Task[];
  columns: Column[];
  draggedTask: string | null
}

export type Actions = {
  addTask: (title: string, description?: string) => void;
  addCol: (title: string) => void;
  dragTask: (id: string | null) => void;
  removeTask: (title: string) => void;
  removeCol: (id: UniqueIdentifier) => void;
  setTasks: (updatedTasks: Task[]) => void;
  setCols: (cols: Column[]) => void;
  updateCol: (id: UniqueIdentifier, newName: string) => void;
}

export const useTaskStore = create<State & Actions>()(
  persist(
    (set) => ({
      tasks: initialTasks,
      columns: defaultCols,
      draggedTask: null,
      addTask: (title: string, description?: string) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            {id: uuid(), title, description, status: 'TODO'},
          ],
        })),
      addCol: (title: string) =>
        set((state) => ({
          columns: [
            ...state.columns,
            {title, id: state.columns.length ? title.toUpperCase() : 'TODO'},
          ],
        })),
      dragTask: (id: string | null) => set({draggedTask: id}),
      removeTask: (id: string) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
      removeCol: (id: UniqueIdentifier) =>
        set((state) => ({
          columns: state.columns.filter((column) => column.id !== id),
        })),
      setTasks: (newTasks: Task[]) => set({tasks: newTasks}),
      setCols: (newCols: Column[]) => set({columns: newCols}),
    }),
    {name: 'task_store', skipHydration: true}
  )
)