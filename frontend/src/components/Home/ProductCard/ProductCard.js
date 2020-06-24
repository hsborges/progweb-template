import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router";
import { FILES_ROOT } from "../../../utils/apiPath";
import { useStyles } from "./styles";

export const ProductCard = ({
  data: {
    _id,
    title,
    description,
    image: { fileName = "1592335000782-write.png" } = {},
  },
}) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Card className={classes.root} style={{ margin: "8px" }}>
      <CardActionArea
        style={{ height: "100%", flexDirection: "column" }}
        onClick={() => history.push("/produto/" + _id)}
        // passando titulo, apenas para teste. Futuramente vai passar o ID do produto
      >
        <CardMedia
          className={classes.media}
          image={`${FILES_ROOT}/${fileName}`}
          title={title}
        />
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
