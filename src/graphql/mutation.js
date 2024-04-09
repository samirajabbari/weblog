import { gql } from "@apollo/client";

const SEND_COMMENT = gql`
  mutation sendComment(
    $name: String!
    $email: String!
    $comment: String!
    $slug: String!
  ) # $files: String! # تغییر نوع فایل به Upload
  {
    createComment(
      data: {
        name: $name
        email: $email
        text: $comment
        # files: { create: { uploadUrl: $files } }
        post: { connect: { slug: $slug } }
      }
    ) {
      id
    }
  }
`;

export { SEND_COMMENT };
