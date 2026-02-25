import { useNavigate } from "react-router-dom";
import { useRssFeed } from "@/hooks/useRssFeed";
import { ArrowRight, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationDialog from "@/components/ConsultationDialog";
import { useState } from "react";

const Blog = () => {
  const { posts, loading } = useRssFeed();
  const navigate = useNavigate();
  const [consultationOpen, setConsultationOpen] = useState(false);

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

      {/* Header */}
      <header className="bg-navy pt-32 pb-16">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-foreground mb-4">
            Latest Insights
          </h1>
          <p className="text-lg md:text-xl text-navy-foreground/80 max-w-2xl mx-auto">
            Expert perspectives on MedTech market strategy, product launches, and clinical commercialization.
          </p>
        </div>
      </header>

      {/* Blog Grid */}
      <main className="container mx-auto px-6 md:px-8 max-w-5xl py-16">
        {loading ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card rounded-lg shadow-md p-6 animate-pulse">
                <div className="h-6 bg-muted rounded w-3/4 mb-4" />
                <div className="h-4 bg-muted rounded w-full mb-2" />
                <div className="h-4 bg-muted rounded w-5/6 mb-6" />
                <div className="h-4 bg-muted rounded w-1/3" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                onClick={() => navigate(`/blog/${post.slug}`)}
                className="bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 cursor-pointer group flex flex-col"
              >
                <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary">
                      <User size={14} />
                    </span>
                    <span>{post.author}</span>
                    <span className="mx-1">·</span>
                    <time>{formatDate(post.pubDate)}</time>
                  </div>
                  <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                    Read More <ArrowRight size={16} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
