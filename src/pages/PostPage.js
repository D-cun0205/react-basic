import React from "react";
import { useParams } from "react-router-dom";
import PostContainer from "../containers/PostContainer";

function PostPage() {
  const param = useParams();

  return <PostContainer postId={parseInt(param.id, 10)} />;
}

export default PostPage;