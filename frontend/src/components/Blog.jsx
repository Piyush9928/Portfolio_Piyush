import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { blogArticles } from '../data/mock';

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Blog & <span className="text-emerald-500">Articles</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 via-cyan-400 to-orange-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Sharing insights, learnings, and experiences from my journey in software development and data
            science.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogArticles.map((article) => (
            <Card
              key={article.id}
              className="bg-slate-800 border-slate-700 overflow-hidden hover:border-emerald-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden group">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-emerald-500 text-white border-0">{article.category}</Badge>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 hover:text-emerald-500 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-400 mb-4">{article.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="bg-slate-700 text-cyan-400 border-slate-600 hover:border-cyan-500"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  className="text-emerald-500 hover:text-emerald-400 hover:bg-emerald-500/10 p-0"
                >
                  Read More
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white px-8 py-6 text-lg"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;