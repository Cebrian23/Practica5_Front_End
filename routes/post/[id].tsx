import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { Post_2 } from "../../types.ts";


type Data = {
  data: {
    posts: Post_2;
  }
};

export const handler: Handlers<Data> = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    const {ID} = ctx.params;
    try {
      const response = await Axios.get<Data>(`https://back-p5-y0e1.onrender.com/api/posts/${ID}}`);
      return ctx.render({ data: response.data.data });
    }
    catch (e) {
      console.error(e);
      return new Response("Error de API");
    }
  }
};

const Page = (props: PageProps<Data>) => {
    const data = props.data.data.posts;

    return(
        <>
        </>
    );
}

export default Page;