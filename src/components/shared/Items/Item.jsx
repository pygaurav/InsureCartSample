import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import InputBox from "../InputBox/InputBox";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  mt: {
    marginTop: "50px",
  },
  left: {
    textAlign: "left",
  },
  marginTop: {
    marginTop: theme.spacing(2),
  },
  input: {
    width: "40px",
    height: "40px",
    fontSize: "22px",
  },
}));

const Item = ({ info }) => {
  const { quantity, image_uri, name, price, discount, currency } = info;
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography
          variant="h4"
          className={clsx(classes.left, classes.marginTop)}
        >
          {info.name}
        </Typography>
      </Grid>
      <Grid item>
        <img src={image_uri} alt={name} width={180} height={240} />
      </Grid>
      <InputBox
        name="Quanity"
        width="40px"
        type="input"
        value={quantity}
        height="40px"
        fontSize="22px"
        marginTop="50px"
      />
      <InputBox
        name="Price"
        type="text"
        value={` (${currency}${price} - ${currency}${discount}) * ${quantity} =  ${currency}${
          (price - discount) * quantity
        }`}
        width="40px"
        height="40px"
        fontSize="22px"
        marginTop="50px"
      />
    </Grid>
  );
};

export default Item;
