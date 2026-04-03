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
            Intelligence From the Field
          </h1>
          <p className="text-navy-foreground mx-auto" style={{ fontSize: '1.1rem', opacity: 0.85, maxWidth: '650px', lineHeight: '1.7' }}>
            Perspectives on market validation, KOL strategy, and commercial growth — written from 25+ years inside MedTech and Pharma.
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
                className="bg-card rounded-lg shadow-md overflow-hidden cursor-pointer group flex flex-col"
                style={{ transition: 'all 0.2s ease' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                {/* Featured Image */}
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full object-cover"
                    style={{ height: '200px', borderRadius: '8px 8px 0 0' }}
                  />
                ) : (
                  <div
                    className="w-full bg-muted flex items-center justify-center"
                    style={{ height: '200px', borderRadius: '8px 8px 0 0' }}
                  >
                    <span className="text-muted-foreground text-sm">Featured Image</span>
                  </div>
                )}

                <div className="p-6 flex flex-col flex-1">
                  {/* Category Tag */}
                  {post.category && (
                    <span
                      className="text-primary font-bold uppercase"
                      style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}
                    >
                      {post.category}
                    </span>
                  )}

                  {/* Title */}
                  <h2
                    className="font-bold text-navy group-hover:text-primary transition-colors"
                    style={{ fontSize: '1.15rem', marginTop: '8px' }}
                  >
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p
                    className="mb-5 flex-1"
                    style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: '1.6', marginTop: '8px' }}
                  >
                    {post.excerpt}
                  </p>

                  {/* Divider */}
                  <div className="border-t border-border pt-4 mt-auto">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary">
                        <User size={14} />
                      </span>
                      <span>{post.author}</span>
                      <span className="mx-1">·</span>
                      <time>{formatDate(post.pubDate)}</time>
                    </div>
                    <span
                      className="inline-flex items-center gap-1 text-primary font-bold text-sm"
                      style={{ transition: 'transform 0.2s ease' }}
                      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(4px)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0)'; }}
                    >
                      Read More <ArrowRight size={16} />
                    </span>
                  </div>
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
