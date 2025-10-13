import { blogData } from "@/lib/siteData";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getBlogPostSEO } from "@/lib/seoData";
import { Metadata } from "next";
import GalleryWrapper from "@/components/GalleryWrapper";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const post = blogData.posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found",
    };
  }

  const seo = getBlogPostSEO(slug, post.title, post.description);

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: "article",
      authors: [post.postedBy],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = blogData.posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Find the index of the current post
  const currentPostIndex = blogData.posts.findIndex((p) => p.slug === slug);

  // Determine previous and next posts
  const prevPost =
    currentPostIndex > 0 ? blogData.posts[currentPostIndex - 1] : null;
  const nextPost =
    currentPostIndex < blogData.posts.length - 1
      ? blogData.posts[currentPostIndex + 1]
      : null;

  const getLastWord = (str: string) => {
    const words = str.split(" ");
    return words[words.length - 1];
  };

  // Get the last word from post.title
  const lastWord = getLastWord(post.title);

  return (
    <GalleryWrapper>
      <div className="container mx-auto max-w-[1320px] px-5 md:px-10 xl:px-5">
        <div className="py-24 xl:py-28">
          <div className="md:mx-auto md:w-3/4 lg:w-2/3">
            <h2 className="font-outfit font-medium text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              {post.title.replace(lastWord, "")}{" "}
              <span className="bg-themeGradient bg-clip-text text-transparent">
                {lastWord}
              </span>
            </h2>
            <p className="text-white/70">{post.description}</p>
          </div>
          {/*  Post Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {/* box 1 */}
            <div className="z-[1] p-8 space-y-1.5 bg-darkBg rounded-none relative overflow-hidden before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-10 before:transition-all before:ease-linear before:duration-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-themeGradient">
              <span className="block font-outfit font-medium uppercase text-sm tracking-wider text-white">
                Category:
              </span>
              <ul className="space-x-3 text-white/70">
                <li className="list-none inline-block">{post.category}</li>
              </ul>
            </div>
            {/* box 2 */}
            <div className="z-[1] p-8 space-y-1.5 bg-darkBg rounded-none relative overflow-hidden before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-10 before:transition-all before:ease-linear before:duration-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-themeGradient">
              <span className="block font-outfit font-medium uppercase text-sm tracking-wider text-white">
                Posted by:
              </span>
              <p className="text-white/70">{post.postedBy}</p>
            </div>
            {/* box 3 */}
            <div className="z-[1] p-8 space-y-1.5 bg-darkBg rounded-none relative overflow-hidden before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-10 before:transition-all before:ease-linear before:duration-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-themeGradient">
              <span className="block font-outfit font-medium uppercase text-sm tracking-wider text-white">
                Tags:
              </span>
              <a className="inline-block overflow-hidden" href="#">
                <ul className="space-x-3 text-white/70">
                  {post.tags.map((item, index) => (
                    <li key={index} className="list-none inline-block">
                      #{item.name}
                    </li>
                  ))}
                </ul>
              </a>
            </div>
            {/* box 4 */}
            <div className="z-[1] p-8 space-y-1.5 bg-darkBg rounded-none relative overflow-hidden before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-10 before:transition-all before:ease-linear before:duration-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-themeGradient">
              <span className="block font-outfit font-medium uppercase text-sm tracking-wider text-white">
                Posted on:
              </span>
              <p className="text-white/70">{post.date}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Post Details */}
      <div className="px-5 lg:px-10">
        <div className="bg-darkBg rounded-2xl overflow-hidden py-20">
          <div className="container mx-auto max-w-[1320px] px-5">
            <div className="md:mx-auto md:w-3/4 lg:w-2/3">
              <p
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="text-white/70"
              />
            </div>

            <div className="mt-6 lg:mt-12">
              <Image
                className="rounded-none"
                src={post.wideImage}
                alt={post.title}
                loading="lazy"
                placeholder="blur"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 mt-6 lg:mt-12">
              {/* Lightbox Image */}
              {post.imagesLightbox && (
                <div className="overflow-hidden rounded-none">
                  <a
                    href={post.imagesLightbox.image.src}
                    className="glightbox group block relative before:content-[''] before:z-[1] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-10 before:transition-all before:ease-linear before:duration-100"
                  >
                    <Image
                      src={post.imagesLightbox.image}
                      alt={post.imagesLightbox.alt}
                      loading="lazy"
                      placeholder="blur"
                      width={1280}
                      height={500}
                      className="group-hover:scale-105 transition ease-custom duration-500"
                    />
                    <div className="inline-flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] rounded-none bg-black/20 backdrop-blur text-white">
                      <i className="bi bi-arrows-fullscreen"></i>
                    </div>
                  </a>
                </div>
              )}

              {/* Lightbox Video */}
              {post.video && (
                <div className="overflow-hidden rounded-none">
                  <a
                    href={post.video.url}
                    data-gallery="video"
                    className="glightbox group block relative before:content-[''] before:z-[1] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-10 before:transition-all before:ease-linear before:duration-100"
                  >
                    <Image
                      src={post.video.thumbnail}
                      alt={post.title}
                      loading="lazy"
                      placeholder="blur"
                      width={1280}
                      height={500}
                      className="group-hover:scale-105 transition ease-custom duration-500"
                    />
                    <div className="inline-flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] rounded-none bg-black/20 backdrop-blur text-white text-lg">
                      <i className="bi bi-play-fill"></i>
                    </div>
                  </a>
                </div>
              )}
            </div>

            {/* Prev/Next Buttons */}
            <div className="flex justify-between mt-12">
              {/* Prev */}
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="inline-block relative z-[1] group overflow-hidden bg-white/15 px-7 py-3 rounded-3xl font-outfit font-medium uppercase text-sm tracking-wider text-white before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-20 before:transition-all before:ease-linear before:duration-100"
                >
                  <span
                    className="block relative text-transparent before:content-[attr(data-text)] before:absolute before:top-0 before:left-0 before:opacity-100 before:text-white before:transition-all before:ease-out before:duration-200 group-hover:before:-top-full group-hover:before:opacity-0 after:content-[attr(data-text)] after:absolute after:top-full after:left-0 after:opacity-0 after:text-white after:transition-all after:ease-out after:duration-200 group-hover:after:top-0 group-hover:after:opacity-100"
                    data-text="Prev Post"
                  >
                    Prev Post
                  </span>
                </Link>
              ) : (
                <div className="opacity-50 pointer-events-none inline-block relative z-[1] group overflow-hidden bg-white/15 px-7 py-3 rounded-3xl font-outfit font-medium uppercase text-sm tracking-wider text-white before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-20 before:transition-all before:ease-linear before:duration-100">
                  <span
                    className="block relative text-transparent before:content-[attr(data-text)] before:absolute before:top-0 before:left-0 before:opacity-100 before:text-white before:transition-all before:ease-out before:duration-200 group-hover:before:-top-full group-hover:before:opacity-0 after:content-[attr(data-text)] after:absolute after:top-full after:left-0 after:opacity-0 after:text-white after:transition-all after:ease-out after:duration-200 group-hover:after:top-0 group-hover:after:opacity-100"
                    data-text="No Previous Post"
                  >
                    No Previous Post
                  </span>
                </div>
              )}

              {/* Next */}
              {nextPost ? (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="inline-block relative z-[1] group overflow-hidden bg-white/15 px-7 py-3 rounded-3xl font-outfit font-medium uppercase text-sm tracking-wider text-white before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-20 before:transition-all before:ease-linear before:duration-100"
                >
                  <span
                    className="block relative text-transparent before:content-[attr(data-text)] before:absolute before:top-0 before:left-0 before:opacity-100 before:text-white before:transition-all before:ease-out before:duration-200 group-hover:before:-top-full group-hover:before:opacity-0 after:content-[attr(data-text)] after:absolute after:top-full after:left-0 after:opacity-0 after:text-white after:transition-all after:ease-out after:duration-200 group-hover:after:top-0 group-hover:after:opacity-100"
                    data-text="Next Post"
                  >
                    Next Post
                  </span>
                </Link>
              ) : (
                <div className="opacity-50 pointer-events-none inline-block relative z-[1] group overflow-hidden bg-white/15 px-7 py-3 rounded-3xl font-outfit font-medium uppercase text-sm tracking-wider text-white before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-20 before:transition-all before:ease-linear before:duration-100">
                  <span
                    className="block relative text-transparent before:content-[attr(data-text)] before:absolute before:top-0 before:left-0 before:opacity-100 before:text-white before:transition-all before:ease-out before:duration-200 group-hover:before:-top-full group-hover:before:opacity-0 after:content-[attr(data-text)] after:absolute after:top-full after:left-0 after:opacity-0 after:text-white after:transition-all after:ease-out after:duration-200 group-hover:after:top-0 group-hover:after:opacity-100"
                    data-text="No Next Post"
                  >
                    No Next Post
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </GalleryWrapper>
  );
}
