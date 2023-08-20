import { ColumnContainer, ColumnTitle, CardContainer } from "../styles";
import { Card } from "./Card";
import { AddNewItem } from "./AddNewItem";

type ColumnProps = {
    text: string
}

export const Column = ({text}: ColumnProps) => {
    return (
      <ColumnContainer>
        <ColumnTitle>{text}</ColumnTitle>
        <Card text="Generate App Scaffold"></Card>
        <Card text="Learn Typescript"></Card>
        <Card text="Begin to use static typing"></Card>
        <AddNewItem
            toggleButtonText="+ Add another card"
            onAdd={console.log}
            dark
        />
      </ColumnContainer>
    );
}