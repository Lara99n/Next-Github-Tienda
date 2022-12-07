// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 0,
      title: "Octacat",
      price: 100,
      image: "http://localhost:3000/img/octocat.webp",
      description:
        "For years, the Octocat has been stuck in the realm of two dimensions—but no more! Now she’s crawling off your laptop and onto your desk as a 5 vinyl figurine..",
    },
    {
      id: 2,
      title: "Muñequito octocat",
      price: 200,
      image: "http://localhost:3000/img/Blank.webp",
      description:
        "The Blanktocat was created so you can design your own Octocat figurine. Grab a pack of your favorite coloring utensils and get creative!",
    },
    {
      id: 3,
      title: "Stikers Octocat",
      price: 300,
      image: "http://localhost:3000/img/sticker.webp",
      description:
        "These 3 inch Octocat stickers are fun for all ages! They come in packs of 10 or 50. These stickers are sure to spruce up anything you stick them on.",
    },
    {
      id: 4,
      title: "Invertocat",
      price: 400,
      image: "http://localhost:3000/img/Invertocat.webp",
      description: "Invertocat enamel pin on gold plating",
    },
    {
      id: 5,
      title: "Gorra octocat",
      price: 500,
      image: "http://localhost:3000/img/gorra.webp",
      description:
        "L100% Washed Chino Cotton Twill Unstructured Cap with a tone-on-tone invertocat for a simple and classy hat to cap off any wardrobe choice.",
    },
    {
      id: 6,
      title: "Botella octocat",
      price: 600,
      image: "http://localhost:3000/img/botella.webp",
      description:
        "25 oz. triple insulated, vacuum sealed canteen with easy-grip flag sides, non-slip bottom, screw-on cap and wide mouth opening.",
    },
  ]);
}
