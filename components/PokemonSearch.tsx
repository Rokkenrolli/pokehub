import { useRouter } from "next/router";
import { useState } from "react";
import commons from "../styles/commons.module.css";

const PokemonSearch = () => {
  const [url, setUrl] = useState("");
  const router = useRouter();
  const { id } = router.query;

  const handleClick = () => {
    router.push(`/pokemon/${id ? id + "," : ""}${url}`);
    setUrl("");
  };
  return (
    <div className={commons["search-container"]}>
      <input
        type="text"
        placeholder="Search for a pokemon"
        onChange={(e) => setUrl(e.target.value)}
        value={url}
      />
      <button
        className={commons.button}
        disabled={Boolean(!url)}
        onClick={() => handleClick()}
      >
        Let&#39;s fly!
      </button>
    </div>
  );
};

export default PokemonSearch;
