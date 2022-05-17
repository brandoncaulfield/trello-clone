import * as React from "react";

// MUI
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { ListItemText } from "@mui/material";
import TextField from "@mui/material/TextField";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function SimpleCard(props: any) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.description}
        </Typography>

        {/* <List dense>
          {props.tasks.forEach((task: string) => (
            <ListItem>
              <ListItemText primary={task} />
            </ListItem>
          ))}
        </List> */}
        <p>{JSON.stringify(props.tasks)}</p>
        <ul>
          {props.tasks.forEach((task: string) => (
            <li>{task}</li>
          ))}
        </ul>
      </CardContent>
      <TextField
        id="new-task"
        label="new-task"
        // variant="outlined"
        // fullWidth="true"
        size="small"
      />
      <CardActions>
        <Button size="small">Add Task +</Button>
      </CardActions>
    </Card>
  );
}
