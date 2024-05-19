import { useAppDispatch, useAppSelector } from "@/hooks/useAppDispatch";
import { searchProducts } from "@/store/search/actions";
import { ISearchParams, ISearchState } from "@/store/search/types";
import { generateKey } from "@/utils/generateKey";
import Head from "next/head";
import { useCallback, useState } from "react";
import Filters from "./components/Filters";
import Header from "./components/Header";
import Product from "./components/Product";
import styles from "./home.module.css";

export default function Home() {
  const dispatch = useAppDispatch();
  const { products, sort, filter } = useAppSelector((state) => state.search);
  const [params, setParams] = useState<ISearchParams>({
    searchTerm: "",
    sort: "relevance",
    price: "",
  });
  const [values, setValues] = useState({
    min: "",
    max: "",
  });

  const updateSearchTerm = (newSearchTerm: string) => {
    setParams((prevParams) => ({
      ...prevParams,
      searchTerm: newSearchTerm,
    }));
  };

  const updateMin = (newMin: string) => {
    setValues((prevParams) => ({
      ...prevParams,
      min: newMin,
    }));
  };

  const updateMax = (newMax: string) => {
    setValues((prevParams) => ({
      ...prevParams,
      max: newMax,
    }));
  };

  const updateSort = (newSort: string) => {
    setParams((prevParams) => ({
      ...prevParams,
      sort: newSort,
    }));
    getProducts();
  };

  const updatePrice = (newPrice: string) => {
    setParams((prevParams) => ({
      ...prevParams,
      price: newPrice,
    }));
    getProducts();
  };

  const filterByPrice = () => {
    if (values.min !== "" || values.max !== "") {
      setParams((prevParams) => ({
        ...prevParams,
        price: `${values.min}-${values.max}`,
      }));
    }
    getProducts();
  };

  const getProducts = useCallback(() => {
    dispatch(searchProducts(params));
  }, [dispatch, params]);

  return (
    <>
      <Head>
        <title>Mercado Livre - Teste Frontend</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href={
            "https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.22/mercadolibre/favicon.svg"
          }
        />
      </Head>
      <main className={styles.main}>
        <Header
          handleChangeSearchTerm={updateSearchTerm}
          action={getProducts}
        />
        <div>
          {products.length && (
            <Filters
              updatePrice={updatePrice}
              updateSort={updateSort}
              sort={sort}
              filters={filter}
              params={params}
              updateMin={updateMin}
              updateMax={updateMax}
              values={values}
              actionFilter={filterByPrice}
            />
          )}
        </div>
        {products.length && (
          <div className={styles.WrapperProducts}>
            {products.map((product: ISearchState) => (
              <Product key={generateKey()} item={product} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
