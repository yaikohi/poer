import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { LuBarChart2, LuHeart, LuRepeat, LuReply } from "@qwikest/icons/lucide";
import { PoeCreator } from "~/components/poe-creator/poe-creator";

function getFormattedDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    timeStyle: "medium",
    dateStyle: "full",
  }).format(date);
}
/** WIP relative time calculator function lol */
// function getRelativeTime(date: Date) {
//   return new Intl.RelativeTimeFormat("en", {
//     numeric: "auto",
//   }).format(new Date() - date, "minute");
// }
export default component$(() => {
  const obj = {
    user: {
      name: "user",
      username: "username",
    },
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Necessitatibus inventore eos sunt veniam minima, laborum`,
    date: new Date(),
  };
  return (
    <>
      <div class="flex justify-between flex-row">
        <div class="flex flex-row-reverse max-w-[200px] bg-blue-50 w-full">
          {/* sidebar1 */}
        </div>
        <main class="max-w-lg border-border border-[1px]  w-full">
          {/* TABS */}
          <div class="flex w-full place-content-around">
            <div class="px-3 py-2 p-2 m-1">
              <button>following</button>
            </div>
            <div class="px-3 py-2 p-2 m-1">
              <button>for you</button>
            </div>
          </div>
          {/* TEXT FIELD */}
          <PoeCreator />
          {/* CONTENT */}
          <div>
            <Poe {...obj} />
            <Poe {...obj} />
            <Poe {...obj} />
            <Poe {...obj} />
            <Poe {...obj} />
            <Poe {...obj} />
          </div>
        </main>
        <div class="flex bg-blue-50 max-w-[200px] w-full">{/* sidebar2 */}</div>
      </div>
    </>
  );
});

interface PoeProps {
  user: {
    username: string;
    name: string;
  };
  content: string;
  date: Date;
}
export const Poe = component$<PoeProps>(({ date, user, content }) => {
  const { name, username } = user;
  return (
    <div class="pt-2 w-full border-b-border border-b-[1px]">
      <div class="mx-2 flex flex-row gap-2">
        <div class="aspect-square h-10 rounded-full bg-green-200"></div>
        <div class="flex flex-col">
          <div class="flex place-items-center justify-between">
            <div class="flex gap-1">
              <h3 class="font-bold">{name}</h3>
              <p class="font-light text-muted-foreground">@{username}</p>
            </div>
            {/* Should be relative to todays date. */}
            <time
              class="text-muted-foreground text-xs"
              dateTime={new Date().toISOString()}
            >
              {getFormattedDate(date)}
            </time>
          </div>
          <p>{content}</p>
          <div class="flex gap-20 my-2">
            <button>
              <LuReply />
            </button>
            <button>
              <LuRepeat />
            </button>
            <button>
              <LuBarChart2 />
            </button>
            <button>
              <LuHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});
export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
