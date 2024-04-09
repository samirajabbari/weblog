import { useQuery } from "@apollo/client";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GET_POST_INFO } from "../../graphql/query";
import { SyncLoader } from "react-spinners";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import sanitizeHtml from "sanitize-html";
import CommentForm from "../comment/CommentForm";
import Comments from "../comment/Comments";
function BLogePage() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });
  console.log(data);
  return (
    <Container maxWidth="lg">
      <Grid container mt={10}>
        {loading ? (
          <SyncLoader color="#1976d2" size={10} />
        ) : (
          <>
            <Grid
              item
              xs={12}
              mt={9}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                component="h2"
                variant="h4"
                color="primary"
                fontWeight={700}
              >
                {data.post.title}
              </Typography>
              <ArrowBackIosNewIcon
                color="primary"
                sx={{ cursor: "pointer" }}
                onClick={() => navigate(-1)}
              />
            </Grid>
            <Grid item mt={6} xs={12}>
              <img
                src={data.post.coverPhoto.url}
                alt={data.post.slug}
                width="100%"
                style={{ borderRadius: "14px" }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              mt={6}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Avatar
                src={data.post.author.avatar.url}
                sx={{ width: "80px", height: "80px", marginLeft: "1rem" }}
              />
              <Box component="div">
                <Typography component="p" variant="h5" fontWeight={700}>
                  {data.post.author.name}
                </Typography>
                <Typography
                  component="p"
                  variant="h6"
                  fontWeight={700}
                  color="text.secondary"
                >
                  {data.post.author.field}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} mt={5}>
              <div
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(data.post.content.html),
                }}
              ></div>
            </Grid>
            <Grid item xs={12}>
              <CommentForm slug={slug} />
            </Grid>
            <Grid item xs={12} mt={4}>
              <Comments slug={slug} />
            </Grid>
          </>
        )}
      </Grid>
    </Container>
  );
}

export default BLogePage;
