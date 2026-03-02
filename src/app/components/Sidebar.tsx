import { useEffect, useState } from "react";
import { Link } from "react-router";
import { blogStore, BlogPost } from "../store/blogStore";

export function Sidebar() {
  const [posts, setPosts] = useState<BlogPost[]>(blogStore.getPosts());

  useEffect(() => {
    const unsubscribe = blogStore.subscribe(() => {
      setPosts(blogStore.getPosts());
    });
    return unsubscribe;
  }, []);

  return (
    <aside className="w-64 bg-white dark:bg-slate-800 shadow-md border-r border-cyan-200 dark:border-cyan-700 p-6">
      <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-indigo-600 dark:from-cyan-400 dark:to-indigo-400 bg-clip-text text-transparent mb-6">
        My Blogs
      </h2>

      <div className="space-y-3">
        {posts.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400 text-sm">No blogs written yet</p>
        ) : (
          posts.map((post) => (
            <Link key={post.id} to={`/post/${post.id}`}>
              <div className="p-3 bg-gray-50 dark:bg-slate-700 rounded-lg hover:bg-cyan-50 dark:hover:bg-indigo-900 transition-colors cursor-pointer border border-gray-200 dark:border-slate-600 hover:border-cyan-400 dark:hover:border-cyan-500">
                <h3 className="font-medium text-sm text-gray-800 dark:text-gray-200 truncate">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {post.createdAt.toLocaleDateString()}
                </p>
              </div>
            </Link>
          ))
        )}
      </div>
    </aside>
  );
}
