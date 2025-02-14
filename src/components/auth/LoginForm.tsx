'use client'

import z from "zod"
import React from 'react'
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

const formSchema = z.object({
    email: z.string().min(1, {
      message: 'Email is required'
    }).email({
      message: 'Please enter email'
    }),
    password: z.string().min(1, {
      message: 'Password is required'
    })
  }
)

const LoginForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const handleSubmit = () => {
    router.push('/')
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Login to account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}
                  className={'space-y-6'}
            >
              <FormField
                control={form.control}
                name="email"
                render={({field}) => (
                  <FormItem>
                    <FormLabel
                      className={'uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70'}
                    >
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        className={'bg-slate-100 dark:bg-slate-500 border-0 ' +
                          'focus-visible:ring-0 text-black ' +
                          'focus-visible:ring-offset-0'}
                        placeholder="Enter email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({field}) => (
                  <FormItem>
                    <FormLabel
                      className={'uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70'}
                    >
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        className={'bg-slate-100 dark:bg-slate-500 border-0 ' +
                          'focus-visible:ring-0 text-black ' +
                          'focus-visible:ring-offset-0'}
                        placeholder="Enter password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />

              <Button className={'w-full dark:bg-slate-800 dark:text-white'}>
                Login
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>


    </>
  )
}

export default LoginForm;