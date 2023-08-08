import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form, FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default async function LoginPage() {
  return (
    <main className="flex w-screen h-screen justify-center align-center">
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Login using your credentials or a other service.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form>
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="text"></Input>
              </FormControl>
            </FormItem>
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password"></Input>
              </FormControl>
            </FormItem>
            <Button type="submit"></Button>
          </Form>
        </CardContent>
        <CardFooter>{/* Cards for google login, etc */}</CardFooter>
      </Card>
    </main>
  );
}
