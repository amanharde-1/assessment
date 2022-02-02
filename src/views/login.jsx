
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid, Snackbar, TextField, Typography } from "@mui/material";
import MuiAlert from '@mui/material/Alert';


const credentials = { username: "test@yopmail.com", password: 123456 };

function Login(params) {
    const navigate = useNavigate();

    const [fieldValue, setFieldValue] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState('');

    const onInputChange = event => {
        setFieldValue({
            ...fieldValue,
            [event.target.name]: event.target.value
        });
        setError("");
    }

    const onSubmitClick = event => {
        if (fieldValue.email === credentials.username && fieldValue.password === credentials.password.toString()) {
            setError("");
            navigate("/articles")
        } else {
            setError("Email id or password is incorrect");
        }
    }

    const handleClose = event => {
        setError("");
    }

    return (
        <Grid container spacing={3} item xl={12} lg={12} md={12} sm={12} xs={12} direction="row" justifyContent='center' alignItems="flex-start">
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} textAlign='center'>
                <Typography variant="h3">
                    {`Login`}
                </Typography>
            </Grid>
            <Grid container spacing={3} item xl={6} lg={6} md={6} sm={12} xs={12}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <TextField
                        label="Email"
                        placeholder="Email"
                        id="email"
                        name="email"
                        fullWidth
                        type="text"
                        value={fieldValue.email}
                        error={error !== ""}
                        onChange={onInputChange}
                    />
                </Grid>

                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <TextField
                        label="Password"
                        placeholder="Password"
                        id="password"
                        name="password"
                        fullWidth
                        type="password"
                        value={fieldValue.password}
                        error={error !== ""}
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
            <Snackbar open={error !== ""} autoHideDuration={3000} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
                <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity="error">
                    {error}
                </MuiAlert>
            </Snackbar>
        </Grid >
    )
}

export default Login;