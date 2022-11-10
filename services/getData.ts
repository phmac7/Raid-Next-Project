import { Post, User } from "@/models/contentfulObjects";

export const fetchPostList = async () => {
    const res = await fetch('/api/post');
    const resJson = await res.json();
    const data: Post[] = resJson.items;
    return data;
  };

export const fetchUserList = async () => {
    const res = await fetch('/api/users');
    const resJson = await res.json();
    const data: User[] = resJson.items;
    return data;
  };