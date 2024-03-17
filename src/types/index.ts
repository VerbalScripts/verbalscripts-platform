type NavLabel = {
  name: string;
  href: string;
  description: string;
  icon: any;
};

interface NavLabelProp {
  solutions: Array<NavLabel>;
  resources: Array<NavLabel>;
  services: Array<NavLabel>;
}

type Testimony = {
  description: string;
  name: string;
  imageUrl: string;
  occupation: string;
};

interface TestimonyProp {
  testimonials: Array<Testimony>;
}

type FreelancerTestimony = {
  description: string;
  name: string;
  imageUrl: string;
  state: string;
  years: string;
};
