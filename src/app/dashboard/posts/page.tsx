import React from 'react'

import PostsTable from "@/components/posts/posts-table";
import BackButton from "@/components/back-button";
import PostsPagination from "@/components/posts/posts-pagination";

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