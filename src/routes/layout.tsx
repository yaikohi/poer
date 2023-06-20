import { component$, Slot, useSignal } from "@builder.io/qwik";
import { type RequestHandler } from "@builder.io/qwik-city";
import {
  LuBell,
  LuFlame,
  LuHome,
  LuLogIn,
  LuLogOut,
  LuMail,
  LuSearch,
  LuSettings,
} from "@qwikest/icons/lucide";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <>
      <MainGrid>
        <LeftSidebar />
        <main class="max-w-[45rem] md:col-span-3  lg:col-start-2 min-w-[30rem] border-border border-[1px] w-full">
          <Slot />
        </main>
        <RightSidebar />
      </MainGrid>
    </>
  );
});

export const MainGrid = component$(() => {
  return (
    <div class="md:grid flex lg:grid-cols-3 md:grid-cols-5">
      <Slot />
    </div>
  );
});

export const RightSidebar = component$(() => {
  return (
    <>
      <div class="md:flex md:w-full hidden">
        <Slot />
      </div>
    </>
  );
});
export const LeftSidebar = component$(() => {
  return (
    <div class="hidden md:h-screen md:flex md:w-full md:justify-end">
      <aside class="h-screen flex flex-row justify-end fixed">
        <div class="flex flex-col justify-between max-h-screen place-items-center ">
          <IconWrapper>
            <div class="">
              <LuFlame class="h-10 w-10 " />
            </div>
            <IconButton>
              <LuHome class="h-7 w-7 " />
            </IconButton>
            <IconButton>
              <LuSearch class="h-7 w-7 " />
            </IconButton>
            <IconButton>
              <LuBell class="h-7 w-7 " />
            </IconButton>
            <IconButton>
              <LuMail class="h-7 w-7 " />
            </IconButton>
          </IconWrapper>
          <AvatarMenu />
        </div>
      </aside>
    </div>
  );
});

export const IconWrapper = component$(() => {
  return (
    <>
      <div class="flex flex-col gap-6 place-items-center">
        <Slot />
      </div>
    </>
  );
});

export const IconButton = component$(() => {
  return (
    <button class="">
      <Slot />
    </button>
  );
});
export const AvatarMenu = component$(() => {
  const showMenu = useSignal(false);
  return (
    <div class="">
      <div class="relative flex w-full m-2">
        <button
          onClick$={() => {
            showMenu.value = !showMenu.value;
            console.log(showMenu.value);
          }}
        >
          <div class="aspect-square w-12 bg-primary rounded-full"></div>
        </button>

        {showMenu.value && <LoggedOutMenuItems />}
      </div>
    </div>
  );
});

export const LoggedInMenuItems = component$(() => {
  return (
    <div class="rounded-xl bg-background absolute bottom-12 max-w-[180px] right-24 w-full my-1">
      <ul class="w-full flex flex-col">
        <MenuItem>
          <LuLogOut class="w-12" />
          <span>{"sign out"}</span>
        </MenuItem>
        <MenuItem>
          <LuSettings />
          <span>{"settings"}</span>
        </MenuItem>
      </ul>
    </div>
  );
});

export const MenuItem = component$(() => {
  return (
    <>
      <li class="rounded-xl p-2">
        <a class="place-items-center flex gap-3 w-full" href="/">
          <Slot />
        </a>
      </li>
    </>
  );
});

export const LoggedOutMenuItems = component$(() => {
  return (
    <div class="rounded-xl bg-green-200 absolute bottom-12 right-24 max-w-md my-1 w-full">
      <ul class="w-full flex flex-col">
        <MenuItem>
          <LuLogIn class="h-12 w-full" />
          <span>{"sign out"}</span>
        </MenuItem>
        <MenuItem>{"Create an account"}</MenuItem>
      </ul>
    </div>
  );
});
