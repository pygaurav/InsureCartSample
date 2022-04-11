import React from "react";
import Typography from "@material-ui/core/Typography";

const Counter = ({ total, currency }) => {
  return (
    <Typography variant="h5">
      Sub total: {currency}
      {total}
    </Typography>
  );
};

export default Counter;
