import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  input: {
    width: (props) => props.width,
    height: (props) => props.height,
    fontSize: (props) => props.fontSize,
  },
  mt: {
    marginTop: (props) => props.marginTop,
  },
});

const InputBox = ({
  width,
  height,
  fontSize,
  marginTop,
  name,
  type,
  value,
}) => {
  const classes = useStyles({ width, height, fontSize, marginTop });
  return (
    <Grid item xs={2} pt={5}>
      <Typography variant="subtitle1" className={classes.mt}>
        {name}
      </Typography>
      {type === "input" ? (
        <input type="text" className={classes.input} value={value} />
      ) : (
        <Typography variant="subtitle1">{value}</Typography>
      )}
    </Grid>
  );
};

export default InputBox;
