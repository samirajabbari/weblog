import { useMutation } from "@apollo/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Grid, Input, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { SEND_COMMENT } from "../../graphql/mutation";
import FileUpload from "./File";

function CommentForm({ slug }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [email, setEmail] = useState("");
  const [files, setFiles] = useState([]);
  const [sendComment, { loading, data, error }] = useMutation(SEND_COMMENT, {
    variables: { name, email, comment, files, slug },
  });

  //--------------file upload
  const handleFileChange = (e) => {
    const fileList = e.target.files;
    // تبدیل فایل‌های انتخاب شده به آرایه
    const selectedFiles = Array.from(fileList);
    setFiles(selectedFiles);
  };

  const handleUpload = () => {
    // ارسال فایل‌های انتخاب شده به سرور
    console.log("فایل‌های انتخاب شده: ", files);
  };
  //----------------------

  console.log(data);
  const sendHandler = () => {
    if (name && email && comment) {
      sendComment();
    } else {
      toast.warn("تمام فیلد ها را پر کنید", { position: "top-center" });
    }
    if (data) {
      toast.success("اطلاعات با موفقیت ارسال شد و منتظر تایید می باشد", {
        position: "top-center",
      });
    }
  };
  return (
    <div>
      <Grid
        container
        xs={12}
        sx={{
          boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
          borderRadius: 4,
          py: 1,
          mt: 5,
        }}
      >
        <Grid item xs={12} m={2}>
          <Typography
            component="p"
            variant="h6"
            fontWeight={700}
            color="primary"
          >
            فرم ارسال کامنت
          </Typography>
          <Grid item xs={12} m={2}>
            <TextField
              label="نام کاربری"
              variant="outlined"
              sx={{ width: "100%", textAlign: "rtl" }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} m={2}>
            <TextField
              label="ایمیل "
              variant="outlined"
              sx={{ width: "100%", textAlign: "rtl" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} m={2}>
            <TextField
              label="متن کامنت"
              variant="outlined"
              sx={{ width: "100%", textAlign: "rtl" }}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              multiline
              minRows={4}
            />
            <Grid item xs={12} m={2}>
              {loading ? (
                <Button variant="contained" disabled>
                  در حال ارسال
                </Button>
              ) : (
                <Button variant="contained" onClick={sendHandler}>
                  ارسال
                </Button>
              )}
              <ToastContainer />
            </Grid>
            {/* <comment>upludd file</comment>
            <Grid>
              <Input
                type="file"
                inputProps={{ multiple: true }}
                onChange={handleFileChange}
              />
              <Button variant="contained" onClick={handleUpload}>
                آپلود
              </Button>
            </Grid>
            <comment>upludd file</comment> */}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default CommentForm;
