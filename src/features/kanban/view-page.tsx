import NewTaskDialog from "@/features/kanban/components/new-task-dialog";
import KanbanBoard from "@/features/kanban/components/kanban-board";

export default function KanbanViewPage() {
  return (
    <>
      <NewTaskDialog/>
      <KanbanBoard/>
    </>
  )
}