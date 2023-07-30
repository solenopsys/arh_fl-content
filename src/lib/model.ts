export const LAST_POSITION = -1;
export const FIRST_POSITION = 0;

export declare type FragmentResp ={
  results: [{
    uid: string,
    fragment: string,
    versions: {
      uid: string,
      version_date: string
    }[]
  }]
}

export declare type VersionResp = {
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

export declare type DragPoint ={
  groupID: string,
  index: number
}

export declare type DragState ={
  active: boolean,
  start: DragPoint,
  moving: DragPoint
}


export declare type ContentNodesGroup = {
  fragmentId:string;
  fid: string;
  edited: boolean;
  blocks: string[]
}

export declare type BlockNode = {
  id: string;
  uid?: string;
  before?: string;
  edited: boolean;
  type: ContentNodeType;
  value: string;
}

export declare type ContentNode = {
  uid?: string;
  before?: string;
  type: ContentNodeType;
  value: string;
  items?: ContentNode[];
}

export declare type VersionLite = {
  uid: string,
  version_date: string,
}

export declare type FragmentVersion = {
  uid: string,
  nodes: string[];
}

export declare type Fragment ={
  uid: string;
  name: string;
  lastVersionId: string | undefined;
  versions: VersionLite[];
}

export  type ArticleVersion = {
  articleId: string;
  blocks: ContentNode[];
}


export declare enum ContentNodeType {
  PARAGRAPH = 'PARAGRAPH',
  HEADER1 = 'HEADER1',
  HEADER2 = 'HEADER2',
  HEADER3 = 'HEADER3',
  IMAGE = 'IMAGE',
  CODE = 'CODE'
}
