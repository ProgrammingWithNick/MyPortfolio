import { useEffect, useLayoutEffect } from "react";

// If running on the server, use `useEffect` instead of `useLayoutEffect`
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
