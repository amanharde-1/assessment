import { Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const style = makeStyles({
    detailsWrapper: {
        padding: 'inherit'
    }
});

function ArticleDetails(props) {
    let params = useParams();
    const classes = style();

    const [articlesDetails, setArticlesDetails] = useState({
        userId: "",
        id: "",
        title: "",
        body: ""
    });

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params?.id}`).then(response => response.json()).then(json => setArticlesDetails(json)).catch(err => { });

    }, [params?.id]);


    return (
        <Grid container spacing={3} item xl={12} lg={12} md={12} sm={12} xs={12} direction="row" justifyContent='center' alignItems="flex-start">
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} textAlign='center'>
                <Typography variant="h3">
                    {`Article Details Page`}
                </Typography>
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Paper elevation={6} className={classes.detailsWrapper}>
                    <Typography variant="subtitle1">
                        <strong>{`Title :`}</strong>{articlesDetails.title}
                    </Typography>
                    <Typography variant="subtitle1">
                        <strong>{`Body :`}</strong>{articlesDetails.body}
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default ArticleDetails;