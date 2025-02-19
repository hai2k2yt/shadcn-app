'use client'

import BackButton from "@/components/back-button";
import z from "zod"
import React, {use} from 'react'
import posts from '@/data/posts'
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {useToast} from "@/hooks/use-toast"
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

const formSchema = z.object({
    title: z.string().min(1, {
      message: 'Title is required'
    }),
    body: z.string().min(1, {
      message: 'Body is required'
    }),
    author: z.string().min(1, {
      message: 'Author is required'
    }),
    date: z.string().min(1, {
      message: 'Date is required'
    }),
  }
)

interface PostEditPageProps {
  params: Promise<{
    id: string
  }>
}

const PostEditPage = ({params}: PostEditPageProps) => {
  const {toast} = useToast();

  const resolvedParams = use(params);
  const post = posts.find(post => post.id === resolvedParams.id)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post?.title || '',
      body: post?.body || '',
      author: post?.author || '',
      date: post?.date || '',
    }
  })

  const handleSubmit = () => {
    toast({
      title: 'Post has been updated successfully',
      description: `Updated by ${post?.author} on ${post?.date}`,
    })
  }

  return (
    <>
      <BackButton text="Back To Posts" link={'/posts'}/>
      <h3 className={'text-2xl mb-4'}>Edit Post</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}
              className={'space-y-8'}
        >
          <FormField
            control={form.control}
            name="title"
            render={({field}) => (
              <FormItem>
                <FormLabel
                  className={'uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70'}
                >
                  Title
                </FormLabel>
                <FormControl>
                  <Input
                    className={'bg-slate-100 dark:bg-slate-500 border-0 ' +
                      'focus-visible:ring-0 text-black ' +
                      'focus-visible:ring-offset-0'}
                    placeholder="Enter title"
                    {...field}
                  />
                </FormControl>
                <FormDescription>This is your public display name.</FormDescription>
                <FormMessage/>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="body"
            render={({field}) => (
              <FormItem>
                <FormLabel
                  className={'uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70'}
                >
                  Body
                </FormLabel>
                <FormControl>
                  <Input
                    className={'bg-slate-100 dark:bg-slate-500 border-0 ' +
                      'focus-visible:ring-0 text-black ' +
                      'focus-visible:ring-offset-0'}
                    placeholder="Enter body"
                    {...field}
                  />
                </FormControl>
                <FormDescription>This is your public display name.</FormDescription>
                <FormMessage/>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="author"
            render={({field}) => (
              <FormItem>
                <FormLabel
                  className={'uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70'}
                >
                  Author
                </FormLabel>
                <FormControl>
                  <Input
                    className={'bg-slate-100 dark:bg-slate-500 border-0 ' +
                      'focus-visible:ring-0 text-black ' +
                      'focus-visible:ring-offset-0'}
                    placeholder="Enter author"
                    {...field}
                  />
                </FormControl>
                <FormDescription>This is your public display name.</FormDescription>
                <FormMessage/>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="date"
            render={({field}) => (
              <FormItem>
                <FormLabel
                  className={'uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70'}>Date</FormLabel>
                <FormControl>
                  <Input
                    className={'bg-slate-100 dark:bg-slate-500 border-0 ' +
                      'focus-visible:ring-0 text-black ' +
                      'focus-visible:ring-offset-0'}
                    placeholder="Enter date"
                    {...field}
                  />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />

          <Button className={'w-full dark:bg-slate-800 dark:text-white'}>
            Update Post
          </Button>
        </form>
      </Form>
    </>
  )
}

export default PostEditPage;