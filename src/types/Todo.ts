export type Todo = {
  id: string;
  userId: string;
  todoName: string;
  todoStatus: boolean;
  createdAt:string
};

export type TodoProps = {
  id: string;
  todoName: string;
  todoStatus: boolean;
  onDelete: (id: string) => void;
  onChangeStatus: (id: string) => void;
};
