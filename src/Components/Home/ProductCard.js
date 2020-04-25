import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export const ProductCard = ({ data: { title, description, image } }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} style={{ margin: "8px" }}>
      <CardActionArea style={{ height: "100%", flexDirection: "column" }}>
        <CardMedia className={classes.media} image={image} title={title} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            style={{
              overflow: "hidden",
              //textOverflow: "ellipsis",
              //whiteSpace: "nowrap",
              maxHeight: 65,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            style={{ overflow: "hidden", maxHeight: 60 }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/*<CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>*/}
    </Card>
  );
};
