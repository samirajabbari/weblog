import { useQuery } from "@apollo/client";
import { GET_BLOGS_INFO } from "../../graphql/query";
import { SyncLoader } from "react-spinners";
import { Grid } from "@mui/material";
import CardEl from "../shared/CardEl";

function BLogs() {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO);
  return (
    <>
      {loading ? (
        <SyncLoader color="#1976d2" size={10} />
      ) : (
        <Grid container spacing={2}>
          {data.posts.map((post) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <CardEl {...post} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
}

export default BLogs;
