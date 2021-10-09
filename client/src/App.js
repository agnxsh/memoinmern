import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
//this redux hook allows us to dispatch an action
import { getPosts } from "./actions/posts";
import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts.js";
import Form from "./components/Form/Form.js";
import useStyles from "./styles";
const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          {" "}
          Memories...
          <img
            className={classes.image}
            src={memories}
            alt="memories"
            height="60"
          />
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            className="classes.mainContainer"
            justify="space-between"
            alignItems="stretch"
            spacing="3"
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}> </Posts>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};
export default App;

//data management without redux is indeed a havoc, this is because for every set of data that we collect
//from the user , we need to state a current id to it, so that it remains unique to each and every component
//the these components need to be linked up separately with App.js as well
