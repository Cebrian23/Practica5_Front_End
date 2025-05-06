import { FreshContext, Handlers } from "$fresh/server.ts";
import Axios from "axios";

type Data = {
  author: string,
  title: string,
  content: string,
  cover: string,
}

type Answer = {
  bool: boolean,
  author: string,
  title: string,
  content: string,
  cover: string,
}

export const handler: Handlers = {
  /*POST: async (req: Request, ctx: FreshContext<unknown,string>) => {
    try{
      const data: Data = await req.json();

      const Response = await Axios.post(
        "https://back-p5-y0e1.onrender.com/api/posts",
        {
          author: data.author,
          title: data.title,
          content: data.content,
          cover: data.cover,
          likes: 0,
        }
      );
      
      if(Response.status !== 200) {
        ctx.render(`Ha habido un error`);
      }

    }
    catch(e){
      throw new Error("Error al insertar");
    }
  }*/
}

const Page = () => {
    return (
      <>
        <form class="column">
          <input placeholder="Nombre del autor" name="author"/>
          <input placeholder="Título del post" name="title"/>
          <input placeholder="Contenido" name="content"/>
          <input placeholder="Caratula" name="cover"/>
          <button type="submit">Enviar</button>
        </form>
      </>
    );
  }
  
  export default Page;