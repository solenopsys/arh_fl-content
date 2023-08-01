export const LAST_POSITION = -1;
export const FIRST_POSITION = 0;

export  type FragmentResp ={
  results: [{
    uid: string,
    fragment: string,
    versions: {
      uid: string,
      version_date: string
    }[]
  }]
}

export  type VersionResp = {
  results: [{
    uid: string,
    blocks: {
      uid: string,
      type: string
      value: string
      before: string
    }[]
  }]
}

export  type DragPoint ={
  groupID: string,
  index: number
}

export  type DragState ={
  active: boolean,
  start: DragPoint,
  moving: DragPoint
}


export  type ContentNodesGroup = {
  fragmentId:string;
  fid: string;
  edited: boolean;
  blocks: string[]
}

export  type BlockNode = {
  id: string;
  uid?: string;
  before?: string;
  edited: boolean;
  type: ContentNodeType;
  value: string;
}

export  type ContentNode = {
  uid?: string;
  before?: string;
  type: ContentNodeType;
  value: string;
  items?: ContentNode[];
}

export  type VersionLite = {
  uid: string,
  version_date: string,
}

export  type FragmentVersion = {
  uid: string,
  nodes: string[];
}

export  type Fragment ={
  uid: string;
  name: string;
  lastVersionId: string | undefined;
  versions: VersionLite[];
}

export  type ArticleVersion = {
  articleId: string;
  blocks: ContentNode[];
}


export  enum ContentNodeType {
  PARAGRAPH = 'PARAGRAPH',
  HEADER1 = 'HEADER1',
  HEADER2 = 'HEADER2',
  HEADER3 = 'HEADER3',
  IMAGE = 'IMAGE',
  CODE = 'CODE'
}
