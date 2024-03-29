import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Item = ({ image }: any) => {
  const tags = image.tags.split(",");

  return (
    <Card className="shadow-md">
      <CardHeader className="p-0">
        <CardTitle>
          <img
            src={image.webformatURL}
            className="h-[300px] mx-auto object-fit"
          ></img>
        </CardTitle>
        <CardDescription className="ml-[1.5rem] mt-[1.5rem]">
          Photo by {image.user}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div>Download: {image.downloads}</div>
        <div>View: {image.views}</div>
        <div>Likes: {image.likes}</div>
        <div className="py-3 flex flex-row gap-3 place-items-center overflow-x-auto">
          {tags.map((tag: string[], index: number) => (
            <Badge variant="secondary" key={index}>
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <a href={image.pageURL} className={buttonVariants({ variant: "default"})}>
          Download
        </a>
      </CardFooter>
    </Card>
  );
};

export default Item;
