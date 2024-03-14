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
}