export type Todo = {
  id: string;
  todoName: string;
  todoStatus: boolean;
};

export type TodoProps = {
  id: string;
  todoName: string;
  todoStatus: boolean;
  onDelete: (id: string) => void;
  onChangeStatus: (id: string) => void;
};
