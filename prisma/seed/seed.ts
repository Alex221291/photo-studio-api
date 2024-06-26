import { PrismaClient } from '@prisma/client'
import * as path from 'path';
import * as fs from 'fs';
const prisma = new PrismaClient();
async function main() {
  // console.log(__dirname);
  // await prisma.paper.updateMany({
  //   where: { id: '17826f6b-14de-4815-83d8-b092c7381946', picture: null },
  //   data: {
  //     picture: fs.readFileSync(path.join(__dirname, '../seed/seed-pictures/kalka.png')),
  //   }
  // });
  // await prisma.paper.updateMany({
  //   where: { id: '870cd1ef-b2c8-4329-8deb-5793b5499674', picture: null },
  //   data: {
  //     picture: fs.readFileSync(path.join(__dirname, '../seed/seed-pictures/vatman.png')),
  //   }
  // });
  // await prisma.paper.updateMany({
  //   where: { id: '79ea5405-125a-4f7b-82a8-e1628870d920', picture: null },
  //   data: {
  //     picture: fs.readFileSync(path.join(__dirname, '../seed/seed-pictures/upakovka.png')),
  //   }
  // });
  // await prisma.paper.updateMany({
  //   where: { id: 'ad30ecbb-6916-45e7-92d8-f266133d9891', picture: null },
  //   data: {
  //     picture: fs.readFileSync(path.join(__dirname, '../seed/seed-pictures/pergament.png')),
  //   }
  // });
  
  // await prisma.paper.updateMany({
  //   where: { id: '8fa5219a-4da3-4c9e-8060-64b67bc1c0fa', picture: null },
  //   data: {
  //     picture: fs.readFileSync(path.join(__dirname, '../seed/seed-pictures/pergament.png')),
  //   }
  // });

  // await prisma.picture.updateMany({
  //   where: { id: {
  //     in: ['f779128e-e838-4688-b750-2ab12e41a7e3', '04f82858-b0c7-4df7-acf7-f7170af9af91', '6b7956cd-7371-483b-97fe-89903abbdb5b', 'f013b7b8-e9dc-404b-8dcf-6bc5b6427360', '13a5e1bc-62e1-4528-a7b3-e86d5a1f0c82', '7c38031d-66df-4bea-bb54-1391b386b095']
  //   }, 
  //   picture: null},
  //   data: {
  //     picture: fs.readFileSync(path.join(__dirname, '../seed/seed-pictures/kalka-main.png')),
  //     type: 'image/png'
  //   }
  // });

  // await prisma.picture.updateMany({
  //   where: { id: {
  //     in: ['e6d3054e-df9a-45be-8224-76169e145a6b', 'dce35ff5-89ea-4559-b6af-0a87934870b8', '17493f82-86fa-4b39-b6e2-303b95af9078', '07738281-47b3-48c8-aeda-f9973db7d818', 'b0af73df-d997-4784-a14c-e02a62ceb54c', 'dd7f2cd0-7ef9-498e-8657-c1059727b5a8']
  //   }, 
  //   picture: null},
  //   data: {
  //     picture: fs.readFileSync(path.join(__dirname, '../seed/seed-pictures/kalka-texture.png')),
  //     type: 'image/png'
  //   }
  // });

  // await prisma.picture.updateMany({
  //   where: { id: {
  //     in: ['0aabe810-304c-4c10-8380-770f755c1d89']
  //   }, 
  //   picture: null},
  //   data: {
  //     picture: fs.readFileSync(path.join(__dirname, '../seed/seed-pictures/kraft-main.png')),
  //     type: 'image/png'
  //   }
  // });

  // await prisma.picture.updateMany({
  //   where: { id: {
  //     in: ['0daaa188-43a8-4089-be9c-487d03cdbbd0']
  //   }, 
  //   picture: null},
  //   data: {
  //     picture: fs.readFileSync(path.join(__dirname, '../seed/seed-pictures/kraft-texture.png')),
  //     type: 'image/png'
  //   }
  // });

  //NEWS
  // await prisma.picture.updateMany({
  //   where: { id: 'b486a497-82aa-419a-9921-b3a567fff653', picture: null },
  //   data: {
  //     picture: fs.readFileSync(path.join(__dirname, '../seed/seed-pictures/news-1.png')),
  //     type: 'image/png'
  //   }
  // });

  // await prisma.picture.updateMany({
  //   where: { id: '13d88676-f686-462e-840b-e868294b47fb', picture: null },
  //   data: {
  //     picture: fs.readFileSync(path.join(__dirname, '../seed/seed-pictures/news-2.png')),
  //     type: 'image/png'
  //   }
  // });

  // await prisma.picture.updateMany({
  //   where: { id: '7b4a066d-2876-4444-a318-4945dfa967f6', picture: null },
  //   data: {
  //     picture: fs.readFileSync(path.join(__dirname, '../seed/seed-pictures/news-3.png')),
  //     type: 'image/png'
  //   }
  // });

  // await prisma.picture.updateMany({
  //   where: { id: '74e53ba1-c891-4f52-81a3-0cc609be4ac0', picture: null },
  //   data: {
  //     picture: fs.readFileSync(path.join(__dirname, '../seed/seed-pictures/news-4.png')),
  //     type: 'image/png'
  //   }
  // });
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })