import dayjs from "dayjs";
import "dayjs/locale/ja";
import relativeTime from "dayjs/plugin/relativeTime";
import { MicroCMSDate } from "microcms-js-sdk";

dayjs.extend(relativeTime);
dayjs.locale("ja");

export function formatDate(date: MicroCMSDate): string {
  return dayjs(date.toString()).format("YYYY年MM月DD日");
}

export function formatRelativeDate(date: MicroCMSDate): string {
  return dayjs(date.toString()).fromNow();
}
