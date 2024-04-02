"use server";

import { cookies } from "next/headers";

export async function addToken(data) {
    cookies().set("token", data, { maxAge: 60 * 60 * 24 * 30 });
}

export async function getToken() {
    const cookieStore = cookies();
    return cookieStore.get("token").value;
}

export async function deleteToken() {
    cookies().delete("token");
}
