import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, colors, Button } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const style = makeStyles({
    tableHead: {
        background: colors.green[50]
    },
    tableHeadCell: {
        fontWeight: 600
    },
    tableBodyRow: {
        cursor: 'pointer'
    }
});

function Articles(params) {
    const classes = style();
    const navigate = useNavigate();

    const [articlesInfo, setArticlesInfo] = useState([]);


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json()).then(json => setArticlesInfo(json)).catch(err => { })

    }, []);

    const onRowClick = id => event => {
        navigate(`/article-details/${id}`);
    }

    return (
        <Grid container spacing={3} item xl={12} lg={12} md={12} sm={12} xs={12} direction="row" justifyContent='center' alignItems="flex-start">
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} textAlign='center'>
                <Typography variant="h3">
                    {`Articles`}
                </Typography>
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} textAlign='end'>
                <Button
                    size="large"
                    variant="contained"
                    color="success"
                    href="/add-article"
                >
                    {`Add Article`}
                </Button>
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <TableContainer component={Paper} elevation={12}>
                    <Table>
                        <TableHead>
                            <TableRow
                                classes={{
                                    root: classes.tableHead
                                }}
                            >
                                <TableCell align="center" classes={{ root: classes.tableHeadCell }}>{`UserId`}</TableCell>
                                <TableCell align="center" classes={{ root: classes.tableHeadCell }}>{`Id`}</TableCell>
                                <TableCell align="center" classes={{ root: classes.tableHeadCell }}>{`Title`}</TableCell>
                                <TableCell align="center" classes={{ root: classes.tableHeadCell }}>{`Body`}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                articlesInfo.map((info, index) => (
                                    <TableRow
                                        key={index.toString()}
                                        hover
                                        className={classes.tableBodyRow}
                                        onClick={onRowClick(info.id)}
                                    >
                                        <TableCell align="center">{info.userId}</TableCell>
                                        <TableCell align="center">{info.userId}</TableCell>
                                        <TableCell>{info.title}</TableCell>
                                        <TableCell>{info.body}</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )
}

export default Articles;