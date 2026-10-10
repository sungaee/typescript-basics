/**
 * 맵드 타입 기반의 유틸리티 타입2
 *
 * Pick<T,K>
 * -> 뽑다, 고르다
 * -> 객체 타입으로부터 특정 프로퍼티를 골라내는 타입
 */

interface Post {
  title: string
  tags: string[]
  content: string
  thumbnailURL?: string
}

type Pick<T, K extends keyof T> = {
  // K extends 'title' | 'tags' | 'content' | 'thumbnailURL'
  // 'title' | 'content' extends 'title' | 'tags' | 'content' | 'thumbnailURL'
  [key in K]: T[key]
}

const legacyPost: Pick<Post, 'title' | 'content'> = {
  title: '옛날 글',
  content: '옛날 내용',
}

/**
 * Omit<T,K>
 * -> 생략하다, 빼다
 * -> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
// T = Post, K= 'title'
// Pick<Post, Excludes<keyof Post, 'title'>>
// Pick<Post, Excludes<'title' | 'content' | 'tags' | 'thumbnailURL', 'title'>>
// Pick<Post, 'content' | 'tags' | 'thumbnailURL'>

// const noTitlePost: Pick<Post, 'content' | 'tags' | 'thumbnailURL'> = {
const noTitlePost: Omit<Post, 'title'> = {
  // Post에서 'title'만 뺴라. Omit은 Pick타입과 반대
  content: '',
  tags: [],
  thumbnailURL: '',
}

/**
 * Record<K, V>
 * 동일한 패턴을 갖는 객체타입을 쉽게 정의할 수 있다.
 */

// type ThumbnailLegacy = {
//   large: {
//     url: string
//   }
//   medium: {
//     url: string
//   }
//   small: {
//     url: string
//   }
//   watch: {
//     url: string
//   }
// }

type Record<K extends keyof any, V> = {
    [key in K] : V
}

type Thumbnail = Record<'large' | 'medium' | 'smail' | 'watch', { url: string, size: number }>
