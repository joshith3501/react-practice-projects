
//
// THIS COMPONENT IS LONGER USED !!!!!!!!!!!!!!!!!!!
//


const ItemList = () => {
  let data = [
    {
      id: 1,
      downloads: "513",
      views: "1006",
      shares: "748",
      tags: ["wubba", "lubba", "dub", "dub"],
    },
    {
      id: 2,
      downloads: "13",
      views: "106",
      shares: "74",
      tags: ["wubba", "lubba", "dub", "dub"],
    },
    {
      id: 3,
      downloads: "65",
      views: "243",
      shares: "58",
      tags: ["wubba", "lubba", "dub", "dub"],
    },
    {
      id: 4,
      downloads: "49",
      views: "98",
      shares: "49",
      tags: ["wubba", "lubba", "dub", "dub"],
    },
  ];

  return (
    <>
      <div className="grid gap-5 grid-cols-1 m-2 md:m-8 sm:grid-cols-2 md:grid-cols-3 lg-grid-cols-4">
        {data.map((con) => (
          <Item
            downloads={con.downloads}
            views={con.views}
            shares={con.shares}
            tags={con.tags}
            key={con.id}
          />
        ))}
      </div>
    </>
  );
};

export default ItemList;
