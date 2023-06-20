import { component$, useSignal } from "@builder.io/qwik";
import {
  LuAlbum,
  LuCalendar,
  LuNavigation,
  LuSmile,
} from "@qwikest/icons/lucide";

export const PoeCreator = component$(() => {
  const poeContent = useSignal<string>("");

  return (
    <div class="flex w-full  border-b-border border-b-[1px] gap-2 p-4">
      <div class="aspect-square h-10 bg-green-200 rounded-full"></div>
      <div class="flex w-full flex-col ">
        <div class="border-b-border border-b-[1px]">
          <label hidden={true} class="text-xs" for="poe">
            poe
          </label>
          <textarea
            placeholder="What is happening?"
            class="p-2 flex min-h-[80px] w-full resize-none rounded-md  bg-transparent px-3 py-2 text-lg ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            name="poe"
            bind:value={poeContent}
          />
        </div>
        <div class="flex justify-between pt-2 my-2">
          <div class="flex gap-4 invisible">
            <button class="">
              <LuCalendar class="w-5 h-5" />
            </button>
            <button class="">
              <LuNavigation class="w-5 h-5" />
            </button>
            <button class="">
              <LuAlbum class="w-5 h-5" />
            </button>
            <button class="">
              <LuSmile class="w-5 h-5" />
            </button>
          </div>
          <button
            onClick$={() => {
              console.log(poeContent.value);
            }}
            class="px-3 py-2 rounded-xl bg-primary text-primary-foreground my-1"
          >
            poet
          </button>
        </div>
      </div>
    </div>
  );
});
