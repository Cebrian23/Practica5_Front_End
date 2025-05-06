import { FunctionalComponent } from "preact";
import { Signal } from "@preact/signals";
import { Post } from "../types.ts";

const Cuadricula: FunctionalComponent<{Bool: Signal<boolean>, posts: Post[]}> = ({Bool, posts}) => {
    if(!Bool.value){
        return(
            <>
                <div>
                    <button type="submit" onClick={(e) => Bool.value = !Bool.value}>Cambiar a lista</button>
                </div>
                <div class="cuadricula">
                    {
                        posts.map((p) =>
                            <div key={p._id} class="border">
                                <div>
                                    <image src={p.cover}/>
                                </div>
                                <div>
                                    <table class="espaciar">
                                        <td>
                                            <tr>
                                                <span>Titulo: {p.title}</span>
                                            </tr>
                                            <tr>
                                                <span>Autor: {p.author}</span>
                                            </tr>
                                        </td>
                                        <td>
                                            <tr>
                                                <span>Likes: {p.likes}</span>
                                            </tr>
                                        </td>
                                    </table>
                                </div>
                            </div>
                        )
                    }
                </div>
            </>
        );
    }
    return(
        null
    );
}

export default Cuadricula;