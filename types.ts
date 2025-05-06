export type Post = {
    _id?: string,
    title: string,
    cover: string,
    content: string,
    author: string,
    likes: number,
}

export type Post_2 = {
  _id: string;
  title: string;
  content: string;
  author: string;
  cover: string;
  likes: number;
  comments:{
    author: string;
    content: string;
    createdAt: string;
    _id: string;
  }[];
  createdAt: string;
  updatedAt: string;
};
