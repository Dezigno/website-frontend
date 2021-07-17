import React, {useEffect, useState} from 'react'
import "./myDesigns.css"
import {Link } from "react-router-dom"
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import { Button } from 'react-scroll'


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

export default function MyDesigns() {
    /*
    * Uncomment this part of code to get designs from rest api
    */
   
    // useEffect(() => {
    //     fetchData();
    // }, []);

    // const [designs, setDesigns] = useState([])

    // const fetchData = async () => {
    //     const response = await fetch("https://api.dezigno.ir/token=***/mydesigns");
    //     const items = await response.json();

    //     console.log(items);
    //     // setItems(items.filter(item => (item.id < 10)));
    //     setDesigns(items);
    //     console.log(items)
    // }

    const classes = useStyles();

    return (
        <div className="myDesigns">
            <Link>
                <div className="add-design">
                    طرح جدید
                </div>
            </Link>
            <Link>
                <Container className="designs-container">
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                    className={classes.media}
                                    image="/images/chart.png"
                                    title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        طرح ۱
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        نمونه طرح - توضیحات نمونه میتواند اینجا قرار بگیردر
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                    className={classes.media}
                                    image="/images/chart.png"
                                    title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        طرح ۱
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        نمونه طرح - توضیحات نمونه میتواند اینجا قرار بگیردر
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                    className={classes.media}
                                    image="/images/chart.png"
                                    title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        طرح ۱
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        نمونه طرح - توضیحات نمونه میتواند اینجا قرار بگیردر
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                    className={classes.media}
                                    image="/images/chart.png"
                                    title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        طرح ۱
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        نمونه طرح - توضیحات نمونه میتواند اینجا قرار بگیردر
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                    className={classes.media}
                                    image="/images/chart.png"
                                    title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        طرح ۱
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        نمونه طرح - توضیحات نمونه میتواند اینجا قرار بگیردر
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Link>
            
        </div>
    )
}
