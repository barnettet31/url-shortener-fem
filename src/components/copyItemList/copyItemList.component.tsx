import { IUrl } from "../../api/urlShortener";
import { CopyItem } from "../copyItem/copyItem.component";
import { NoLinks } from "./noLinks.component";
export interface IArrayOfUrls extends Array<IUrl> {}
interface IListProps {
  items: IArrayOfUrls;
}


export const CopyItemList = ({ items }: IListProps) => {
  return (
    <div className="flex flex-col gap-4 mb-20 lg:mb-32">
      {items.length > 0 ? items.map((item) => {
        return (
          <CopyItem
            key={item.originalLink + Math.random()}
            originalLink={item.originalLink}
            shortLink={item.shortLink}
            fullShortLink={item.fullShortLink}
            dateRequested={item.dateRequested}
          />
        );
      }):<NoLinks/>}
    </div>
  );
};
