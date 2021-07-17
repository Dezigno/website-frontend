import React, {useEffect, useState} from 'react'
import "./myProducts.css"
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

export default function MyProducts() {
    /*
    * Uncomment this part of code to get designs from rest api
    */
   
    // useEffect(() => {
    //     fetchData();
    // }, []);

    // const [designs, setDesigns] = useState([])

    // const fetchData = async () => {
    //     const response = await fetch("https://api.dezigno.ir/token=***/myproducts");
    //     const items = await response.json();

    //     console.log(items);
    //     // setItems(items.filter(item => (item.id < 10)));
    //     setDesigns(items);
    //     console.log(items)
    // }

    const classes = useStyles();

    return (
        <div className="myProducts">
            <Link>
                <div className="add-product">
                   محصول جدید
                </div>
            </Link>
            <Link>
                <Container className="products-container">
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                    className={classes.media}
                                    image="/images/yourLogo.png"
                                    title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        محصول ۱
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        نمونه محصول - توضیحات نمونه میتواند اینجا قرار بگیرد
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
                                    image="/images/yourLogo.png"
                                    title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        محصول ۱
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        نمونه محصول - توضیحات نمونه میتواند اینجا قرار بگیرد
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
                                    image="/images/yourLogo.png"
                                    title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        محصول ۱
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        نمونه محصول - توضیحات نمونه میتواند اینجا قرار بگیرد
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
                                    image="/images/yourLogo.png"
                                    title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        محصول ۱
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        نمونه محصول - توضیحات نمونه میتواند اینجا قرار بگیرد
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
                                    image="/images/yourLogo.png"
                                    title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        محصول ۱
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        نمونه محصول - توضیحات نمونه میتواند اینجا قرار بگیرد
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
