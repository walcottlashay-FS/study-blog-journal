export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  readingTime: string;
  image?: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "building-my-first-api",
    title: "What I Learned Building My First API",
    category: "API Development",
    date: "June 2026",
    readingTime: "5 min read",
    image: "/images/api-project.png",
    summary:
      "A reflection on learning how APIs connect the front end, backend, and database in real applications.",
    content: [
      "Recently, I started learning how to build an API using Node.js, Express, and MongoDB. At first, an API felt like another backend concept I needed to memorize, but once I began working with routes, requests, and database connections, the idea started to make more sense.",
      "An API is the middle layer between the front end and the database. The front end is what the user sees, the database is where the information is stored, and the API is what allows both sides to communicate. That helped me understand why APIs are such an important part of full-stack development.",
      "While building my API, I practiced creating routes for GET, POST, PUT, and DELETE requests. These routes allowed the application to view data, add new data, update existing data, and delete data. I also used tools like Postman to test my API before connecting it to a front end.",
      "One of the biggest lessons I learned is that backend development is not just about writing code. It is about creating structure. A good API needs organized routes, clear models, useful error handling, and a database connection that works correctly.",
      "This project helped me connect programming to real-world business tools. For example, a skincare business could use an API to manage client profiles, treatment plans, appointments, product recommendations, or follow-up notes. The React front end would let the user interact with the app, while the API would handle the data behind the scenes.",
      "Building an API from scratch made full-stack development feel more real to me. I am still learning, but I now understand that APIs are not just technical pieces of a project. They are the bridge that allows an application to send, receive, organize, and remember information.",
      "This assignment helped me see how the front end, backend, and database work together. It also gave me more confidence because I am learning how to build projects that are not only visual, but also functional and connected to real data."
    ]
  },
  {
    slug: "deploying-static-sites",
    title: "What I Learned About Deploying Static Sites",
    category: "Deployment",
    date: "June 2026",
    readingTime: "6 min read",
    summary:
      "A reflection on learning how a project moves from my computer to a real live website that can be shared.",
    content: [
      "Deploying a static website taught me that web development is not only about making a page look good. The real process includes creating the project, organizing the files, testing it locally, managing it through GitHub, and then getting it live on the web.",
      "When I first started working with static sites, I was mostly focused on what I could see in the browser. If the page loaded on localhost, I felt like the site was working. But this project helped me understand that localhost is only one part of the process. A site also has to be structured correctly so it can be pushed, hosted, and shared.",
      "One thing I learned quickly is that setup matters. Folder names, package files, and dependencies can all affect whether the project runs correctly. Even small things, like having spaces or capital letters in the wrong place, can create issues. That was frustrating at first, but it also helped me slow down and pay attention to how projects are created.",
      "I also learned why files like node_modules should not be included in the GitHub repo. Before working through these assignments, I did not fully understand why some folders are ignored. Now I see that node_modules can be rebuilt with npm install, so it does not need to be uploaded. Keeping those files out makes the project cleaner and more professional.",
      "The deployment process helped me connect the dots between VS Code, Git, GitHub, and the live site. I had to make the edit in the source code, save it, commit it, push it, and then use the GitHub repo for deployment. That workflow made the assignment feel more real because I could see how each step connected to the next.",
      "My learning style is very hands-on. I can read instructions, but I understand better when I actually build it, run into an error, figure out what the error means, and fix it. That is when the lesson really clicks for me. Deployment was one of those things that made more sense once I went through the whole process instead of just reading about it.",
      "This project also showed me that a simple website can still teach important skills. The site did not need to be complicated to help me learn about project structure, source control, hosting, and submission requirements. Sometimes the simple projects are the ones that make the workflow clearer.",
      "By the end of the process, I felt like I had moved past just editing a page. I was starting to understand how a website becomes something real, live, and shareable. That gave me more confidence because it showed me that I can take a project from my computer and turn it into something someone else can actually visit."
    ]
  },
  {
    slug: "github-workflow",
    title: "How GitHub Helped Me Understand Project Management",
    category: "GitHub",
    date: "June 2026",
    readingTime: "6 min read",
    summary:
      "My thoughts on how GitHub helps organize code, track progress, and make a project easier to manage.",
    content: [
      "GitHub is becoming one of those tools that I understand more each time I use it. At first, it can feel like another step added to the project, but now I see that it is a major part of the workflow. It helps keep the project organized, backed up, and connected to the deployment process.",
      "One thing I like about GitHub is that it gives the project a history. Every commit shows what was changed and when it was changed. That helped me understand that committing code is not just about saving files. It is about documenting progress and showing how the project developed over time.",
      "I also learned that commit messages matter. A message like 'revamp homepage' or 'build static study blog journal' explains what happened in that stage of the project. That makes it easier to look back and understand the work. It also helps anyone reviewing the repo see that the project was built step by step.",
      "GitHub also helped me understand why the assignment says the project must be managed through GitHub. It is not enough to only have the files sitting on my computer. The repo shows that the code was created, updated, and pushed through source control. That makes the work easier to verify and more professional.",
      "My learning style is very visual, so seeing the files show up in GitHub helped everything feel more connected. When I ran commands in the terminal and then saw the files appear online, it made Git and GitHub feel less abstract. I could see the result of what I was doing.",
      "I also started understanding how GitHub connects to tools like Vercel. Once the repo is pushed, the hosting platform can use that code to create the live site. That made me realize GitHub is not just storage. It can be the center of the whole project workflow.",
      "Another thing I learned is that clean repos matter. If the wrong files are pushed, like node_modules or secret environment files, it can create problems and even hurt the assignment grade. That helped me understand why developers use .gitignore and why checking the repo before submitting is important.",
      "The more I use GitHub, the more I see it as a skill by itself. It supports organization, version control, collaboration, deployment, and project proof. For me, it is becoming less intimidating because I am learning it through real projects instead of only trying to memorize commands.",
      "This assignment helped me move from seeing GitHub as just a place to upload work to seeing it as a professional tool that shows how a project is managed. That is a big shift for me because I want my projects to look organized, intentional, and easy to build on later."
    ]
  },
  {
    slug: "nextjs-routing",
    title: "What I Learned About Next.js Pages and Routing",
    category: "Next.js",
    date: "June 2026",
    readingTime: "6 min read",
    summary:
      "A reflection on how Next.js helped me understand pages, reusable layouts, dynamic routes, and blog-style structure.",
    content: [
      "Next.js helped me understand routing in a way that feels more connected to the project structure. Instead of only thinking about links and pages separately, I started seeing how folders and files create the structure of the website.",
      "The app folder made the idea of routing feel more visual for me. When I edited app/page.tsx, I was editing the home page. When I created a posts folder and added a dynamic route with [slug], I was creating a way for individual blog posts to have their own pages.",
      "At first, dynamic routes can look confusing because of the brackets. But once I saw how the slug matched the blog post data, it started to make sense. The same page layout could be reused for different posts, and the content changed based on which post was clicked.",
      "That was one of the biggest lessons in this project. I did not need to manually create three completely separate pages for three posts. I could create one post page layout and let the data fill in the title, category, date, and content. That feels more efficient and closer to how real websites are built.",
      "I also learned how helpful it is to separate data from layout. The posts live in the posts file, while the page files handle how everything displays. This makes the project easier to update because new posts can be added in one place without redesigning the whole site.",
      "The component for filtering posts also helped me understand how React can make a page interactive. The category buttons allow the visitor to filter posts, which gives the site more function without making it too complicated. It was a simple interaction, but it made the blog feel more complete.",
      "My learning style is to connect the concept to something I can click, test, and see. Routing made more sense once I could click a blog card, land on the individual post page, and then use the back link to return home. That made the folder structure, data, and navigation feel connected.",
      "This project helped me understand how a blog or journal can grow over time. If I wanted to add more posts later, I would not have to rebuild the full site. I could add more post data, and the structure would already support it.",
      "Next.js also made me think more about reusable design. A strong layout can be used again and again, which saves time and keeps the site consistent. That is something I want to keep practicing because it connects to building cleaner, smarter, and more scalable projects.",
      "Overall, this assignment helped me move from only editing a homepage to understanding how pages, components, routes, data, and navigation work together. It gave me a better picture of how React and Next.js can be used to build real websites with structure and purpose."
    ]
  }
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}