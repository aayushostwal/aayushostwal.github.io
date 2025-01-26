import { ArticleDetails } from "../components/types";
const ArticleTags = {
  django: "Django",
  web_dev: "Web Development",
  dev_ops: "DevOps",
};
const ArticleList: ArticleDetails[] = [
  {
    heading: "Make your Django App Production Ready",
    summary:
      "A blend approach of gunicorn and nginx to make your django app production ready.",
    link: "https://medium.com/illumination/make-your-django-app-production-ready-cd9f91457696",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*q8JxhYJ2dcmI7oHDJjvL2g.png",
    tags: [ArticleTags.django, ArticleTags.web_dev],
  },

  {
    heading: "Access your Servers from Jenkins using Teleport t-bot.",
    summary:
      "Setup t-bot in just 10 mins. No more IPs management!. Shift to a smarter way to up scale your application Now!",
    link: "https://levelup.gitconnected.com/access-your-servers-from-jenkins-using-teleport-t-bot-ab117ba07758",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:640/format:webp/1*jr-JcoaGEbi6qBKdk3dg_w.jpeg",
    tags: [ArticleTags.dev_ops],
  },
];

export default {
  ArticleTags,
  ArticleList,
};
