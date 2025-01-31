import { Page } from "./Page";

export interface SharedPageProps {
    page: Page;
    draftMode: boolean;
    token: string;
  }