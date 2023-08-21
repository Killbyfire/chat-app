"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@radix-ui/react-separator";
import { useForm } from "react-hook-form";
import { CreateAccount } from "./actions";

export default function LoginPage() {
  const form = useForm();
  return (
    <main className="flex w-screen h-screen justify-center items-center">
      <Button className="w-5 h-5" onClick={() => {CreateAccount()}}>Hello</Button>
      <Card className="max-w-sm lg:w-[40vw] w-[80vw] rounded-xl">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Login using your credentials or a other service.
          </CardDescription>
          <Separator orientation="horizontal" className="my-4" />
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form>
              <FormItem className="mb-4">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input className="rounded-[5px]" type="email"></Input>
                </FormControl>
              </FormItem>
              <FormItem className="my-4">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input className="rounded-[5px]" type="password"></Input>
                </FormControl>
              </FormItem>
              <Button
                className="rounded-xl w-full mt-8"
                variant={"outline"}
                type="submit"
              >
                Log in
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>{/* Cards for google login, etc */}</CardFooter>
      </Card>
    </main>
  );
}
