export interface ContextProps {
    list: ListProps[];
    setList: React.Dispatch<React.SetStateAction<ListProps[]>>;
    hide: boolean;
    setHide: React.Dispatch<React.SetStateAction<boolean>>
  }

export interface ListProps {
    text?: string;
    checked?: boolean;
}
