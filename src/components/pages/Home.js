import React, { useEffect, useState } from "react";
import axios from "axios";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import InfiniteScroll from "react-infinite-scroll-component";
import "./Home.css";

const Home = () => {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    window.location.href = "/login";
  };

  const getUserDetail = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`https://randomuser.me/api/?results=25`);

      setTimeout(() => {
        setUsers([...users, ...data.results]);
      }, 1000);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    {
      getUserDetail();
    }
  }, []);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Contact List
            </Typography>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <InfiniteScroll
          dataLength={users.length}
          next={getUserDetail}
          loader={
            <>
              <div className="spinner-container">
                <div className="loading-spinner"></div>
              </div>
            </>
          }
          hasMore={true}
        >
          {users.map((userdata, idx) => (
            <div className="user" key={idx}>
              <p>{userdata.cell}</p>
              <p>
                {userdata.name.title +
                  " " +
                  userdata.name.first +
                  " " +
                  userdata.name.last}
              </p>

              <img src={userdata.picture.thumbnail} alt="Images" />
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
};

export default Home;
