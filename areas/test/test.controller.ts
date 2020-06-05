import {
  Controller,
  View,
  Get,
  QueryParam,
} from "https://deno.land/x/alosaur/mod.ts";
import getContentItems from "../../api/getContentItems.ts";

@Controller()
export class TestController {
  properties = [];

  @Get()
  text() {
    return 'Hello world';
  }
}
