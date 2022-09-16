import { useLayoutEffect } from "react";

const JsilverioUseLE = (
  setWebTheme,
  setlangs,
  setprojects,
  setLoadingStaterToggle
) => {
  const handleWebThemeFetch = () => {
    let JsilverioWebThemeLocalStorage = localStorage.getItem(
      "JsilverioWebTheme"
    )
      ? JSON.parse(JSON.stringify(localStorage.getItem("JsilverioWebTheme")))
      : null;
    if (JsilverioWebThemeLocalStorage === null) return;
    setWebTheme(JsilverioWebThemeLocalStorage);
  };
  const handleDataFetch = () => {
    fetch(process.env.REACT_APP_BIN, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setlangs(data["Languages"]);
        setprojects(data["Projects"]);
      })
      .catch((error) => {
        console.log("ERROR", error);
      })
      .finally(() => {
        setLoadingStaterToggle("none");
      });
  };
  useLayoutEffect(() => {
    if (setWebTheme) handleWebThemeFetch();
    if (setlangs && setprojects) handleDataFetch();
    // eslint-disable-next-line
  }, [setlangs]);
};

export default JsilverioUseLE;
