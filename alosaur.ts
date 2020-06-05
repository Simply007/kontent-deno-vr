import { renderFile } from "https://deno.land/x/dejs/mod.ts";
import { normalize } from "https://deno.land/x/alosaur/src/deps.ts";
import { HomeArea } from "./areas/home/home.area.ts";
import { TourArea } from "./areas/tour/tour.area.ts";
import { ListingArea } from "./areas/listing/listing.area.ts";
import { App, ViewRenderConfig } from "https://deno.land/x/alosaur/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import * as flags from "https://deno.land/std/flags/mod.ts";
import { serve } from "https://deno.land/std@0.55.0/http/server.ts";

const { args, exit } = Deno;
const DEFAULT_PORT = 8080;
const argPort = flags.parse(args).port;
const port = argPort ? Number(argPort) : DEFAULT_PORT;

if (isNaN(port)) {
  console.log(`port is not a number - it is: ${port}`)
  exit(1);
}

// const appSettings = {
//   areas: [HomeArea, ListingArea, TourArea],
//   logging: true,
// };

// const app = new App(appSettings);
// app.useStatic({
//   root: `${Deno.cwd()}/assets`,
//   baseRoute: "/assets/",
// });
// app.useViewRender({
//   type: "dejs",
//   basePath: `${Deno.cwd()}/views/`,
//   getBody: (path: string, model: Object, config: ViewRenderConfig) =>
//     renderFile(normalize(`${config.basePath}${path}.ejs`), model),
// });

// console.log(`Start listening on port: ${port}`);
// app.listen(`:${port}`);

const s = serve({ port });
console.log(`http://localhost:${port}/`);
for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}