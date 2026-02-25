import { useParams, useNavigate } from "react-router-dom";
import { useRssFeed } from "@/hooks/useRssFeed";
import { ArrowLeft, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationDialog from "@/components/ConsultationDialog";
import { useState } from "react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { posts, loading } = useRssFeed();
  const navigate = useNavigate();
  const [consultationOpen, setConsultationOpen] = useState(false);

  const post = posts.find((p) => p.slug === slug);

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenConsultationDialog={() => setConsultationOpen(true)} />
      <ConsultationDialog open={consultationOpen} onOpenChange={setConsultationOpen} />

      <main className="container mx-auto px-6 md:px-8 max-w-3xl pt-32 pb-20">
        <button
          onClick={() => navigate("/blog")}
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium mb-8 transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Blog
        </button>

        {loading ? (
          <div className="animate-pulse space-y-4">
            <div className="h-10 bg-muted rounded w-3/4" />
            <div className="h-5 bg-muted rounded w-1/3" />
            <div className="h-4 bg-muted rounded w-full mt-8" />
            <div className="h-4 bg-muted rounded w-5/6" />
            <div className="h-4 bg-muted rounded w-full" />
          </div>
        ) : !post ? (
          <div className="text-center py-20">
            <h1 className="text-2xl font-bold text-foreground mb-2">Post Not Found</h1>
            <p className="text-muted-foreground">The blog post you're looking for doesn't exist.</p>
          </div>
        ) : (
          <article>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 text-muted-foreground mb-10 border-b border-border pb-6">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                <User size={16} />
              </span>
              <span className="font-medium text-foreground">{post.author}</span>
              <span>·</span>
              <time>{formatDate(post.pubDate)}</time>
            </div>
            <div
              className="prose prose-lg max-w-none
                prose-headings:text-foreground prose-headings:font-bold
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-li:text-muted-foreground
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground
                prose-ul:list-disc prose-ul:pl-6
                prose-ol:list-decimal prose-ol:pl-6
                [&>h2]:text-2xl [&>h2]:mt-10 [&>h2]:mb-4
                [&>p]:mb-4
                [&>ul]:mb-6 [&>ol]:mb-6
                [&>ul>li]:mb-2 [&>ol>li]:mb-2"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
