import React from 'react'

import PostsTable from "@/components/posts/PostsTable";
import BackButton from "@/components/BackButton";
import PostsPagination from "@/components/posts/PostsPagination";

const PostsPage = () => {
  return (
    <>
      <BackButton text="Back" link={'/'}/>
      <PostsTable/>
      <PostsPagination/>
    </>
  )
}

export default PostsPage