import React, {useState} from "react";
import {TextField} from "@material-ui/core";
import {mdiMagnify} from "@mdi/js";
import Icon from "@mdi/react";
import {Categories} from "./Categories/Categories";
import {CATEGORIES} from "../../utils/enums";
import {ViewProducts} from "./ViewProduct/ViewProducts";
import {inputStyles} from "./styles";
import IconButton from "@material-ui/core/IconButton";

export const Home = ({
  category = CATEGORIES.RECENTES,
  busca: search = "",
}) => {
  const [busca, setBusca] = useState("");
  const [isBusca, setIsBusca] = useState(false);
  const inputClasses = inputStyles();

  const handleInput = (e) => setBusca(e.target.value);

  return (
    <div>
      <div style={{ backgroundColor: "#e33b5d", padding: "24px" }}>
        <TextField
          variant="outlined"
          placeholder="Buscar nome do produto"
          value={busca}
          onChange={handleInput}
          fullWidth
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => setIsBusca(true)}>
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
        <ViewProducts category={busca} isBusca />
      )}
    </div>
  );
};
