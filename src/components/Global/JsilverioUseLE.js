import { useLayoutEffect } from "react";

const JsilverioUseLE = (
  setWebTheme,
  setlangs,
  setprojects,
  setLoadingScreenToggle
) => {
  console.log([
    process.env.REACT_APP_JSON_BIN,
    process.env.REACT_APP_JSBIN_MASTER_KEY,
    process.env.REACT_APP_JSBIN_ACCESS_KEY,
  ]);
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
    fetch("https://api.jsonbin.io/v3/b/62e11c962c868775a53ab5a4", {
      method: "GET",
      headers: {
        "Content-Type": " application/json",
        "X-Master-Key":
          "$2b$10$X101BL0CWKIVvUhUu0vp4.98qMCVxa6TwT5O0UJKIE8rjyFTyTqx6",
        "X-Access-Key":
          "$2b$10$QHmxn1jXTrJS7R7BEGEZxetRKSt3FXm06dz9oLdvvxc4s1KZGZu4O",
      },
    })
      .then((response) => {
        console.log("response", response);
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        console.log(data);
        setlangs(data.record["Languages"]);
        setprojects(data.record["Projects"]);
      })
      .catch((error) => {
        console.log("ERROR", error);
      })
      .finally(() => {
        setLoadingScreenToggle("none");
      });
  };
  useLayoutEffect(() => {
    if (setWebTheme) handleWebThemeFetch();
    if (setlangs && setprojects) handleDataFetch();
    // eslint-disable-next-line
  }, [setlangs]);
};

export default JsilverioUseLE;
