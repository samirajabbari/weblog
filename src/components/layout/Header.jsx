import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <AppBar>
        <Container maxWidth="lg">
          <Toolbar>
            <Typography
              component="h1"
              variant="h5"
              fontWeight="600"
              flex={1}
              onClick={() => navigate("/")}
              sx={{ cursor: "pointer" }}
            >
              وبلاگ بوتو استارت
            </Typography>
            <BookIcon />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Header;
