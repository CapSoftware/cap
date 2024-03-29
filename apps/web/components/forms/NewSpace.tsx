"use client";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@cap/ui";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@cap/ui";
import { Input } from "@cap/ui";
import { useForm } from "react-hook-form";
// import { useSupabase } from "@/utils/database/supabase/provider";
import { useState } from "react";
// import { supabase } from "@/utils/database/supabase/client";

export function NewSpace() {
  // const { session } = useSupabase();
  const [isLoading, setIsLoading] = useState(false);
  const { replace } = useRouter();

  const formSchema = z.object({
    name: z.string().min(1),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  //TODO: Auth

  // async function onSubmit(values: z.infer<typeof formSchema>) {
  //   setIsLoading(true);

  //   const { name } = values;

  //   console.log("session:");
  //   console.log(session);

  //   if (!session) {
  //     alert("You must be logged in to create a space.");
  //     setIsLoading(false);
  //     return;
  //   }

  //   console.log("session:");
  //   console.log(session);

  //   const { error } = await supabase
  //     .from("spaces")
  //     .insert([{ name, owner_id: session.user.id }]);

  //   if (error) {
  //     alert(error.message);
  //   } else {
  //     window.location.href = "/dashboard";
  //   }
  //   setIsLoading(false);
  // }

  return (
    // <Form {...form}>
    //   <form onSubmit={form.handleSubmit(onSubmit)}>
    //     <div className="space-y-4 mb-8">
    //       <FormField
    //         control={form.control}
    //         name="name"
    //         render={({ field }) => (
    //           <FormItem>
    //             <FormLabel>Name</FormLabel>
    //             <FormControl>
    //               <Input placeholder="Your space name" {...field} />
    //             </FormControl>
    //             <FormMessage />
    //           </FormItem>
    //         )}
    //       />
    //     </div>
    //     <Button type="submit" disabled={isLoading}>
    //       {isLoading ? "Loading..." : "Create Space"}
    //     </Button>
    //   </form>
    // </Form>
    <p></p>
  );
}
