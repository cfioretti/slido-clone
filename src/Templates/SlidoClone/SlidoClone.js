import React, {useEffect, useState} from 'react';

import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import GridList from '@material-ui/core/GridList';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import axios from "../../Components/Axios/Axios";

const SlidoClone = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/events').then(response => {
            console.log(response)
            setData(response.data)
        });
    }, [])

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            alignContent: "center"
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            textAlign: "center"
        },
        gridList: {
            width: 500,
            height: 450,
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
    }));

    return (
        <div className={useStyles?.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={useStyles?.menuButton} color="inherit" aria-label="home">
                        <HomeIcon/>
                    </IconButton>
                    <Typography variant="h6" className={useStyles?.title}>Slido Clone</Typography>
                    <IconButton edge="end" className={useStyles?.menuButton} color="inherit" aria-label="account">
                        <AccountCircleIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <GridList cellHeight={160} className={useStyles?.gridList} cols={3}>
                {data.map((tile) => (
                    <Card className={useStyles?.root}>
                        <CardContent>
                            <Typography className={useStyles?.title} color="textSecondary" gutterBottom>
                                Event {tile.uid}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {tile.title}
                            </Typography>
                            <Typography className={useStyles?.pos} color="textSecondary">
                                {tile.description}
                            </Typography>
                            <Typography variant="body2" component="p">
                                Start at {tile.start_at}
                                <br/>
                                End at {tile.end_at}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </GridList>
        </div>
    );
};

export default SlidoClone;
