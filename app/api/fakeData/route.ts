export async function GET(request: Request) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, 3000);
  });
  return new Response(
    JSON.stringify({
      data: [
        {
          name: "name",
          price: 200,
          isNew: false,
          isSale: false,
          valSale: 0,
        },
        {
          name: "name",
          price: 200,
          isNew: false,
          isSale: false,
          valSale: 0,
        },
        {
          name: "name",
          price: 200,
          isNew: false,
          isSale: false,
          valSale: 0,
        },
        {
          name: "name",
          price: 200,
          isNew: false,
          isSale: false,
          valSale: 0,
        },
      ],
    })
  );
}
