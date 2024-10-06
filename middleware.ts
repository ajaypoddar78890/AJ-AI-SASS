import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  // Specify the public routes
  publicRoutes: [
    "/", // Home page
    "/about", // Example of an about page
    "/contact", // Example of a contact page
    "/blog/:slug", // Example of dynamic blog post route
    "/pricing", // Example of pricing page
    "/api/public-endpoint", // Example of a public API route
  ],
});

export const config = {
  matcher: [
    // Match all paths, but skip Next.js internals and static files like assets
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always match API routes
    "/(api|trpc)(.*)",
  ],
};
