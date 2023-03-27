import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import {useNavigate} from "react-router-dom";

const menus = [
  {
    name: "Dashboard",
    path: "/",
    icon: <DashboardIcon/>
  }, {
    name: "Orders",
    path: "/example",
    icon: <ShoppingCartIcon/>
  },
  {
    name: "Customers",
    path: "/customer",
    icon: <PeopleIcon/>
  },
  {
    name: "Users",
    path: "/users",
    icon: <BarChartIcon/>
  },
  {
    name: "C2",
    path: "/c2",
    icon: <LayersIcon/>
  }]
const secondary = [
  {
    name: "Current month",
    path: "",
    icon: <AssignmentIcon/>,
  },
  {
    name: "Last quarter",
    path: "",
    icon: <AssignmentIcon/>,
  },
  {
    name: "Year-end sale",
    path: "",
    icon: <AssignmentIcon/>,
  }
]
export const MainListItems: React.FC = () => {
  return (
      <React.Fragment>
        {menus.map((item) => {
          const navigate = useNavigate();
          return (
              <ListItemButton key={item.name} onClick={() => {
                navigate(item.path)
              }
              }>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name}/>
              </ListItemButton>
          )
        })}
      </React.Fragment>
  )
}


export const SecondaryListItems: React.FC = () => {
  return (
      <React.Fragment>
        <ListSubheader component="div" inset>
          Saved reports
        </ListSubheader>
        {secondary.map((item) => {
          const navigate = useNavigate();
          return (
              <ListItemButton key={item.name} onClick={() => {
                navigate(item.path)
              }
              }>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name}/>
              </ListItemButton>
          )
        })}
      </React.Fragment>
  )
}
