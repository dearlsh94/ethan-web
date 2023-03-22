export interface WorkBy {
  object: string
  id: string
}

export interface Properties {
  url: Property
  title: Property
  remark: Property
  category: Property
}

// NOTE 노션 DB 테이블의 컬럼
export interface Property {
  id: string
  type: 'title' | 'multi_select' | 'rich_text'
  title?: Title // type === title
  rich_text?: string // type === rich_text
  multi_select?: MultiSelect[]
}

export interface MultiSelect {
  id: string
  name: string
  color: string
}

export interface Title {
  type: string
  text: Text
  annotations: Annotations
  plain_text: string
  href: any
}

export interface Annotations {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

export interface Url {
  id: string
  type: string
  rich_text: string
}

export interface Text {
  content: string
  link: any
}

export interface Heading {
  color: string
  is_toggleable: boolean
  text: Title[]
}

export interface Paragraph {
  color: string
  text: Title[]
}