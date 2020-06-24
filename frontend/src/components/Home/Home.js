import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";
import { Categories } from "./Categories/Categories";
import { CATEGORIES } from "../../utils/enums";
import { ViewProducts } from "./ViewProduct/ViewProducts";
import { inputStyles } from "./styles";
import IconButton from "@material-ui/core/IconButton";
import { useHistory } from "react-router";

const style = { backgroundColor: "#e33b5d", padding: "24px" };

export const Home = ({ category = CATEGORIES.RECENTES }) => {
  const [busca, setBusca] = useState("");
  const isBusca = window.location.pathname.includes("busca");
  const history = useHistory();
  const inputClasses = inputStyles();

  const handleSearch = () => {
    if (busca === "") return;
    history.push(`/busca?termo=${busca}`);
  };

  const handleInput = (e) => setBusca(e.target.value);

  return (
    <div>
      <div style={style}>
        <TextField
          variant="outlined"
          placeholder="Buscar nome do produto"
          value={busca}
          onChange={handleInput}
          fullWidth
          InputProps={{
            endAdornment: (
              <IconButton onClick={handleSearch}>
                <Icon path={mdiMagnify} size={1} />
              </IconButton>
            ),
            classes: inputClasses,
          }}
        />
        <Categories />
      </div>
      {!isBusca ? (
        <ViewProducts category={category} />
      ) : (
        <ViewProducts isBusca />
      )}
    </div>
  );
};
