import React, { useState } from "react";
import { TextField, Grid, Button, TextareaAutosize, RadioGroup, FormControlLabel, Radio, FormGroup  } from "@material-ui/core";
import { useHistory } from "react-router";
import { Appbar } from "../../Appbar/Appbar";
import APIService from "../../../../src/utils/APIService";

export const ProductRegister = () => {
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [images, setImages] = useState(""); 
    // TODO - falta inserir as imagens

    const categorys = [
        'Celulares',
        'Informática',
        'Áudio e Video',
        'Vestuário',
        'Eletrodomésticos',
        'Ferramentas',
        'Livros'
    ];

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleDescriptionChange = (e) => setDescription(e.target.value);
    const handleCategoryChange = (e) => setCategory(e.target.value);
    const handlePriceChange = (e) => setPrice(e.target.value);
    

    const handleSubmit = (e) => {
        e.preventDefault();

        APIService.storeProduct(title, description, category, price, images).then((response) => {
            alert("Anúncio Cadastrado com sucesso");
            history.push("/");
        });
    };

    return (
        <>
            <Appbar />
            <h3>Cadastrar Anúncio</h3>
            <div class="centro">
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                style={{ maxWidth: "500px" }}
            >
                <FormGroup  style={{ width: "100%", padding: "3px" }}>
                    <Grid item xs={12} style={{ marginBottom: "12px" }}>
                        <TextField
                            placeholder="Titulo"
                            fullWidth
                            variant="outlined"
                            value={title}
                            onChange={handleTitleChange}
                        />
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: "12px" }}>
                        <TextareaAutosize
                            style={{ width: "99%" }}
                            aria-label="minimum height"
                            fullWidth
                            rowsMin={3}
                            variant="outlined"
                            placeholder="Descrição"
                            value={description}
                            onChange={handleDescriptionChange}
                        />
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: "12px" }}>
                        <RadioGroup aria-label="gender" name="gender1" value={category} onChange={handleCategoryChange}>
                            {
                                categorys.map((value, index) => {
                                    return <FormControlLabel value={value} key={index} control={<Radio />} label={value} />
                                })
                            }
                        </RadioGroup>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: "12px" }}>
                        <TextField
                            placeholder="Preço"
                            fullWidth
                            variant="outlined"
                            type="number"
                            value={price}
                            onChange={handlePriceChange}
                        />
                    </Grid>
                    <Button type="submit" variant="contained" color="secondary" onClick={handleSubmit}>
                        Cadastrar Anúncio
                    </Button>
                </FormGroup >
            </Grid>
            </div>
        </>
    );
}