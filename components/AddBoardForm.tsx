import * as React from "react";

// MUI
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// API
import { addBoard } from "../API/BoardAPI";

// react-query
import { useQueryClient, useMutation } from "react-query";

export default function AddBoardForm() {
  const mutation = useMutation(addBoard);

  // Get QueryClient from the context
  const queryClient = useQueryClient();

  const [form, setForm] = React.useState<{
    title: string;
    description: string;
  }>({ title: "", description: "" });

  const onFormChange = (evt: any) => {
    const id: string = evt.target.id;
    const value = evt.target.value;
    setForm((form: any) => ({
      ...form,
      [id]: value,
    }));
  };

  const onAddBoard = (event: any) => {
    event.preventDefault();
    // try {
    //   if (form.title !== "" && form.title !== "") {
    //     mutation.mutate(form);
    //     queryClient.invalidateQueries();
    //   } else {
    //     alert("Please fill in all form fields");
    //   }
    // } catch (err) {
    //   alert(err);
    // }
  };

  if (mutation.isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="title"
          label="Title"
          value={form.title}
          onChange={onFormChange}
        />
        <TextField
          id="description"
          label="Description"
          value={form.description}
          onChange={onFormChange}
        />
        <Button variant="contained" onClick={onAddBoard} disabled>
          Add
        </Button>
      </div>
    </Box>
  );
}
