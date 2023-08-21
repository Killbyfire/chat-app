"use server";

import supabase from "@/utils/supabase";

export async function SignInAccount(email, password) {
  const { data, error } = supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) {
    return error;
  }
}
