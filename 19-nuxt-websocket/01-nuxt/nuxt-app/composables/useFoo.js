import { useState } from "#app";

//使用: useFoo()
export default function () {
  return useState("msg", () => "一切反动派都是纸老虎。");
}
