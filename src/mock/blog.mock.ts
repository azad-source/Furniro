import Blog1 from "assets/images/blogs/Blog-1.png";
import Blog2 from "assets/images/blogs/Blog-2.png";
import Blog3 from "assets/images/blogs/Blog-3.png";
import { IBlog } from "models/blog.models";

export default class BlogMock {
  base(): IBlog {
    return {
      id: "e5fce157-1791-4fba-803c-119176f00377",
      name: "",
      createdAt: "14 Oct 2022",
      userName: "Admin",
      category: "",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    };
  }

  blog1(): IBlog {
    return {
      ...this.base(),
      id: "594c79f5-2582-4275-9b0f-eeb9b06aebd0",
      name: "Going all-in with millennial design",
      img: Blog1,
      category: "Wood",
    };
  }

  blog2(): IBlog {
    return {
      ...this.base(),
      id: "98a6e261-03d3-42e3-bd12-09535f2d9d5e",
      name: "Exploring new ways of decorating",
      img: Blog2,
      category: "Handmade",
    };
  }

  blog3(): IBlog {
    return {
      ...this.base(),
      id: "53b97d05-916a-40b3-811b-308d2313670c",
      name: "Handmade pieces that took time to make",
      img: Blog3,
      category: "Wood",
    };
  }

  list(): IBlog[] {
    return [this.blog1(), this.blog2(), this.blog3()];
  }

  bigList(): IBlog[] {
    return [...this.list(), ...this.list(), ...this.list()];
  }
}
