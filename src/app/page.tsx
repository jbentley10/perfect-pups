import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dog } from "lucide-react"

export default function Component() {
  const dogs = [
    {
      id: 1,
      name: "Max",
      breed: "Golden Retriever",
      description: "Friendly and energetic, loves to play fetch.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      name: "Bella",
      breed: "Labrador",
      description: "Gentle and great with kids, enjoys swimming.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      name: "Charlie",
      breed: "French Bulldog",
      description: "Charming and playful, perfect for apartment living.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Dog className="h-6 w-6" />
          <span className="sr-only">Doggy Delights</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#dogs">
            Our Dogs
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Doggy Delights
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Find your perfect furry companion. We specialize in connecting loving homes with adorable,
                  well-cared-for puppies.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="#dogs">See Our Dogs</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="#contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Us</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At Doggy Delights, we&apos;re passionate about matching puppies with their forever homes. Our team of
                  experienced breeders ensures that all our dogs are healthy, well-socialized, and ready to become a
                  cherished part of your family.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="dogs" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Our New Puppies</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {dogs.map((dog) => (
                <Card key={dog.id}>
                  <CardHeader>
                    <CardTitle>{dog.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src={dog.image}
                      alt={`${dog.name} the ${dog.breed}`}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <p className="text-sm text-muted-foreground mb-2">{dog.breed}</p>
                    <p className="text-sm">{dog.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href={`/dogs/${dog.id}`}>Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Happy dogs in a shelter"
                width={600}
                height={400}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Where Our Dogs Come From</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our puppies come from responsible breeders and rescue shelters across the country. We work closely with these partners to ensure that all our dogs are raised in loving environments and receive the best care possible.
                </p>
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Finding Forever Homes</h3>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At Doggy Delights, we don&apos;t just sell puppies - we match them with loving families. Our thorough adoption process includes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>In-depth interviews with potential adopters</li>
                  <li>Home environment checks</li>
                  <li>Education on proper pet care and training</li>
                  <li>Post-adoption support and follow-ups</li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="#contact">Adopt a Dog</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="#about">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions about our puppies or the adoption process? We&apos;re here to help! Fill out the form, and we&apos;ll get back to you as soon as possible.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Phone: (123) 456-7890</li>
                  <li>Email: info@doggydelights.com</li>
                  <li>Address: 123 Puppy Lane, Dogtown, CA 90210</li>
                </ul>
              </div>
              <div className="flex flex-col space-y-4">
                <form className="space-y-4">
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                  <Input placeholder="Subject" />
                  <Textarea placeholder="Your Message" />
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Find Your Perfect Pup?</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse our full selection of adorable puppies and find your new best friend today!
                </p>
              </div>
              <Button asChild size="lg">
                <Link href="/all-dogs">View All Dogs</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2023 Doggy Delights. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
