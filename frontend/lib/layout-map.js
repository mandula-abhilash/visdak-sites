import ParallaxLayout from "@/layouts/ParallaxLayout";
import StackedLayout from "@/layouts/StackedLayout";

export const layoutMap = {
  parallax: ParallaxLayout,
  stacked: StackedLayout,
};

export function getLayout(name) {
  console.log(name);
  return layoutMap[name] || StackedLayout;
}
