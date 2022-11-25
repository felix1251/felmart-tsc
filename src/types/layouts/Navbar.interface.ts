export interface Data {
      navigation: Navigation[]
}

export interface Navigation {
      name: string,
      href: string,
      current: boolean,
}