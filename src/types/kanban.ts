import {type UniqueIdentifier} from '@dnd-kit/core'

export interface Column {
  id: UniqueIdentifier
}

export type Status = 'TODO' | 'IN_PROGRESS' | 'DONE';

export type Task = {
  id: string;
  title: string;
  description?: string;
  status: Status;
};

export type ColumnType = 'Column'

export interface ColumnDragData {
  type: ColumnType;
  column: Column;
}

interface BoardColumnProps {
  column: Column;
  tasks: Task[];
  isOverlay?: boolean;
}