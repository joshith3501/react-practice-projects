import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ItemProps {
  downloads: string;
  views: string;
  shares: string;
  tags: string[];
}
const Item = ({ downloads, views, shares, tags }: ItemProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pictures</CardTitle>
        <CardDescription>Images will be rendered here</CardDescription>
      </CardHeader>
      <CardContent>
        <div>Download: {downloads}</div>
        <div>View: {views}</div>
        <div>Shares: {shares}</div>
        <div className="my-1 py-1 flex flex-row gap-3 place-items-center">
          {tags.map((tag) => (
            <Badge variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button>Download Image</Button>
      </CardFooter>
    </Card>
  );
};

export default Item;
