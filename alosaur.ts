import { renderFile } from "https://deno.land/x/dejs/mod.ts";
import { normalize } from "https://deno.land/x/alosaur/src/deps.ts";
import { HomeArea } from "./areas/home/home.area.ts";
import { TourArea } from "./areas/tour/tour.area.ts";
import { ListingArea } from "./areas/listing/listing.area.ts";
import { App, ViewRenderConfig } from "https://deno.land/x/alosaur/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const appSettings = {
  areas: [HomeArea, ListingArea, TourArea],
  logging: true,

};

console.log(config());

const app = new App(appSettings);
app.useStatic({
  root: `${Deno.cwd()}/assets`,
  baseRoute: "/assets/",
});
app.useViewRender({
  type: "dejs",
  basePath: `${Deno.cwd()}/views/`,
  getBody: (path: string, model: Object, config: ViewRenderConfig) =>
    renderFile(normalize(`${config.basePath}${path}.ejs`), model),
});

app.listen(`:${Number(config().PORT) || 8080}`);
