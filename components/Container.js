import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  makeStyles,
  createStyles,
  IconButton
} from "@material-ui/core";
import Link from "next/link";

import PagesIcon from "@material-ui/icons/Pages";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";


const pages = ["notification","home","users","login"];


export const Container = ({ children }) => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const content = (
    <>
      <List>
        <Link href="/">
          <ListItem button component="a">
            <ListItemIcon children={<HomeIcon />} />
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        {pages.map(text => (
          <Link key={text} href={`/${text}`}>
            <ListItem button>
              <ListItemIcon children={<PagesIcon />} />
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );

  return (
    <div className={classes.container}>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <IconButton
            className={classes.icon}
            onClick={() => setMobileOpen(!mobileOpen)}
            children={<MenuIcon />}
          />
          <Typography variant="h6" children="Next PWA" />
        </Toolbar>
      </AppBar>

      <nav>
          <Drawer
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={() => setMobileOpen(!mobileOpen)}
            children={content}
            classes={{ paper: classes.drawer }}
            ModalProps={{
              keepMounted: true
            }}
          />
      </nav>

      <div className={classes.content}>
        {children}
        
      </div>
      <div className={classes.footer}>
          Copyright &#169; Eternus 2020
        </div>
    </div>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
     paddingTop: theme.spacing(7)
    },
    content:{
      height:'84vh'
    },
    toolbar: {
      justifyContent: "space-between",
      height:'10vh'
    },
    icon: {
      color: theme.palette.common.white
    },
    drawer:{
      width:"250px"
    },
    footer:{
      backgroundColor:"#3f51b5",
      color:"white",
      display:"flex",
      justifyContent:"center",
      height:"6vh",
      alignItems:"center",
    }
  })
);
