import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RocketIcon, ServerIcon, LaptopIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl md:text-6xl font-bold font-headline mb-4">
        Welcome to RenderFlow Blog
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-12">
        Explore the power of Next.js by seeing different page rendering
        strategies in action. Each card below leads to the same article, but
        rendered in a unique way to demonstrate a core concept.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
          <CardHeader className="flex-grow">
            <div className="flex justify-center mb-4">
              <RocketIcon className="h-12 w-12 text-accent" />
            </div>
            <CardTitle className="font-headline text-2xl">
              Static Site Generation (SSG)
            </CardTitle>
            <CardDescription className="pt-2">
              Pre-rendered at build time for maximum speed. Blazing fast and
              great for SEO. Ideal for content that doesn't change often.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild className="w-full" variant="outline">
              <Link href="/ssg">Explore SSG</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="border-primary border-2 shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
          <CardHeader className="flex-grow">
            <div className="flex justify-center mb-4">
              <ServerIcon className="h-12 w-12 text-accent" />
            </div>
            <CardTitle className="font-headline text-2xl">
              Server-Side Rendering (SSR)
            </CardTitle>
            <CardDescription className="pt-2">
              Generated on the server for every request. Always shows the latest,
              most up-to-date data from your backend.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/ssr">Explore SSR</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
          <CardHeader className="flex-grow">
            <div className="flex justify-center mb-4">
              <LaptopIcon className="h-12 w-12 text-accent" />
            </div>
            <CardTitle className="font-headline text-2xl">
              Client-Side Rendering (CSR)
            </CardTitle>
            <CardDescription className="pt-2">
              Rendered in the browser. Ideal for highly interactive user
              dashboards and web applications that require a rich UI.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild className="w-full" variant="outline">
              <Link href="/csr">Explore CSR</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
