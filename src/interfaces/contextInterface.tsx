export interface ContextProps {
    list: ListProps[];
    setList: React.Dispatch<React.SetStateAction<ListProps[]>>;
  }

export interface ListProps {
    text?: string;
    checked?: boolean;
}
