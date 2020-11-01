import React from "react";
import { shallow } from "enzyme";
import App from "../src/components/Dropzone/app";
describe("First React component test with Enzyme", () => {
  it("renders without crashing", () => {
    shallow(
        <div id="page-create-point">
      <header>
        {/* <img src={logo} alt="logo"/> */}

        <Link to="/">
          <FiArrowLeft />
          Voltar para home
        </Link>
      </header>

      <form onSubmit={handleSubmit}>
        <h1>
          Cadastro dos <br />
          itens de doação
        </h1>

        {/* {<Dropzone />} */}
        <Dropzone onFileUploaded={setSelectedFile} />

        {/* ----- DADOS ----- */}
        <fieldset>
          <legend>
            <h2>Dados do doador</h2>
          </legend>

          <div className="field">
            <label htmlFor="name">Nome Completo</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Digite um nome"
              onChange={handleInputChange}
            />
          </div>

          <div className="field-group">
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Digite um e-mail"
                onChange={handleInputChange}
              />
            </div>
            <div className="field">
              <label htmlFor="whatsapp">Whatsapp</label>
              <input
                type="text"
                name="whatsapp"
                id="whatsapp"
                placeholder="Digite um número WhatsApp"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </fieldset>

        {/* ----- ENDEREÇO ----- */}
        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço no mapa</span>
          </legend>

          <Map center={initialPosition} zoom={15} onClick={handleMapClick}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={selectedPosition} />
          </Map>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">Estado (UF)</label>
              <select
                name="uf"
                id="uf"
                value={selectedUf}
                onChange={handleSelectedUf}
              >
                <option value="0">Selecione uma UF</option>
                {ufs.map((uf) => (
                  <option key={uf} value={uf}>
                    {uf}{" "}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="city">Cidade</label>
              <select
                name="city"
                id="city"
                value={selectedCity}
                onChange={handleSelectedCity}
              >
                <option value="0">Selecione uma cidade</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}{" "}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </fieldset>

        {/* ----- ÍTENS DE DOAÇÃO (carregar da API) ----- */}
        <fieldset>
          <legend>
            <h2>Ítens da doação</h2>
            <span>Selecione um ou mais itens abaixo</span>
          </legend>

          <ul className="items-grid">
            {/* Precisamos repetir o li pelo número de itens que buscamos na API 
                            ao inves de escrever (item => { return () }) podemos escrever direto (item => () )
                            
                            Por ser um map o primeiro elemento precisa ter uma key - valor unico do item - (pro React encontrar o elemento na hora de atualiza-lo de forma mais rapida
                            
                            Criar arrow function Se escrevessemos <li key={item.id} onClick={handleSelectItem(item.id)}> ele executaria a função e não utilizaria ela como parametro */}
            {items.map((item) => (
              <li
                key={item.id}
                onClick={() => handleSelectedItem(item.id)}
                className={selectedItems.includes(item.id) ? "selected" : ""}
              >
                <img src={item.image_url} alt={item.title} />
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </fieldset>

        <button type="submit">Cadastrar-se como doador</button>
      </form>
    </div>
    );
  });
});
