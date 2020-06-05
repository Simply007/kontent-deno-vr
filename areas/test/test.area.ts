import { Area } from "https://deno.land/x/alosaur/mod.ts";
import { TestController } from "./test.controller.ts";

@Area({
  baseRoute: "/test",
  controllers: [TestController],
})
export class TestArea {}
