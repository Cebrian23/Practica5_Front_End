import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Post_Page from "../islands/Post_Page.tsx";
import { Post } from "../types.ts";
import Axios from "axios";

type Data = {
  data:{
    posts: Post[],
  }
}

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    try {
      const data_api = await Axios.get<Data>("https://back-p5-y0e1.onrender.com/api/posts");
      //console.log(data_api.data.data)
      return ctx.render(
        {data: data_api.data.data}
      );
    } catch (_e) {
      return new Response("Error de API");
    }
  },
};

const Page = (props: PageProps<Data>) => {
  const posts = props.data.data.posts;
  const bool = true;

  return (
    <>
      <Post_Page Bool={bool} posts={posts}/>
    </>
  );
}

export default Page;