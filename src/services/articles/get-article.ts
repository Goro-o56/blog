import type { ApiContext, Blog } from '../../types/data'
import { fetcher } from '../../utils'
export type GetArticleParams = {
  id: string
}

const getArticle = async (
  context: ApiContext,
  { id }: GetArticleParams,
): Promise<Blog> => {
  return await fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/blog/${id}`)
}
