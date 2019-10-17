import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { 
  IconButton,
  ListItemIcon,
  ListItemText,
  ListItem,
  Drawer,
  Divider,
  List } from '@material-ui/core';

import MailIcon from "@material-ui/icons/Mail";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  
}));


const CostumeDrawer = props => {
    const classes = useStyles();
    const open = props.open;

    return(
        <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
        >
            <div className={classes.drawerHeader}>
            <IconButton onClick={props.onDrawerClose}>
                <ChevronRightIcon />
            </IconButton>
            </div>
            <Divider />
            <List>
            {['ابزار', 'جداول پایه', 'ورود اطلاعات', 'گزارشات'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
            </List>
        <Divider />
      </Drawer>
    )

};

export default CostumeDrawer;