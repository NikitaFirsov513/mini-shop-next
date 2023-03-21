import { Providers } from "@/redux/provider";
import { data } from "@/types/data";

async function getData() {

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, 1000);
  });
  return data
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const data = await getData();

  return (
    <html lang="en">
      <body>
        <Providers data={data} >{children}</Providers>
      </body>
    </html>
  );
}
