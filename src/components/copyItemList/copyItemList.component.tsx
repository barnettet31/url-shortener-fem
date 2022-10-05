import { CopyItem } from "../copyItem/copyItem.component";
import { ICopyItemProps } from "../copyItem/copyItem.interface";
import { NoLinks } from "./noLinks.component";
interface IArrayOfCopyItems extends Array<ICopyItemProps> {}
interface IListProps {
  items: IArrayOfCopyItems;
}


export const CopyItemList = ({ items }: IListProps) => {
  return (
    <div className="flex flex-col gap-4 mb-20 lg:mb-32">
      {items.length > 0 ? items.map((item) => {
        return (
          <CopyItem
            key={item.originalLink + Math.random()}
            originalLink={item.originalLink}
            shortenedLink={item.shortenedLink}
          />
        );
      }):<NoLinks/>}
    </div>
  );
};
