'use client'
import {useTaskStore} from "@/store/kanban";
import {useEffect, useMemo, useState} from "react";
import {Column, Task} from "@/types/kanban";
import {MouseSensor, TouchSensor, useSensor, useSensors} from "@dnd-kit/core";

const defaultCols = []

const KanbanBoard = () => {
  const columns = useTaskStore((state) => state.columns)
  const setColumns = useTaskStore((state) => state.setCols)

  const columnsId = useMemo(() => columns.map(col => col.id), [columns, columns])

  const tasks = useTaskStore((state) => state.tasks)
  const setTasks = useTaskStore((state) => state.setTasks)

  const [activeColumn, setActiveColumn] = useState<Column | null>(null)
  const [isMounted, setIsMounted] = useState<Boolean>(false)

  const [activeTask, setActiveTask] = useState<Task | null>(null)

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor)
  )

  useEffect(() => {
    setIsMounted(true)
  }, [setIsMounted])

  useEffect(() => {
    useTaskStore.persist.rehydrate()
  }, [])

  
}

export default KanbanBoard