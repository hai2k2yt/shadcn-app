import React from 'react'

import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"

import posts from '@/data/posts'
import {Post} from "@/types/posts";
import Link from "next/link";

const PostsTable = () => {
  return (
    <Table>
      <TableCaption>A list of your table record.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead className={'hidden md:table-cell'}>Author</TableHead>
          <TableHead className={'hidden md:table-cell text-right'}>Date</TableHead>
          <TableHead>View</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {posts.map((post: Post) => (
          <TableRow key={post.id}>
            <TableCell>
              {post.title}
            </TableCell>
            <TableCell className={'hidden md:table-cell'}>
              {post.author}
            </TableCell>
            <TableCell className={'hidden md:table-cell text-right'}>
              {post.date}
            </TableCell>
            <TableCell>
              <Link href={`/posts/edit/${post.id}`}>
                <button
                  className={'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs'}
                >
                  Edit
                </button>
              </Link>
            </TableCell>
          </TableRow>
        ))}
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>

  )
}

export default PostsTable