"use server";

import supabase from "@/utils/supabase";

export async function CreateAccount(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  if (error) {
    return error;
  }
}
