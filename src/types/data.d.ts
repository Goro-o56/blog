//記事の型
export type Blog = {
  id: string
  createdAt: string
  updatedAt: string
  revisedAt: string
  title: string
  content: HTMLElement
  category: Category
}

export type Category_name = `tech_memo` | `profile` | `art-memo` | `product`

export type Category = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  name: Category_name
}

//API Context
export type ApiContext = {
  apiRootUrl: string
}
