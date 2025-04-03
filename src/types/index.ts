export interface TrumpAction {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  date: string;
  sources: {
    leftLeaning: Source[];
    centrist: Source[];
    rightLeaning: Source[];
  };
  commentCount: number;
}

export interface Source {
  title: string;
  url: string;
  publication: string;
  date: string;
}

export interface Comment {
  id: string;
  actionId: string;
  author: string;
  content: string;
  timestamp: string;
} 