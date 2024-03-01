import { ListProps } from "@/interfaces/contextInterface";

export function counter (list: ListProps[], bool: boolean) {
    let count = 0;

    for(let i = 0; i < list.length; i +=1) {
        if(list[i].checked === bool) count +=1;
    }

    return count;
}