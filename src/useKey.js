import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(() => {
    function Escape(e) {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        action();
      }
    }
    document.addEventListener("keydown", Escape);

    return function () {
      document.removeEventListener("keydown", Escape);
    };
  }, [action, key]);
}
