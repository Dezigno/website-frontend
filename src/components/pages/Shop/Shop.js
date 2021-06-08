import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from './Layout'
import  Navbar from './navbar/Navbar'
// material ui components
import { Container, createMuiTheme, makeStyles, ThemeProvider, Typography } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
// CSS
import './shop.css'

const useStyles = makeStyles((theme) => {
  return (
    {
      banner: {
        backgroundImage: 'url("/test/bg-banner.jpeg")',
      }, 
      productImage: {
        backgroundImage: 'url("/test/product/shirt.jpg")',
      },
      itemGrid: {
        marginBottom: '60px'
      }
    }
  );
})

function Shop() {
  const classes = useStyles()

  return (
    <div>
      <Navbar />
      <div className="main-content">
        <div className={`${classes.banner} banner`} />
        <div className="title-heading">
          <h2>محصولات ویژه</h2>
        </div>
        <Container >
          <Grid container spacing={2}>
            <Grid item  xs={12} sm={6} md={4} lg={3} xl={2} className={classes.itemGrid}>
              <Paper elevation={0} className={classes.paper}>
                <div className={`${classes.productImage} product-image`} />
                <div className="product-details">
                  <div className="product-title">
                    <h4>تیشرت نویز های قرمز</h4>
                  </div>
                  <div className="product-type">
                    <p>تی‌شرت</p>
                  </div>
                  <div className="product-price">
                    <b>۱۰۰,۰۰۰ تومان</b>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item  xs={12} sm={6} md={4} lg={3} xl={2} className={classes.itemGrid}>
              <Paper elevation={0} className={classes.paper}>
                <div className={`${classes.productImage} product-image`}></div> 
                <div className="product-details">
                  <div className="product-title">
                    <h4>تیشرت نویز های قرمز</h4>
                  </div>
                  <div className="product-type">
                    <p>تی‌شرت</p>
                  </div>
                  <div className="product-price">
                    <b>۱۰۰,۰۰۰ تومان</b>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item  xs={12} sm={6} md={4} lg={3} xl={2} className={classes.itemGrid}>
              <Paper elevation={0} className={classes.paper}>
                <div className={`${classes.productImage} product-image`}></div> 
                <div className="product-details">
                  <div className="product-title">
                    <h4>تیشرت نویز های قرمز</h4>
                  </div>
                  <div className="product-type">
                    <p>تی‌شرت</p>
                  </div>
                  <div className="product-price">
                    <b>۱۰۰,۰۰۰ تومان</b>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item  xs={12} sm={6} md={4} lg={3} xl={2} className={classes.itemGrid}> 
              <Paper elevation={0} className={classes.paper}>
                <div className={`${classes.productImage} product-image`}></div> 
                <div className="product-details">
                  <div className="product-title">
                    <h4>تیشرت نویز های قرمز</h4>
                  </div>
                  <div className="product-type">
                    <p>تی‌شرت</p>
                  </div>
                  <div className="product-price">
                    <b>۱۰۰,۰۰۰ تومان</b>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item  xs={12} sm={6} md={4} lg={3} xl={2} className={classes.itemGrid}>
              <Paper elevation={0} className={classes.paper}>
                <div className={`${classes.productImage} product-image`}></div> 
                <div className="product-details">
                  <div className="product-title">
                    <h4>تیشرت نویز های قرمز</h4>
                  </div>
                  <div className="product-type">
                    <p>تی‌شرت</p>
                  </div>
                  <div className="product-price">
                    <b>۱۰۰,۰۰۰ تومان</b>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item  xs={12} sm={6} md={4} lg={3} xl={2} className={classes.itemGrid}>
              <Paper elevation={0} className={classes.paper}>
                <div className={`${classes.productImage} product-image`}></div> 
                <div className="product-details">
                  <div className="product-title">
                    <h4>تیشرت نویز های قرمز</h4>
                  </div>
                  <div className="product-type">
                    <p>تی‌شرت</p>
                  </div>
                  <div className="product-price">
                    <b>۱۰۰,۰۰۰ تومان</b>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item  xs={12} sm={6} md={4} lg={3} xl={2} className={classes.itemGrid}> 
              <Paper elevation={0} className={classes.paper}>
                <div className={`${classes.productImage} product-image`}></div> 
                <div className="product-details">
                  <div className="product-title">
                    <h4>تیشرت نویز های قرمز</h4>
                  </div>
                  <div className="product-type">
                    <p>تی‌شرت</p>
                  </div>
                  <div className="product-price">
                    <b>۱۰۰,۰۰۰ تومان</b>
                  </div>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Shop;