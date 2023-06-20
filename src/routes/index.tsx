import { Slot, component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { LuBarChart2, LuHeart, LuRepeat, LuReply } from "@qwikest/icons/lucide";
import { PoeCreator } from "~/components/poe-creator/poe-creator";

function getFormattedDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    timeStyle: "medium",
    dateStyle: "full",
  }).format(date);
}
interface PoeProps {
  user: {
    username: string;
    name: string;
  };
  content: string;
  date: Date;
}

export default component$(() => {
  return (
    <>
      <Feed />
    </>
  );
});

export const Feed = component$(() => {
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
      <Tabs>
        <Tab>following</Tab>
        <Tab>for you</Tab>
      </Tabs>
      <PoeCreator />
      <div class="flex flex-col max-w-max">
        {objects.map((obj, idx) => {
          return <Poe {...obj} key={idx} />;
        })}
      </div>
    </>
  );
});

export const Tabs = component$(() => {
  return (
    <div class="flex w-full place-content-around">
      <Slot />
    </div>
  );
});

export const Tab = component$(() => {
  return (
    <>
      <div class="px-3 py-2 p-2 m-1">
        <button>
          <Slot />
        </button>
      </div>
    </>
  );
});

export const Poe = component$<PoeProps>(({ date, user, content }) => {
  const { name, username } = user;
  return (
    <div class="pt-2 w-full border-b-border border-b-[1px]">
      <div class="mx-2 flex flex-row gap-2">
        <div class="aspect-square h-10 rounded-full bg-green-200"></div>
        <div class="flex flex-col">
          <div class="md:flex md:place-items-center md:justify-between">
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
  title: "poer",
  meta: [
    {
      name: "description",
      content: "poer site description",
    },
  ],
};
