'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

const NewTaskDialog = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const {title, description} = Object.fromEntries(formData);

    // Add todo to store
    console.log(title, description, formData);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" size="sm">
          + Add new task
        </Button>
      </DialogTrigger>

      <DialogContent className={'sm:max-w-[400px]'}>
        <DialogHeader>
          <DialogTitle>

          </DialogTitle>
          <DialogDescription>
            What done today?
          </DialogDescription>
        </DialogHeader>
        <form
          id="new-task-form"
          className="grid gap-4 py-4"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id='title'
              name='title'
              placeholder='Title'
              className={'col-span-4'}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Textarea
              id='description'
              name='description'
              placeholder='Description'
              className={'col-span-4'}
            />
          </div>
        </form>
        <DialogFooter>
          <DialogTrigger asChild>
            <Button type='submit' variant="secondary" size="sm" form='new-task-form'>
              Add todo
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default NewTaskDialog