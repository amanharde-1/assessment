import { Grid, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";

function AddArticle(params) {

    const [fieldValue, setFieldValue] = useState({
        userId: "",
        title: "",
        body: ""
    });

    const [error, setError] = useState({
        userId: "",
        title: "",
        body: ""
    });

    const onInputChange = event => {
        setFieldValue({
            ...fieldValue,
            [event.target.name]: event.target.value
        });
        setError({
            ...error,
            [event.target.name]: ""
        });
    }

    const validateField = () => {
        const _error = {
            userId: "",
            title: "",
            body: ""
        };
        let hasError = false;

        for (let field in error) {
            switch (field) {
                case "userId":
                case "title":
                case "body":
                    if (fieldValue[field].length === 0) {
                        _error[field] = "Field cannot be empty";
                        hasError = true
                    }
                    break;

                default:
                    break;
            }
        }

        setError(_error);
        return hasError;
    }

    const onSubmitClick = event => {
        if (validateField()) {

        } else {
        }
    }


    return (
        <Grid container spacing={3} item xl={12} lg={12} md={12} sm={12} xs={12} direction="row" justifyContent='center' alignItems="flex-start">
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} textAlign='center'>
                <Typography variant="h3">
                    {`Add Article`}
                </Typography>
            </Grid>
            <Grid container spacing={3} item xl={8} lg={8} md={8} sm={12} xs={12}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <TextField
                        label="UserId"
                        placeholder="UserId"
                        id="userId"
                        name="userId"
                        fullWidth
                        type="text"
                        value={fieldValue.userId}
                        error={error.userId !== ""}
                        helperText={error.userId}
                        onChange={onInputChange}
                    />
                </Grid>

                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <TextField
                        label="Title"
                        placeholder="Title"
                        id="title"
                        name="title"
                        fullWidth
                        type="text"
                        value={fieldValue.title}
                        error={error.title !== ""}
                        helperText={error.title}
                        onChange={onInputChange}
                    />
                </Grid>

                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <TextField
                        label="Body"
                        placeholder="Body"
                        id="body"
                        name="body"
                        fullWidth
                        type="text"
                        value={fieldValue.body}
                        error={error.body !== ""}
                        helperText={error.body}
                        onChange={onInputChange}
                    />
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} textAlign='center'>
                    <Button
                        variant="contained"
                        color="success"
                        size="large"
                        onClick={onSubmitClick}
                    >
                        {`Submit`}
                    </Button>
                </Grid>
            </Grid>
        </Grid>

    )
}

export default AddArticle;