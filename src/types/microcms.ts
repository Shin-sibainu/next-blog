import type { MicroCMSDate, MicroCMSContentId } from "microcms-js-sdk";

type MicroCMSContent = {
  id: string;
  createdAt: MicroCMSDate;
  updatedAt: MicroCMSDate;
  publishedAt: MicroCMSDate;
  revisedAt: MicroCMSDate;
};

export type Category = MicroCMSContent & {
  name: string;
  slug: string;
};

export type Tag = MicroCMSContent & {
  name: string;
  slug: string;
};

export type Blog = MicroCMSContent & {
  title: string;
  slug: string;
  content: string;
  eyecatch: {
    url: string;
    height: number;
    width: string;
  };
  category: (Category & MicroCMSContentId) | null;
  tags: (Tag & MicroCMSContentId)[];
  description: string;
};
