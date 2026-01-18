import React from "react";

interface ListItemProps {
  value: number;
}

function ListItemComponent({ value }: ListItemProps) {
  return (
    <div
      style={{
        display: "flex",
        padding: 8,
        backgroundColor: "white",
        color: "black",
      }}
    >
      Value: {value}
    </div>
  );
}

export const ListItem = React.memo(ListItemComponent);
