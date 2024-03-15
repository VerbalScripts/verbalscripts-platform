type NavLabel = {
  name: string, 
  href: string,
  description: string,
  icon: any
}

interface NavLabelProp {
   solutions: Array<NavLabel>,
   resources: Array<NavLabel>,
  services: Array<NavLabel>,
  showHeader: boolean
}


type Testimony = {
   description: string,
    name: string,
    imageUrl: string,
    occupation:string
}

interface TestimonyProp {
  testimonials: Array<Testimony>,
}