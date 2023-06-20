import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
  LuBarChart2,
  LuHeart,
  LuLogOut,
  LuRepeat,
  LuReply,
  LuSettings,
} from "@qwikest/icons/lucide";
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

interface PoeProps {
  user: {
    username: string;
    name: string;
  };
  content: string;
  date: Date;
}

export default component$(() => {
  const obj: PoeProps = {
    user: {
      name: "user",
      username: "username",
    },
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Necessitatibus inventore eos sunt veniam minima, laborum`,
    date: new Date(),
  };

  const objects: PoeProps[] = [
    { ...obj },
    { ...obj },
    { ...obj },
    { ...obj },
    { ...obj },
    { ...obj },
    { ...obj },
    { ...obj },
    { ...obj },
  ];
  return (
    <>
      <div class="flex justify-between flex-row">
        <div class="flex relative place-items-end max-w-[200px] h-screen bg-blue-50 w-full">
          {/* AVATAR MENU */}
          <AvatarMenu />
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
            {objects.map((obj, idx) => {
              return <Poe {...obj} key={idx} />;
            })}
          </div>
        </main>
        <div class="flex bg-blue-50 max-w-[200px] w-full">{/* sidebar2 */}</div>
      </div>
    </>
  );
});

export const AvatarMenu = component$(() => {
  const showMenu = useSignal(false);
  return (
    <div class="fixed max-w-[225px] w-full">
      <div class="relative flex w-full m-2">
        {/* ALWAYS VISIBLE */}
        <button
          onClick$={() => {
            showMenu.value = !showMenu.value;
            console.log(showMenu.value);
          }}
        >
          <div class="aspect-square w-12 bg-primary rounded-full"></div>
        </button>

        {/* INVISIBLE, ON CLICK => VISIBLE */}
        {showMenu.value && (
          <div class="rounded-xl bg-background absolute bottom-12 max-w-[150px] w-full my-1">
            <ul class="w-full flex flex-col">
              <li class="rounded-t-xl p-2">
                <a class="place-items-center flex gap-3  p-2 w-full " href="/">
                  <LuLogOut />
                  sign out
                </a>
              </li>
              <li class=" rounded-b-xl p-2">
                <a class="place-items-center flex gap-3 p-2 w-full " href="/">
                  <LuSettings />
                  settings
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
});

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
