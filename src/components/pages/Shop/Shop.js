import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from './Layout'
import  Navbar from './navbar/Navbar'
// material ui components
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'


const useStyles = makeStyles((theme) => {
  return (
    {
      banner: {
        // width: "100%",
        height: "600px",
        backgroundImage: 'url("/test/bg-banner.jpeg")',
        backgroundPosition: "center top",
        backgroundSize: 'cover'
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
        <div className={classes.banner} />
      </div>
    </div>
  );
}

export default Shop;