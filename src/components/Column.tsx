import { ColumnContainer, ColumnTitle, CardContainer } from "../styles";
import { Card } from "./Card";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "../state/AppStateContext";
import { addTask } from "../state/actions";

type ColumnProps = {
    text: string
    id: string
}

export const Column = ({text, id}: ColumnProps) => {
    const { getTasksByListId, dispatch } = useAppState();
    const tasks = getTasksByListId(id);

    return (
      <ColumnContainer>
        <ColumnTitle>{text}</ColumnTitle>
        {tasks.map((task) => (
            <Card key={task.id} text={task.text} id={task.id}></Card>
        ))}
        <AddNewItem
            toggleButtonText="+ Add another card"
            onAdd={(text) => dispatch(addTask(text, id))}
            dark
        />
      </ColumnContainer>
    );
}