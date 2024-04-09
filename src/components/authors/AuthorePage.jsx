import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { GET_AUTHOR_INFO } from "../../graphql/query";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import sanitizeHtml from "sanitize-html";
import CardEl from "../shared/CardEl";
function AuthorePage() {
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });

  console.log(data);
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} padding={3} mt={10}>
        {data && (
          <>
            <Grid
              item
              xs={12}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              {
                <Avatar
                  src={data.author.avatar.url}
                  sx={{ width: "250px", height: "250px" }}
                />
              }
              <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
                {data.author.name}
              </Typography>
              <Typography
                component="p"
                variant="h5"
                color="text.secondary"
                mt={2}
              >
                {data.author.field}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <div
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(data.author.description.html),
                }}
              ></div>
            </Grid>
            <Grid item xs={12} mt={6}>
              <Typography component="h3" variant="h5">
                مقالات {data.author.name}
              </Typography>
            </Grid>
            <Grid container spacing={2} mt={2}>
              {data.author.posts.map((post) => {
                return (
                  <Grid item xs={12} sm={6} md={4} key={post.id}>
                    <CardEl
                      title={post.title}
                      slug={post.slug}
                      coverPhoto={post.coverPhoto}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </>
        )}
      </Grid>
    </Container>
  );
}
export default AuthorePage;
