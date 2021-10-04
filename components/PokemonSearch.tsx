import { useRouter } from "next/router";
import { useState } from "react";
import commons from "../styles/commons.module.css";

const PokemonSearch = () => {
  const [url, setUrl] = useState("");
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={commons["search-container"]}>
      <input
        type="text"
        placeholder="Search for a pokemon"
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        className={commons.button}
        disabled={Boolean(!url)}
        onClick={() => router.push(`/pokemon/${id ? id + "," : ""}${url}`)}
      >
        Let&#39;s fly!
      </button>
    </div>
  );
};

export default PokemonSearch;
