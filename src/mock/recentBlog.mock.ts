import Blog1 from "assets/images/recent-blogs/Blog-preview-1.png";
import Blog2 from "assets/images/recent-blogs/Blog-preview-2.png";
import Blog3 from "assets/images/recent-blogs/Blog-preview-3.png";
import Blog4 from "assets/images/recent-blogs/Blog-preview-4.png";
import Blog5 from "assets/images/recent-blogs/Blog-preview-5.png";
import { IRecentBlog } from "models/blog.models";

export default class RecentBlogMock {
  base(): IRecentBlog {
    return {
      id: "e5fce157-1791-4fba-803c-119176f00377",
      name: "",
      createdAt: "03 Aug 2022",
    };
  }

  blog1(): IRecentBlog {
    return {
      ...this.base(),
      id: "594c79f5-2582-4275-9b0f-eeb9b06aebd0",
      name: "Going all-in with millennial design",
      img: Blog1,
    };
  }

  blog2(): IRecentBlog {
    return {
      ...this.base(),
      id: "98a6e261-03d3-42e3-bd12-09535f2d9d5e",
      name: "Exploring new ways of decorating",
      img: Blog2,
    };
  }

  blog3(): IRecentBlog {
    return {
      ...this.base(),
      id: "53b97d05-916a-40b3-811b-308d2313670c",
      name: "Handmade pieces that took time to make",
      img: Blog3,
    };
  }

  blog4(): IRecentBlog {
    return {
      ...this.base(),
      id: "53b97d05-916a-40b3-811b-308d2313670c",
      name: "Modern home in Milan",
      img: Blog4,
    };
  }

  blog5(): IRecentBlog {
    return {
      ...this.base(),
      id: "53b97d05-916a-40b3-811b-308d2313670c",
      name: "Colorful office redesign",
      img: Blog5,
    };
  }

  list(): IRecentBlog[] {
    return [
      this.blog1(),
      this.blog2(),
      this.blog3(),
      this.blog4(),
      this.blog5(),
    ];
  }

  bigList(): IRecentBlog[] {
    return [...this.list(), ...this.list(), ...this.list()];
  }
}
