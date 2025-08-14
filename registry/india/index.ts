import { component } from "./registry-components";
import { hooks } from "./registry-hooks";
import { lib } from "./registry-lib";
import type { Registry } from "./schema";
import { block } from "./registry-blocks";
import { animation } from "./registry-animations";

export const registry: Registry = [...component, ...hooks, ...lib, ...block, ...animation];