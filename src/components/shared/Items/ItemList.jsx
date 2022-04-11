import React from "react";
import Item from "./Item";
import { lineItems } from "../../../model/index";
import Container from "@material-ui/core/Container";

const ItemList = () => {
  const Items = lineItems.map((e, index) => <Item info={e} />);
  return <Container>{Items}</Container>;
};

export default ItemList;
