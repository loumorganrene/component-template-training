type NonNullableReactNodeArray = Exclude<React.ReactNode[], null | undefined>;

type CarouselProps = {
    children: NonNullableReactNodeArray
    navPosition: 'classic' | 'bottom'
    navBullet: boolean
}

type Slide = {
    id: string;
    title: string;
    cover: string;
    description?: string;
    technology?: string[];
    link?: string[];
  };